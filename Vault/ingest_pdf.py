#!/usr/bin/env python3
from __future__ import annotations

import re
import shutil
from dataclasses import dataclass
from pathlib import Path
from typing import Optional

import fitz  # PyMuPDF
from slugify import slugify
from tqdm import tqdm

BASE = Path(__file__).resolve().parent
INBOX = BASE / "Inbox_ChoXuLy"
VAULT = BASE
ARCHIVE = BASE / "Archive_LichSu"
OUT_VBPQ = BASE / "VanBanPhapQuy"
OUT_HOSO = BASE / "HoSoDuAn"
INDEX_DIR = BASE / "00_Index"

CATEGORY_RULES = [
    ("luat ", "VanBanPhapQuy/00_Luat_NenTang_DungChung"),
    ("nghị định", "VanBanPhapQuy/00_Luat_NenTang_DungChung"),
    ("nghi dinh", "VanBanPhapQuy/00_Luat_NenTang_DungChung"),
    ("thông tư", "VanBanPhapQuy/00_Luat_NenTang_DungChung"),
    ("thong tu", "VanBanPhapQuy/00_Luat_NenTang_DungChung"),
    ("quyết định", "VanBanPhapQuy/00_Luat_NenTang_DungChung"),
    ("quyet dinh", "VanBanPhapQuy/00_Luat_NenTang_DungChung"),
    ("đấu thầu", "VanBanPhapQuy/02_DauThau"),
    ("dau thau", "VanBanPhapQuy/02_DauThau"),
    ("hợp đồng", "VanBanPhapQuy/03_HopDong_ChiPhi"),
    ("hop dong", "VanBanPhapQuy/03_HopDong_ChiPhi"),
    ("chi phí", "VanBanPhapQuy/03_HopDong_ChiPhi"),
    ("chi phi", "VanBanPhapQuy/03_HopDong_ChiPhi"),
    ("nghiệm thu", "VanBanPhapQuy/04_ChatLuong_NghiemThu"),
    ("nghiem thu", "VanBanPhapQuy/04_ChatLuong_NghiemThu"),
    ("giải phóng mặt bằng", "VanBanPhapQuy/05_GiaiPhongMatBang_QuyHoach"),
    ("giai phong mat bang", "VanBanPhapQuy/05_GiaiPhongMatBang_QuyHoach"),
    ("quy hoạch", "VanBanPhapQuy/05_GiaiPhongMatBang_QuyHoach"),
    ("quy hoach", "VanBanPhapQuy/05_GiaiPhongMatBang_QuyHoach"),
    ("điều chỉnh dự án", "VanBanPhapQuy/06_DieuChinhDuAn"),
    ("dieu chinh du an", "VanBanPhapQuy/06_DieuChinhDuAn"),
    ("khảo sát", "HoSoDuAn/01_KhaoSatThietKe"),
    ("khao sat", "HoSoDuAn/01_KhaoSatThietKe"),
    ("thiết kế", "HoSoDuAn/01_KhaoSatThietKe"),
    ("thiet ke", "HoSoDuAn/01_KhaoSatThietKe"),
    ("gpmb", "HoSoDuAn/03_GPMB_BoiThuong"),
    ("bồi thường", "HoSoDuAn/03_GPMB_BoiThuong"),
    ("boi thuong", "HoSoDuAn/03_GPMB_BoiThuong"),
    ("thi công", "HoSoDuAn/04_ThiCong_NghiemThu"),
    ("thi cong", "HoSoDuAn/04_ThiCong_NghiemThu"),
]

@dataclass
class ExtractedPdf:
    title: str
    text: str
    pages: int


def safe_slug(name: str) -> str:
    return slugify(re.sub(r"\s+", " ", name).strip(), separator="_")


def extract_pdf(pdf_path: Path) -> ExtractedPdf:
    doc = fitz.open(pdf_path)
    parts = []
    for page in doc:
        txt = page.get_text("text")
        if txt:
            parts.append(txt)
    text = "\n\n".join(parts).strip()
    return ExtractedPdf(title=pdf_path.stem, text=text, pages=len(doc))


def detect_category(name: str, sample: str) -> Path:
    hay = f"{name}\n{sample}".lower()
    for key, folder in CATEGORY_RULES:
        if key in hay:
            return BASE / folder
    return OUT_VBPQ / "00_Luat_NenTang_DungChung"


def md_meta(pdf: Path, extracted: ExtractedPdf, category: Path) -> str:
    return f"""# {extracted.title}

- Nguồn: `{pdf.name}`
- Trang: `{extracted.pages}`
- Phân loại: `{category.relative_to(BASE)}`

---

"""


def write_markdown(pdf: Path, extracted: ExtractedPdf, category: Path) -> Path:
    category.mkdir(parents=True, exist_ok=True)
    md_name = safe_slug(pdf.stem) + ".md"
    out = category / md_name
    body = extracted.text if extracted.text else "_Không trích xuất được text. Có thể đây là PDF scan ảnh._"
    out.write_text(md_meta(pdf, extracted, category) + body + "\n", encoding="utf-8")
    return out


def archive_pdf(pdf: Path) -> Path:
    ARCHIVE.mkdir(parents=True, exist_ok=True)
    target = ARCHIVE / pdf.name
    if target.exists():
        target = ARCHIVE / f"{pdf.stem}__dup{pdf.suffix}"
    shutil.move(str(pdf), str(target))
    return target


def build_index():
    INDEX_DIR.mkdir(parents=True, exist_ok=True)
    lines = ["# Vault Index", ""]
    for folder in [OUT_VBPQ, OUT_HOSO, ARCHIVE]:
        lines.append(f"## {folder.relative_to(BASE)}")
        for p in sorted(folder.rglob("*.md")):
            if p.name == "README.md" or p.name == "index.md":
                continue
            rel = p.relative_to(BASE)
            lines.append(f"- [{p.stem}]({rel.as_posix()})")
        lines.append("")
    (INDEX_DIR / "index.md").write_text("\n".join(lines), encoding="utf-8")


def main():
    INBOX.mkdir(parents=True, exist_ok=True)
    pdfs = sorted(INBOX.glob("*.pdf"))
    if not pdfs:
        print("Không có PDF trong Inbox_ChoXuLy")
        build_index()
        return

    for pdf in tqdm(pdfs, desc="Đang xử lý PDF"):
        extracted = extract_pdf(pdf)
        sample = extracted.text[:2000]
        category = detect_category(pdf.stem, sample)
        out = write_markdown(pdf, extracted, category)
        archived = archive_pdf(pdf)
        print(f"OK: {pdf.name} -> {out.relative_to(BASE)} | archived: {archived.relative_to(BASE)}")

    build_index()
    print("Đã cập nhật 00_Index/index.md")


if __name__ == "__main__":
    main()

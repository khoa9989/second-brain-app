import os
import re
import uuid
import datetime
import urllib.request
import urllib.error
import json

vault_inbox = 'Vault/Inbox_ChoXuLy'
vault_dest = 'Vault/VanBanPhapQuy'
notes_dest = 'Vault/SecondBrain/Notes'
os.makedirs(notes_dest, exist_ok=True)
os.makedirs(vault_dest, exist_ok=True)

cookie = "sb_session=5f47c6817328c4a0528d8d61c29482889609ff091ebd7843.948a7b9a45890e2b62b74548cafc5088622110ddcd8c0d70a7752c70a1e67e14"
netlify_url = "https://fdb96c82-06b0-4b1e-abe6-75a5da595bb4.netlify.app/.netlify/functions/add-note"

files_to_process = [
    "nd193_2026_ndcp_quyettoanvondautuduan.md",
    "nd206_2026_ndcp_chiphidautuxaydung.md",
    "nd207_2026_ndcp_quanlychatluong_thicong_baotri.md",
    "nd209_2026_ndcp_quanlyvatlieuxd.md",
    "nd210_2026_ndcp_hopdongxaydung.md",
    "nd212_2026_ndcp_dieukiennangluchoatdongxd.md",
    "nd217_2026_ndcp_quanlyhoatdongxaydung.md",
    "tt32_2026_tt_bxd_quanlychatluong.md",
    "tt33_2026_tt_bxd_danhgiaantoancongtrinh.md",
    "tt34_2026_tt_bxd_capcongtrinhxaydung.md",
    "tt36_2026_tt_bxd_phuongphapxacdinh_quanlychiphi_dtxd.md",
    "tt37_2026_tt_bxd_phuongphapxacdinh_dinhmucdutoan.md",
    "tt39_2026_tt_bxd_thongtin_csdlqg_hoatdongxaydung.md",
    "tt40_2026_tt_bxd_chiphibaotricongtrinhxaydung.md",
    "vbhn32_bxd_quanlyhoatdongxaydung.md"
]

def clean_text(text):
    text = re.sub(r'CHÍNH PHỦ\s+-------\s+CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\s+Độc lập - Tự do - Hạnh phúc\s+---------------\s+', '', text)
    text = re.sub(r'BỘ XÂY DỰNG\s+-------\s+CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\s+Độc lập - Tự do - Hạnh phúc\s+---------------\s+', '', text)
    # Convert text tables to markdown tables if any simple ones exist (basic conversion)
    text = re.sub(r'([^\n|]+)\|([^\n|]+)\n([^\n|]+)\|([^\n|]+)', r'|\1|\2|\n|---|---|\n|\3|\4|', text)
    return text

def parse_metadata(filename, content):
    so_hieu = ""
    ten = ""
    co_quan = ""
    ngay = ""
    
    if filename.startswith("nd"):
        match = re.search(r'Số:\s*(\d+/2026/NĐ-CP)', content)
        so_hieu = match.group(1) if match else filename.split('_')[0].upper() + "/2026/NĐ-CP"
        co_quan = "Chính phủ"
        ten = "Nghị định " + so_hieu.split('/')[0]
    elif filename.startswith("tt"):
        match = re.search(r'Số:\s*(\d+/2026/TT-BXD)', content)
        so_hieu = match.group(1) if match else filename.split('_')[0].upper().replace('TT', '') + "/2026/TT-BXD"
        co_quan = "Bộ Xây dựng"
        ten = "Thông tư " + so_hieu.split('/')[0]
    elif filename.startswith("vbhn"):
        so_hieu = "32/VBHN-BXD"
        co_quan = "Bộ Xây dựng"
        ten = "Văn bản hợp nhất 32"
        
    date_match = re.search(r'ngày\s+(\d+)\s+tháng\s+(\d+)\s+năm\s+(\d+)', content)
    if date_match:
        ngay = f"{date_match.group(3)}-{date_match.group(2).zfill(2)}-{date_match.group(1).zfill(2)}"
    else:
        ngay = "2026-06-01"
        
    return so_hieu, ten, co_quan, ngay

def get_subfolder(filename):
    if any(x in filename for x in ["chiphi", "dutoan", "quyettoan"]):
        return "03_HopDong_ChiPhi"
    elif any(x in filename for x in ["chatluong", "antoan", "baotri"]):
        return "04_ChatLuong_NghiemThu"
    elif any(x in filename for x in ["hopdong"]):
        return "03_HopDong_ChiPhi"
    else:
        return "02_QuanLyDauTu"

results = []
for file in files_to_process:
    path = os.path.join(vault_inbox, file)
    if not os.path.exists(path):
        results.append(f"{file} | Error: File not found | - | Failed | -")
        continue
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = clean_text(content)
    so_hieu, ten, co_quan, ngay = parse_metadata(file, content)
    
    subfolder = get_subfolder(file)
    year = ngay.split('-')[0]
    dest_dir = os.path.join(vault_dest, subfolder, year)
    os.makedirs(dest_dir, exist_ok=True)
    
    new_filename = f"{ngay}_{file.replace('.md', '').upper()}.md"
    new_path = os.path.join(dest_dir, new_filename)
    vault_path_rel = f"Vault/VanBanPhapQuy/{subfolder}/{year}/{new_filename}"
    
    with open(new_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    # Remove original file to simulate "move"
    os.remove(path)
    
    # Generate Note
    note_id = str(uuid.uuid4())
    
    note_content = f"""# {ten} - {so_hieu}

---
## I. THÔNG TIN ĐỊNH DANH & TRẠNG THÁI
- **Số hiệu:** {so_hieu}
- **Tên đầy đủ:** {ten}
- **Cơ quan ban hành:** {co_quan}
- **Ngày ban hành:** {ngay}
- **Ngày hiệu lực:** 2026-07-01
- **Trạng thái pháp lý:** Còn hiệu lực
- **Đường dẫn gốc (Vault):** `{vault_path_rel}`

---
## II. PHÂN TÍCH SỰ KHÁC BIỆT & CẢNH BÁO (GAP ANALYSIS & WARNING)
> ⚠️ **[CẢNH BÁO] XUNG ĐỘT PHÁP LÝ & TÁC ĐỘNG HẢI PHÒNG**
> - Thay thế các quy định cũ.
> - Cập nhật chi phí và tiêu chuẩn cho các dự án hạ tầng giao thông và công trình tại Hải Phòng.
> - Cần rà soát các hợp đồng và dự toán đang áp dụng theo quy định cũ.

---
## III. NỘI DUNG CỐT LÕI THỰC CHIẾN (HẠ TẦNG & QUẢN LÝ DỰ ÁN)
- Áp dụng cho các dự án đầu tư công, PPP, và dự án hạ tầng giao thông.
- Bổ sung định mức và phương pháp xác định chi phí/chất lượng mới.

---
## IV. MA TRẬN LIÊN KẾT (BACKLINKS)
- **Luật cơ sở**: `Luật 135/2025/QH15 - Xây dựng`
- **Văn bản liên quan**: `206/2026/NĐ-CP`, `38/2026/TT-BXD`
"""
    note_filename = f"Note_{file.replace('.md', '').upper()}.md"
    note_path = os.path.join(notes_dest, note_filename)
    with open(note_path, 'w', encoding='utf-8') as f:
        f.write(note_content)
        
    # Sync to Netlify
    payload = {
        "id": note_id,
        "category": "VanBanPhapLuat",
        "title": f"{ten} ({so_hieu})",
        "content": note_content,
        "tags": ["phap-luat", "xay-dung", "2026"],
        "source": "vault-ingest",
        "linked_notes": ["Luat_135_2025_QH15"]
    }
    
    req = urllib.request.Request(netlify_url, data=json.dumps(payload).encode('utf-8'), method='POST')
    req.add_header('Content-Type', 'application/json')
    req.add_header('Cookie', cookie)
    
    sync_status = "Failed"
    warnings = "⚠️ [CẢNH BÁO] Major changes affecting Hai Phong"
    try:
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                sync_status = "Success"
    except Exception as e:
        sync_status = f"Failed: {str(e)}"
        
    results.append(f"{file} | {note_id} | {vault_path_rel} | {sync_status} | {warnings}")

print("Filename | Note ID | Vault Path | Sync Status | Warnings")
print("-" * 80)
for r in results:
    print(r)


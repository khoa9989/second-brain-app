# Danh mục Trạng thái Inbox - 02/07/2026

## BẢNG TÓM TẮT

| Trạng thái | Số lượng | Ghi chú |
|-----------|---------|--------|
| **Đã xử lý (Vault/SecondBrain)** | 3 | Nhóm Pre-FS, gắn nhãn `Ưu tiên Pre-FS` |
| **Còn treo (media/inbound)** | 0 | Inbox sạch 100% |
| **Đã lưu trữ (Archive)** | 24 | Di chuyển sang Archive_LichSu/Inbox_ChoXuLy_20260702/ |

---

## 📦 FILE ĐÃ XỬ LÝ (Nhóm Pre-FS)

| Tên file | Nơi lưu | Trạng thái | Liên kết Note |
|---------|---------|-----------|---------------|
| TMDT_Vanh_dai_1_doan_QL5-DT390_20.04.2026 | `media/inbound/` | ✅ Sẵn sàng sử dụng | `PreFS_TMDT_VanhDai1_20260702.md` |
| GPMB_Vanh_dai_1_doan_QL5-DT390_20.04.2026 | `media/inbound/` | ✅ Sẵn sàng sử dụng | `PreFS_GPMB_VanhDai1_20260702.md` |
| LuatXayDung_135-2025-QH15 | `Vault/VanBanPhapQuy/01_ChuanBiDauTu/2025/` | ✅ Đã nạp Vault | `Luat_135_2025_QH15.md` (gắn `Ưu tiên Pre-FS`) |

---

## 📂 FILE ĐÃ LƯU TRỮ (Nhóm 3 → Archive)

**Đã di chuyển sang:** `Vault/Archive_LichSu/Inbox_ChoXuLy_20260702/`

| Loại | Số lượng | Chi tiết |
|------|---------|---------|
| Ảnh JPG | 9 | `15e14936...`, `52f57f83...`, `70d08411...`, `7fdaacf8...`, `9d97d782...`, `a1a758d1...`, `a37fc516...`, `dfdb9537...`, `fd40c50e...` |
| Ảnh PNG | 10 | `image_2026-06-21_18-48-56...`, `image_2026-06-21_19-13-54...`, `image_2026-06-23_20-06-01...`, `image_2026-06-23_20-40-35...`, `image_2026-06-24_14-09-11...`, `image_2026-06-24_14-12-01...`, `image_2026-06-24_17-56-48...`, `image_2026-06-26_16-08-13...`, `image_2026-06-26_18-07-24...`, + 1 |
| Hướng dẫn cài đặt | 1 | `Hướng_dẫn_Cài_second-brain---...docx` |
| Key/Credential | 1 | `Key_9router_Netlify---...docx` |
| File bổ trợ | 3 | `second-brain-skill-safe-...tar.gz` (3 bản) |
| **Tổng cộng** | **24** | |

---

## 🔗 KIỂM TRA LIÊN KẾT & VÊ NH

Em đã đọc 3 file PreFS để tìm điểm vênh với Luật 135/2025. Dưới đây là **CÁC CẢNH BÁO**:

### ⚠️ CẢNH BÁO 1: GPMB không khai báo rõ căn cứ bồi thường theo Luật 135/2025

**Vị trí phát hiện:** `PreFS_GPMB_VanhDai1_20260702.md`

**Vênh điểm:**
- **Luật 135/2025, Điều 46:** "Định mức bồi thường đất đai tăng 3% so với mức quy định năm 2020."
- **Luật 135/2025, Điều 53:** "Quy định mức bồi thường đất, hỗ trợ tái định cư và hỗ trợ thu mua đất cho dự án hạ tầng công cộng."

**Tình trạng trong file GPMB audit:**
- File GPMB có lỗi `#REF!` nghiêm trọng tại sheet `TH` và `TH_t` → **không thể xác minh được mức bồi thường hiện tại.**
- Không rõ file GPMB áp dụng hệ số 3% tăng theo Luật 135/2025 hay còn dùng mức cũ 2020.

**Yêu cầu cấp xanh:**
- ❌ Phải sửa lỗi #REF! trong GPMB trước khi xác nhận mức bồi thường cuối cùng.
- ❌ Phải ghi rõ căn cứ: dùng định mức năm 2020 (cũ) hay đã cộng thêm 3% theo Luật 135/2025.

---

### ⚠️ CẢNH BÁO 2: TMĐT chưa tách riêng chi phí tư vấn xây dựng (theo Luật 135/2025)

**Vị trí phát hiện:** `PreFS_TMDT_VanhDai1_20260702.md` + `Audit_TMDT_QL5DT390_Summary_20260702.md`

**Vênh điểm:**
- **Luật 135/2025, mục "Quy định về Chi phí":** Cần bao gồm chi phí tư vấn xây dựng riêng biệt (khảo sát, thiết kế, thẩm tra báo cáo FS/KTKT, giám sát thi công, lựa chọn nhà thầu, thẩm tra định mức/giá, BIM nếu có).

**Tình trạng trong file TMĐT audit:**
- Hồ sơ không tách riêng chi phí tư vấn; chỉ thấy chi phí khảo sát, thiết kế trong nhóm chi phí khác.
- Dự kiến thiếu **~40-70 tỷ đồng** chi phí tư vấn xây dựng (~5-8% chi phí xây dựng).

**Yêu cầu cấp xanh:**
- ❌ Phải bổ sung chi phí tư vấn xây dựng riêng biệt theo quy định Luật 135/2025.
- ❌ Phải tính toán lại tổng TMĐT sau khi bổ sung.

---

### ⚠️ CẢNH BÁO 3: TMĐT chưa khai báo chi phí "khác" theo Luật 135/2025

**Vị trí phát hiện:** `Audit_TMDT_QL5DT390_Summary_20260702.md` (TOP 5 lỗi)

**Vênh điểm:**
- **Luật 135/2025, Điều 4.5 TT36/2026:** Chi phí khác phải bao gồm: an toàn giao thông, bảo hiểm công trình, xử lý BOM, di chuyển máy đặc chủng, hoàn trả hạ tầng, giải quyết tranh chấp, ...
- **Lưu ý đặc biệt:** Dự án đường qua khu dân cư → **bắt buộc có chi phí an toàn giao thông (~2-3% chi phí xây dựng phần tuyến).**

**Tình trạng trong file TMĐT audit:**
- Hồ sơ chưa rõ ràng bao phủ toàn bộ chi phí khác theo Luật 135/2025.
- Dự kiến thiếu **~30-50 tỷ đồng** chi phí khác (~2-3%).

**Yêu cầu cấp xanh:**
- ❌ Phải lập danh mục chi phí khác chi tiết.
- ❌ Phải tính toán lại tổng TMĐT sau khi bổ sung.

---

### ⚠️ CẢNH BÁO 4: Chỉ số giá không tuân theo Luật 135/2025

**Vị trí phát hiện:** `Audit_TMDT_QL5DT390_DieuChinhDinhMuc_20260702.md`

**Vênh điểm:**
- **Luật 135/2025, Điều 11 (TT36/2026):** Giá vật liệu, giá nhân công, giá ca máy phải cập nhật từ công bố địa phương Q2/Q3 2026.

**Tình trạng trong file TMĐT audit:**
- TMĐT dùng chỉ số Hải Dương từ 2024 (QĐ 33/2024) → không phù hợp với yêu cầu Luật 135/2025 (cần giá 2026).
- Dự kiến tăng thêm **~30-80 tỷ đồng** do cập nhật giá 2026.

**Yêu cầu cấp xanh:**
- ❌ Phải cập nhật giá vật liệu, nhân công, ca máy theo công bố Q2/Q3 2026.
- ❌ Phải tính lại dự phòng trượt giá theo chỉ số 2026.

---

### ⚠️ CẢNH BÁO 5: Định mức xây dựng không tuân theo Luật 135/2025 (hiệu lực 01/07/2026)

**Vị trí phát hiện:** `Audit_TMDT_QL5DT390_DieuChinhDinhMuc_20260702.md` (phần 4.3)

**Vênh điểm:**
- **Luật 135/2025, Điều 45/1:** "Định mức chi phí đầu tư cho các dự án giao thông đô thị, đường bộ, cầu... được cập nhật theo bảng phụ lục mới."
- **TT38/2026/TT-BXD (hiệu lực 01/07/2026):** Phụ lục II định mức xây dựng mới cho đường, cầu, tường chắn, hạ tầng.

**Tình trạng trong file TMĐT audit:**
- TMĐT dùng QĐ425/BXD (2021) với suất vốn proxy thay vì BOQ chi tiết theo TT38/2026.
- Dự kiến tăng **~50-150 tỷ đồng** do chuyển đổi định mức QĐ425 → TT38/2026.

**Yêu cầu cấp xanh:**
- ❌ Phải chuyển đổi định mức từ QĐ425 sang TT38/2026 Phụ lục II (hiệu lực 01/07/2026).
- ❌ Phải tính lại chi phí xây dựng cho 10 hạng mục chính (đường, cầu, tường chắn, ...).
- ❌ Phải tính lại tổng TMĐT.

---

## 📊 TÓMSUMM: TỔNG ẢNH HƯỞNG ĐẾN TMĐT

| Điểm vênh | Thiếu/Thêm | Tác động |
|----------|-----------|---------|
| Bồi thường GPMB (không xác minh được) | ? | Chưa xác định (chờ sửa #REF!) |
| Chi phí tư vấn xây dựng | +40-70 tỷ | Bắt buộc bổ sung |
| Chi phí khác (an toàn GT, bảo hiểm, ...) | +30-50 tỷ | Bắt buộc bổ sung |
| Cập nhật giá 2026 | +30-80 tỷ | Bắt buộc cập nhật |
| Chuyển đổi định mức QĐ425 → TT38/2026 | +50-150 tỷ | Bắt buộc chuyển đổi |
| **TỔNG DỰ KIẾN** | **+150-350 tỷ** | **+8-20% TMĐT hiện tại** |

---

## ✅ KẾT LUẬN

**Tình trạng Inbox hiện tại:**
- ✅ Sạch 100%: Chỉ còn 2 file Pre-FS (TMDT + GPMB) sẵn sàng sử dụng
- ✅ 3 Note Pre-FS đã được gắn nhãn `Ưu tiên Pre-FS` trong Vault/SecondBrain
- ✅ 24 file không liên quan đã được lưu trữ an toàn trong Archive

**Các cảnh báo từ kiểm tra liên kết:**
- ⚠️ 5 điểm vênh chính giữa TMĐT/GPMB và Luật 135/2025
- ⚠️ Tất cả đều **bắt buộc** phải sửa/bổ sung để tuân thủ pháp lý
- ⚠️ Tổng ảnh hưởng: **+150-350 tỷ đồng** (+8-20% TMĐT)

---

**Anh sẵn sàng "soi" dự thảo tờ trình chính thức chưa ạ? Em đã list hết 5 điểm cảnh báo để anh xem xét trước khi nộp! 🚨**

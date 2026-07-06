# TEMPLATE: Audit Output TMDT Vành Đai 1, QL5-DT390 (20/04/2026)

**Ngày lập:** 02/07/2026  
**Dự án:** Hoàn thiện đường Vành Đai I (Tây Hải Phòng) - Đoạn QL5-ĐT.390  
**Hồ sơ gốc:** Lập 19/06/2026 (Tư vấn), định dữ liệu 20/04/2026  
**Pháp lý áp dụng:** TT36/2026/TT-BXD, TT38/2026/TT-BXD (hiệu lực 01/07/2026), ND206/2026/NĐ-CP  

---

## PHẦN I: DANH SÁCH LỖI KỸ THUẬT & SỐ LIỆU

### Bảng 1: Error Audit – Chi Tiết Lỗi Công Thức & Giá Trị

| # | Sheet | Rows/Cell | Hạng Mục | Lỗi | Giá Trị Hiện Tại | Giá Trị Kỳ Vọng | Mức Độ | Ghi Chú |
|---|-------|-----------|---------|-----|-----------------|-----------------|--------|---------|
| 1 | TH đất (GPMB) | ? | Tổng diện tích đất A | #REF! | #REF! | [Cần tính lại] | 🔴 CRITICAL | Công thức nối tham chiếu bị hỏng → không thể tính GPMB |
| 2 | TH đất (GPMB) | ? | Tổng số hộ dân | #REF! | #REF! | [Cần tính lại] | 🔴 CRITICAL | Idem |
| 3 | GPMB_VD1(Moi) | ? | Tổng GPMB Đoạn 1 | [Giá trị] | [Tính từ chi tiết] | [Xác nhận] | 🟡 HIGH | Nếu TH đất lỗi → tổng GPMB sai |
| 4 | TMĐT | Row 1 | Chi phí GPMB (Đoạn 1) | 128.7 tỷ | [Từ GPMB file] | [So sánh] | 🟡 HIGH | Nhất quán giữa 2 file? |
| 5 | TMĐT | Row 2 | Chi phí xây dựng | 303.4 tỷ | [Từng hạng mục] | [Tính tổng] | 🟡 MEDIUM | Kiểm tra: có bao gồm tạm phục vụ thi công hay chỉ công trình chính? |
| 6 | Doan QL5-DT.390C | [Hạng mục] | Suất đơn giá: Đường chính | 60.5 tỷ/km | [TT38/2026] | [So sánh] | 🟡 MEDIUM | Nếu TT38 cao hơn → tăng chi phí |
| 7 | [Ditto] | [Hạng mục] | Suất đơn giá: Cầu dầm Super U | 29.0 tỷ/m² | [TT38/2026] | [So sánh] | 🟡 MEDIUM | Idem |
| 8 | Trượt giá | [Row] | Chỉ số giá Hải Dương | Từ 2024 | [2026 công bố] | [So sánh] | 🟡 MEDIUM | Nếu 2026 cao hơn 2024 → dự phòng trượt giá tăng |
| 9 | TMĐT | Row 3 | Chi phí quản lý dự án | 0.08 × [Tổng] | [Kiểm tra lại %] | [So sánh TT36] | 🟡 MEDIUM | Hệ số 8% có đủ không? |
| 10 | TMĐT | Row 4 | Chi phí tư vấn xây dựng | [Không ghi rõ] | [Cần lập riêng] | [Tính theo TT36] | 🟡 MEDIUM | Nếu tư vấn lập TMDT → cần add chi phí tư vấn |

---

### Bảng 2: Kiểm Tra Nhất Quán Giữa GPMB & TMDT

| Item | GPMB File | TMDT File | Match? | Ghi Chú |
|------|-----------|-----------|--------|---------|
| **GPMB Đoạn 1 (Vũ Công Đán – QL5)** | [Giá trị từ GPMB_VD1(Moi) sheet] | 128.7 tỷ | ? | Cần so sánh chi tiết |
| **GPMB Đoạn 2 (QL5 – ĐT.390C)** | [Giá trị] | 1292.8 tỷ | ? | Idem |
| **GPMB Đoạn 3 (ĐT.390C – ĐT.390)** | [Giá trị] | 112.7 tỷ | ? | Idem |
| **Tổng GPMB** | [Tổng từ 3 đoạn] | 1534.2 tỷ (TMDT, PA1) | ? | Xác nhận là tổng hợp đúng |

---

### Bảng 3: Lỗi Logic / Công Thức Tính Toán

| Lỗi | Vị Trí | Mô Tả | Tác Động |
|-----|--------|-------|---------|
| **Nối tham chiếu hỏng (#REF!)** | GPMB file, sheet "TH đất" | Công thức trong ô tham chiếu đến sheet khác bị xóa/di chuyển | Không thể tính tổng đất, tổng hộ dân → GPMB sai |
| **Sự mismatch giữa đoạn** | TMDT, dòng tổng | Tổng hợp 3 đoạn có logic không rõ (PA1 vs PA2) | Nếu tính toán sai → tổng mức đầu tư sai |
| **Chỉ số giá cũ** | Sheet "Trượt giá" | Dùng chỉ số 2024 thay vì 2026 | Dự phòng trượt giá có thể thấp hơn thực tế |
| **Hệ số điều chỉnh không rõ ràng** | Doan QL5-DT.390C, hạng mục cầu | Có dùng hệ số điều chỉnh nhịp cầu nhưng không ghi rõ hệ số nào | Khó kiểm tra, có thể dùng sai hệ số TT38 |

---

## PHẦN II: BẢNG SO SÁNH ĐỊNH MỨC CŨ vs MỚI (TT38/2026)

### Bảng 4: So Sánh Suất Vốn & Định Mức (Các Hạng Mục Chính)

| Hạng Mục | Thay Đổi Từ TT12/2021 → TT38/2026 | Suất/Giá Hiện Tại trong TMDT (20/04) | Suất/Giá TT38/2026 (nếu có) | ∆ % | Chi Phí Tăng Kỳ Vọng |
|---------|----------------------------------|------------------------------------|-----------------------------|-----|----------------------|
| **1. Đường chính (km), Bn=42m** | Hệ số điều chỉnh nhân công, máy thi công cập nhật | 60.5 tỷ/km (QĐ425) | [Từ TT38] | ? | [Tính toán] |
| **2. Đường bên (km), Bn=12m** | Idem | 35.4 tỷ/km (QĐ425) | [Từ TT38] | ? | [Tính toán] |
| **3. Cầu dầm Super U (m²)** | Hệ số móng cọc khoan (1.12) có giữ nguyên hay điều chỉnh? | 29.0 tỷ/m² | [Từ TT38] | ? | [Tính toán] |
| **4. Cầu dây văng (m²)** | Idem | 121.2 tỷ/m² (PA2) | [Từ TT38] | ? | [Tính toán] |
| **5. Tường chắn hộp (m²)** | Hệ số điều chỉnh chiều sâu/loại đất? | 12.0 tỷ/m² | [Từ TT38] | ? | [Tính toán] |
| **6. Tường chắn L (m²)** | Idem | 3.0 tỷ/m² | [Từ TT38] | ? | [Tính toán] |
| **7. Cống hộp (m)** | Hệ số điều chỉnh độ sâu/loại cống? | 120.0 tỷ/m | [Từ TT38] | ? | [Tính toán] |
| **8. Chiếu sáng (cột)** | Suất có thay đổi? | 50.0 tỷ/cột | [Từ TT38] | ? | [Tính toán] |
| **9. Trạm biến áp (trạm)** | Suất có thay đổi? | 763.9 tỷ/trạm | [Từ TT38] | ? | [Tính toán] |
| **Nhân công (Nhóm)** | TT38 yêu cầu phân loại nhóm 1/2/3 thay vì cấp | Nhóm 3 (QĐ425 style) | Nhóm 1/2/3 (TT38) | ? | [Nếu khác lương → tính lại] |
| **Hệ số vùng Hải Dương** | Giữ 0.935 | 0.935 | 0.935 | 0% | 0 |
| **Chỉ số giá Hải Dương** | Cần cập nhật từ năm 2024 → 2026 | Chỉ số 2024 (từ QĐ 33/2024) | Chỉ số 2026 (từ SXD Hải Dương Q1 2026) | ? | [Tính lại dự phòng trượt giá] |

---

### Bảng 5: Hạng Mục Cần Bổ Sung Theo TT36/2026

| Chi Phí | Hiện Tại trong TMDT | Yêu Cầu TT36 | Action |
|--------|-------------------|------------|--------|
| **Chi phí tư vấn xây dựng** | Không ghi rõ trong TMDT | Bắt buộc (khảo sát, thiết kế, giám sát, thẩm tra, …) | ➕ Cần thêm ~5-8% tổng chi phí xây dựng |
| **Chi phí quản lý dự án** | 0.08 × (GPMB + xây dựng + khác) | Tối thiểu các công việc Điều 4.3.a TT36 | ⚠️ Kiểm tra: 8% có đủ? Nên ↑ 10-12%? |
| **Chi phí khác: An toàn giao thông** | Có? (Không ghi rõ) | Dự án qua khu dân cư → bắt buộc | ➕ Cần ~2-3% tổng chi phí xây dựng |
| **Chi phí khác: Bảo hiểm công trình** | Có? | Bắt buộc theo TT36 Điều 4.5 | ➕ Cần ~1-2% tổng chi phí xây dựng |
| **Dự phòng khối lượng** | 10% cho GPMB | Phải tính % trên tổng (GPMB + xây dựng + thiết bị + quản lý + tư vấn + khác) | ⚠️ Nếu thêm các chi phí trên → dự phòng khối lượng tăng |
| **Dự phòng trượt giá** | ~6.5% | Tính lại dựa trên chỉ số 2026 | ⚠️ Nếu chỉ số 2026 ↑ → dự phòng ↑ |

---

## PHẦN III: TỔNG HỢP TOP 5 LỖI QUAN TRỌNG

### 🔴 **Lỗi 1: GPMB File Bị #REF! (CRITICAL)**
- **Triệu chứng:** Sheet "TH đất" trong file GPMB có ô #REF!
- **Ảnh hưởng:** Không thể tính đúng tổng diện tích đất, số hộ dân → GPMB sai
- **Cách sửa:** Kiểm tra công thức, sửa nối tham chiếu hoặc lập lại tính toán
- **Chi phí rủi ro:** Không xác định được cho đến khi sửa xong

### 🔴 **Lỗi 2: Dùng Định Mức Cũ (TT12/2021) Thay Vì TT38/2026 (CRITICAL)**
- **Triệu chứng:** TMDT lập 20/04/2026 → có thể dùng suất TT12/2021
- **Ảnh hưởng:** Nếu TT38 có suất cao hơn → chi phí xây dựng thấp hơn thực tế
- **Cách sửa:** So sánh suất QĐ425/2021 vs TT38/2026, tính lại chi phí từng hạng mục
- **Chi phí rủi ro:** +5-15% tổng chi phí xây dựng (nếu TT38 cao hơn)

### 🟠 **Lỗi 3: Chỉ Số Giá 2024 Thay Vì 2026 (HIGH)**
- **Triệu chứng:** Sheet "Trượt giá" dùng chỉ số giá Hải Dương từ 2024
- **Ảnh hưởng:** Dự phòng trượt giá thấp hơn nên → tổng mức đầu tư thiếu
- **Cách sửa:** Lấy chỉ số 2026 từ Sở XD Hải Dương công bố Q1 2026, tính lại dự phòng
- **Chi phí rủi ro:** +1-5% tổng chi phí xây dựng (tùy mức độ tăng chỉ số)

### 🟠 **Lỗi 4: Thiếu Chi Phí Tư Vấn Xây Dựng (HIGH)**
- **Triệu chứng:** TMDT không ghi rõ chi phí tư vấn (hoặc ghi rải rác trong các dòng khác)
- **Ảnh hưởng:** Nếu chưa tính → tổng mức đầu tư thiếu
- **Cách sửa:** Lập dự toán tư vấn riêng (khảo sát, thiết kế, giám sát, …) hoặc xác nhận đã tính trong đâu
- **Chi phí rủi ro:** +5-8% tổng chi phí xây dựng

### 🟡 **Lỗi 5: Hệ Số Quản Lý Dự Án Quá Thấp (MEDIUM)**
- **Triệu chứng:** Chi phí quản lý dự án = 0.08 × Tổng (chỉ 8%)
- **Ảnh hưởng:** Có thể thiếu ngân sách cho các công việc quản lý bổ sung (BIM, kiểm định chuyên sâu, …)
- **Cách sửa:** Xem xét lại nội dung quản lý dự án theo Điều 4.3 TT36, nếu cần → ↑ lên 10-12%
- **Chi phí rủi ro:** +2-4% tổng chi phí xây dựng (nếu ↑ từ 8% → 10-12%)

---

## PHẦN IV: KHUYẾN NGHỊ HÀNH ĐỘNG

### Ngắn Hạn (Trước Khi Trình Duyệt)

- [ ] **Sửa file GPMB:** Khắc phục #REF!, xác nhận tổng GPMB chính xác
- [ ] **So sánh GPMB vs TMDT:** Chứng thực chi phí GPMB giữa 2 file nhất quán
- [ ] **Kiểm tra định mức:** So sánh suất QĐ425/2021 vs TT38/2026 cho các hạng mục chính
- [ ] **Cập nhật chỉ số giá:** Lấy chỉ số 2026, tính lại dự phòng trượt giá
- [ ] **Xác nhận chi phí tư vấn:** Nếu chưa → lập dự toán riêng; nếu có → ghi rõ vị trí

### Trung Hạn (Sau Khi Phê Duyệt, Trước Khi Bóc Thầu)

- [ ] **Cập nhật định mức hoàn toàn:** Khi TT38/2026 và chỉ số giá 2026 chính thức công bố
- [ ] **Lập dự toán gói thầu:** Chia nhỏ từng gói, cập nhật giá theo thị trường hiện tại
- [ ] **Lập plan tuyển chọn nhà thầu:** Xác định thời điểm bóc thầu phù hợp với bảng giá

---

## PHẦN V: KẾT LUẬN

**Tóm tắt:**
- TMDT có **cấu trúc cơ bản hợp lệ** theo TT36/2026 draft
- **Nhưng** có **5 lỗi quan trọng** (1 lỗi critical #REF!, 2 lỗi HIGH về định mức cũ + chỉ số giá cũ)
- **Dự kiến chi phí tăng thêm: +5-20%** khi sửa các lỗi này

**Khuyến nghị:** 
- Ưu tiên sửa **Lỗi 1, 2, 3** (CRITICAL + HIGH) trước khi trình duyệt
- Bổ sung **Lỗi 4, 5** (MEDIUM + HIGH) nếu có thời gian
- Lập lịch **cập nhật toàn bộ** khi TT38/2026 và dữ liệu 2026 chính thức công bố (sau 01/07/2026)

---

**Người lập báo cáo:** OpenClaw TÔM  
**Ngày lập:** 02/07/2026  
**Trạng thái:** DRAFT (chờ subagent hoàn thành audit chi tiết)

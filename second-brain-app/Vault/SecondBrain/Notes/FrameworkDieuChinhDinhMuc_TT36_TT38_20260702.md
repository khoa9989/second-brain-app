# Framework Điều Chỉnh Định Mức & Chi Phí (TT36 vs TT38 / 2026)

## I. Phạm Vi Pháp Lý

### A. TT36/2026/TT-BXD (Phương Pháp Xác Định & Quản Lý Chi Phí)
**Hiệu lực:** 01/07/2026
**Áp dụng cho:** Sơ bộ TMĐT, TMĐT, dự toán xây dựng công trình, dự toán gói thầu

**Quy định cấu trúc tổng mức đầu tư:**
```
Tổng mức = Chi phí GPMB 
         + Chi phí xây dựng 
         + Chi phí thiết bị (nếu có)
         + Chi phí quản lý dự án
         + Chi phí tư vấn xây dựng
         + Chi phí khác
         + Chi phí dự phòng (khối lượng + trượt giá)
```

**Yêu cầu về chi phí xây dựng (Điều 4.2):**
- Bao gồm: chi phí xây dựng công trình chính + tạm phụ trợ thi công
- **Không bao gồm:** chi phí phá dỡ xây dựng không thuộc GPMB (ngoài trừ)
- Phải rõ ràng phân tách giữa công trình chính ↔ công trình tạm phục vụ thi công

**Yêu cầu về chi phí quản lý dự án (Điều 4.3):**
- Tối thiểu phải bao gồm: giám sát thiết kế, lựa chọn nhà thầu, quản lý QC/KL/tiến độ/chi phí, hợp đồng, BIM (nếu có), kiểm định chất lượng, thanh toán/quyết toán
- Cộng dồn tất cả công việc này → không được tính riêng rẽ nhưng phải ghi rõ suất % hoặc chi tiết tính toán

**Yêu cầu về chi phí tư vấn xây dựng (Điều 4.4):**
- Khảo sát, thiết kế, thẩm tra báo cáo FS/KTKT, giám sát thi công, lựa chọn nhà thầu, thẩm tra định mức/giá, BIM
- **Không tính trong dự toán công trình:** chi phí tư vấn tính chung cho cả dự án

**Yêu cầu về chi phí dự phòng (Điều 4.6, 6.7):**
- Dự phòng khối lượng/công việc phát sinh: `% trên tổng (GPMB + xây dựng + thiết bị + quản lý + tư vấn + khác)`
- Dự phòng trượt giá: `dựa trên thời gian thi công, kế hoạch phân bổ vốn, chỉ số giá xây dựng theo loại công trình`

### B. TT38/2026/TT-BXD (Định Mức Xây Dựng)
**Hiệu lực:** 01/07/2026
**Thay thế:** TT12/2021, TT09/2024, TT08/2025
**Phụ lục áp dụng cho dự án đường/cầu:**
- **Phụ lục II:** Định mức dự toán xây dựng công trình (đường bộ, cầu, …)
- **Phụ lục III:** Định mức dự toán lắp đặt hệ thống kỹ thuật
- **Phụ lục VII:** Định mức sử dụng vật liệu xây dựng (hệ số sử dụng, suất tiêu hao)

**Thay đổi chính so với TT12/2021 (cũ):**
- Hệ số nhân công được **phân loại theo nhóm** (Nhóm 1, 2, 3 thay vì cấp công nhân)
- Suất sử dụng vật liệu xây dựng **điều chỉnh** theo điều kiện thi công (lục địa, khí hậu, chiều sâu, …)
- Hệ số điều chỉnh **máy thi công** cập nhật theo giá ca máy hiện tại (ND206 quy định)
- Danh sách công tác xây dựng **bổ sung** một số hạng mục mới liên quan BIM, quản lý điện tử, …

---

## II. Checklist Đối Chiếu TMDT (20/04/2026) với TT36/TT38 (Hiệu lực 01/07/2026)

### **Mục 1: Cơ Sở Pháp Lý & Định Mức**

| Kiểm Tra | Yêu Cầu TT36/TT38 | TMDT Hiện Tại (20/04/2026) | Lỗi/Rủi Ro | Action |
|---------|------------------|--------------------------|-----------|--------|
| **Công bố định mức áp dụng** | Phải rõ ràng ghi: "Áp dụng TT38/2026/TT-BXD, hiệu lực 01/07/2026" | Chưa xác nhận. TMDT lập 20/04/2026 → có thể dùng TT12/2021 hoặc cũ | **CRITICAL** | Cập nhật công bố + kiểm tra từng hạng mục chi phí |
| **Suất vốn đầu tư (nếu dùng)** | Phải trích từ QĐ 425/2021 (hoặc ND206 kèm theo cập nhật 2026) | Dự toán chi tiết từ khảo sát → không dùng suất | OK | Xác nhận các giá xây dựng từ khảo sát thực tế có hợp lệ hay không |
| **Định mức xây dựng** | Phụ lục II TT38 (có kèm bảng hao phí nhân công, máy, vật liệu) | TMDT sử dụng QĐ425/2021 + chỉ số Hải Dương 2024 | **LỆCH** | So sánh hạng mục từng cái: kiểm tra nhân công (nhóm), máy thi công, vật liệu |

### **Mục 2: Cấu Trúc Chi Phí TMDT**

| Dòng | Chi Phí | Yêu Cầu TT36 | TMDT Hiện Tại | Status | Ghi Chú |
|-----|--------|-------------|--------------|--------|---------|
| 1 | **GPMB + dự phòng 10%** | Rõ ràng từng khoản | Có (128.7 tỷ đồng đoạn 1) | ✓ | Cần kiểm tra GPMB file có lỗi #REF! |
| 2 | **Chi phí xây dựng** | Tách rõ công trình chính ↔ tạm phụ trợ | Chi tiết theo đoạn/hạng mục | ✓ | Kiểm tra: có bao gồm tạm phục vụ thi công chưa? |
| 3 | **Chi phí thiết bị** | Nếu có: lập riêng dự toán | Không thấy trong TMDT (dự án đường, không có thiết bị công nghệ) | ✓ | OK, không áp dụng |
| 4 | **Chi phí quản lý dự án** | Tối thiểu các công việc trong Điều 4.3.a (giám sát, quản lý, kiểm định, thanh toán/quyết toán) | Có 0.08 hệ số từ (Chi phí GPMB + xây dựng + khác) | ⚠️ | **Cần kiểm tra:** Hệ số 0.08 (8%) có đủ bao phủ tất cả công việc quản lý hay không? TT36 không quy định tối thiểu %, nhưng thực tế 8% quá thấp cho dự án loại này |
| 5 | **Chi phí tư vấn xây dựng** | Khảo sát, thiết kế, thẩm tra, giám sát, BIM (nếu có) | Không thấy ghi rõ. TMDT là do tư vấn lập → chi phí tư vấn được lập trong Báo cáo FS/KTKT riêng | ⚠️ | **Kiểm tra:** Nếu tư vấn sẽ lập TMDT lại → cần add chi phí tư vấn xây dựng vào |
| 6 | **Chi phí khác** | Các loại chi phí quy định tại Điều 4.5 TT36 (an toàn giao thông, bảo hiểm, xử lý BOM, …) | Không thấy chi tiết | ⚠️ | **Kiểm tra:** Dự án đường vành đai qua khu dân cư → cần chi phí an toàn giao thông, bảo hiểm công trình |
| 7 | **Dự phòng khối lượng** | % trên tổng (GPMB + xây dựng + …) | Có 10% cho GPMB, nhưng chi phí xây dựng/khác... | ⚠️ | **Kiểm tra:** Tính dự phòng có bao phủ toàn bộ chi phí chưa? |
| 8 | **Dự phòng trượt giá** | Dựa trên thời gian thi công + chỉ số giá xây dựng | Có (~6.5% theo sheet "Trượt giá") | ✓ | **Nhưng:** Chỉ số giá 2024 (cũ) → cần cập nhật với dữ liệu 2025-2026 |

### **Mục 3: Hạng Mục Chi Phí Xây Dựng (Kiểm Tra Định Mức)**

| Hạng Mục | TT38/2026 Phụ Lục II | TMDT (20/04/2026 dùng TT12/2021?) | Delta | Ghi Chú |
|---------|-------------------|------------------------------|-------|---------|
| **Đường chính (km)** | Suất từ QĐ425 + điều chỉnh năm 2026 | 60.5 tỷ đ/km (nguồn: QĐ425/BXD, Bn=22.5m) | ? | Cần so sánh: suất 2026 có lớn hơn suất 2024 dùng trong TMDT hay không? |
| **Đường bên (km)** | Suất từ QĐ425 + điều chỉnh năm 2026 | 35.4 tỷ đ/km (Bn=12m) | ? | Tương tự |
| **Cầu dầm Super U (m²)** | Suất từ QĐ425 + điều chỉnh 2026 | 29.0 tỷ đ/m² (tham khảo cầu vượt sông Thái Bình) | ? | **Rủi ro cao:** Nếu suất 2026 ↑ thì chi phí cầu sẽ tăng đáng kể |
| **Cầu dây văng (m²)** | Suất từ QĐ425 + điều chỉnh 2026 | 121.2 tỷ đ/m² (Phương án 2) | ? | Idem |
| **Tường chắn (m²)** | Suất từ QĐ425 + điều chỉnh 2026 | 12.0 tỷ đ/m² (hộp), 3.0 tỷ đ/m² (L) | ? | Idem |
| **Cống, ga thoát nước** | Phụ lục II TT38 có chi tiết | Từ Mục 23200.04, 23200.09 QĐ425 | ? | Kiểm tra: công thức tính có thay đổi tại TT38 không? |
| **Chiếu sáng, trạm biến áp** | Phụ lục II TT38 | Từ QĐ425/BXD Mục 12421.06 | ? | Các hạng mục này có thường xuyên thay đổi suất không? |

### **Mục 4: Hệ Số & Điều Chỉnh**

| Điều Chỉnh | TT38/2026 Quy Định | TMDT Áp Dụng (20/04/2026) | Status | Action |
|----------|-------------------|------------------------|--------|--------|
| **Hệ số nhân công (theo nhóm)** | Nhóm 1, 2, 3 (TT38 quy định chi tiết) | Nhân công nhóm 3 (QĐ425 style) | ⚠️ | **Kiểm tra:** Cần chuyển đổi thành nhóm 1/2/3 hay vẫn dùng nhóm 3? Có sự khác biệt về tiền lương? |
| **Hệ số vùng (Hải Dương)** | 0.935 theo ND206 | 0.935 (QĐ425) | ✓ | OK |
| **Hệ số móng cọc khoan** | TT38 cung cấp | 1.12 (>45m), 1.1 (<45m) | ✓ | OK, nhưng cần xác nhận lại với TT38 |
| **Hệ số chiều dài nhịp cầu** | TT38 cung cấp chi tiết | Có trong TMDT (cầu 130m, cầu dây văng 165m) | ? | Kiểm tra: hệ số điều chỉnh nhịp cầu tại TT38 có khác so với TT12/2021 không? |
| **Chỉ số giá xây dựng** | Dùng chỉ số năm 2026 (Hải Dương công bố Q1 2026) | Chỉ số năm 2024-2025 (từ QĐ 33/2024 Hải Dương) | ⚠️ **LỆCH** | **Cần cập nhật:** Nếu chỉ số 2026 > 2025 → dự phòng trượt giá tăng |

---

## III. Các Hạng Mục Cần Điều Chỉnh Ngay

### **Mức Độ 1: CẦN ĐIỀU CHỈNH NGAY (Chi phí có thể ↑ 5-15%)**

1. **Định mức xây dựng chính (đường, cầu, tường chắn)**
   - Cần so sánh suất vốn QĐ425/2021 vs suất 2026 được công bố trong TT38
   - Nếu khác → tính lại chi phí từng hạng mục

2. **Hệ số nhân công**
   - Kiểm tra xem TT38 có yêu cầu phân loại nhân công thành nhóm 1/2/3 hay không
   - Nếu có → tính lại hao phí nhân công từng hạng mục

3. **Chỉ số giá xây dựng Hải Dương (2026 vs 2024)**
   - Lấy chỉ số công bố Q1 2026 từ Sở XD Hải Dương (nếu có)
   - Tính lại dự phòng trượt giá

### **Mức Độ 2: CẦN XEM XÉT BỔ SUNG (Chi phí mới 5-10%)**

4. **Chi phí tư vấn xây dựng** (nếu chưa lập riêng)
   - Nếu TMDT được lập bởi tư vấn → cần thêm chi phí tư vấn (khảo sát, thiết kế, giám sát, …)
   - Suất tự thương lượng hoặc theo hướng dẫn TT36 Mục 1 Phụ lục II

5. **Chi phí quản lý dự án**
   - Hệ số 0.08 (8%) có thể quá thấp
   - Nên xem xét lại: có thực hiện BIM không? Có kiểm định chất lượng chuyên sâu không? → có thể ↑ lên 10-12%

6. **Chi phí khác** (an toàn giao thông, bảo hiểm, …)
   - Dự án qua khu dân cư → cần chi phí an toàn giao thông
   - Nên cộng thêm ~2-3% tổng chi phí xây dựng

### **Mức Độ 3: KIỂM TRA NHẤT QUÁN (Sai sót logic)**

7. **Kiểm tra GPMB file #REF!**
   - Sửa công thức nối tham chiếu trong sheet "TH đất" và "GPMB_VD1(Moi)"
   - Xác nhận lại số lượng đất, số hộ dân, tổng chi phí GPMB

8. **Kiểm tra nhất quán giữa file GPMB và TMDT**
   - Chi phí GPMB trong TMDT = Chi phí GPMB trong file GPMB?
   - Nếu khác → xác nhận nguyên nhân

---

## IV. Kết Luận Sơ Bộ

**TMDT này lập ngày 20/04/2026 (trước 01/07/2026):**
- ✓ Cấu trúc chi phí tương đối đúng theo TT36 draft
- ✓ Có bao gồm dự phòng khối lượng + trượt giá
- ⚠️ **Nhưng:** Dùng định mức cũ (TT12/2021 hoặc 2024) → cần cập nhật với TT38/2026
- ⚠️ **Nhưng:** File GPMB có lỗi công thức → cần sửa
- ⚠️ **Nhưng:** Chỉ số giá (2024) → cần cập nhật (2026)
- ⚠️ **Nhưng:** Hệ số nhân công, chi phí quản lý, chi phí khác cần xem xét bổ sung/điều chỉnh

**Dự kiến chi phí tăng thêm: +5-20%** (tùy độ chênh lệch định mức + giá 2026)

---

## V. Tiếp Theo

Đợi **Subagent audit** hoàn thành:
1. Danh sách lỗi chi tiết từng hạng mục (sheet, cell, công thức, giá trị)
2. So sánh suất vốn QĐ425/2021 vs TT38/2026 (nếu có dữ liệu)
3. Bảng điều chỉnh dự toán (cộng thêm chi phí, nhân hệ số, sửa công thức)
4. Báo cáo tóm tắt "TOP 5 LỖI QUAN TRỌNG" để anh Khoa quyết định bước tiếp theo

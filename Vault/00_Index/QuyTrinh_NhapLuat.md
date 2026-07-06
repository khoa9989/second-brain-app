# QUY TRÌNH PHỐI HỢP ĐƯA VĂN BẢN PHÁP LUẬT VÀO HỆ THỐNG
*(Quy trình chuẩn một cửa - Cập nhật 06/2026)*

## 1. MỤC ĐÍCH
Tạo ra một hệ thống lưu trữ pháp lý "Hai lớp":
- **Lớp 1 (Vault):** Lưu trữ bản gốc, giữ tính pháp lý và tham chiếu nguyên vẹn.
- **Lớp 2 (Second Brain - Netlify):** Lưu trữ bản chuẩn hóa (Text/Metadata) giúp AI truy xuất, phân tích và trả lời câu hỏi cực nhanh.
- **Tiêu chí tối cao:** KHÔNG DỰ ĐOÁN LUẬT. Mọi câu trả lời của AI dựa trên dữ liệu thực tế từ Second Brain và Vault.

## 2. NHIỆM VỤ CỦA USER (ANH KHOA)
Anh Khoa chỉ cần làm một thao tác duy nhất:
- **Gửi văn bản mới** (PDF, Word, ảnh, hoặc Link) vào khung chat.
- Kèm theo câu lệnh ngắn gọn: *"Lưu văn bản này theo quy trình chuẩn"*, *"Xử lý văn bản này"*, hoặc *"Đưa vào Vault + Second Brain"*.
- (Anh có thể làm sạch văn bản sang đuôi `.md` trước khi gửi để tiết kiệm token nếu muốn).

## 3. NHIỆM VỤ CỦA AI (TÔM)
Ngay khi nhận văn bản, TÔM sẽ thực hiện 4 bước tự động:

### Bước 3.1: Nhận diện & Trích xuất Metadata
- Xác định loại: Luật / Nghị định / Thông tư / Quyết định...
- Đọc thông tin: Số hiệu, Ngày ban hành, Ngày hiệu lực, Cơ quan ban hành.
- Phân tích tình trạng: Mới hoàn toàn / Sửa đổi / Bổ sung / Thay thế.

### Bước 3.2: Lưu trữ File gốc vào Vault (Ngăn thích hợp)
Dựa vào nội dung, TÔM sẽ chọn đúng ngăn trong Vault:
- `/Vault/VanBanPhapQuy/01_ChuanBiDauTu/`
- `/Vault/VanBanPhapQuy/03_HopDong_ChiPhi/`
- `/Vault/VanBanPhapQuy/04_ChatLuong_NghiemThu/`
- Hoặc đưa vào `/Archive_LichSu/` đối với văn bản đã hết hiệu lực.
- *Quy tắc đặt tên file gốc:* `YYYY-MM-DD_[Loai]_[SoHieu]_[TenNgan].pdf/md`

### Bước 3.3: Tạo Note chuẩn lên Second Brain (Netlify)
TÔM sẽ tự động cấu trúc lại văn bản và lưu thẳng lên Netlify Blobs (Server-first) theo form:
- **Tiêu đề (Title):** `[Loại] [Số hiệu] - [Tên ngắn]` (VD: `Luật 135/2025/QH15 - Xây dựng`)
- **Chuyên mục (Category):** Chọn 1 chuyên mục chính.
- **Tags:** Gắn các tag nhận diện nhanh (`#luat`, `#sua-doi`, `#hieu-luc-2026`).
- **Nội dung:** 
  - Phạm vi điều chỉnh, Hiệu lực.
  - Tóm tắt các điểm đáng chú ý nhất đối với Quản lý dự án đầu tư công.
  - **BẮT BUỘC:** Ghi rõ đường dẫn tham chiếu đến file gốc trong Vault.

### Bước 3.4: Báo cáo kết quả
TÔM gửi lại một báo cáo ngắn gọn xác nhận:
- [x] Đã lưu Vault tại đường dẫn: `...`
- [x] Đã tạo Note trên Second Brain với trạng thái: `Hiệu lực...`
- (Nếu có văn bản cũ bị thay thế, TÔM sẽ báo cáo đã di chuyển file cũ vào Archive_LichSu).

## 4. QUY TẮC AN TOÀN PHÁP LÝ (AI CẦN NHỚ)
- Không có nguồn -> Không kết luận.
- Có nhiều bản sửa đổi -> Luôn ưu tiên bản mới nhất hoặc bản Hợp nhất, nhưng phải chỉ rõ nguồn.
- Vault là nguồn kiểm chứng. Second Brain là não bộ truy xuất nhanh.

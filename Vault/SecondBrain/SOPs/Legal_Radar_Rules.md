# Legal Radar Rules

## Mục tiêu
Thiết lập cơ chế theo dõi trạng thái pháp lý cho nhóm văn bản trọng điểm:
- Chi phí
- Định mức
- GPMB

Nguồn chuẩn hóa hiện tại bám theo `Legal_Inventory_Master.md`.

---

## 1. Nhóm văn bản cần theo dõi chủ động
### 1.1. Nhóm Xanh
Văn bản đang hiệu lực và áp dụng trực tiếp cho hồ sơ hiện tại.

### 1.2. Nhóm Vàng
Văn bản còn được dùng làm tham chiếu, hoặc đang có điều khoản chuyển tiếp / cần lưu ý phạm vi áp dụng.

### 1.3. Nhóm Đỏ
Văn bản đã bị thay thế, không dùng làm căn cứ chính cho hồ sơ mới.

---

## 2. Điểm kích hoạt cảnh báo

| Điểm kích hoạt | Hành động của Radar | Mức ưu tiên |
|---|---|---|
| Có văn bản mới thuộc nhóm Chi phí / Định mức / GPMB | Báo ngay trong phiên làm việc hiện tại; ghi vào danh sách theo dõi và đánh giá tác động đến hồ sơ đang làm | Rất cao |
| Văn bản nhóm Vàng chuyển sang Đỏ | Báo động ngay; đánh dấu các hồ sơ / note đang dẫn chiếu văn bản cũ; đề xuất thay thế căn cứ | Rất cao |
| Văn bản nhóm Xanh bị sửa đổi / bổ sung | Báo ngay; rà soát điều khoản chuyển tiếp và xác định phần nào cần cập nhật | Cao |
| Văn bản nhóm Xanh sắp đến mốc hiệu lực mới / mốc chuyển tiếp | Nhắc trước 30 ngày, 7 ngày và 1 ngày | Cao |
| Văn bản GPMB địa phương Hải Phòng có thay đổi về bảng giá đất, bồi thường, hỗ trợ, tái định cư | Báo ngay; ưu tiên kiểm tra ảnh hưởng đến hồ sơ Vành đai 1 và các hồ sơ GPMB | Rất cao |
| Có văn bản mới nhưng chưa xác minh được hiệu lực / trạng thái | Đưa vào hàng chờ xác minh metadata; không cho dùng làm căn cứ chính cho đến khi chốt | Trung bình |

---

## 3. Quy trình theo dõi trạng thái

### 3.1. Mỗi phiên làm việc đầu ngày
Em thực hiện các bước sau:
1. Quét danh mục trong `Legal_Inventory_Master.md`.
2. Kiểm tra nhóm Xanh và Vàng trước.
3. Ghi nhận mọi thay đổi về:
   - ngày hiệu lực
   - trạng thái thay thế
   - văn bản sửa đổi/bổ sung
   - văn bản mới liên quan trực tiếp đến chi phí, định mức, GPMB
4. Nếu có thay đổi, em báo cáo ngay theo 3 mức:
   - **Báo động đỏ**: nhóm Vàng → Đỏ hoặc văn bản đang dùng bị thay thế
   - **Cảnh báo vàng**: văn bản Xanh có điều khoản chuyển tiếp hoặc sắp đến mốc cần cập nhật
   - **Thông tin xanh**: văn bản mới đúng nhóm nhưng chưa ảnh hưởng ngay đến hồ sơ hiện tại

### 3.2. Khi anh đang làm một hồ sơ cụ thể
Nếu hồ sơ đang liên quan đến:
- TMĐT / TMDT
- GPMB
- hồ sơ Pre-FS
- dự toán / định mức

thì Radar phải ưu tiên kiểm tra nhóm pháp lý liên quan trước, sau đó mới mở rộng sang nhóm nền tảng khác.

---

## 4. Cơ chế báo cáo cho anh

### 4.1. Báo cáo ngắn đầu phiên
Mỗi phiên làm việc đầu ngày, em sẽ báo theo mẫu:
- Có thay đổi hay không
- Nhóm văn bản nào bị ảnh hưởng
- Mức màu của thay đổi
- Cần xử lý gì ngay

### 4.2. Báo cáo tức thời
Khi có sự kiện quan trọng, em sẽ báo ngay trong phiên hiện tại, không chờ tổng kết, nếu rơi vào một trong các trường hợp:
- văn bản mới xuất hiện trong nhóm ưu tiên
- văn bản bị thay thế
- văn bản chuyển trạng thái từ Vàng sang Đỏ
- văn bản GPMB địa phương có thay đổi

### 4.3. Báo cáo tổng hợp định kỳ
Nếu anh yêu cầu, em có thể xuất thêm:
- bảng thay đổi theo ngày
- danh sách văn bản cần rà soát lại
- danh sách văn bản đã bị thay thế nhưng hồ sơ vẫn đang dẫn chiếu

---

## 5. Quy tắc sử dụng trong thực chiến
- **Xanh**: dùng được ngay, nhưng vẫn theo dõi thay đổi.
- **Vàng**: dùng có kiểm soát, phải đọc điều khoản chuyển tiếp trước khi trích dẫn.
- **Đỏ**: không dùng làm căn cứ chính cho hồ sơ mới; chỉ giữ để đối chiếu lịch sử.

---

## 6. Ghi chú dành riêng cho Hải Phòng / GPMB
Các văn bản địa phương liên quan đến:
- bảng giá đất
- hệ số điều chỉnh giá đất
- đơn giá bồi thường
- hỗ trợ, tái định cư
- phân cấp/ủy quyền GPMB

phải được gắn cảnh báo cao vì ảnh hưởng trực tiếp đến hồ sơ Vành đai 1 và các dự án hạ tầng khác tại Hải Phòng.

---

## 7. Luồng vận hành đề xuất
1. Cập nhật danh mục pháp lý.
2. Đồng bộ trạng thái Xanh/Vàng/Đỏ.
3. Rà văn bản mới phát sinh.
4. Đẩy cảnh báo nếu có thay đổi trạng thái.
5. Gắn lại các note/hồ sơ liên quan.
6. Báo anh theo dạng ngắn, rõ, có hành động đề xuất.

---

## 8. Nguyên tắc ưu tiên
Ưu tiên cao nhất theo thứ tự:
1. Chi phí đầu tư xây dựng
2. Định mức xây dựng
3. GPMB / giá đất / bồi thường / tái định cư
4. Các văn bản liên quan chuyển tiếp hoặc sửa đổi trực tiếp

---

## 9. Kết quả mong muốn
Radar phải trả lời được 3 câu hỏi nhanh:
- Văn bản nào mới xuất hiện?
- Văn bản nào đang đổi trạng thái?
- Văn bản nào cần anh xử lý ngay cho hồ sơ hiện tại?

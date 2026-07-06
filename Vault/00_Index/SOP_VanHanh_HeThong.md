# HƯỚNG DẪN VẬN HÀNH TIÊU CHUẨN (SOP)
## HỆ THỐNG QUẢN TRỊ PHÁP LÝ DỰ ÁN ĐẦU TƯ CÔNG HẠ TẦNG - GIAO THÔNG (HẢI PHÒNG)
*Mô hình phối hợp Lớp kép: Vault (Pháp lý gốc) & Second Brain (Tác nghiệp số)*
*Cập nhật: 06/2026*

---

## I. TỔNG QUAN HỆ THỐNG & ĐỊNH HƯỚNG KIẾN TRÚC
Hệ thống quản lý tri thức và văn bản pháp lý phục vụ các dự án đầu tư công trên địa bàn TP. Hải Phòng được thiết kế theo nguyên lý **phân tách hai vai trò độc lập để tối ưu hóa hiệu năng**:

1. **Vault (Lớp lưu trữ vật lý):** 
   - Là "Két sắt pháp lý" lưu trữ toàn bộ các file văn bản gốc (`.docx`, `.pdf`, `.md`).
   - Phục vụ việc tra cứu gốc, đối soát pháp lý khi thanh kiểm tra, kiểm toán dự án.
   - Thư mục được tổ chức logic theo phân kỳ đầu tư xây dựng.
2. **Second Brain (Lớp tác nghiệp trí tuệ số):**
   - Là "Bộ não ảo" đồng bộ trực tuyến trên Netlify Blobs.
   - Lưu trữ metadata chuẩn hóa và nội dung tóm tắt thực chiến từ văn bản gốc.
   - Được kết nối trực tiếp qua 9router đến model **KiroAI_Combo** để truy vấn thông minh qua **Brain Query**.

---

## II. QUY TRÌNH XỬ LÝ VÀ CHUẨN HÓA VĂN BẢN (SOP 3 LỚP)
Mỗi khi có văn bản pháp luật hoặc hướng dẫn mới được nạp vào, hệ thống thực hiện nghiêm ngặt quy trình chuẩn hóa gồm 3 lớp cấu trúc note trên Second Brain:

### 1. Lớp 1: Metadata chuẩn hóa (Định danh 3 chiều)
Bắt buộc phải trích xuất đầy đủ và chính xác các trường dữ liệu sau:
*   **Số hiệu:** (Ví dụ: `135/2025/QH15`, `10/2021/NĐ-CP`, `05/2026/QĐ-UBND`)
*   **Ngày ban hành:** Định dạng `YYYY-MM-DD`.
*   **Ngày hiệu lực:** Định dạng `YYYY-MM-DD`.
*   **Cơ quan ban hành:** (Quốc hội, Chính phủ, Bộ Xây dựng, UBND TP. Hải Phòng,...)
*   **Trạng thái pháp lý:** *Còn hiệu lực* / *Đang sửa đổi* / *Hết hiệu lực (bị thay thế bởi số hiệu nào)*.
*   **Đường dẫn tham chiếu gốc:** Chỉ rõ đường dẫn lưu trữ file gốc trong Vault.

### 2. Lớp 2: Nội dung cốt lõi thực chiến (Hạ tầng & Đầu tư công)
AI tự động lược bỏ các phần lý thuyết chung, tập trung tóm tắt cô đọng nhất dưới dạng danh sách gạch đầu dòng các khía cạnh ảnh hưởng trực tiếp đến dự án:
*   **Quy định về định mức và chi phí** đầu tư xây dựng.
*   **Thủ tục lựa chọn nhà thầu, đấu thầu** dự án đầu tư công.
*   **Quy trình bồi thường, giải phóng mặt bằng (GPMB)** và thu hồi đất.
*   **Yêu cầu kỹ thuật, chất lượng, nghiệm thu** và bàn giao công trình hạ tầng/giao thông.

### 3. Lớp 3: Liên kết logic ngược (Backlinking Chain)
Để tránh các văn bản tồn tại biệt lập, mỗi note bắt buộc phải khai báo phần **"Văn bản liên quan" (Backlinks)**:
*   **Liên kết xuôi:** Luật liên kết đến các Nghị định hướng dẫn; Nghị định liên kết đến các Thông tư chi tiết; Thông tư liên kết đến các Quyết định triển khai cụ thể của UBND TP. Hải Phòng.
*   **Liên kết ngược:** Ghi rõ văn bản này thay thế/sửa đổi/bổ sung cho văn bản nào đã có trước đó trong hệ thống.
*   *Cú pháp liên kết chuẩn:* `[Số hiệu] - [Tên ngắn]` (để Brain Query dễ dàng nhận diện chéo).

---

## III. QUY TRÌNH KIỂM CHỨNG 2 CHIỀU (CROSS-CHECK & CONFLICT WARNING)
Khi nạp văn bản mới, AI thực hiện đối soát tự động:

1.  **Tìm văn bản cùng chủ đề/phạm vi:** Quét toàn bộ cơ sở dữ liệu Second Brain xem có văn bản nào điều chỉnh cùng đối tượng công việc hay không.
2.  **So sánh sự thay đổi (Diff & Conflict):**
    *   Xác định các điều khoản mới có làm tăng tính ngặt nghèo của thủ tục hay không (ví dụ: thay đổi hạn mức chỉ định thầu, thay đổi thẩm quyền phê duyệt).
    *   Phát hiện các điểm mâu thuẫn giữa quy định mới và quy định cũ đang áp dụng cho các dự án dở dang (điều khoản chuyển tiếp).
3.  **Cảnh báo đỏ:** Nếu phát hiện thay đổi lớn hoặc mâu thuẫn pháp lý, AI tự động thêm khối cảnh báo:
    > ⚠️ **[CẢNH BÁO XUNG ĐỘT PHÁP LÝ]**  
    > *Nội dung cảnh báo chi tiết về điểm thay đổi so với văn bản [Số hiệu văn bản cũ], lưu ý cho các dự án chuyển tiếp.*

---

## IV. ĐỊNH DẠNG ĐẦU RA TIÊU CHUẨN CỦA BRAIN QUERY
Khi anh Khoa thực hiện truy vấn về quy trình, thủ tục hoặc giải quyết vướng mắc pháp lý, câu trả lời từ hệ thống (qua model `KiroAI_Combo` hoặc trực tiếp từ TÔM) phải tuân thủ nghiêm ngặt cấu trúc 4 phần:

1.  **Cơ sở pháp lý:** Trích dẫn chính xác Số hiệu văn bản, Điều, Khoản cụ thể đang điều chỉnh vấn đề.
2.  **Quy trình thực hiện:** Hướng dẫn chi tiết theo các bước 1, 2, 3... rõ ràng, dễ hiểu.
3.  **Thẩm quyền phê duyệt:** Ghi rõ cấp quyết định đầu tư, chủ đầu tư, sở chuyên ngành hay UBND Thành phố Hải Phòng phê duyệt.
4.  **Rủi ro/Lưu ý thực tế:** Nhấn mạnh các điểm dễ sai sót, thời hạn nộp hồ sơ, điều khoản chuyển tiếp hoặc bài học thực tế đã nạp.

---

## V. CHIẾN LƯỢC NẠP DỮ LIỆU ƯU TIÊN (DATA INGESTION STRATEGY)
Để hệ thống nhanh chóng đạt trạng thái "thực chiến", kế hoạch nạp dữ liệu được phân chia theo 3 mức ưu tiên cốt lõi:

```
┌────────────────────────────────────────────────────────┐
│  ƯU TIÊN 1: CÁC QUY ĐỊNH ĐẶC THÙ CỦA TP. HẢI PHÒNG     │
│  - Cơ chế đặc thù đầu tư công Hải Phòng                 │
│  - Đơn giá bồi thường đất, GPMB, hỗ trợ tái định cư     │
│  - Phân cấp quản lý dự án, thẩm quyền quyết định đầu tư │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│  ƯU TIÊN 2: TIÊU CHUẨN KỸ THUẬT & QUY PHẠM (TCVN)       │
│  - Tiêu chuẩn thiết kế đường bộ, cầu, cảng             │
│  - Quy chuẩn khảo sát xây dựng, nghiệm thu chất lượng   │
│  - Định mức dự toán chuyên ngành giao thông            │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│  ƯU TIÊN 3: BÀI HỌC KINH NGHIỆM & THỰC TIỄN            │
│  - Biên bản rút kinh nghiệm thanh kiểm tra các dự án cũ│
│  - Các lỗi thường gặp trong thanh quyết toán vốn       │
│  - Giải pháp xử lý kỹ thuật hiện trường đặc thù        │
└────────────────────────────────────────────────────────┘
```

---

## VI. HƯỚNG DẪN PHÂN CHIA THƯ MỤC TRONG VAULT
Bản gốc văn bản lưu trữ tại Vault phải nằm trong các thư mục tương ứng:
*   `Vault/00_Index/`: Lưu các file chỉ mục và SOP hướng dẫn hệ thống.
*   `Vault/VanBanPhapQuy/01_ChuanBiDauTu/`: Các Luật, Nghị định, Thông tư về chủ trương đầu tư, quy hoạch, khảo sát, lập thiết kế cơ sở.
*   `Vault/VanBanPhapQuy/03_HopDong_ChiPhi/`: Các quy định về đấu thầu, lập dự toán, quản lý chi phí, hợp đồng xây dựng.
*   `Vault/VanBanPhapQuy/04_ChatLuong_NghiemThu/`: Các quy định về giám sát thi công, quản lý chất lượng, thí nghiệm, nghiệm thu, bàn giao, bảo hành.
*   `Vault/Archive_LichSu/`: Các văn bản đã hết hiệu lực hoàn toàn, được di chuyển về đây để tránh nhầm lẫn trong quá trình tra cứu.

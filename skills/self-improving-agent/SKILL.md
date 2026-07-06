---
name: "self-improving-agent"
description: "Core skill for judging infrastructure dossiers from available evidence only; handles complete folders or loose files without guessing."
---

# [FINAL] CORE SKILL: THẨM ĐỊNH HỒ SƠ HẠ TẦNG

## 1. NGUYÊN TẮC LÀM VIỆC
- Thứ tự ưu tiên dữ liệu: [Bảng tính chi tiết] > [Bản vẽ] > [Thuyết minh] > [Bảng tổng hợp].
- Khi bất nhất, lấy tài liệu ưu tiên hơn làm căn cứ và báo: `BẤT NHẤT: [Thông số] tại [File A] khác [File B]. Đã dùng [File ưu tiên] để thẩm định.`
- Cấm dùng kiến thức ngoài tài liệu để điền vào khoảng trống.
- Nếu thiếu dữ liệu, ghi `Trống/Chưa đủ dữ liệu` tại mục tương ứng. Không phỏng đoán.
- Ưu tiên đọc từ `Vault/`. Nếu nhận file rời qua chat, thẩm định ngay trong phạm vi tài liệu hiện có.

## 2. QUY CHẾ ĐẦU RA
- Hồ sơ rời / ít dữ liệu: dùng **Bản ngắn** (kết luận đạt/không, chỉ ra điểm bất nhất/sai số/thiếu bằng chứng).
- Hồ sơ dự án đầy đủ: dùng **Bản đầy đủ** (kết luận tổng quan, bảng trích xuất chi tiết, phân tích ma trận 5 chiều, yêu cầu giải trình).

## 3. MA TRẬN KIỂM TRA CHÉO
Mọi báo cáo phải kiểm tra đủ 5 chiều:
1. Pháp lý: đối chiếu biểu mẫu/quy định hiện hành.
2. Kỹ thuật: bản vẽ có khớp 100% với phụ lục tính toán (cao độ, lý trình).
3. Khối lượng: kiểm tra sót đào taluy, hệ số nở rời, bù lún.
4. Đơn giá: kiểm tra tính thời điểm và địa phương.
5. Số học: kiểm tra tổng thành tiền có sai lệch với (Khối lượng x Đơn giá).

## 4. QUY TRÌNH KÍCH HOẠT
- Ưu tiên đọc từ `Vault/HoSoDuAn/` và `Vault/VanBanPhapQuy/` khi có yêu cầu.
- Mọi kết luận bắt buộc trích dẫn nguồn: `[Tên file - Mục/Trang]`.
- Nếu thiếu dữ liệu, nói rõ phần thiếu và thẩm định tiếp khi người dùng bổ sung. Tuyệt đối không tự kết luận khi chưa đủ căn cứ.

# Soi tờ trình chính thức - Đánh dấu Xanh/Vàng/Đỏ

**File soát:** `ToTrinh_TMDT_VanhDai1_ChinhThuc_20260702.md`  
**Đối chiếu với:**
- `Audit_TMDT_QL5DT390_LuiLoi_20260702.md`
- `Audit_TMDT_QL5DT390_DieuChinhDinhMuc_20260702.md`

**Quy ước:**
- 🟩 **[Màu xanh]** = Khớp với kết quả audit / có thể giữ nguyên
- 🟨 **[Màu vàng]** = Đúng hướng nhưng cần rà soát lại câu chữ / thêm căn cứ / tránh khẳng định quá mức
- 🟥 **[Màu đỏ]** = Vênh với audit, còn placeholder, hoặc có nội dung bắt buộc phải sửa trước khi trình

---

## 1. Đánh giá tổng quát

| Mục | Đánh giá | Nhận xét |
|---|---|---|
| Tư duy cấu trúc tờ trình | 🟩 | Cấu trúc hợp lý: bối cảnh, căn cứ pháp lý, kết quả rà soát, kiến nghị, hồ sơ kèm theo. |
| Hướng tiếp cận pháp lý | 🟩 | Đã bám đúng trục TT36/2026 và TT38/2026, phù hợp bộ audit. |
| Mức độ sẵn sàng để trình ký ngay | 🟥 | Chưa đạt. Còn placeholder, còn nhiều số liệu dạng ước lệ/range, chưa chốt giá trị đề nghị trình duyệt. |
| Mức độ dùng làm tờ trình xin chủ trương cập nhật hồ sơ | 🟨 | Có thể dùng nếu đổi cách diễn đạt rõ đây là tờ trình xin chấp thuận rà soát/cập nhật, chưa phải tờ trình xin phê duyệt giá trị cuối cùng. |

---

## 2. Soi theo từng mục

### 2.1. Tiêu đề và trạng thái hồ sơ

- **Dòng:** `DRAFT TỜ TRÌNH DUYỆT TỔNG MỨC ĐẦU TƯ / DỰ TOÁN`
  - 🟥 **Đỏ**: Nội dung đầu file vẫn còn chữ **DRAFT**, trong khi phần trên ghi **CHÍNH THỨC**.
  - **Xử lý:** Phải thống nhất thành một trạng thái duy nhất. Nếu là bản chính thức trình ký, bỏ chữ `DRAFT`.

- **Dòng:** `Trạng thái: CHÍNH THỨC - Tờ trình duyệt TMĐT sau rà soát kỹ thuật + đối chiếu định mức`
  - 🟨 **Vàng**: Câu này đi trước thực trạng audit. Vì chưa chốt được giá trị GPMB và chưa chuyển đổi xong TT38 nên gọi là “tờ trình duyệt TMĐT” còn hơi mạnh.
  - **Đề nghị:** đổi thành kiểu: `Tờ trình báo cáo kết quả rà soát và xin chủ trương cập nhật, hoàn thiện hồ sơ TMĐT/TMDT` nếu chưa có số liệu chốt cuối.

---

### 2.2. Mục 1 - Thông tin chung

- **Tên dự án / Chủ đầu tư / Nguồn vốn / Thời gian thực hiện**
  - 🟩 **Xanh**: Không thấy vênh với ngữ cảnh hồ sơ hiện có.

- **Địa điểm xây dựng:** `Các xã, phường: Mao Điền, Tứ Minh, Cẩm Giàng, Việt Hòa, Tuệ Tĩnh, Thái Tân, Nam Sách, Thành Đông, Nam Đồng, Ái Quốc, thành phố Hải Phòng.`
  - 🟥 **Đỏ**: Danh sách địa danh này có dấu hiệu lẫn địa bàn ngoài Hải Phòng; bộ audit hiện tại không cung cấp chứng cứ xác nhận đầy đủ chuỗi địa danh này.
  - **Xử lý:** Anh cần đối chiếu lại với hồ sơ chủ trương đầu tư / hướng tuyến / quyết định địa giới hành chính. Nếu không có căn cứ chắc, không nên để chi tiết như vậy.

- **Hồ sơ làm căn cứ rà soát:** `... tư vấn lập ngày 19/6/2026; ... file dữ liệu ngày 20/04/2026`
  - 🟩 **Xanh**: Khớp với bối cảnh audit đã nêu.

---

### 2.3. Mục 2 - Bối cảnh và sự cần thiết

- Toàn bộ logic nêu lý do phải rà soát kỹ thuật, rà soát công thức, đối chiếu pháp lý mới
  - 🟩 **Xanh**: Khớp hoàn toàn với 2 file audit.

- Cụm: `cập nhật đối chiếu với hệ thống quy định mới ... có hiệu lực từ ngày 01/07/2026`
  - 🟩 **Xanh**: Đúng với trục TT36/TT38 trong audit compliance.

---

### 2.4. Mục 3 - Cơ sở pháp lý

- Liệt kê Luật 135/2025/QH15, NĐ206/2026, TT36/2026, TT37/2026, TT38/2026
  - 🟩 **Xanh**: Bộ văn bản này khớp định hướng pháp lý của gói rà soát.

- Mục 7: `Các công bố giá, chỉ số giá xây dựng, giá vật liệu... tại thời điểm xác định lại chi phí.`
  - 🟨 **Vàng**: Đúng về nguyên tắc, nhưng audit chỉ ra hiện chưa cập nhật xong giá 2026. Câu này nên bổ sung sắc thái “sẽ sử dụng/đang cập nhật theo công bố 2026”.

---

### 2.5. Mục 4.1 - Kết quả kiểm tra kỹ thuật và số liệu

- Nhóm lỗi `#REF!` ở sheet `TH` và `TH_t`
  - 🟩 **Xanh**: Khớp trực tiếp với file `Audit_TMDT_QL5DT390_LuiLoi_20260702.md`.

- Nhận định `Không thể tính chính xác tổng chi phí GPMB`
  - 🟩 **Xanh**: Khớp audit.

- Nhận định `các sheet tính toán chi phí xây dựng ... phụ thuộc vào suất vốn proxy QĐ425/BXD thay vì BOQ chi tiết`
  - 🟩 **Xanh**: Khớp với compliance audit.

- Đoạn `Chi phí quản lý dự án ... cần xác nhận phù hợp TT36/2026 Mục 3`
  - 🟨 **Vàng**: Đúng hướng nhưng nên viện dẫn nhất quán với phần sau (đang dùng Điều 4.3). Nên thống nhất cách gọi điều/khoản.

- Đoạn `Tổng hợp nhận xét sơ bộ` với số liệu:
  - `~1,750-1,850 tỷ đồng`
  - `+5% đến +15%`
  - 🟥 **Đỏ**: Đây là số liệu **ước lệ/range**, không phải giá trị chốt từ audit. Nếu để trong tờ trình chính thức rất dễ bị hỏi nguồn tính và phương pháp suy ra.
  - **Xử lý:** Nếu chưa có bảng tính chốt, chuyển thành ngôn ngữ định tính; hoặc dẫn chiếu rõ là “ước tính sơ bộ phục vụ rà soát nội bộ, chưa phải giá trị đề nghị phê duyệt”.

---

### 2.6. Mục 4.2 - Đối chiếu theo TT36/2026

- Cơ cấu chi phí: Có GPMB, xây dựng, dự phòng; chưa rõ QLDA, tư vấn; thiếu/không rõ chi phí khác
  - 🟩 **Xanh**: Khớp compliance audit.

- Đoạn `nếu <10% tổng chi phí xây dựng thì có rủi ro thiếu ngân sách`
  - 🟥 **Đỏ**: Trong 2 file audit không có chứng cứ chốt ra ngưỡng `<10%` này cho chi phí QLDA. Đây là suy diễn vượt chứng cứ.
  - **Xử lý:** Bỏ ngưỡng định lượng này nếu không có căn cứ trích dẫn rõ.

- Đoạn `ước ~5-8% tổng chi phí xây dựng` cho chi phí tư vấn
  - 🟨 **Vàng**: Audit compliance có nêu mức ước này, nên dùng được như cảnh báo rà soát; tuy nhiên nên ghi rõ là **ước tính sơ bộ** chứ không phải giá trị pháp lý cố định.

- Đoạn `an toàn giao thông (~2-3% chi phí xây dựng phần tuyến)`
  - 🟨 **Vàng**: Đây là mức ước trong audit, không phải con số pháp quy chốt. Nên để là “cần xem xét bổ sung” thay vì nêu như tỷ lệ chắc chắn.

---

### 2.7. Mục 4.3 - Đối chiếu theo TT38/2026

- Nhận định hồ sơ lập trước thời điểm TT38 có hiệu lực, cần xem xét chuyển tiếp
  - 🟩 **Xanh**: Chuẩn với audit.

- Nhận định TMDT dùng QĐ425/BXD với suất vốn proxy
  - 🟩 **Xanh**: Khớp compliance audit.

- Danh mục hạng mục phải chuyển đổi định mức: đường, cầu, tường chắn, HTKT, chiếu sáng, trạm biến áp...
  - 🟩 **Xanh**: Khớp compliance audit.

- Các tỷ lệ dự kiến `+5% đến +15%`, `±3% đến +8%`, `+5% đến +12%`
  - 🟥 **Đỏ**: Đây là dải ước lượng, không có BOQ chi tiết chứng minh trong audit. Đưa vào tờ trình chính thức sẽ yếu chứng cứ.
  - **Xử lý:** Chuyển thành nhận định định tính hoặc để trong phụ lục phân tích nội bộ, không để là số chính trong tờ trình trình ký.

- Câu `Cần lấy suất từ TT38/2026 Phụ lục II (chưa công bố chính thức tại thời điểm audit...)`
  - 🟥 **Đỏ**: Câu này tự mâu thuẫn với việc ở Mục 3 đã viện dẫn TT38 như căn cứ hiện hành. Nếu văn bản đã có, không nên viết “chưa công bố chính thức”; nếu chưa có dữ liệu định lượng áp dụng thì phải viết lại theo hướng “chưa hoàn tất bóc tách áp dụng”.

---

### 2.8. Mục 5 - Điểm mới/thay đổi cần báo cáo

- **5.1 Về mặt kỹ thuật hồ sơ**
  - 🟩 **Xanh**: Phù hợp audit, có thể giữ phần mô tả lỗi #REF! và lệ thuộc proxy rates.

- **5.2 Về quản lý chi phí**
  - 🟩/🟨 **Xanh-Vàng**: Trục nội dung đúng, nhưng các cụm `Chưa rõ rằng` nên sửa văn phong thành `Chưa rõ` hoặc `Chưa xác định rõ` để trang trọng hơn.

- **5.3 Về chuyển tiếp sang TT38/2026**
  - Phần logic tổng quát
    - 🟩 **Xanh**
  - Các số dự kiến tăng theo từng nhóm, ví dụ `~5-10%`, `~8-15%`
    - 🟥 **Đỏ**: Tiếp tục là dải ước lượng chưa có bảng tính chốt.

- **Khối “Số liệu cụ thể phần thay đổi”**
  - `~+50 đến +150 tỷ`
  - `~+30 đến +80 tỷ`
  - `~+40 đến +70 tỷ`
  - `~+30 đến +50 tỷ`
  - `~+150 đến +350 tỷ`
  - 🟥 **Đỏ đậm**: Toàn bộ khối này không nên để trong bản trình chính thức nếu chưa có bảng tính, BOQ, căn cứ giá và xác nhận nội bộ. Audit chỉ cho phép coi đây là biên độ rà soát, không phải số liệu đề nghị trình duyệt.

---

### 2.9. Mục 6 - Phân tích ảnh hưởng đến TMĐT/TMDT

- **6.1 Giá trị tính toán từ các giai đoạn xử lý**
  - 🟥 **Đỏ**: Toàn bộ mục này đang dùng lại các khoảng ước lượng từ phần audit sơ bộ. Chưa có giá trị chính xác, chưa có xác nhận tổng GPMB, chưa có chuyển đổi TT38 xong.
  - **Xử lý:** Nếu chưa có số chốt thì không nên đặt tên là `Giá trị tính toán`; nên đổi thành `Phạm vi ảnh hưởng sơ bộ cần tiếp tục rà soát`.

- **6.2 Tổng mức tăng/giảm dự kiến: +150 đến +350 tỷ; +8% đến +20%**
  - 🟥 **Đỏ**: Bắt buộc rà soát/lược bỏ khỏi bản trình ký nếu chưa có bảng tính chứng minh.

- **6.3 Ý nghĩa của việc cập nhật hồ sơ**
  - 🟩 **Xanh**: Đây là phần lập luận quản lý/pháp lý, ổn và có thể giữ.

---

### 2.10. Mục 7 - Đề xuất, kiến nghị

- Dòng mở đầu: `Trên cơ sở..., [đơn vị trình] kính đề nghị [cơ quan/người có thẩm quyền]`
  - 🟥 **Đỏ**: Còn placeholder.

- Mục 7.1 yêu cầu sửa GPMB, xử lý #REF!
  - 🟩 **Xanh**: Khớp audit.

- Mục 7.2: `Chấp thuận sử dụng giá trị TMĐT/TMDT sau rà soát kỹ thuật ... làm căn cứ sơ bộ`
  - 🟨 **Vàng**: Có thể dùng, nhưng phải nói rất rõ là **chưa phải giá trị phê duyệt cuối cùng**, chỉ là giá trị phục vụ bước thẩm định tiếp theo sau khi hoàn thiện dữ liệu.

- Mục 7.2 dòng `dự kiến +150 đến +350 tỷ`
  - 🟥 **Đỏ**: Lại là số ước lượng chưa chốt.

- Mục 7.3 phê duyệt danh mục các nội dung cần điều chỉnh
  - 🟩 **Xanh**: Giữ được.

- Mục 7.4 giao hoàn thiện hồ sơ trong 15-20 ngày
  - 🟨 **Vàng**: Hợp lý quản trị, nhưng đây là mốc quản lý nội bộ, nên kiểm tra lại tính khả thi nếu phải lập BOQ chi tiết từ đầu.

- Mục 7.5, 7.6
  - 🟨 **Vàng**: Dùng được, nhưng còn placeholder tên đơn vị/cơ quan và lịch trình mang tính dự kiến.

---

### 2.11. Mục 8 - Hồ sơ kèm theo

- `Bảng tổng hợp giá trị trước và sau rà soát`
  - 🟥 **Đỏ**: Hiện audit chưa cho ra giá trị chốt trước/sau do GPMB lỗi và TT38 chưa chuyển xong. Nếu chưa có phụ lục thật thì không được kê là “đã kèm theo”.

- Các phụ lục còn lại như bảng soát lỗi, bảng so sánh định mức, danh mục hạng mục cần cập nhật
  - 🟩 **Xanh**: Có tồn tại trong bộ note audit.

---

### 2.12. Mục 9 - Kết luận, Nơi nhận, Chữ ký

- Dòng `[Đơn vị trình]`, `[cơ quan/người có thẩm quyền]`
  - 🟥 **Đỏ**: Còn placeholder, bắt buộc điền.

- Khối chữ ký:
  - `[Chức vụ người ký]`
  - `[Họ và tên]`
  - `[Ngày ký]`
  - 🟥 **Đỏ**: Còn placeholder, bắt buộc điền.

---

### 2.13. Phần phụ lục gợi ý cuối file

- Toàn bộ khối:
  - `PHỤ LỤC GỢI Ý ĐIỀN NHANH SAU KHI SUBAGENT TRẢ KẾT QUẢ`
  - danh sách placeholder
  - gợi ý điền
  - câu chèn nhanh
  - 🟥 **Đỏ đậm**: Đây là nội dung làm việc nội bộ, không được nằm trong bản tờ trình chính thức để trình cơ quan.
  - **Xử lý:** Xóa toàn bộ khỏi bản chính thức; nếu cần thì lưu riêng thành note hỗ trợ soạn thảo.

---

## 3. Danh sách điểm cần xử lý ngay (ưu tiên ĐỎ)

### ĐỎ 1 - Thống nhất bản chất văn bản
- Đang mâu thuẫn giữa `DRAFT` và `CHÍNH THỨC`.
- Phải xác định rõ đây là:
  1. **Tờ trình xin chủ trương cập nhật/hoàn thiện hồ sơ**, hoặc
  2. **Tờ trình trình duyệt TMĐT/TMDT chính thức có giá trị chốt**.
- Với trạng thái dữ liệu hiện tại, phương án an toàn hơn là **tờ trình xin chấp thuận rà soát/cập nhật hoàn thiện hồ sơ**.

### ĐỎ 2 - Xóa toàn bộ placeholder còn sót
- `[đơn vị trình]`
- `[cơ quan/người có thẩm quyền]`
- `[đơn vị liên quan]`
- `[đơn vị tư vấn/đơn vị quản lý dự án]`
- `[đơn vị tư vấn]`
- `[cơ quan thẩm định]`
- `[Chức vụ người ký]`
- `[Họ và tên]`
- `[Ngày ký]`

### ĐỎ 3 - Xóa khối phụ lục hướng dẫn nội bộ khỏi cuối file
- Không để phần “gợi ý điền nhanh sau khi subagent trả kết quả” trong văn bản trình ký.

### ĐỎ 4 - Gỡ hoặc hạ cấp toàn bộ số liệu dạng ước lượng/range chưa có căn cứ chốt
Các cụm sau cần xử lý lại:
- `~1,750-1,850 tỷ đồng`
- `+5% đến +15%`
- `+5% đến +12%`
- `+50 đến +150 tỷ`
- `+30 đến +80 tỷ`
- `+40 đến +70 tỷ`
- `+30 đến +50 tỷ`
- `+150 đến +350 tỷ`
- `+8% đến +20%`

**Hướng sửa:**
- Hoặc bỏ khỏi tờ trình chính;
- Hoặc đổi thành câu định tính: `có khả năng làm tăng đáng kể tổng mức đầu tư và cần được xác định lại bằng hồ sơ chi tiết sau khi khắc phục lỗi dữ liệu và cập nhật định mức, giá năm 2026`.

### ĐỎ 5 - Gỡ câu chữ suy diễn vượt chứng cứ
- `nếu <10% tổng chi phí xây dựng thì có rủi ro thiếu ngân sách`
- `bắt buộc có chi phí an toàn giao thông (~2-3%...)` nếu không có phụ lục tính cụ thể đính kèm
- các tỷ lệ tăng theo từng nhóm định mức nếu chưa có BOQ

### ĐỎ 6 - Kiểm tra lại địa điểm dự án
- Danh sách địa danh hiện nêu có nguy cơ không thuần nhất với địa giới Hải Phòng.
- Cần đối chiếu lại hồ sơ pháp lý gốc trước khi trình.

### ĐỎ 7 - Không kê “bảng tổng hợp giá trị trước và sau rà soát” nếu chưa có thật
- Nếu chưa tạo được phụ lục chốt số, phải đổi tên hồ sơ kèm theo cho đúng thực trạng.

---

## 4. Các điểm VÀNG - nên chỉnh để chắc pháp lý và chắc văn phong

1. Đổi tên văn bản theo hướng thận trọng hơn nếu chưa chốt giá trị cuối.
2. Thống nhất viện dẫn điều/khoản TT36/2026 trong toàn văn.
3. Chuyển các câu về giá 2026 sang trạng thái `đang cập nhật theo công bố địa phương 2026`.
4. Kiểm tra lại tiến độ 15-20 ngày nếu thực sự phải lập BOQ chi tiết theo TT38/2026.
5. Chuẩn hóa văn phong một số cụm như `Chưa rõ rằng` → `Chưa xác định rõ`.

---

## 5. Các điểm XANH - có thể giữ nguyên

1. Sự cần thiết phải rà soát lại hồ sơ trước khi trình.
2. Bộ căn cứ pháp lý chính: Luật 135/2025, NĐ206/2026, TT36/2026, TT37/2026, TT38/2026.
3. Mô tả lỗi kỹ thuật #REF! tại GPMB (`TH`, `TH_t`).
4. Nhận định TMDT hiện phụ thuộc suất vốn proxy QĐ425/BXD, chưa phải BOQ TT38/2026.
5. Danh mục nhóm hạng mục cần điều chỉnh: đường, cầu, tường chắn, chiếu sáng, trạm biến áp, HTKT.
6. Định hướng giao tư vấn/QLDA hoàn thiện hồ sơ rồi mới thẩm định chính thức.

---

## 6. Kết luận ngắn

**Kết luận chuyên môn:**
- Bản hiện tại **chưa nên trình ký ngay** dưới tên gọi “tờ trình duyệt TMĐT/TMDT chính thức”.
- Bản này **dùng tốt làm nền** cho một tờ trình xin chấp thuận chủ trương rà soát, cập nhật, hoàn thiện lại hồ sơ.
- Muốn nâng thành bản trình duyệt chính thức, bắt buộc phải xử lý hết nhóm ĐỎ ở trên.

**Khuyến nghị thực tế cho anh Khoa:**
1. Chốt lại bản chất văn bản.
2. Xóa placeholder + xóa phụ lục nội bộ.
3. Gỡ toàn bộ số liệu range chưa chốt.
4. Kiểm lại địa danh dự án.
5. Sau đó mới tinh chỉnh câu chữ để trình Sở Xây dựng.

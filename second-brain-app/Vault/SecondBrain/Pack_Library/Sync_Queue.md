---
title: Sync_Queue - Hàng chờ đồng bộ sang Second Brain Netlify
type: system_queue
purpose: Quản lý nội dung chuẩn hóa sẵn sàng đồng bộ lên Netlify
created: 2026-07-03
last_updated: 2026-07-03
---

# Sync_Queue – Hàng chờ đồng bộ sang Second Brain Netlify

## Mục đích
Danh sách nội dung **đã chốt, đã kiểm tra, sẵn sàng nâng cấp lên Second Brain Netlify** để trở thành **tri thức bền vững, dùng lâu dài**.

Các item ở đây đã:
- ✅ Hoàn thành nội dung
- ✅ Có frontmatter/metadata chuẩn
- ✅ Kiểm tra lỗi xong
- ✅ Sẵn sàng deploy lên Netlify

---

## 1. Chuẩn bị sync lần 1 (ngay 03/07/2026)

### 1.1 Pack B – Checklist Dự toán/TMĐT
**Trạng thái:** ✅ Sẵn sàng sync

**File nguồn:** `Vault/SecondBrain/Pack_Library/PackB_Checklist_TMDT_v20260703.md`

**Frontmatter chuẩn:**
```yaml
---
title: Pack B – Checklist Dự toán / TMĐT
type: pack_checklist
version: 2026.07.03
domain:
  - chi-phi
  - dinh-muc
  - du-toan
legal_basis:
  - ND206/2026
  - TT36/2026
  - TT37/2026
  - TT38/2026
use_case: "Rà hồ sơ TMĐT trước trình duyệt, phòng thủ thanh tra"
tags:
  - tmdt
  - chi-phi
  - dinh-muc
  - pack
second_brain_category: "Hệ thống - Pack & Checklist"
---
```

**Nội dung chính:**
- 4 nhóm căn cứ pháp lý
- 2 nhóm định mức
- 1 nhóm chuyển tiếp tháng 7/2026
- 1 nhóm cơ cấu chi phí

**Ghi chú:** Cần bổ sung TT37 Điều 2 khi có bản chính thức

---

### 1.2 Pack C – Checklist GPMB
**Trạng thái:** ✅ Sẵn sàng sync

**File nguồn:** `Vault/SecondBrain/Pack_Library/PackC_Checklist_GPMB_v20260703.md`

**Frontmatter chuẩn:**
```yaml
---
title: Pack C – Checklist Hồ sơ GPMB
type: pack_checklist
version: 2026.07.03
domain:
  - giai-phong-mat-bang
  - don-gia-boi-thuong
legal_basis:
  - QĐ171/2025
  - QĐ17/2026
  - NQ85/2025
  - QĐ196/2025
  - QĐ528/2026
use_case: "Rà hồ sơ GPMB Hải Phòng, kiểm soát đơn giá, phòng thủ thanh tra"
tags:
  - gpmb
  - don-gia
  - hai-phong
  - pack
second_brain_category: "Hệ thống - Pack & Checklist"
---
```

**Nội dung chính:**
- Bản tóm tắt thực chiến
- Checklist chi tiết 10 mục
- Điểm địa phương Hải Phòng khóa chặt
- Chuyển tiếp cần soi riêng
- Kết luận sử dụng

**Cập nhật 03/07/2026:** Thêm lớp kiểm tra "đơn giá mới" (QĐ196, QĐ528)

---

### 1.3 Hub GPMB Hải Phòng – Note tinh lọc
**Trạng thái:** ✅ Sẵn sàng sync

**File nguồn:** `Vault/SecondBrain/Legal_Hubs/Hub_GPMB_HaiPhong.md`

**Frontmatter chuẩn:**
```yaml
---
title: Hub GPMB Hải Phòng
type: legal_hub
jurisdiction: haiphong
domain:
  - giai-phong-mat-bang
legal_basis:
  - QĐ171/2025
  - QĐ17/2026
  - NQ85/2025
  - QĐ196/2025
  - QĐ528/2026
use_case: "Quản lý pháp lý GPMB, bồi thường, hỗ trợ, tái định cư HP"
tags:
  - gpmb
  - hai-phong
  - hub
  - legal
second_brain_category: "Pháp lý – Hải Phòng"
---
```

**Nội dung:**
- Văn bản nền tảng (quốc gia + địa phương)
- Quy trình & checklist
- Rủi ro thường gặp & phòng thủ
- Mẫu biểu
- Quy tắc thực chiến

---

### 1.4 Hub Chi phí – Định mức – TMĐT – Note tinh lọc
**Trạng thái:** ✅ Sẵn sàng sync

**File nguồn:** `Vault/SecondBrain/Legal_Hubs/Hub_ChiPhi_DinhMuc_DuToan.md`

**Frontmatter chuẩn:**
```yaml
---
title: Hub Chi phí – Định mức – Dự toán
type: legal_hub
jurisdiction: national_regional
domain:
  - chi-phi
  - dinh-muc
  - du-toan
legal_basis:
  - ND206/2026
  - TT36/2026
  - TT37/2026
  - TT38/2026
use_case: "Quản lý chi phí, định mức, TMĐT xây dựng, lộ trình chuyển tiếp 01/07/2026"
tags:
  - chi-phi
  - dinh-muc
  - tmdt
  - hub
  - legal
  - chuyen-tiep-2026
second_brain_category: "Pháp lý – Chi phí & Định mức"
---
```

**Nội dung:**
- Văn bản nền tảng (ND206, TT36, TT37, TT38)
- Chuyển tiếp 01/07/2026 – điểm nóng
- Cơ cấu chi phí chuẩn 6 nhóm
- Quy trình & checklist
- Rủi ko thanh tra cao
- Quy tắc thực chiến

---

### 1.5 SOP Giải trình rủi ro TMĐT – Note tinh lọc
**Trạng thái:** ✅ Sẵn sàng sync

**File nguồn:** `Vault/SecondBrain/Projects/VanhDai1/GiaiTrinh_Ruiro_TMDT_VanhDai1_20260703.md`

**Frontmatter chuẩn:**
```yaml
---
title: SOP – Bản giải trình rủi ro GPMB & TMĐT
type: sop_template
version: 2026.07.03
domain:
  - chi-phi
  - gpmb
use_case: "Giải trình rủi ko cho tờ trình Sở Xây dựng, phòng thủ thanh tra"
tags:
  - sop
  - giai-trinh
  - ruiro
  - hai-phong
second_brain_category: "Hệ thống – SOP"
---
```

**Nội dung:**
- Bối cảnh chuyển tiếp pháp lý
- Các biện pháp đã thực hiện
- Danh mục phụ lục kiểm chứng

---

## 2. Hạng mục tiếp theo (chờ hoàn thành)

### 2.1 Pack D – Checklist Nghiệm thu chất lượng
**Trạng thái:** ⏳ Nháp, chờ bổ sung ND207/TT32 chính thức

**Cần hoàn tất:** Cập nhật từng mục theo ND207/2026, TT32/2026

---

### 2.2 Pack E – Quy trình Đối soát khối lượng
**Trạng thái:** ⏳ Nháp, chờ bổ sung ND210/ND209 chính thức

**Cần hoàn tất:** Cập nhật quy trình, biểu mẫu theo ND210/ND209/ND207

---

## 3. Quy trình sync thực tế

### Bước 1: Chuẩn bị nội dung
- [ ] Kiểm tra frontmatter đầy đủ
- [ ] Kiểm tra link nội bộ (relative path)
- [ ] Kiểm tra không có lỗi typo, markdown

### Bước 2: Export từ Vault
- [ ] Export từng file markdown từ `Pack_Library`, `Legal_Hubs`
- [ ] Giữ nguyên cấu trúc frontmatter

### Bước 3: Upload lên Second Brain Netlify backend
- [ ] Dùng API `set-notes` với payload chuẩn (xem SKILL.md second-brain)
- [ ] Confirm lại toàn bộ notes không bị overwrite cũ
- [ ] Verify bằng `list-notes` API

### Bước 4: Verify trên Second Brain UI
- [ ] Kiểm tra toàn bộ note xuất hiện đúng category
- [ ] Kiểm tra backlinks, tags, graph
- [ ] Verify Brain Query có thể truy cập

---

## 4. Timeline đồng bộ

| Ngày | Hạng mục | Trạng thái |
|---|---|---|
| 03/07/2026 | Pack B, Pack C, Hub GPMB, Hub Chi phí, SOP Giải trình | ✅ Sẵn sync |
| 04-10/07 | Pack D (khi có ND207 chính thức) | ⏳ Chờ |
| 04-10/07 | Pack E (khi có ND210/ND209 chính thức) | ⏳ Chờ |
| 10-15/07 | Hub Hợp đồng xây dựng (mới) | ⏳ Chờ |
| 10-15/07 | Hub Quyết toán (mới) | ⏳ Chờ |

---

## 5. Ghi chú & Hạn chế

### Ghi chú
- Sync từng lô để kiểm soát, không sync toàn bộ một lần
- Sau mỗi sync, test Brain Query để xác minh
- Giữ backup của Vault local, không xóa

### Hạn chế hiện tại
- ❌ Chưa có ND207, ND210, ND209, ND212 chính thức
- ❌ Pack D/E còn nháp, chưa sẵn sàng sync
- ❌ Chưa có đầy đủ 65+ văn bản đã phân loại trong Legal_Library

---

**Cập nhật lần cuối: 2026-07-03**  
**Người phụ trách:** TÔM (AI Assistant)

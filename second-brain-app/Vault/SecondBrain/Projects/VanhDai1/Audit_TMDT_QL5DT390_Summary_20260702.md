# Summary — Audit GPMB + TMDT Vành đai 1, QL5-DT390 (20/04/2026)

## Top 5 critical issues requiring immediate correction

1. **`TH` sheet is structurally broken by `#REF!` formulas**  
   Core totals for land acquisition area, residential land, agricultural land, and affected households cannot be computed. Any summary based on this sheet is invalid.

2. **`TH_t` sheet is also broken and cannot reconcile land-use totals**  
   Both the old summary block and part of the new summary block contain broken references. This prevents reliable cross-checking between detailed GPMB quantities and the summary-level figures.

3. **Cross-file reconciliation between GPMB and TMDT is incomplete because the summary bridge is corrupted**  
   The workbook architecture suggests TMDT should rely on GPMB-derived quantities, but the broken summary sheets mean compensation totals cannot be independently verified from the current files.

4. **TMDT still uses legacy basis (QĐ425/BXD, historical project analogues, old unit prices / rates)**  
   After 01/07/2026, any updated appraisal/approval should be re-based to TT36/2026/TT-BXD and TT38/2026/TT-BXD. Current rate-building logic is not compliant for a post-01/07/2026 submission.

5. **Bridge, roadway, lighting, drainage, and auxiliary works are mostly estimated by proxy rates instead of TT38 norm-based BOQ pricing**  
   This creates high legal/compliance risk, especially for audit, appraisal, and investment decision stages under the 2026 cost-management framework.

## Evidence highlights
- GPMB workbook sheets scanned: `TH`, `DG`, `GPMB_VD1(Moi)`, `To chuc thuc hien GPMB`, `TH đất`.
- TMDT workbook sheets scanned: `TMĐT`, `Doan VCĐan-QL5`, `Doan QL5-DT.390C`, `Cau Tien Kieu`, `Doan DT390C va DT390`, `Doan cau Tien Kieu-DT390C`, `Trượt giá HD`, `Trượt giá`, `CP tiet kiem noi SB Gia Binh`, `Chi so gia Hai Duong`.
- Confirmed `#REF!` concentrations in `TH` and `TH_t` sheets from workbook formulas, not inferred.
- Confirmed legacy cost logic references in TMDT sheets, including `QĐ425/BXD`, project analogues, and manually scaled suất vốn đầu tư.

## Saved outputs
- `Audit_TMDT_QL5DT390_LuiLoi_20260702.md`
- `Audit_TMDT_QL5DT390_DieuChinhDinhMuc_20260702.md`
- `Audit_TMDT_QL5DT390_Summary_20260702.md`

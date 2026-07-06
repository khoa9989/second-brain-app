# Error Audit Table — GPMB + TMDT Vành đai 1, QL5-DT390 (20/04/2026)

Scope: evidence-only audit from workbook XML/formulas and legal references TT36/2026/TT-BXD, TT38/2026/TT-BXD.

## Table 1: Detailed Error Audit

| Sheet | Row | Item | Error Type | Current Value | Expected / Notes |
|---|---:|---|---|---|---|
| TH | 3 | Tổng diện tích đất chiếm dụng (PA A) | **Critical: #REF! formula** | `C3=SUM(#REF!)/10^4`, `D3=SUM(#REF!)/10^4`, `E3=#REF!` | Broken references prevent total land-area calculation. |
| TH | 4 | Đất ở (PA A) | **Critical: #REF! formula** | `C4=SUM(#REF!)`, `D4=SUM(#REF!)`, `E4=#REF!` | Missing source ranges. |
| TH | 5 | Đất nông nghiệp (PA A) | **Critical: #REF! formula** | `C5=SUM(#REF!)/10^4`, `D5=SUM(#REF!)/10^4`, `E5=#REF!` | Broken references. |
| TH | 6 | Đất khác (PA A) | **Critical: cascading #REF!** | `C6=C3-C4/10^4-C5`, `D6=D3-D4/10^4-D5`, `E6=#REF!` | Depends on broken cells above. |
| TH | 7 | Số hộ dân GPMB toàn bộ (PA A) | **Critical: #REF! formula** | `SUM(#REF!)` | Source ranges missing. |
| TH | 8 | Số hộ dân GPMB một phần (PA A) | **Critical: #REF! formula** | `SUM(#REF!)` | Source ranges missing. |
| TH | 12 | Tổng diện tích đất chiếm dụng (PA B) | **Critical: #REF! formula** | `D12=SUM(#REF!)/10^4`, `E12=#REF!` | Broken references. |
| TH | 13 | Đất ở (PA B) | **Critical: #REF! formula** | `D13=SUM(#REF!)`, `E13=#REF!` | Broken references. |
| TH | 14 | Đất nông nghiệp (PA B) | **Critical: #REF! formula** | `D14=SUM(#REF!)/10^4`, `E14=#REF!` | Broken references. |
| TH | 15 | Đất khác (PA B) | **Critical: cascading #REF!** | `D15=D12-D13/10^4-D14`, `E15=#REF!` | Depends on broken cells above. |
| TH | 16 | Số hộ dân GPMB toàn bộ (PA B) | **Critical: #REF! formula** | `D16=SUM(#REF!)`, `E16=#REF!` | Broken references. |
| TH | 17 | Số hộ dân GPMB một phần (PA B) | **Critical: #REF! formula** | `D17=SUM(#REF!)`, `E17=#REF!` | Broken references. |
| TH_t | 3 | Tổng hợp sử dụng đất (cũ), row 3 | **Critical: #REF! formula** | Multiple `#REF!` in A3:H3 | Whole old-summary block unusable. |
| TH_t | 4 | Tổng hợp sử dụng đất (cũ), row 4 | **Critical: #REF! formula** | Multiple `#REF!` in A4:H4 | Whole block unusable. |
| TH_t | 5 | Tổng hợp sử dụng đất (cũ), row 5 | **Critical: #REF! formula** | Multiple `#REF!` in A5:H5 | Whole block unusable. |
| TH_t | 6 | Tổng hợp sử dụng đất (cũ), row 6 | **Critical: #REF! formula** | Multiple `#REF!` in A6:H6 | Whole block unusable. |
| TH_t | 7 | Tổng hợp sử dụng đất (cũ), row 7 | **Critical: #REF! formula** | Multiple `#REF!` in A7:H7 | Whole block unusable. |
| TH_t | 8 | Grand totals | **Critical: #REF! formula** | `B8=SUM(B3:B7)=>#REF!`, `C8=SUM(C3:C7)=>#REF!` | Summary totals cannot be trusted. |
| TH_t | 22 | GPMB_VD1(Moi) row 22 cross-ref | **Critical: broken external ref** | `A22/B22/C22/D22/F22/G22/H22=#REF!` | Source row from GPMB sheet missing / deleted. |
| TH_t | 23 | GPMB_VD1(Moi) row 23 cross-ref | **Critical: broken external ref** | `A23/B23/C23/D23/F23/G23/H23=#REF!` | Source row missing / deleted. |
| TH_t | 24 | Totals dependent on rows 22-23 | **Critical: cascading #REF!** | `B24=SUM(B19:B23)=>#REF!` etc. | Summary chain broken. |
| TH_t | 28-31 | Total/land classification table | **Critical: #REF! cascade** | `F28:H31` and several cells are `#REF!` | Entire comparison matrix compromised. |
| GPMB_VD1(Moi) | 8-14 | Compensation for houses | **Logic / cross-sheet dependency risk** | House compensation values are referenced from DG rows 10/17/24/33/43 | Valid only if DG base prices are intentional and current; no direct formula error visible. Cross-check against TMDT total in row 1+ is not one-to-one. |
| GPMB_VD1(Moi) | 17-30 | Land compensation formulas | **Potential logic inconsistency / unit-mix risk** | Multiple formulas mix m2, ha, and land type proportions | No visible XML error, but formulas depend on manually embedded constants and old land-price basis. Requires recalculation when legal basis changes. |
| To chuc thuc hien GPMB | 8-27 | GPMB organization cost sheet | **Methodology mismatch risk** | Uses 163/2025/QĐ-UBND and 2026 labor references | This is a cost-management sheet, not a direct #REF! issue. Must be revalidated if linked to new cost norms/prices. |
| CP_tiet_kiem_noi_SB_Gia_Binh | 17-34 | Construction cost blocks | **Old baseline price/norm dependency** | Uses QĐ425/BXD legacy suất vốn, 2025/2026 local unit prices | Not an XML error; requires recalculation under TT36/38 if used in TMĐT as of 01/07/2026. |
| Cau_Tien_Kieu | 28-38 | Bridge cost blocks | **Old baseline price/norm dependency** | Uses QĐ425/BXD legacy unit rates and project analogues | Must be re-based under TT36/38 for new approvals after 01/07/2026. |

## Notes on cross-file consistency
- **GPMB row 1 vs TMDT row 1:** TMDT sheet does not expose a clean corresponding GPMB compensation total in the shown top block; the comparison matrix in `TH_t` is broken by `#REF!`, so no reliable reconciliation can be made from the workbook as-is.
- **Evidence of breakage:** `TH` and `TH_t` contain pervasive `#REF!` formulas, indicating deleted/shifted source ranges. This prevents validation of totals and land split figures.
- **Severity key:** Critical = blocks downstream financial validation; High = likely wrong totals/logic; Medium = needs recalculation for new regulation; Low = formatting / non-blocking.

const https = require('https');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const secret = '2f695fa35620159d74a2c6c377aaa1d0f79d3a14cd60dd3f';

function makeSession() {
  const value = crypto.randomBytes(24).toString('hex');
  const sig = crypto.createHmac('sha256', secret).update(value).digest('hex');
  return `${value}.${sig}`;
}

const cookie = 'sb_session=' + makeSession();
const hostname = 'fdb96c82-06b0-4b1e-abe6-75a5da595bb4.netlify.app';

// The files you want to sync
const filesToSync = [
  { id: 'legal-master-index', category: 'Hệ thống – Index', title: 'Legal_Master_Index', filePath: 'Vault/SecondBrain/Index/Legal_Master_Index.md' },
  { id: 'practice-master-index', category: 'Hệ thống – Index', title: 'Practice_Master_Index', filePath: 'Vault/SecondBrain/Index/Practice_Master_Index.md' },
  { id: 'hub-gpmb-haiphong', category: 'Pháp lý – Hải Phòng', title: 'Hub GPMB Hải Phòng', filePath: 'Vault/SecondBrain/Legal_Hubs/Hub_GPMB_HaiPhong.md' },
  { id: 'hub-chiphi-dinhmuc-dutoan', category: 'Pháp lý – Chi phí & Định mức', title: 'Hub Chi phí – Định mức – Dự toán', filePath: 'Vault/SecondBrain/Legal_Hubs/Hub_ChiPhi_DinhMuc_DuToan.md' },
  { id: 'packb-checklist-tmdt', category: 'Hệ thống – Pack & Checklist', title: 'Pack B – Checklist Dự toán / TMĐT', filePath: 'Vault/SecondBrain/Pack_Library/PackB_Checklist_TMDT_v20260703.md' },
  { id: 'packc-checklist-gpmb', category: 'Hệ thống – Pack & Checklist', title: 'Pack C – Checklist Hồ sơ GPMB', filePath: 'Vault/SecondBrain/Pack_Library/PackC_Checklist_GPMB_v20260703.md' },
  { id: 'packd-checklist-nghiemthu', category: 'Hệ thống – Pack & Checklist', title: 'Pack D – Checklist Nghiệm thu chất lượng công trình giao thông', filePath: 'Vault/SecondBrain/Pack_Library/PackD_Checklist_NghiemThu_ChatLuong_v20260703.md' },
  { id: 'packe-quytrinh-doisoat', category: 'Hệ thống – Pack & Checklist', title: 'Pack E – Quy trình Đối soát khối lượng thanh toán', filePath: 'Vault/SecondBrain/Pack_Library/PackE_QuyTrinh_DoiSoat_KhoiLuong_v20260703.md' },
  { id: 'giaitrinh-ruiro-tmdt', category: 'Dự án – Vành Đai 1', title: 'GiaiTrinh_Ruiro_TMDT_VanhDai1_20260703', filePath: 'Vault/SecondBrain/Projects/VanhDai1/GiaiTrinh_Ruiro_TMDT_VanhDai1_20260703.md' },
  { id: 'template-phaply-hopdong', category: 'Template – Project Template', title: '01_PhapLy_HopDong_Template', filePath: 'Vault/SecondBrain/Templates/Project_Template/01_PhapLy_HopDong/PhapLy_HopDong_Template.md' },
  { id: 'template-chatluong-vatlieu', category: 'Template – Project Template', title: '02_ChatLuong_VatLieu_Template', filePath: 'Vault/SecondBrain/Templates/Project_Template/02_ChatLuong_VatLieu/ChatLuong_VatLieu_Template.md' },
  { id: 'template-khoiluong-thanhtoan', category: 'Template – Project Template', title: '03_KhoiLuong_ThanhToan_Template', filePath: 'Vault/SecondBrain/Templates/Project_Template/03_KhoiLuong_ThanhToan/KhoiLuong_ThanhToan_Template.md' },
  { id: 'template-phatsinh-dieuchinh', category: 'Template – Project Template', title: '04_PhatSinh_DieuChinh_Template', filePath: 'Vault/SecondBrain/Templates/Project_Template/04_PhatSinh_DieuChinh/PhatSinh_DieuChinh_Template.md' },
  { id: 'template-an-toan-hse', category: 'Template – Project Template', title: '05_AnToan_MoiTruong_HSE_Template', filePath: 'Vault/SecondBrain/Templates/Project_Template/05_AnToan_MoiTruong_HSE/AnToan_MoiTruong_HSE_Template.md' },
  { id: 'template-quanly-nhathau', category: 'Template – Project Template', title: '06_QuanLy_NhaThau_Template', filePath: 'Vault/SecondBrain/Templates/Project_Template/06_QuanLy_NhaThau/QuanLy_NhaThau_Template.md' },
  { id: 'ql5-ql10-thongtinchung', category: 'Dự án – QL5_QL10', title: 'ThongTinChung_DuAn_QL5_QL10', filePath: 'Vault/SecondBrain/Projects/QL5_QL10 (tranh VB)/01_PhapLy_HopDong/ThongTinChung_DuAn.md' },
  { id: 'ql5-ql10-legal-checklist-2394', category: 'Dự án – QL5_QL10', title: 'Legal_Checklist_2394_QL5_QL10', filePath: 'Vault/SecondBrain/Projects/QL5_QL10 (tranh VB)/Legal_Checklist_2394.md' },
  { id: 'ql5-ql10-qd4933-extract', category: 'Dự án – QL5_QL10', title: 'QD4933_PheDuyetDuAn_Extract_QL5_QL10', filePath: 'Vault/SecondBrain/Projects/QL5_QL10 (tranh VB)/01_PhapLy_HopDong/QD4933_PheDuyetDuAn_Extract.md' }
];

async function syncNote(fileMeta) {
  return new Promise((resolve, reject) => {
    try {
      const fullPath = path.resolve(__dirname, fileMeta.filePath);
      if (!fs.existsSync(fullPath)) {
        console.warn(`[WARN] File not found: ${fullPath}`);
        return resolve(false);
      }
      
      const content = fs.readFileSync(fullPath, 'utf8');
      
      const notePayload = {
        id: fileMeta.id,
        category: fileMeta.category,
        title: fileMeta.title,
        content: content,
        tags: ['HP_Legal', 'sync_all'],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        linked_notes: [],
        source: 'vault-sync'
      };

      const options = {
        hostname: hostname,
        port: 443,
        path: '/.netlify/functions/add-note',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': cookie
        }
      };

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
             console.log(`[OK] Synced: ${fileMeta.title}`);
             resolve(true);
          } else {
             console.log(`[ERR] Failed to sync ${fileMeta.title}. Status: ${res.statusCode}. Response: ${data}`);
             resolve(false);
          }
        });
      });

      req.on('error', (e) => {
        console.error(`[ERR] Request error for ${fileMeta.title}: ${e.message}`);
        resolve(false);
      });

      req.write(JSON.stringify(notePayload));
      req.end();
    } catch (e) {
      console.error(`[ERR] Exception syncing ${fileMeta.title}: ${e.message}`);
      resolve(false);
    }
  });
}

async function runSync() {
  console.log(`Starting bulk sync of ${filesToSync.length} notes...`);
  let successCount = 0;
  for (const file of filesToSync) {
    const success = await syncNote(file);
    if (success) successCount++;
  }
  console.log(`Sync completed. Successfully synced ${successCount}/${filesToSync.length} notes.`);
}

runSync();

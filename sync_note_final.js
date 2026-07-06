const https = require('https');
const fs = require('fs');
const crypto = require('crypto');

const secret = '2f695fa35620159d74a2c6c377aaa1d0f79d3a14cd60dd3f';
function makeCookie(password) {
  const value = crypto.randomBytes(24).toString('hex');
  const sig = crypto.createHmac('sha256', secret).update(value).digest('hex');
  return `${value}.${sig}`;
}

const note = {
  id: 'tt38-2026-tt-bxd-dinhmucxaydung',
  category: 'VanBanPhapLuat',
  title: 'Thông tư 38/2026/TT-BXD - Định mức xây dựng',
  content: fs.readFileSync('/home/openclawtom/.openclaw/workspace/Vault/SecondBrain/Notes/TT_38-2026_TT-BXD_DinhMucXayDung.md', 'utf8'),
  tags: ['thong-tu', 'dinh-muc', 'xay-dung', '2026'],
  created_at: '2026-06-26',
  updated_at: new Date().toISOString(),
  linked_notes: [
    '135-2025-qh15-xay-dung',
    '206-2026-nd-cp-quan-ly-chi-phi',
    'qd171-2025-ubnd-hp-boi-thuong'
  ],
  source: 'vault-sync'
};

const sessionCookie = makeCookie('admin');

const options = {
  hostname: 'fdb96c82-06b0-4b1e-abe6-75a5da595bb4.netlify.app',
  port: 443,
  path: '/.netlify/functions/add-note',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Cookie': 'sb_session=' + sessionCookie
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', data);
  });
});

req.on('error', (e) => {
  console.error('Error:', e.message);
});

req.write(JSON.stringify(note));
req.end();
const fs = require('fs');

// Build the note object
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

// Write out the JSON payload for curl
console.log(JSON.stringify({ notes: [note] }));
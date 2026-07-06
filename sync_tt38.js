const { BlobsStore } = require('@netlify/blobs');

async function syncNoteToBrain() {
  const STORE = 'second-brain-store-khoa-20260629155600';
  const SITE_ID = 'fdb96c82-06b0-4b1e-abe6-75a5da595bb4';
  const TOKEN = 'nfp_eX9V5ueSHhqq1gmXYirrFuNzpHZaN5Ac83a9';
  const KEY = '***';

  const store = new BlobsStore({ name: STORE, siteID: SITE_ID, token: TOKEN });

  // Read the note file
  const fs = require('fs');
  const notePath = '/home/openclawtom/.openclaw/workspace/Vault/SecondBrain/Notes/TT_38-2026_TT-BXD_DinhMucXayDung.md';
  const noteContent = fs.readFileSync(notePath, 'utf8');

  const note = {
    id: 'tt38-2026-tt-bxd-dinhmucxaydung',
    category: 'VanBanPhapLuat',
    title: 'Thông tư 38/2026/TT-BXD - Định mức xây dựng',
    content: noteContent,
    tags: ['thong-tu', 'dinh-muc', 'xay-dung', '2026', 'chuẩn'],
    created_at: '2026-06-26',
    updated_at: new Date().toISOString(),
    linked_notes: [
      '135-2025-qh15-xay-dung',
      '206-2026-nd-cp-quan-ly-chi-phi',
      'qd171-2025-ubnd-hp-boi-thuong'
    ],
    source: 'vault'
  };

  // Get existing notes
  const raw = await store.get(KEY, { type: 'text' });
  const arr = raw ? JSON.parse(raw) : [];

  // Check if note already exists
  const existingIdx = arr.findIndex(n => n.id === note.id);
  if (existingIdx >= 0) {
    arr[existingIdx] = note;
    console.log(`Updated existing note: ${note.id}`);
  } else {
    arr.push(note);
    console.log(`Added new note: ${note.id}`);
  }

  // Save back to store
  await store.set(KEY, JSON.stringify(arr, null, 2));
  console.log(`Notes count: ${arr.length}`);
}

syncNoteToBrain().catch(console.error);
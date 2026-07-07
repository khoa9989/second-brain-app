const { getStore } = require('@netlify/blobs');
const fs = require('fs');
const path = require('path');

const STORE = process.env.SB_BLOBS_STORE || 'second-brain-store-khoa-20260629155600';
const SITE_ID = process.env.SB_BLOBS_SITE_ID;
const TOKEN = process.env.SB_BLOBS_TOKEN;
const KEY = '***';

function walkMarkdownFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walkMarkdownFiles(full));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) results.push(full);
  }
  return results;
}

function extractTitle(content, fallback) {
  const titleMatch = content.match(/^#\s+(.+)$/m);
  return titleMatch ? titleMatch[1].trim() : fallback;
}

async function syncToBlobs() {
  const rootDir = path.join(__dirname, '..');
  const vaultPath = path.join(rootDir, 'Vault');
  if (!fs.existsSync(vaultPath)) throw new Error(`Vault not found at ${vaultPath}`);

  const store = getStore(STORE, { siteID: SITE_ID, token: TOKEN });
  const mdFiles = walkMarkdownFiles(vaultPath);
  const notes = mdFiles.map((filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(vaultPath, filePath).replace(/\\/g, '/');
    return {
      id: relativePath,
      title: extractTitle(content, path.basename(filePath, '.md')),
      content,
      path: relativePath,
      tags: [],
      category: 'Vault',
      updated_at: fs.statSync(filePath).mtime.toISOString(),
      source: 'git-vault'
    };
  });

  await store.set(KEY, JSON.stringify(notes));
  console.log(`✅ Synced ${notes.length} markdown files to ${STORE}/${KEY}`);
}

syncToBlobs().catch((error) => {
  console.error('Sync failed:', error);
  process.exit(1);
});
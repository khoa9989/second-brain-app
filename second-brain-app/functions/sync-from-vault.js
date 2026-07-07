const { getStore } = require('@netlify/blobs');
const fs = require('fs');
const path = require('path');

const STORE = process.env.SB_BLOBS_STORE || 'second-brain-store-khoa-20260629155600';
const SITE_ID = process.env.SB_BLOBS_SITE_ID;
const TOKEN = process.env.SB_BLOBS_TOKEN;
const KEY = 'notes.json';

// Get the Vault directory from the deployed site
const VAULT_PATH = path.join(__dirname, '..', 'Vault');

function walkMarkdownFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walkMarkdownFiles(full));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) results.push(full);
  }
  return results;
}

function extractTitle(content, fallback) {
  const m = content.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : fallback;
}

exports.handler = async (event) => {
  try {
    // Verify auth - only allow POST or internal calls
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const store = getStore(STORE, { siteID: SITE_ID, token: TOKEN });
    
    if (!fs.existsSync(VAULT_PATH)) {
      return { 
        statusCode: 500, 
        body: JSON.stringify({ error: `Vault not found at ${VAULT_PATH}` }) 
      };
    }

    const mdFiles = walkMarkdownFiles(VAULT_PATH);
    console.log(`Found ${mdFiles.length} markdown files in Vault`);

    const notes = [];
    for (const filePath of mdFiles) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const relativePath = path.relative(VAULT_PATH, filePath).replace(/\\/g, '/');
        
        notes.push({
          id: relativePath,
          title: extractTitle(content, path.basename(filePath, '.md')),
          content,
          path: relativePath,
          tags: [],
          category: 'Vault',
          updated_at: fs.statSync(filePath).mtime.toISOString(),
          source: 'git-vault'
        });
      } catch (err) {
        console.error(`Error reading ${filePath}:`, err.message);
      }
    }

    // Store notes to blobs
    await store.set(KEY, JSON.stringify(notes));
    console.log(`Synced ${notes.length} notes to ${STORE}/${KEY}`);

    return {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ 
        success: true, 
        count: notes.length, 
        store: STORE,
        key: KEY 
      })
    };
  } catch (error) {
    console.error('Sync error:', error);
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: error.message }) 
    };
  }
};
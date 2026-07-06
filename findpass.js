const crypto = require('crypto');
const target = '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918';
function sha256(s) { return crypto.createHash('sha256').update(s, 'utf8').digest('hex'); }
const candidates = ['1234', '123456', 'password', 'admin', 'khoa', 'Khoa', 'KHOA', 'openclaw', 'OpenClaw', 'tom', 'TOM', '', 'test', 'letmein', 'monkey', 'dragon', 'baseball', 'iloveyou', 'trustno1', 'sunshine', 'master', 'hello', 'welcome'];
for (const c of candidates) {
  if (sha256(c) === target) {
    console.log('Found:', c);
    process.exit(0);
  }
}
console.log('Not found in list');
const https = require('https');

const loginPayload = { password: '***' };

const options = {
  hostname: 'fdb96c82-06b0-4b1e-abe6-75a5da595bb4.netlify.app',
  port: 443,
  path: '/.netlify/functions/auth-login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Set-Cookie:', res.headers['set-cookie']);
    console.log('Response:', data);
  });
});

req.on('error', (e) => {
  console.error('Error:', e.message);
});

req.write(JSON.stringify(loginPayload));
req.end();
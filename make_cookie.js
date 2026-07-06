const https = require('https');
const crypto = require('crypto');

const secret = '2f695fa35620159d74a2c6c377aaa1d0f79d3a14cd60dd3f';
function makeCookie(password) {
  const value = crypto.randomBytes(24).toString('hex');
  const sig = crypto.createHmac('sha256', secret).update(value).digest('hex');
  return `${value}.${sig}`;
}

const sessionCookie = makeCookie('admin');
console.log('sb_session=' + sessionCookie);
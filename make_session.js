const crypto = require('crypto');
const secret = '2f695fa35620159d74a2c6c377aaa1d0f79d3a14cd60dd3f';

function sign(value) {
  return crypto.createHmac('sha256', secret).update(value).digest('hex');
}

function makeSession() {
  const value = crypto.randomBytes(24).toString('hex');
  return `${value}.${sign(value)}`;
}

const session = makeSession();
console.log('sb_session=' + session);
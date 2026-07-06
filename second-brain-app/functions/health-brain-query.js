function normalizeEndpoint(url='') {
  const s = String(url || '').trim();
  if (!s) return 'http://103.56.163.244:20128/v1/chat/completions';
  if (/\/chat\/completions\/?$/.test(s)) return s;
  if (/\/v1\/?$/.test(s)) return s.replace(/\/?$/, '') + '/chat/completions';
  return s;
}

function normalizeModel(model='') {
  const s = String(model || '').trim();
  if (!s) return 'Content';
  if (s === 'vllm/KiroAI_Combo') return 'KiroAI_Combo';
  return s;
}

const API_ENDPOINT = normalizeEndpoint(process.env.SECOND_BRAIN_LLM_API_ENDPOINT || process.env.SECOND_BRAIN_LLM_URL || 'http://103.56.163.244:20128/v1/chat/completions');
const MODEL = normalizeModel(process.env.SECOND_BRAIN_LLM_MODEL || 'Content');
const LLM_API_KEY = process.env.SECOND_BRAIN_LLM_API_KEY || process.env.OPENAI_API_KEY || 'sk-7bb39f8a2677ab80-ldwpmq-2098f582';
const TIMEOUT_MS = 20000;

exports.handler = async () => {
  const started = Date.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const resp = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${LLM_API_KEY}`
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: MODEL,
        stream: false,
        max_tokens: 24,
        temperature: 0,
        messages: [{ role: 'user', content: 'healthcheck' }]
      })
    });
    const raw = await resp.text();
    const latency_ms = Date.now() - started;
    if (!resp.ok) {
      return {
        statusCode: 502,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ok: false, endpoint: API_ENDPOINT, model: MODEL, latency_ms, status: resp.status, detail: raw.slice(0, 800) })
      };
    }
    let answer = '';
    try {
      const data = JSON.parse(raw);
      answer = data?.choices?.[0]?.message?.content || '';
    } catch {}
    return {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ok: true, endpoint: API_ENDPOINT, model: MODEL, latency_ms, answer_preview: String(answer).slice(0, 120) })
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ok: false, endpoint: API_ENDPOINT, model: MODEL, latency_ms: Date.now() - started, error: String(e && e.message || e) })
    };
  } finally {
    clearTimeout(timer);
  }
};

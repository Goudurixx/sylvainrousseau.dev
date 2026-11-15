// Demo shim for the public site: answers Pulse's /api calls with simulated data,
// so the real UI runs unchanged with no homelab behind it.
(function () {
  const M = { nas_node: [18, 46], pve_node: [9, 38], nx_node: [27, 61], xavier_node: [6, 33] };
  const SVC = ['Photos', 'Media', 'Monitoring', 'Metrics', 'Chat UI', 'VPN', 'Tunnel', 'Transcription', 'LLM'];
  const sim = { down: new Set(), boost: 0, net: 4.2e7 };
  const jit = (v, a) => Math.max(1, Math.min(99, v + (Math.random() - 0.5) * a));
  const row = (job, v) => ({ metric: { job }, value: [Date.now() / 1000, String(v)] });
  const ok = (result) => new Response(JSON.stringify({ status: 'success', data: { result } }), { headers: { 'Content-Type': 'application/json' } });

  function prom(q) {
    if (q.includes('node_cpu')) return Object.entries(M).map(([j, [c]]) => row(j, sim.down.has(j) ? 0 : jit(c + sim.boost, 10)));
    if (q.includes('MemAvailable')) return Object.entries(M).map(([j, [, m]]) => row(j, jit(m + sim.boost / 3, 3)));
    if (q.startsWith('up{')) return Object.keys(M).map((j) => row(j, sim.down.has(j) ? 0 : 1));
    if (q.startsWith('probe_success')) return SVC.map((s) => ({ metric: { service: s }, value: [0, sim.down.has(s) ? '0' : '1'] }));
    if (q.includes('network_receive')) return [row('nas_node', sim.net * (1 + sim.boost / 15) * (0.7 + Math.random() * 0.6))];
    return [];
  }

  function answer(text, ctx) {
    const t = text.toLowerCase();
    const downs = [...sim.down].map((d) => d === 'xavier_node' ? 'AI pool 2' : d);
    if (/down|wrong|broken|need/.test(t) || /how is|doing/.test(t)) {
      return downs.length
        ? `${downs.join(' and ')} ${downs.length > 1 ? 'are' : 'is'} not answering. Everything else looks healthy. I'd start with ${downs[0]}'s container logs; the NAS itself is fine.`
        : 'All quiet. Every machine is up and every service answers its probe. The NAS is the busiest, mostly photo indexing.';
    }
    if (/busiest|load|cpu/.test(t)) {
      const line = ctx.split('\n').filter((l) => l.includes('cpu')).sort((a, b) => parseInt(b.split('cpu ')[1]) - parseInt(a.split('cpu ')[1]))[0] || '';
      return `Right now: ${line.trim()}. Nothing alarming; the AI pool gets busy when the local model is thinking.`;
    }
    if (/joke/.test(t)) return 'Why did the server go to therapy? Too many unresolved dependencies. (This is a demo: on the real Pulse a local model writes worse jokes.)';
    return "This is the public demo, so my answers are scripted. On the desk, a local model on the AI pool answers with the live metrics as context, and nothing leaves the house.";
  }

  function stream(text) {
    const enc = new TextEncoder();
    const words = text.split(/(\s+)/);
    return new Response(new ReadableStream({
      async start(c) {
        await new Promise((r) => setTimeout(r, 450));
        for (const w of words) { c.enqueue(enc.encode(JSON.stringify({ message: { content: w } }) + '\n')); await new Promise((r) => setTimeout(r, 35)); }
        c.close();
      },
    }));
  }

  const real = window.fetch.bind(window);
  window.fetch = async (url, opt) => {
    const u = String(url);
    if (u.startsWith('/api/q')) return ok(prom(decodeURIComponent(u.split('query=')[1] || '')));
    if (u.startsWith('/api/config')) return new Response(JSON.stringify({ model: 'local LLM (demo)' }));
    if (u.startsWith('/api/chat')) { const b = JSON.parse(opt.body); return stream(answer(b.messages.at(-1).content, b.context || '')); }
    return real(url, opt);
  };

  addEventListener('message', (e) => {
    if (e.origin !== location.origin || !e.data || !e.data.pulse) return;
    const c = e.data.pulse;
    if (c === 'outage') { const pool = [...SVC, 'xavier_node'].filter((s) => !sim.down.has(s)); if (pool.length) sim.down.add(pool[Math.floor(Math.random() * pool.length)]); }
    if (c === 'load') sim.boost = Math.min(60, sim.boost + 25);
    if (c === 'heal') { sim.down.clear(); sim.boost = 0; }
    if (c === 'talk') { document.getElementById('talk').click(); setTimeout(() => window.dispatchEvent(new CustomEvent('pulse-ask', { detail: 'How is the homelab doing?' })), 600); }
    if (typeof refresh === 'function') refresh();
  });
  setInterval(() => { sim.boost = Math.max(0, sim.boost - 2); }, 3000);
})();

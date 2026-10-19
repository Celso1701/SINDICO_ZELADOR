/* Service worker — Síndico e Zelador v1.15.1 (offline + lembrete em segundo plano, quando o navegador permitir) */
const CACHE = 'sindico-zelador-1.15.1';
const ARQUIVOS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || !req.url.startsWith(self.location.origin)) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put('./index.html', c)); return r; }).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(h => h || fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); return r; })));
});

/* ── Lembrete diário em segundo plano ── */
function idbLer(chave) {
  return new Promise(res => {
    try {
      const r = indexedDB.open('sindicozelador_midia', 1);
      r.onupgradeneeded = () => { try { r.result.createObjectStore('midia'); } catch (e) {} };
      r.onerror = () => res(null);
      r.onsuccess = () => {
        try {
          const g = r.result.transaction('midia', 'readonly').objectStore('midia').get(chave);
          g.onsuccess = () => res(g.result == null ? null : g.result); g.onerror = () => res(null);
        } catch (e) { res(null); }
      };
    } catch (e) { res(null); }
  });
}
function idbGravar(chave, valor) {
  return new Promise(res => {
    try {
      const r = indexedDB.open('sindicozelador_midia', 1);
      r.onerror = () => res(); 
      r.onsuccess = () => { try { const t = r.result.transaction('midia', 'readwrite'); t.objectStore('midia').put(valor, chave); t.oncomplete = () => res(); t.onerror = () => res(); } catch (e) { res(); } };
    } catch (e) { res(); }
  });
}
function hojeISO() { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function agoraHHMM() { const d = new Date(); return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); }
async function lembreteSegundoPlano() {
  const snap = await idbLer('__lembrete__');
  if (!snap || !snap.ativo) return;
  const hoje = hojeISO();
  if ((await idbLer('__lembrete_dia__')) === hoje) return;
  if (agoraHHMM() < (snap.hora || '07:30')) return;
  const total = snap.total || 0;
  const corpo = total ? (snap.linhas || []).join(' · ') || (total + ' aviso(s) pendente(s)') : 'Abra o app para ver as rotinas de hoje.';
  await self.registration.showNotification((snap.condominio ? snap.condominio + ' — ' : '') + (total ? total + ' pendência(s) hoje' : 'Rotina de hoje'), { body: corpo, tag: 'sz-lembrete', icon: './icon-192.png', badge: './icon-192.png' });
  await idbGravar('__lembrete_dia__', hoje);
}
self.addEventListener('periodicsync', e => { if (e.tag === 'sz-lembrete') e.waitUntil(lembreteSegundoPlano()); });
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
    for (const c of cs) { if ('focus' in c) return c.focus(); }
    return self.clients.openWindow('./index.html');
  }));
});

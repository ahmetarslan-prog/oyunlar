const CACHE = 'sudoku-v5';
const FILES = ['./', './index.html', './manifest.webmanifest', './icons/apple-touch-icon.png', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => {
  // cache:'reload' → tarayıcının eski HTTP önbelleğini atlayıp dosyaları sunucudan taze al
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(FILES.map(f => fetch(new Request(f, { cache: 'reload' })).then(r => c.put(f, r))))));
  self.skipWaiting();
});
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n))))); self.clients.claim(); });
// Önce ağ (güncel sürüm), internet yoksa önbellek: oyun çevrimdışı da açılır.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' }).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request))
  );
});

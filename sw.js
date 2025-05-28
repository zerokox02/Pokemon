const CACHE_NAME = 'grid-bootstrap-cache-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './style.css',      // cambia o agrega tus archivos CSS/JS aquí
  './app.js',
  './pokemon.png',
  './wallpaperbetter.jpg'
];

// Instalación: guardar archivos en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(FILES_TO_CACHE);
      })
  );
  self.skipWaiting();
});

// Activación: limpiar cachés antiguas si es necesario
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch: responder con caché o hacer fetch de red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

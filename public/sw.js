// Service Worker mínimo para Web Push
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : { title: 'SportDharma', body: 'Nueva actualización' };
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/logo-social2.jpg',
      badge: '/logo-social2.jpg',
      vibrate: [200, 100, 200]
    })
  );
});
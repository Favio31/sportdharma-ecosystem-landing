// Manejador de notificaciones push para inyectar en el SW de Vite PWA
self.addEventListener('push', (event) => {
  let data = {};
  try { 
    data = event.data ? event.data.json() : {}; 
  } catch { 
    data = { title: 'SportDharma', body: event.data?.text() || 'Nueva actualización' }; 
  }
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'SportDharma Ecosystem', {
      body: data.body || '',
      icon: '/logo-social2.jpg',
      badge: '/logo-social2.jpg',
      data: { url: data.url || '/es/' },
      vibrate: [200, 100, 200]
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
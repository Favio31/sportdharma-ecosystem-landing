// public/push-handler.js
// Versión blindada para Android / Chrome

self.addEventListener('push', function(event) {
  console.log('[SW] ✅ Push recibido correctamente');
  
  // Forzamos datos por defecto para garantizar que se muestre
  const title = 'SportDharma Ecosystem';
  const options = {
    body: '¡Notificaciones Soberanas activadas con éxito! 🚴‍♂️',
    icon: '/logo-social2.jpg',
    badge: '/logo-social2.jpg',
    vibrate: [200, 100, 200, 100, 200],
    tag: 'sportdharma-test-notification', // EVITA que Android la silencie o agrupe
    requireInteraction: true, // OBLIGA a Android a mostrarla en pantalla hasta que el usuario la toque
    silent: false
  };

  event.waitUntil(
    self.registration.showNotification(title, options).catch(err => {
      console.error('[SW] ❌ Error mostrando notificación:', err);
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  console.log('[SW] ✅ Notificación clickeada');
  event.notification.close();
  
  const urlToOpen = event.notification.data?.url || '/es/';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(function(clientList) {
        for (let i = 0; i < clientList.length; i++) {
          const client = clientList[i];
          if (client.url.includes(urlToOpen) && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});
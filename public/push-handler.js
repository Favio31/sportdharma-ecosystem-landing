// public/push-handler.js
// Basado en: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification

self.addEventListener('push', function(event) {
  console.log('[SW] Push recibido:', event);
  
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'SportDharma Ecosystem';
  const options = {
    body: data.body || 'Nueva actualización',
    icon: data.icon || '/logo-social2.jpg',
    badge: '/logo-social2.jpg',
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/es/'
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  console.log('[SW] Notificación clickeada:', event);
  event.notification.close();
  
  const urlToOpen = event.notification.data?.url || '/es/';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(function(clientList) {
        for (let i = 0; i < clientList.length; i++) {
          const client = clientList[i];
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

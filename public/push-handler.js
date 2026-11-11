self.addEventListener('push', function(event) {
  console.log('[SW] Push recibido');
  const title = 'SportDharma Ecosystem';
  const options = {
    body: '¡Notificaciones Soberanas activadas con éxito! 🚴‍♂️',
    icon: '/logo-social2.jpg',
    badge: '/logo-social2.jpg',
    vibrate: [200, 100, 200, 100, 200],
    tag: 'sportdharma-test',
    requireInteraction: true,
    silent: false
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || '/es/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url.includes(urlToOpen) && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(urlToOpen);
    })
  );
});
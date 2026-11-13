self.addEventListener('push', function(event) {
  console.log('[SW] Push recibido');
  
  // Texto por defecto actualizado
  let title = 'SportDharma Ecosystem';
  let body = 'Nueva publicación en SportDharma Ecosystem. Presiona para leer.';
  let url = '/es/';

  // Si el Worker envía datos, los usamos
  if (event.data) {
    try {
      const data = event.data.json();
      if (data.title) title = data.title;
      if (data.body) body = data.body;
      if (data.url) url = data.url;
    } catch (e) {
      console.warn('[SW] Error al parsear data del push:', e);
    }
  }

  const options = {
    body: body,
    icon: '/logo.jpg', // Logo con fondo sólido
    vibrate: [200, 100, 200, 100, 200],
    tag: 'sportdharma-notification',
    requireInteraction: true,
    silent: false,
    data: { url: url }
    // NOTA: Se eliminó el array 'actions' para quitar el botón "Dar de baja"
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
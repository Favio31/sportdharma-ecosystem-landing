// Diccionario de idiomas (fallback autónomo si el payload llega vacío)
const translations = {
  es: { title: "SportDharma Ecosystem", body: "Nueva publicación en SportDharma Ecosystem. Presiona para leer." },
  en: { title: "SportDharma Ecosystem", body: "New post in SportDharma Ecosystem. Press to read." },
  fr: { title: "SportDharma Ecosystem", body: "Nouvel article dans SportDharma Ecosystem. Appuyez pour lire." },
  de: { title: "SportDharma Ecosystem", body: "Neuer Beitrag im SportDharma Ecosystem. Drücken Sie zum Lesen." },
  it: { title: "SportDharma Ecosystem", body: "Nuovo articolo in SportDharma Ecosystem. Premi per leggere." },
  pt: { title: "SportDharma Ecosystem", body: "Nova publicação no SportDharma Ecosystem. Pressione para ler." }
};

self.addEventListener('push', function(event) {
  // DIAGNÓSTICO: ver qué llega realmente
  console.log('[SW] Push recibido. event.data =', event.data ? event.data.text() : 'NULL');

  // 1) Idioma del navegador del usuario (autónomo, no depende del payload)
  const browserLang = (self.navigator && self.navigator.language ? self.navigator.language.split('-')[0] : 'es').toLowerCase();
  let msg = translations[browserLang] || translations['es'];
  let url = '/' + browserLang + '/';

  // 2) Si el Worker envió payload con idioma, lo priorizamos
  if (event.data) {
    try {
      const data = event.data.json();
      if (data.body) msg.body = data.body;
      if (data.title) msg.title = data.title;
      if (data.url) url = data.url;
      console.log('[SW] Payload parseado OK:', data);
    } catch (e) {
      console.warn('[SW] Payload vacío o inválido, uso idioma del navegador:', browserLang);
    }
  } else {
    console.warn('[SW] Sin payload, uso idioma del navegador:', browserLang);
  }

  const options = {
    body: msg.body,
    icon: '/logo.jpg',
    vibrate: [200, 100, 200, 100, 200],
    tag: 'sportdharma-notification',
    requireInteraction: true,
    data: { url: url }
  };

  event.waitUntil(self.registration.showNotification(msg.title, options));
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
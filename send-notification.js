const webpush = require('web-push');
const https = require('https');

// CONFIGURACIÓN
const VAPID_PUBLIC_KEY = 'BNsQsNC5ZMS-b2A_MiYmB-Mq2KpUX8QCiLCV41bpO-L3t6cpw0Pv91TDrqgY77uK5xZzgLnzShhWmKXWmFZA_RM';
const VAPID_PRIVATE_KEY = 'QrFY9aBsGnTrMVLh-SbsvR_ctIntMpZl0WNCvWUYZUM';
const WORKER_URL = 'https://sportdharma-push.faviosuenosapedal.workers.dev';
const SECRET_TOKEN = 'DuZPrkfb1hsSaRF6VyJzkQ8tNeYOsM705';

webpush.setVapidDetails('mailto:contact@sportdharmaecosystem.com', VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

const title = process.argv[2] || 'SportDharma Ecosystem';
const body = process.argv[3] || 'Nuevo contenido disponible';
const url = process.argv[4] || 'https://www.sportdharmaecosystem.com/';

console.log(`Enviando: "${title}" -> ${url}`);

// 1. Obtener suscriptores del Worker
https.get(`${WORKER_URL}/subscribers?token=${SECRET_TOKEN}`, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', async () => {
    const subscribers = JSON.parse(data);
    console.log(`Encontrados ${subscribers.length} suscriptores.`);

    // 2. Enviar notificación a cada uno
    const payload = JSON.stringify({ title, body, url });
    const options = { TTL: 86400, vapidDetails: { subject: 'mailto:contact@sportdharmaecosystem.com', publicKey: VAPID_PUBLIC_KEY, privateKey: VAPID_PRIVATE_KEY } };

    for (const sub of subscribers) {
      try {
        await webpush.sendNotification(sub, payload, options);
        console.log(`✅ Enviado a ${sub.endpoint.substring(0, 30)}...`);
      } catch (err) {
        if (err.statusCode === 410 || err.statusCode === 404) {
          console.log(`🗑️ Suscripción expirada, ignorando.`);
        } else {
          console.error(`❌ Error: ${err.message}`);
        }
      }
    }
    console.log('🚀 Proceso finalizado.');
  });
});

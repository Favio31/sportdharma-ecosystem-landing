import webpush from 'web-push';

// CONFIGURACIÓN
const VAPID_PUBLIC_KEY = 'BI28sAsN2VODFAsqSyTsSV48GZhwoEamA4BMt5YG0ADhD9x1Ctxctf2KppYfxKHFeTjBlgK2Ptsr-W1yAvAXlss';
const VAPID_PRIVATE_KEY = 's_U2VfrpAilqRv5j2KygAsoaQWKz8s1LisSaHPwXVMk';
const WORKER_URL = 'https://sportdharma-push.faviosuenosapedal.workers.dev';
const SECRET_TOKEN = 'DuZPrkfb1hsSaRF6VyJzkQ8tNeYOsM705';

webpush.setVapidDetails('mailto:contact@sportdharmaecosystem.com', VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

const title = process.argv[2] || 'SportDharma Ecosystem';
const body = process.argv[3] || 'Nuevo contenido disponible';
const url = process.argv[4] || 'https://www.sportdharmaecosystem.com/';

console.log(`\n📤 Enviando: "${title}" -> ${url}\n`);

try {
  const res = await fetch(`${WORKER_URL}/subscribers?token=${SECRET_TOKEN}`);
  const subscribers = await res.json();
  console.log(`👥 Encontrados ${subscribers.length} suscriptores.`);

  const payload = JSON.stringify({ title, body, url });
  const options = { 
    TTL: 86400, 
    vapidDetails: { 
      subject: 'mailto:contact@sportdharmaecosystem.com', 
      publicKey: VAPID_PUBLIC_KEY, 
      privateKey: VAPID_PRIVATE_KEY 
    } 
  };

  for (const sub of subscribers) {
    try {
      await webpush.sendNotification(sub, payload, options);
      console.log(`✅ Enviado a ${sub.endpoint.substring(0, 40)}...`);
    } catch (err) {
      console.error(`❌ Error al enviar a ${sub.endpoint.substring(0, 40)}:`);
      console.error(`   - StatusCode: ${err.statusCode}`);
      console.error(`   - Headers:`, err.headers);
      console.error(`   - Body:`, err.body);
      console.error(`   - Message:`, err.message);
    }
  }
  console.log('\n🚀 Proceso finalizado.\n');
} catch (err) {
  console.error('\n❌ Error general:', err.message, '\n');
}


import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const componentPath = join(__dirname, 'src', 'components', 'WebPushSubscribe.astro');

const newComponent = `<!-- Componente de Notificaciones Push (100% privado, sin emails) -->
<div class="p-6 rounded-2xl bg-surface border border-black/5 dark:border-white/5 hover:border-[#E8530E]/30 transition-all">
  <h3 class="text-xl font-bold text-ink mb-3 flex items-center gap-2">
    <svg class="w-5 h-5 text-[#E8530E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
    Notificaciones Soberanas
  </h3>
  
  <p class="text-ink-soft text-sm mb-5 leading-relaxed">
    Recibí actualizaciones del ecosistema <strong>sin dejar tu correo electrónico</strong>. 
    Usamos la tecnología nativa de tu navegador: <strong>no hay bases de datos, no hay rastreo (tracking) y no hay spam</strong>. 
    Tú tienes el control absoluto y puedes desactivarlo en cualquier momento desde la configuración de tu navegador.
  </p>

  <button 
    id="subscribe-push" 
    class="w-full px-6 py-3 rounded-xl bg-[#E8530E] text-white font-semibold hover:bg-[#d14a0c] transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
  >
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
    Activar Notificaciones
  </button>
  
  <p id="push-status" class="text-xs text-ink-soft mt-4 text-center min-h-[1.25rem]"></p>
</div>

<script is:inline>
  // Función auxiliar para convertir la VAPID Public Key a Uint8Array
  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  document.getElementById('subscribe-push').addEventListener('click', async () => {
    const statusEl = document.getElementById('push-status');
    if (!statusEl) return;

    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      statusEl.textContent = 'Tu navegador no soporta notificaciones push.';
      return;
    }

    try {
      statusEl.textContent = 'Registrando Service Worker...';
      const registration = await navigator.serviceWorker.ready;
      
      statusEl.textContent = 'Solicitando permiso...';
      const permission = await Notification.requestPermission();
      
      if (permission === 'denied') {
        statusEl.textContent = 'Permiso denegado. Actívalo en la configuración de tu navegador.';
        return;
      }

      statusEl.textContent = 'Generando suscripción segura...';
      
      // ⚠️ REEMPLAZA ESTA CLAVE con tu VAPID Public Key real generada en tu backend/servidor
      const vapidPublicKey = 'TU_VAPID_PUBLIC_KEY_AQUI'; 
      
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidPublicKey)
      });
      
      console.log('✅ [Push] Suscripción exitosa:', subscription);
      statusEl.textContent = '✅ ¡Suscrito! (100% privado, sin emails)';
      
      // AQUÍ: Enviarías el objeto 'subscription' a tu backend para guardar el token
      // await fetch('https://tu-api.com/subscribe', { 
      //   method: 'POST', 
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(subscription) 
      // });
      
    } catch (error) {
      console.error('❌ [Push] Error al suscribir:', error);
      statusEl.textContent = 'Error al suscribir. Verifica la clave VAPID.';
    }
  });
</script>`;

await writeFile(componentPath, newComponent, 'utf8');
console.log('✅ WebPushSubscribe.astro actualizado con la lógica real de Push Manager');
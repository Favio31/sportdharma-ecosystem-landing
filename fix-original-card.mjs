import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');
let content = await readFile(indexPath, 'utf8');

// 1. Limpiar los errores anteriores (import y etiqueta suelta)
content = content.replace(/import WebPushSubscribe from ['"].*?['"];?\n?/g, '');
content = content.replace(/<WebPushSubscribe\s*\/>\s*\n?/g, '');
console.log('✅ Limpieza de componentes mal ubicados');

// 2. Definir la tarjeta original (regex tolerante a espacios)
const oldCardRegex = /(<div class="p-8 rounded-3xl border border-black\/5 dark:border-white\/5 bg-transparent hover:border-\[#E8530E\]\/40 transition-all">\s*<div class="text-5xl mb-4">🔔<\/div>\s*<h3 class="text-2xl font-bold text-ink mb-3">\{t\('home\.notif_title'\)\}<\/h3>\s*<p class="text-ink-soft mb-6">\{t\('home\.notif_desc'\)\}<\/p>\s*<a href=\{'\/' \+ lang \+ '\/noticias\/'\} class="inline-block px-8 py-3 rounded-lg bg-\[#E8530E\] text-white font-semibold hover:bg-\[#d14a0c\] transition-all hover:scale-105">\s*\{t\('home\.notif_btn'\)\}\s*<\/a>\s*<\/div>)/s;

// 3. Nueva tarjeta con el texto de privacidad y el botón funcional (mismo tamaño garantizado con h-full flex flex-col)
const newCard = `<div class="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-transparent hover:border-[#E8530E]/40 transition-all flex flex-col justify-between h-full">
            <div>
              <div class="text-5xl mb-4">🔔</div>
              <h3 class="text-2xl font-bold text-ink mb-3">Notificaciones Soberanas</h3>
              <p class="text-ink-soft mb-6 text-sm leading-relaxed">
                Recibí actualizaciones <strong>sin dejar tu correo electrónico</strong>. 
                Usamos tecnología nativa del navegador: <strong>sin bases de datos, sin tracking y sin spam</strong>. 
                Tenés el control absoluto para desactivarlo cuando quieras.
              </p>
            </div>
            <div>
              <button id="subscribe-push" class="w-full px-8 py-3 rounded-lg bg-[#E8530E] text-white font-semibold hover:bg-[#d14a0c] transition-all hover:scale-105 flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                Activar Notificaciones
              </button>
              <p id="push-status" class="text-xs text-ink-soft mt-3 text-center min-h-[1.25rem]"></p>
            </div>
          </div>
          <script is:inline>
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

            document.getElementById('subscribe-push')?.addEventListener('click', async () => {
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
                  statusEl.textContent = 'Permiso denegado. Actívalo en tu navegador.';
                  return;
                }

                statusEl.textContent = 'Generando suscripción segura...';
                const vapidPublicKey = 'TU_VAPID_PUBLIC_KEY_AQUI'; 
                
                const subscription = await registration.pushManager.subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: urlBase64ToUint8Array(vapidPublicKey)
                });
                
                console.log('✅ [Push] Suscripción exitosa:', subscription);
                statusEl.textContent = '✅ ¡Suscrito! (100% privado)';
              } catch (error) {
                console.error('❌ [Push] Error:', error);
                statusEl.textContent = 'Error al suscribir. Verifica la clave VAPID.';
              }
            });
          </script>`;

if (oldCardRegex.test(content)) {
  content = content.replace(oldCardRegex, newCard);
  console.log('✅ Tarjeta original actualizada con texto de privacidad y lógica push');
} else {
  console.log('⚠️ No se encontró la tarjeta original exacta. Se intentará una búsqueda más amplia...');
  // Fallback: buscar solo el emoji y reemplazar el div padre
  const fallbackRegex = /(<div class="p-8 rounded-3xl[\s\S]*?<div class="text-5xl mb-4">🔔<\/div>[\s\S]*?<\/div>)/;
  if (fallbackRegex.test(content)) {
      content = content.replace(fallbackRegex, newCard);
      console.log('✅ Tarjeta original actualizada (método fallback)');
  } else {
      console.log('❌ No se pudo encontrar la tarjeta para reemplazar.');
  }
}

await writeFile(indexPath, content, 'utf8');
console.log('\n🎯 index.astro corregido');
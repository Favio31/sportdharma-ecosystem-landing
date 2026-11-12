import { a as createComponent, m as maybeRenderHead, e as renderScript, b as renderTemplate, c as createAstro, r as renderComponent, d as addAttribute } from '../chunks/astro/server_Bt_anjVH.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
import { g as getLangFromUrl, u as useTranslations, $ as $$Layout } from '../chunks/Layout_DF7ekleg.mjs';
export { renderers } from '../renderers.mjs';

const $$WebPushSubscribe = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="push-subscribe-container" data-astro-cid-6lgr6rmd> <h3 data-astro-cid-6lgr6rmd>Notificaciones Soberanas</h3> <p data-astro-cid-6lgr6rmd>Recibí actualizaciones sin dejar tu correo electrónico.</p> <p style="font-size: 10px; word-break: break-all; color: red; background: yellow; padding: 5px;" data-astro-cid-6lgr6rmd>DEBUG KEY: BKRvq4NiQWfebuVqz_tjZxjS6OaQNHLgCqgExu9b1-os03BJPhPKFnt5c0SsI06GtAiavQbM9Dt8Rwd6WffPGd8</p> <p style="font-size: 10px; word-break: break-all; color: red; background: yellow; padding: 5px;" data-astro-cid-6lgr6rmd>DEBUG KEY: BKRvq4NiQWfebuVqz_tjZxjS6OaQNHLgCqgExu9b1-os03BJPhPKFnt5c0SsI06GtAiavQbM9Dt8Rwd6WffPGd8</p> <button id="subscribe-push" class="subscribe-btn" data-astro-cid-6lgr6rmd>
🔔 Activar Notificaciones
</button> <button id="force-unsubscribe" class="unsubscribe-btn" style="display:none;" data-astro-cid-6lgr6rmd>
🗑️ Limpiar y Reinstalar
</button> <p id="push-status" data-astro-cid-6lgr6rmd></p> </div> ${renderScript($$result, "C:/Users/User/sportdharma-ecosystem-landing/src/components/WebPushSubscribe.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/components/WebPushSubscribe.astro", void 0);

const $$Astro$1 = createAstro("https://www.sportdharmaecosystem.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex flex-col justify-center overflow-x-hidden"> <!-- Imagen de fondo con overlay oscuro --> <div class="absolute inset-0 z-0"> <img src="/hero-bike.jpg" alt="Cicloviaje con GPS offline" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-slate-900/60"></div> </div> <!-- Contenido --> <div class="relative z-10 px-4 sm:px-6 max-w-6xl mx-auto py-20 sm:py-32 w-full"> <!-- Badge con puntos naranjas --> <div class="flex justify-center mb-8 sm:mb-12"> <div class="inline-flex flex-wrap justify-center items-center gap-2 sm:gap-3 bg-slate-900/80 border border-slate-700 rounded-full px-4 py-2 sm:px-6 sm:py-3 backdrop-blur-sm"> <span class="flex items-center gap-1.5 text-slate-300 text-xs sm:text-base font-mono tracking-wide"> <span class="w-1.5 h-1.5 bg-[#E8530E] rounded-full animate-pulse"></span> ${t("hero.badge_1")} </span> <span class="text-slate-500 hidden sm:inline">·</span> <span class="flex items-center gap-1.5 text-slate-300 text-xs sm:text-base font-mono tracking-wide"> <span class="w-1.5 h-1.5 bg-[#E8530E] rounded-full animate-pulse"></span> ${t("hero.badge_2")} </span> <span class="text-slate-500 hidden sm:inline">·</span> <span class="flex items-center gap-1.5 text-slate-300 text-xs sm:text-base font-mono tracking-wide"> <span class="w-1.5 h-1.5 bg-[#E8530E] rounded-full animate-pulse"></span> ${t("hero.badge_3")} </span> </div> </div> <!-- Títulos (Tamaño adaptativo y centrados en móvil) --> <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-center mb-2 leading-tight px-2"> ${t("hero.title_1")} </h1> <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-300 text-center md:text-right md:pr-24 lg:pr-40 mb-8 md:mb-12 leading-tight px-2"> ${t("hero.title_2")} </h1> <!-- Subtítulo (Centrado, sin márgenes raros, flujo natural) --> <div class="max-w-2xl mx-auto text-center mb-10 px-4"> <p class="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
Nueve pilares. Arquitectura soberana. Resiliencia outdoor. 
        Un ecosistema abierto para deportistas, equipos de primera respuesta, 
        comunidades aisladas y territorios sin conectividad.
</p> </div> <!-- Botones (Centrados en móvil, ancho completo para fácil toque) --> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 px-4"> <a href="#pilares" class="w-full sm:w-auto text-center bg-transparent border-2 border-slate-300 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-slate-300 hover:text-slate-900 transition-colors"> ${t("hero.btn_1")} </a> <a href="#ecosistema" class="w-full sm:w-auto text-center bg-transparent border-2 border-slate-300 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-slate-300 hover:text-slate-900 transition-colors"> ${t("hero.btn_2")} </a> </div> <!-- Stats (Centradas y con wrap para que no se salgan de la pantalla) --> <div class="flex flex-nowrap justify-center gap-1 sm:gap-8 md:gap-16 lg:gap-24 px-4"> <div class="text-center min-w-[60px] sm:min-w-[80px]"> <div class="text-3xl sm:text-4xl font-bold text-white">9</div> <div class="text-xs sm:text-sm text-slate-300 mt-1">${t("hero.stat_1")}</div> </div> <div class="text-center min-w-[80px] sm:min-w-[120px]"> <div class="text-3xl sm:text-4xl font-bold text-white">100%</div> <div class="text-xs sm:text-sm text-slate-300 mt-1">${t("hero.stat_2")}</div> </div> <div class="text-center min-w-[60px] sm:min-w-[80px]"> <div class="text-3xl sm:text-4xl font-bold text-white">0</div> <div class="text-xs sm:text-sm text-slate-300 mt-1">${t("hero.stat_3")}</div> </div> </div> </div> </section>`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/components/sections/Hero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.sportdharmaecosystem.com");
async function getStaticPaths() {
  return [
    { params: { lang: "es" } },
    { params: { lang: "en" } },
    { params: { lang: "fr" } },
    { params: { lang: "pt" } },
    { params: { lang: "de" } },
    { params: { lang: "it" } }
  ];
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SportDharma Ecosystem | Software Libre para Deportistas Outdoor" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<section class="py-16 px-6 bg-surface-alt transition-colors duration-300"> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"> <!-- 2. FUNDADOR --> <a', ' class="group block rounded-3xl border-2 border-gray-300 dark:border-gray-600 bg-transparent p-8 outline-none! [-webkit-tap-highlight-color:transparent] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] focus-visible:border-[#E8530E]/40 active:translate-y-0 active:scale-[0.99]  dark:hover:border-orange-500/40 dark:hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)] dark:focus-visible:border-orange-500/40"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6"> <div class="flex flex-col justify-center"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">', '</p> <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">', '</h3> <p class="text-ink-soft leading-relaxed text-sm text-left break-words">', '</p> </div> <div class="space-y-3"> <div class="w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 "> <img src="/fundador-1.jpg"', ' class="w-full h-auto rounded-xl border border-white/30" draggable="false"> </div> <div class="w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 "> <img src="/fundador-2.jpg"', ' class="w-full h-auto rounded-xl border border-white/30" draggable="false"> </div> <div class="w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 "> <img src="/images/fundador/documental-un-ano-en-bicicleta.jpg" alt="Documental Un A\xF1o en Bicicleta" class="w-full h-auto rounded-xl border border-white/30" draggable="false"> </div> </div> </div> <div class="mt-6 border-t border-black/5 pt-6 "> <div class="mx-auto flex w-full flex-nowrap justify-between items-start gap-1 sm:gap-4"> <div class="min-w-0 rounded-lg border border-white/30 p-3 text-center sm:p-4"> <div class="text-xl font-bold leading-tight text-[#E8530E] dark:text-orange-500 sm:text-2xl">120.000</div> <div class="mt-1 text-xs text-ink-soft">km recorridos</div> </div> <div class="min-w-0 rounded-lg border border-white/30 p-3 text-center sm:p-4"> <div class="text-xl font-bold leading-tight text-[#E8530E] dark:text-orange-500 sm:text-2xl">84</div> <div class="mt-1 text-xs text-ink-soft">pa\xC3\xADses</div> </div> <div class="min-w-0 rounded-lg border border-white/30 p-3 text-center sm:p-4"> <div class="text-xl font-bold leading-tight text-[#E8530E] dark:text-orange-500 sm:text-2xl">11</div> <div class="mt-1 text-xs text-ink-soft">A\xF1os en ruta</div> </div> </div> </div> </a> <!-- 3. MANIFIESTO --> <a', ' class="group block rounded-3xl border-2 border-gray-300 dark:border-gray-600 bg-transparent p-8 outline-none! [-webkit-tap-highlight-color:transparent] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] focus-visible:border-[#E8530E]/40 active:translate-y-0 active:scale-[0.99]  dark:hover:border-orange-500/40 dark:hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)] dark:focus-visible:border-orange-500/40"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6"> <div class="flex flex-col justify-center items-center"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">', '</p> <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">', '</h3> <p class="text-ink-soft leading-relaxed text-sm text-left break-words">', '</p> </div> <div class="space-y-3"> <div class="w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 "> <img src="/images/camping-atardecer.jpeg" alt="Camping al atardecer en ruta" class="w-full h-auto rounded-xl border border-white/30" draggable="false"> </div> <div class="w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 "> <img src="/images/templo-blanco.jpg" alt="Templo Blanco en Tailandia - Ruta en bicicleta" class="w-full h-auto rounded-xl border border-white/30" draggable="false"> </div> <div class="w-full rounded-xl border-2 border-gray-300 dark:border-gray-600 "> <img src="/logo-social2.jpg" alt="SportDharma Ecosystem Logo" class="w-full h-auto rounded-xl border border-white/30" draggable="false"> </div> </div> </div> </a> </div> </div> </section>  <section class="py-12 md:py-16 px-4 md:px-6 bg-black"> <div class="max-w-6xl mx-auto"> <h2 class="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-10 text-center px-2">\nDESCUBR\xCD, \xBFQu\xE9 es SportDharma Ecosystem?\n</h2> <a', ' class="group block rounded-2xl overflow-hidden shadow-2xl bg-black border-2 border-gray-400 outline-none! [-webkit-tap-highlight-color:transparent] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] focus-visible:border-[#E8530E]/40 active:translate-y-0 active:scale-[0.99]  dark:hover:border-orange-500/40 dark:hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)] dark:focus-visible:border-orange-500/40"> <div class="flex items-center gap-2 px-3 md:px-4 py-2 bg-black border-b border-gray-500"> <div class="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div> <div class="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div> <div class="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div> <span class="ml-2 md:ml-4 text-[10px] md:text-xs text-slate-400 font-mono">sportdharmaecosystem.mjs</span> </div> <div class="grid grid-cols-1 md:grid-cols-5 gap-0"> <div class="md:col-span-3 p-3 md:p-6 font-mono text-xs md:text-base leading-relaxed"> <pre class="whitespace-pre-wrap md:whitespace-pre break-words md:break-normal m-0 p-0"><span class="text-gray">const</span> <span class="text-orange">SportDharmaEcosystem</span> <span class="text-gray">=</span> <span class="text-white">', `</span>
  <span class="text-orange">infraestructura:</span> <span class="typing-text" data-text="'libre',"></span>
  <span class="text-orange">soberania:</span> <span class="typing-text" data-text="true,"></span>
  <span class="text-orange">offline_first:</span> <span class="typing-text" data-text="true,"></span>
  <span class="text-orange">para:</span> <span class="typing-text" data-text="'deportistas outdoor',"></span>
  <span class="text-orange">tecnologia:</span> <span class="typing-text" data-text="'respeta tu privacidad',"></span>
  <span class="text-orange">valores:</span> <span class="typing-text" data-text="['transparencia', 'privacidad', 'resiliencia']"></span>
<span class="text-white"></span>;</pre> </div> <div class="md:col-span-2 flex items-center justify-center p-4 md:p-6 bg-black" border-t md:border-t-0 md:border-l border-slate-800"> <div class="rounded-xl overflow-hidden border border-white/30 bg-black/30 p-4"> <img src="/ecosistema-diagram-transparente.jpg" alt="Ecosistema: App + Web + MASF" class="w-full h-auto max-w-[200px] md:max-w-[280px] mx-auto" draggable="false"> </div> </div> </div> </a></div> </section> <style>
    .font-mono { font-family: 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace; }
    .text-gray { color: #94a3b8; }
    .text-orange { color: #E8530E; }
    .text-white { color: #ffffff; }
    .typing-text {
      display: inline;
      border-right: 2px solid #E8530E;
      padding-right: 1px;
    }
    .typing-text.blinking {
      animation: blink 0.7s step-end infinite;
    }
    @keyframes blink {
      50% { border-color: transparent; }
    }
  </style> <script>
    document.addEventListener('DOMContentLoaded', () => {
      const typingElements = Array.from(document.querySelectorAll('.typing-text'));
      const texts = typingElements.map(el => el.getAttribute('data-text'));
      const TYPE_SPEED = 35;
      const DELETE_SPEED = 20;
      const PAUSE_AFTER_TYPE = 3000;
      const PAUSE_AFTER_DELETE = 500;
      let currentLine = 0;
      let currentChar = 0;
      let isDeleting = false;

      function setActiveCursor(index) {
        typingElements.forEach((el, i) => {
          if (i === index) {
            el.classList.add('blinking');
          } else {
            el.classList.remove('blinking');
          }
        });
      }

      function tick() {
        const currentEl = typingElements[currentLine];
        const fullText = texts[currentLine];

        if (!isDeleting) {
          // Escribiendo
          currentEl.textContent = fullText.substring(0, currentChar + 1);
          currentChar++;

          if (currentChar === fullText.length) {
            // Termin\xF3 de escribir esta l\xC3\xADnea
            if (currentLine === typingElements.length - 1) {
              // Termin\xF3 de escribir TODAS las l\xC3\xADneas, esperar y empezar a borrar
              setActiveCursor(currentLine);
              setTimeout(() => {
                isDeleting = true;
                tick();
              }, PAUSE_AFTER_TYPE);
              return;
            } else {
              // Pasar a la siguiente l\xC3\xADnea
              currentLine++;
              currentChar = 0;
              setActiveCursor(currentLine);
              setTimeout(tick, 150);
              return;
            }
          }
          setTimeout(tick, TYPE_SPEED);
        } else {
          // Borrando
          currentEl.textContent = fullText.substring(0, currentChar);
          currentChar--;

          if (currentChar < 0) {
            // Termin\xF3 de borrar esta l\xC3\xADnea
            if (currentLine === 0) {
              // Volvi\xC3\xB3 al inicio, reiniciar escritura
              currentChar = 0;
              isDeleting = false;
              setActiveCursor(0);
              setTimeout(tick, PAUSE_AFTER_DELETE);
              return;
            } else {
              // Borrar l\xC3\xADnea anterior
              currentLine--;
              currentChar = texts[currentLine].length;
              setActiveCursor(currentLine);
              setTimeout(tick, DELETE_SPEED);
              return;
            }
          }
          setTimeout(tick, DELETE_SPEED);
        }
      }

      // Iniciar animaci\xF3n
      if (typingElements.length > 0) {
        setActiveCursor(0);
        setTimeout(tick, 500);
      }
    });
  <\/script>  <section class="py-16 px-6 bg-surface-alt transition-colors duration-300"> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"> <!-- LOS 9 PILARES --> <a`, ' class="group block rounded-3xl border-2 border-gray-300 dark:border-gray-600 bg-transparent p-8 outline-none! [-webkit-tap-highlight-color:transparent] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] focus-visible:border-[#E8530E]/40 active:translate-y-0 active:scale-[0.99]  dark:hover:border-orange-500/40 dark:hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)] dark:focus-visible:border-orange-500/40"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">', '</p> <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">', '</h3> <p class="text-ink-soft leading-relaxed text-sm text-left break-words">', "</p> </a> <!-- 6. APP --> <a", ' class="group block rounded-3xl border-2 border-gray-300 dark:border-gray-600 bg-transparent p-8 outline-none! [-webkit-tap-highlight-color:transparent] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] focus-visible:border-[#E8530E]/40 active:translate-y-0 active:scale-[0.99]  dark:hover:border-orange-500/40 dark:hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)] dark:focus-visible:border-orange-500/40"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">', '</p> <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">', '</h3> <p class="text-ink-soft leading-relaxed text-sm text-left break-words">', "</p> </a> <!-- 7. WEB --> <a", ' class="group block rounded-3xl border-2 border-gray-300 dark:border-gray-600 bg-transparent p-8 outline-none! [-webkit-tap-highlight-color:transparent] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] focus-visible:border-[#E8530E]/40 active:translate-y-0 active:scale-[0.99]  dark:hover:border-orange-500/40 dark:hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)] dark:focus-visible:border-orange-500/40"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">', '</p> <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">', '</h3> <p class="text-ink-soft leading-relaxed text-sm text-left break-words">', "</p> </a> <!-- 8. MASF --> <a", ' class="group block rounded-3xl border-2 border-gray-300 dark:border-gray-600 bg-transparent p-8 outline-none! [-webkit-tap-highlight-color:transparent] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] focus-visible:border-[#E8530E]/40 active:translate-y-0 active:scale-[0.99]  dark:hover:border-orange-500/40 dark:hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)] dark:focus-visible:border-orange-500/40"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">', '</p> <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">', '</h3> <p class="text-ink-soft leading-relaxed text-sm text-left break-words">', "</p> </a> <!-- 9. ESTADO DEL PROYECTO --> <a", ' class="group block rounded-3xl border-2 border-gray-300 dark:border-gray-600 bg-transparent p-8 outline-none! [-webkit-tap-highlight-color:transparent] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] focus-visible:border-[#E8530E]/40 active:translate-y-0 active:scale-[0.99]  dark:hover:border-orange-500/40 dark:hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)] dark:focus-visible:border-orange-500/40"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">', '</p> <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">', '</h3> <p class="text-ink-soft leading-relaxed text-sm text-left break-words">', "</p> </a> <!-- 10. NOTICIAS --> <a", ' class="group block rounded-3xl border-2 border-gray-300 dark:border-gray-600 bg-transparent p-8 outline-none! [-webkit-tap-highlight-color:transparent] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] focus-visible:border-[#E8530E]/40 active:translate-y-0 active:scale-[0.99]  dark:hover:border-orange-500/40 dark:hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)] dark:focus-visible:border-orange-500/40"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">', '</p> <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">', '</h3> <p class="text-ink-soft leading-relaxed text-sm text-left break-words">', "</p> </a> <!-- 11. HERRAMIENTAS --> <a", ' class="group block rounded-3xl border-2 border-gray-300 dark:border-gray-600 bg-transparent p-8 outline-none! [-webkit-tap-highlight-color:transparent] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] focus-visible:border-[#E8530E]/40 active:translate-y-0 active:scale-[0.99]  dark:hover:border-orange-500/40 dark:hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)] dark:focus-visible:border-orange-500/40"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">', '</p> <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">', '</h3> <p class="text-ink-soft leading-relaxed text-sm text-left break-words">', "</p> </a> <!-- 12. APOYA --> <a", ' class="group block rounded-3xl border-2 border-gray-300 dark:border-gray-600 bg-transparent p-8 outline-none! [-webkit-tap-highlight-color:transparent] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] focus-visible:border-[#E8530E]/40 active:translate-y-0 active:scale-[0.99]  dark:hover:border-orange-500/40 dark:hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)] dark:focus-visible:border-orange-500/40"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">', '</p> <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">', '</h3> <p class="text-ink-soft leading-relaxed text-sm text-left break-words">', "</p> </a> <!-- 14. COMUNIDAD DIGITAL --> <a", ' class="group block rounded-3xl border-2 border-gray-300 dark:border-gray-600 bg-transparent p-8 outline-none! [-webkit-tap-highlight-color:transparent] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] focus-visible:border-[#E8530E]/40 active:translate-y-0 active:scale-[0.99]  dark:hover:border-orange-500/40 dark:hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)] dark:focus-visible:border-orange-500/40"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">', '</p> <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">', '</h3> <p class="text-ink-soft leading-relaxed text-sm text-left break-words">', '</p> </a> </div> </div> </section>  <section id="noticias" class="py-16 px-6 bg-surface-alt transition-colors duration-300"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-4xl font-bold text-ink mb-4">', '</h2> <p class="text-ink-soft text-lg mb-10">', '. Contenido fresco, verificado y relevante.</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"> <div class="p-8 rounded-3xl border-2 border-gray-300 dark:border-gray-600  bg-transparent hover:border-[#E8530E]/40 transition-all flex flex-col justify-between h-full"> <div> <div class="text-5xl mb-4">\u{1F514}</div> ', ` <script>
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

            // Script de notificaciones migrado al componente WebPushSubscribe\x9D\u0152 [Push] Error:', error.name, error.message);
                statusEl.textContent = '\xE2\x9D\u0152 Error: ' + error.message;
              }
            });
          <\/script> <div class="p-8 rounded-3xl border-2 border-gray-300 dark:border-gray-600  bg-transparent hover:border-[#E8530E]/40 transition-all"> <div class="text-5xl mb-4"></div> <h3 class="text-2xl font-bold text-ink mb-3">`, '</h3> <p class="text-ink-soft mb-6">', "</p> <a", ' class="inline-block px-8 py-3 rounded-lg border border-[#E8530E] text-[#E8530E] font-semibold hover:bg-[#E8530E]/10 transition-all"> ', ' </a> </div> </div> </div> </div></div></section>  <section class="py-16 px-6 bg-surface-alt transition-colors duration-300"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold text-ink mb-4">\xBFQuer\xE9s contribuir o contactarnos?</h2> <p class="text-ink-soft mb-10 text-lg">Apoy\xE1 con tu tiempo, c\xF3digo o recursos. Construyamos juntos.</p> <div class="flex flex-col sm:flex-row justify-center gap-4 max-w-3xl mx-auto"> <a href="https://liberapay.com/SportDharmaEcosystem/donate" target="_blank" rel="noopener noreferrer" class="flex-1 px-8 py-4 rounded-xl border-2 border-[#F6C915] text-[#F6C915] font-bold text-lg hover:bg-[#F6C915] hover:text-slate-900 transition-all">\nLiberapay\n</a> <a href="https://ko-fi.com/sportdharmaecosystem" target="_blank" rel="noopener noreferrer" class="flex-1 px-8 py-4 rounded-xl border-2 border-[#FF5E5B] text-[#FF5E5B] font-bold text-lg hover:bg-[#FF5E5B] hover:text-white transition-all">\nKo-fi\n</a> <a href="https://github.com/sponsors/Favio31" target="_blank" rel="noopener noreferrer" class="flex-1 px-8 py-4 rounded-xl border-2 border-slate-400 text-slate-400 font-bold text-lg hover:bg-slate-400 hover:text-slate-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all">\nGitHub Sponsor\n</a> <a href="https://nowpayments.io/donation/sportdharmaecosystem" target="_blank" rel="noopener noreferrer" class="flex-1 px-6 py-4 rounded-xl border-2 border-purple-500 text-purple-500 font-bold text-lg hover:bg-purple-500 hover:text-white transition-all text-center">\nCripto\n</a> </div> </div> </section>  <section class="py-16 px-6 bg-surface"> <div class="max-w-6xl mx-auto text-center"> <h2 class="text-3xl font-bold text-ink mb-2">', '</h2> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">', '</div> </div> </section>  <section class="py-16 px-6 bg-surface-alt"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl font-bold text-ink mb-2">', '</h2> <div class="flex flex-wrap justify-center gap-4">', "</div> </div> </section> "])), renderComponent($$result2, "Hero", $$Hero, {}), maybeRenderHead(), addAttribute("/" + lang + "/fundador/", "href"), t("home.fundador_label"), t("home.fundador_name"), t("home.fundador_desc"), addAttribute(t("home.fundador_alt_1"), "alt"), addAttribute(t("home.fundador_alt_2"), "alt"), addAttribute("/" + lang + "/manifiesto/", "href"), t("home.manifiesto_label"), t("home.manifiesto_title"), t("home.manifiesto_desc"), addAttribute("/" + lang + "/descubri/", "href"), void 0, addAttribute("/" + lang + "/pilares/", "href"), t("home.pilares_label"), t("home.pilares_title"), t("home.pilares_desc"), addAttribute("/" + lang + "/app/", "href"), t("home.app_label"), t("home.app_title"), t("home.app_desc"), addAttribute("/" + lang + "/web/", "href"), t("home.web_label"), t("home.web_title"), t("home.web_desc"), addAttribute("/" + lang + "/masf/", "href"), t("home.masf_label"), t("home.masf_title"), t("home.masf_desc"), addAttribute("/" + lang + "/estado/", "href"), t("home.estado_label"), t("home.estado_title"), t("home.estado_desc"), addAttribute("/" + lang + "/noticias/", "href"), t("home.noticias_label"), t("home.noticias_title"), t("home.noticias_desc"), addAttribute("/" + lang + "/ecosistema/", "href"), t("home.herramientas_label"), t("home.herramientas_title"), t("home.herramientas_desc"), addAttribute("/" + lang + "/apoya/", "href"), t("home.apoya_label"), t("home.apoya_title"), t("home.apoya_desc"), addAttribute("/" + lang + "/comunidad/", "href"), t("home.comunidad_label"), t("home.comunidad_title"), t("home.comunidad_desc"), t("home.noticias_section_title"), t("home.noticias_title"), renderComponent($$result2, "WebPushSubscribe", $$WebPushSubscribe, {}), t("home.rss_title"), t("home.rss_desc"), addAttribute("/" + lang + "/rss/", "href"), t("home.rss_btn"), t("home.friendly_pages.title"), t("home.friendly_pages.links").map((l) => renderTemplate`<a${addAttribute(l.url, "href")} target="_blank" class="p-5 rounded-xl border hover:border-[#E8530E]/40"><span class="font-semibold">${l.name}</span></a>`), t("home.social_media.title"), t("home.social_media.links").map((l) => renderTemplate`<a${addAttribute(l.url, "href")} target="_blank" class="px-6 py-3 rounded-lg border hover:bg-[#E8530E] hover:text-white">${l.name}</a>`)) })}`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

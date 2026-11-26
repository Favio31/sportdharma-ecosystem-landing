import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_Bt_anjVH.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/Layout_51J1j7KS.mjs';
export { renderers } from '../../../renderers.mjs';

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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "title": "Visas y Fronteras | SportDharma" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen py-20 px-4 md:px-8"> <div class="max-w-3xl mx-auto"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Logística de Viaje</p> <h1 class="text-4xl md:text-5xl font-bold text-ink mb-6">Gestión de Visas y Fronteras</h1> <div class="space-y-6 text-ink-soft leading-relaxed"> <p><strong class="text-ink">Requisitos por país:</strong> consultá la duración del visa de turista, la extensión máxima y las condiciones de entrada para cada territorio antes de cruzar.</p> <p><strong class="text-ink">Prórrogas:</strong> identificá los puntos oficiales de extensión de estadía y los plazos válidos para solicitarlas sin penalización.</p> <p><strong class="text-ink">Derechos del viajero:</strong> conocé tus derechos en frontera, el trato debido y los canales de reclamo ante situaciones irregulares.</p> <p><strong class="text-ink">Documentación soberana:</strong> llevá copias digitales offline de pasaporte, seguros y contactos de emergencia en tu App SportDharma.</p> <p><strong class="text-ink">Embajadas y consulados:</strong> registrá los contactos de tu representación diplomática en cada país de la ruta para asistencia inmediata.</p> </div> </div> </main> ` })}`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/logistica/visas/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/logistica/visas/index.astro";
const $$url = "/[lang]/logistica/visas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

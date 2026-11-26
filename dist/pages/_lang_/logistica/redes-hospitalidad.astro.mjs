import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_Bt_anjVH.mjs';
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
  const redes = [
    { name: "Warmshowers", url: "https://www.warmshowers.org/", desc: "Hospitalidad rec\xEDproca exclusiva para ciclistas de ruta en 160+ pa\xEDses." },
    { name: "BeWelcome", url: "https://bewelcome.org/", desc: "Comunidad sin fines de lucro, de c\xF3digo abierto y sin publicidad." },
    { name: "Trustroots", url: "https://www.trustroots.org/", desc: "Comunidad de viajeros basada en confianza, aventura e intercambio intercultural." },
    { name: "HelpX", url: "https://www.helpx.net/", desc: "Listado de granjas, hostales y hogares que ofrecen alojamiento por ayuda." }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "title": "Redes de Hospitalidad | SportDharma" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen py-20 px-4 md:px-8"> <div class="max-w-3xl mx-auto"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Logística de Viaje</p> <h1 class="text-4xl md:text-5xl font-bold text-ink mb-6">Redes de Hospitalidad</h1> <p class="text-ink-soft mb-4 leading-relaxed">Alojamiento colaborativo: compartís tu tiempo, saberes y compañía con las familias anfitrionas. El intercambio se basa en la confianza y la generosidad mutua.</p> <p class="text-ink-soft mb-10 leading-relaxed">La App SportDharma te permite descargar los contactos de estas redes y consultarlos offline en zonas remotas.</p> <div class="space-y-4"> ${redes.map((red) => renderTemplate`<a${addAttribute(red.url, "href")} target="_blank" rel="noopener noreferrer" class="block p-6 rounded-2xl bg-surface/40 border border-black/5 dark:border-white/5 hover:border-[#E8530E]/40 transition-all group"> <h3 class="text-xl font-bold text-ink mb-1 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">${red.name}</h3> <p class="text-ink-soft text-sm">${red.desc}</p> </a>`)} </div> </div> </main> ` })}`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/logistica/redes-hospitalidad/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/logistica/redes-hospitalidad/index.astro";
const $$url = "/[lang]/logistica/redes-hospitalidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

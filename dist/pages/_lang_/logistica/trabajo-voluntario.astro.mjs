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
  const apps = [
    { name: "Workaway", url: "https://www.workaway.info/", desc: "La mayor comunidad de intercambio cultural y voluntariado en 170 pa\xEDses." },
    { name: "Worldpackers", url: "https://www.worldpackers.com/", desc: "Plataforma con verificaci\xF3n de anfitriones y fuerte enfoque en turismo regenerativo." },
    { name: "WWOOF", url: "https://wwoof.net/", desc: "Red mundial de voluntariado en granjas org\xE1nicas y sostenibles." }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "title": "Trabajo Voluntario | SportDharma" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen py-20 px-4 md:px-8"> <div class="max-w-3xl mx-auto"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Logística de Viaje</p> <h1 class="text-4xl md:text-5xl font-bold text-ink mb-6">Trabajo Voluntario</h1> <p class="text-ink-soft mb-10 leading-relaxed">Intercambiá tu tiempo y saberes por alojamiento y manutención. Estas plataformas conectan viajeros con anfitriones en todo el mundo.</p> <div class="space-y-4"> ${apps.map((app) => renderTemplate`<a${addAttribute(app.url, "href")} target="_blank" rel="noopener noreferrer" class="block p-6 rounded-2xl bg-surface/40 border border-black/5 dark:border-white/5 hover:border-[#E8530E]/40 transition-all group"> <h3 class="text-xl font-bold text-ink mb-1 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">${app.name}</h3> <p class="text-ink-soft text-sm">${app.desc}</p> </a>`)} </div> <p class="mt-10 text-sm text-ink-soft italic">Enlaces de referido activos que canalizan una comisión hacia el fondo de OPEX Mínimo del proyecto.</p> </div> </main> ` })}`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/logistica/trabajo-voluntario/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/logistica/trabajo-voluntario/index.astro";
const $$url = "/[lang]/logistica/trabajo-voluntario";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Bt_anjVH.mjs';
import 'piccolore';
import { $ as $$Layout, u as useTranslations } from '../../chunks/Layout_DF7ekleg.mjs';
export { renderers } from '../../renderers.mjs';

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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("manifiesto.page_title") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="manifiesto" class="py-20 px-6 bg-surface-alt transition-colors duration-300"> <div class="max-w-6xl mx-auto"> <!-- Título --> <div class="text-center mb-16"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">${t("manifiesto.label")}</p> <h1 class="text-4xl md:text-6xl font-bold text-ink mb-4"> ${t("manifiesto.title_1")} <span class="text-[#E8530E] dark:text-orange-500">${t("manifiesto.title_2")}</span> </h1> <p class="text-lg text-ink-soft max-w-2xl mx-auto"> ${t("manifiesto.subtitle")} </p> </div> <!-- Contenido principal --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16"> <!-- Texto --> <div> <blockquote class="border-l-4 border-[#E8530E] dark:border-orange-500 rounded-r-xl p-8 transition-colors duration-300"> <p class="text-lg text-ink-soft leading-relaxed mb-4 text-left">${t("manifiesto.p1")}</p> <p class="text-lg text-ink-soft leading-relaxed mb-4 text-left">${t("manifiesto.p2")}</p> <p class="text-lg text-ink-soft leading-relaxed mb-4 text-left">${t("manifiesto.p3")}</p> <p class="text-lg text-ink-soft leading-relaxed mb-4 text-left">${t("manifiesto.p4")}</p> <p class="text-lg text-ink-soft leading-relaxed mb-4 text-left">${t("manifiesto.p5")}</p> <p class="text-lg text-ink font-semibold text-left">${t("manifiesto.p6")}</p> </blockquote> </div> <!-- Fotos con layout 2x3 grid --> <div class="grid grid-cols-2 grid-rows-3 gap-4 h-[650px]"> <div class="rounded-xl overflow-hidden shadow-lg border-2 border-white/30"> <img src="/manifiesto-laos.jpg"${addAttribute(t("manifiesto.alt_laos"), "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"> </div> <div class="rounded-xl overflow-hidden shadow-lg border-2 border-white/30"> <img src="/manifiesto-camino.jpg"${addAttribute(t("manifiesto.alt_camino"), "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"> </div> <div class="rounded-xl overflow-hidden shadow-lg border-2 border-white/30"> <img src="/manifiesto-ruta.jpg"${addAttribute(t("manifiesto.alt_ruta"), "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"> </div> <div class="rounded-xl overflow-hidden shadow-lg border-2 border-white/30"> <img src="/manifiesto-grupo.jpg"${addAttribute(t("manifiesto.alt_grupo"), "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"> </div> <div class="rounded-xl overflow-hidden shadow-lg border-2 border-white/30"> <img src="/manifiesto-pamir.jpg"${addAttribute(t("manifiesto.alt_pamir"), "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"> </div> <div class="rounded-xl overflow-hidden shadow-lg border-2 border-white/30"> <img src="/manifiesto-tayikistan.jpg"${addAttribute(t("manifiesto.alt_tayikistan"), "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"> </div> </div> </div> </div> </section> ` })}`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/manifiesto/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/manifiesto/index.astro";
const $$url = "/[lang]/manifiesto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

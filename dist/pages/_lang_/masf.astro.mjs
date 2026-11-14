import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Bt_anjVH.mjs';
import 'piccolore';
import { $ as $$Layout, u as useTranslations } from '../../chunks/Layout_CcRQyoHm.mjs';
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("masf.page_title") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 px-6 bg-surface-alt transition-colors duration-300"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">${t("masf.label")}</p> <h1 class="text-4xl md:text-6xl font-bold text-ink mb-4"> ${t("masf.title_1")} <span class="text-[#E8530E] dark:text-orange-500">${t("masf.title_2")}</span> </h1> <p class="text-lg text-ink-soft max-w-2xl mx-auto"> ${t("masf.subtitle")} </p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> <div class="space-y-8"> <div class="flex gap-4"> <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path> </svg> </div> <div> <h3 class="text-xl font-bold text-ink mb-2">${t("masf.f1_title")}</h3> <p class="text-ink-soft leading-relaxed">${t("masf.f1_desc")}</p> </div> </div> <div class="flex gap-4"> <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <div> <h3 class="text-xl font-bold text-ink mb-2">${t("masf.f2_title")}</h3> <p class="text-ink-soft leading-relaxed">${t("masf.f2_desc")}</p> </div> </div> <div class="flex gap-4"> <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path> </svg> </div> <div> <h3 class="text-xl font-bold text-ink mb-2">${t("masf.f3_title")}</h3> <p class="text-ink-soft leading-relaxed">${t("masf.f3_desc")}</p> </div> </div> <div class="flex gap-4"> <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path> </svg> </div> <div> <h3 class="text-xl font-bold text-ink mb-2">${t("masf.f4_title")}</h3> <p class="text-ink-soft leading-relaxed">${t("masf.f4_desc")}</p> </div> </div> </div> <div class="space-y-6"> <div class="rounded-xl overflow-hidden shadow-lg border border-slate-600/50 bg-surface dark:bg-surface/50 transition-colors duration-300"> <img src="/masf-captura-v2.png"${addAttribute(t("masf.alt_image"), "alt")} class="w-full h-auto object-cover transition-transform duration-500"> </div> <p class="text-sm text-ink-soft text-center italic"> ${t("masf.caption")} </p> </div> </div> </div> </section> ` })}`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/masf/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/masf/index.astro";
const $$url = "/[lang]/masf";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

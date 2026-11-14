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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("ecosistema.page_title") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 px-6 bg-surface-alt transition-colors duration-300"> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <a${addAttribute("/" + lang + "/manifiesto/", "href")} class="group block h-full rounded-2xl border border-black/5 bg-transparent p-8 outline-none! transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] dark:border-white/5 dark:hover:border-orange-500/40"> <div class="grid grid-cols-2 gap-6 h-full"> <div class="flex flex-col justify-center"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">${t("ecosistema.card1_label")}</p> <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">${t("ecosistema.card1_title")}</h3> <p class="text-ink-soft leading-relaxed text-sm">${t("ecosistema.card1_desc")}</p> </div> <div class="space-y-3"> <div class="rounded-lg overflow-hidden border border-black/5 dark:border-white/5 h-[140px]"> <img src="/manifiesto-grupo.jpg"${addAttribute(t("ecosistema.alt_grupo"), "alt")} class="w-full h-full object-cover" draggable="false"> </div> <div class="rounded-lg overflow-hidden border border-black/5 dark:border-white/5 h-[140px]"> <img src="/manifiesto-laos.jpg"${addAttribute(t("ecosistema.alt_laos"), "alt")} class="w-full h-full object-cover" draggable="false"> </div> </div> </div> </a> <a${addAttribute("/" + lang + "/ecosistema/", "href")} class="group block h-full rounded-2xl border border-black/5 bg-transparent p-8 outline-none! transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] dark:border-white/5 dark:hover:border-orange-500/40"> <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">${t("ecosistema.card2_label")}</p> <h3 class="text-2xl font-bold text-ink mb-4 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">${t("ecosistema.card2_title")}</h3> <div class="rounded-xl overflow-hidden border border-black/5 dark:border-white/5 h-[280px]"> <img src="/masf-captura-v2.png"${addAttribute(t("ecosistema.alt_masf"), "alt")} class="w-full h-full object-cover" draggable="false"> </div> </a> </div> </div> </section> ` })}`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/ecosistema/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/ecosistema/index.astro";
const $$url = "/[lang]/ecosistema";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

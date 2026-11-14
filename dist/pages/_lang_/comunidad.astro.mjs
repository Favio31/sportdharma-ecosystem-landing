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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("comunidad.page_title") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 px-6 bg-surface"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-12"> <div class="text-6xl mb-6">🌐</div> <h1 class="text-4xl md:text-5xl font-bold text-ink mb-4">${t("comunidad.title")}</h1> <p class="text-xl text-ink-soft">${t("comunidad.subtitle")}</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"> <a href="https://github.com/Favio31" target="_blank" rel="noopener" class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-alt hover:border-[#E8530E] transition-all group"> <div class="text-4xl mb-4">💻</div> <h3 class="text-xl font-bold text-ink mb-2 group-hover:text-[#E8530E] transition-colors">${t("comunidad.c1_title")}</h3> <p class="text-ink-soft text-sm">${t("comunidad.c1_desc")}</p> </a> <a${addAttribute("/" + lang + "/rss/", "href")} class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-alt hover:border-[#E8530E] transition-all group"> <div class="text-4xl mb-4">📡</div> <h3 class="text-xl font-bold text-ink mb-2 group-hover:text-[#E8530E] transition-colors">${t("comunidad.c2_title")}</h3> <p class="text-ink-soft text-sm">${t("comunidad.c2_desc")}</p> </a> <a href="mailto:favio@sportdharmaecosystem.com?subject=Newsletter" class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-alt hover:border-[#E8530E] transition-all group"> <div class="text-4xl mb-4">📩</div> <h3 class="text-xl font-bold text-ink mb-2 group-hover:text-[#E8530E] transition-colors">${t("comunidad.c3_title")}</h3> <p class="text-ink-soft text-sm">${t("comunidad.c3_desc")}</p> </a> <a${addAttribute("/" + lang + "/contacto/", "href")} class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-alt hover:border-[#E8530E] transition-all group"> <div class="text-4xl mb-4">🤝</div> <h3 class="text-xl font-bold text-ink mb-2 group-hover:text-[#E8530E] transition-colors">${t("comunidad.c4_title")}</h3> <p class="text-ink-soft text-sm">${t("comunidad.c4_desc")}</p> </a> </div> <div class="p-8 rounded-2xl bg-gradient-to-br from-[#E8530E]/10 to-transparent border border-[#E8530E]/30 text-center"> <h3 class="text-2xl font-bold text-ink mb-4">${t("comunidad.philosophy_title")}</h3> <p class="text-ink-soft text-lg max-w-2xl mx-auto">${t("comunidad.philosophy_desc")}</p> </div> </div> </section> ` })}`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/comunidad/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/comunidad/index.astro";
const $$url = "/[lang]/comunidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

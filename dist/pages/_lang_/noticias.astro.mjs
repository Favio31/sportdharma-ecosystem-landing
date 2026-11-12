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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("noticias.page_title") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="noticias" class="py-20 px-6 bg-surface-alt transition-colors duration-300"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-4xl font-bold text-ink mb-4">${t("noticias.title")}</h2> <p class="text-ink-soft text-lg mb-10">${t("noticias.subtitle")}</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-transparent hover:border-[#E8530E]/40 transition-all"> <div class="text-5xl mb-4">🔔</div> <h3 class="text-2xl font-bold text-ink mb-3">${t("noticias.c1_title")}</h3> <p class="text-ink-soft mb-6">${t("noticias.c1_desc")}</p> <button class="inline-block px-8 py-3 rounded-lg bg-[#E8530E] text-white font-semibold hover:bg-[#d14a0c] transition-all hover:scale-105 cursor-pointer"> ${t("noticias.c1_btn")} </button> </div> <div class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-transparent hover:border-[#E8530E]/40 transition-all"> <div class="text-5xl mb-4">📡</div> <h3 class="text-2xl font-bold text-ink mb-3">${t("noticias.c2_title")}</h3> <p class="text-ink-soft mb-6">${t("noticias.c2_desc")}</p> <a${addAttribute("/" + lang + "/rss/", "href")} class="inline-block px-8 py-3 rounded-lg border border-[#E8530E] text-[#E8530E] font-semibold hover:bg-[#E8530E]/10 transition-all"> ${t("noticias.c2_btn")} </a> </div> </div> </div> </section> ` })}`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/noticias/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/noticias/index.astro";
const $$url = "/[lang]/noticias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bt_anjVH.mjs';
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("estado.page_title") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 px-6 bg-surface"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-12"> <div class="text-6xl mb-6">📊</div> <h1 class="text-4xl md:text-5xl font-bold text-ink mb-4">${t("estado.title")}</h1> <p class="text-xl text-ink-soft">${t("estado.subtitle")}</p> </div> <div class="space-y-6"> <div class="p-6 rounded-xl border-l-4 border-green-500 bg-surface-alt"> <div class="flex items-center justify-between mb-2"> <h3 class="text-xl font-bold text-ink">${t("estado.s1_title")}</h3> <span class="px-3 py-1 rounded-full bg-green-500/20 text-green-600 text-sm font-semibold">✅ ${t("estado.s1_status")}</span> </div> <p class="text-ink-soft">${t("estado.s1_desc")}</p> </div> <div class="p-6 rounded-xl border-l-4 border-yellow-500 bg-surface-alt"> <div class="flex items-center justify-between mb-2"> <h3 class="text-xl font-bold text-ink">${t("estado.s2_title")}</h3> <span class="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-600 text-sm font-semibold">🚧 ${t("estado.s2_status")}</span> </div> <p class="text-ink-soft">${t("estado.s2_desc")}</p> </div> <div class="p-6 rounded-xl border-l-4 border-blue-500 bg-surface-alt"> <div class="flex items-center justify-between mb-2"> <h3 class="text-xl font-bold text-ink">${t("estado.s3_title")}</h3> <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-600 text-sm font-semibold">🔬 ${t("estado.s3_status")}</span> </div> <p class="text-ink-soft">${t("estado.s3_desc")}</p> </div> <div class="p-6 rounded-xl border-l-4 border-gray-400 bg-surface-alt"> <div class="flex items-center justify-between mb-2"> <h3 class="text-xl font-bold text-ink">${t("estado.s4_title")}</h3> <span class="px-3 py-1 rounded-full bg-gray-400/20 text-gray-600 text-sm font-semibold">📋 ${t("estado.s4_status")}</span> </div> <p class="text-ink-soft">${t("estado.s4_desc")}</p> </div> </div> </div> </section> ` })}`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/estado/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/estado/index.astro";
const $$url = "/[lang]/estado";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

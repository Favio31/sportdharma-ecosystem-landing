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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("pilares.page_title") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 px-6 bg-surface"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-4xl font-bold text-ink mb-6">${t("pilares.title")}</h1> <p class="text-lg text-ink-soft">${t("pilares.desc")}</p> </div> </section> ` })}`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/pilares/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/pilares/index.astro";
const $$url = "/[lang]/pilares";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("apoya.page_title") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 px-6 bg-surface"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-12"> <div class="text-6xl mb-6">🤝</div> <h1 class="text-4xl md:text-5xl font-bold text-ink mb-4">${t("apoya.title")}</h1> <p class="text-xl text-ink-soft">${t("apoya.subtitle")}</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"> <div class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-alt"> <div class="text-4xl mb-4">💚</div> <h3 class="text-2xl font-bold text-ink mb-3">${t("apoya.c1_title")}</h3> <p class="text-ink-soft mb-6">${t("apoya.c1_desc")}</p> <a href="mailto:favio@sportdharmaecosystem.com" class="inline-block px-6 py-3 rounded-lg bg-[#E8530E] text-white font-semibold hover:bg-[#d14a0c] transition-all"> ${t("apoya.c1_btn")} </a> </div> <div class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-alt"> <div class="text-4xl mb-4">🏛️</div> <h3 class="text-2xl font-bold text-ink mb-3">${t("apoya.c2_title")}</h3> <p class="text-ink-soft mb-6">${t("apoya.c2_desc")}</p> <a href="mailto:favio@sportdharmaecosystem.com?subject=Grant%20Proposal" class="inline-block px-6 py-3 rounded-lg border border-[#E8530E] text-[#E8530E] font-semibold hover:bg-[#E8530E]/10 transition-all"> ${t("apoya.c2_btn")} </a> </div> </div> <div class="p-8 rounded-2xl border-2 border-[#E8530E]/30 bg-surface-alt text-center"> <h3 class="text-2xl font-bold text-ink mb-4">${t("apoya.c3_title")}</h3> <p class="text-ink-soft mb-6">${t("apoya.c3_desc")}</p> <a${addAttribute("/" + lang + "/contacto/", "href")} class="inline-block px-8 py-3 rounded-lg bg-[#E8530E] text-white font-semibold hover:bg-[#d14a0c] transition-all"> ${t("apoya.c3_btn")} </a> </div> </div> </section> ` })} <!-- SECCIÓN: CANALES DE APOYO --> <section class="py-20 px-6 bg-surface-alt transition-colors duration-300"> <div class="max-w-3xl mx-auto text-center"> <h2 class="text-3xl font-bold text-ink mb-4">Sostené la Infraestructura Libre</h2> <p class="text-ink-soft mb-8 text-lg leading-relaxed">
Tu contribución mantiene este ecosistema vivo, con OPEX mínimo, sin publicidad ni venta de datos. 
      Cada recurso se destina directamente a dominio, infraestructura de correo y desarrollo de herramientas soberanas para comunidades aisladas y atletas de resistencia.
</p> <!-- 3 Botones de Apoyo --> <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8"> <a href="https://liberapay.com/SportDharmaEcosystem/donate" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-[#F6C915] text-slate-900 font-bold hover:bg-[#e5b800] transition-all hover:scale-105 shadow-lg"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
Liberapay
</a> <a href="https://ko-fi.com/sportdharmaecosystem" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-[#FF5E5B] text-white font-bold hover:bg-[#e04e4b] transition-all hover:scale-105 shadow-lg"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.143c0 .135-.073.26-.189.326l-4.323 2.49v4.934c0 .134-.072.258-.188.324L9.93 23.333a.376.376 0 0 1-.188.05.376.376 0 0 1-.188-.05l-9.024-5.187a.376.376 0 0 1-.188-.325V2.617c0-.134.073-.258.188-.324L9.554.104a.376.376 0 0 1 .188-.05c.065 0 .13.017.188.05l9.024 5.187a.376.376 0 0 1 .188.325v4.934l4.323-2.49a.364.364 0 0 1 .177-.02z"></path></svg>
Ko-fi
</a> <a href="https://github.com/sponsors/Favio31" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-gray-200 transition-all hover:scale-105 shadow-lg"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
GitHub Sponsor
</a> </div> <p class="text-xs text-ink-soft opacity-70">
Procesado de forma segura, transparente y con OPEX mínimo.
</p> </div> </section>`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/apoya/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/apoya/index.astro";
const $$url = "/[lang]/apoya";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

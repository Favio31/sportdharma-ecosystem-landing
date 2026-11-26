import { a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, c as createAstro, r as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_Bt_anjVH.mjs';
import 'piccolore';
import { $ as $$Layout, u as useTranslations } from '../../chunks/Layout_51J1j7KS.mjs';
import 'clsx';
import * as SI from 'simple-icons';
export { renderers } from '../../renderers.mjs';

const $$RedesSocialesSection = createComponent(($$result, $$props, $$slots) => {
  const canales = [
    { nombre: "Pedalear el Mundo", plataforma: "Facebook", url: "https://www.facebook.com/PedalearElMundo/", img: "/fundador/fb-pedalear.jpg", icono: SI.siFacebook.path },
    { nombre: "Sue\xF1os a Pedal", plataforma: "Facebook", url: "https://www.facebook.com/SuenosAPedal/", img: "/fundador/fb-suenos.jpg", icono: SI.siFacebook.path },
    { nombre: "Favio Marcelo Giorgio Data", plataforma: "YouTube", url: "https://www.youtube.com/@faviomarcelogiorgiodata4684", img: "/fundador/yt-favio1.jpg", icono: SI.siYoutube.path },
    { nombre: "Favio Giorgio", plataforma: "YouTube", url: "https://www.youtube.com/@faviogiorgio8492", img: "/fundador/yt-favio2.jpg", icono: SI.siYoutube.path }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative py-16 px-4 md:px-8 bg-surface"> <div class="relative z-10 max-w-5xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-3">Mis páginas de viaje y canales de YouTube</h2> <p class="text-slate-400 max-w-2xl mx-auto">Crónicas del viaje en Facebook y YouTube</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> ${canales.map((c) => renderTemplate`<a${addAttribute(c.url, "href")} target="_blank" rel="noopener noreferrer" class="group relative flex flex-col bg-transparent hover:bg-violet-900/20 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"> <div class="aspect-video w-full overflow-hidden bg-surface flex items-center justify-center"> <img${addAttribute(c.img, "src")}${addAttribute(c.nombre, "alt")} class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" loading="lazy"> </div> <div class="p-4 flex items-center gap-3"> <svg class="w-5 h-5 shrink-0 text-slate-400 group-hover:text-violet-400 transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> <path${addAttribute(c.icono, "d")}></path> </svg> <div class="flex flex-col min-w-0"> <span class="text-xs font-semibold text-violet-400 uppercase tracking-wider">${c.plataforma}</span> <span class="text-sm font-bold text-slate-200 group-hover:text-white transition-colors truncate">${c.nombre}</span> </div> </div> </a>`)} </div> </div> </section>`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/components/RedesSocialesSection.astro", void 0);

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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("fundador.page_title") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 px-6 bg-surface"> <div class="max-w-5xl mx-auto"> <div class="text-center mb-12"> <div class="flex flex-wrap justify-center items-center gap-6 mb-6"> <img src="/images/fundador/suenos-a-pedal.jpg" alt="Sueños A Pedal Logo" class="w-48 h-48 rounded-2xl object-cover shadow-lg bg-white"> <a href="https://www.facebook.com/PedalearElMundo/" target="_blank" rel="noopener noreferrer" title="Pedalear el Mundo en Facebook" class="block"> <img src="/fundador/fb-pedalear.jpg" alt="Pedalear el Mundo Logo" class="w-48 h-48 rounded-2xl object-cover shadow-lg bg-white transition-all duration-300"> </a> </div> <h1 class="text-4xl md:text-5xl font-bold text-ink mb-4">${t("fundador.title")}</h1> <p class="text-xl text-[#E8530E] font-semibold italic">${t("fundador.tagline")}</p> </div> <div class="prose prose-lg dark:prose-invert max-w-none space-y-6 text-ink-soft text-left"> <p class="text-lg leading-relaxed text-left">${unescapeHTML(t("fundador.p1"))}</p> <p class="text-lg leading-relaxed text-left">${unescapeHTML(t("fundador.p2"))}</p> <p class="text-lg leading-relaxed text-left">${unescapeHTML(t("fundador.p3"))}</p> <p class="text-lg leading-relaxed text-left">${unescapeHTML(t("fundador.p4"))}</p> <p class="text-lg leading-relaxed text-left">${unescapeHTML(t("fundador.p5"))}</p> <p class="text-lg leading-relaxed text-left">${unescapeHTML(t("fundador.p6"))}</p> <p class="text-lg leading-relaxed text-left">${unescapeHTML(t("fundador.p7"))}</p> <p class="text-lg leading-relaxed text-left">${unescapeHTML(t("fundador.p8"))}</p> <!-- Stats --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"> <div class="p-6 rounded-xl border border-black/5 dark:border-white/5 bg-surface-alt text-center"> <div class="text-3xl font-bold text-[#E8530E]">120.000</div> <div class="text-sm text-ink-soft mt-1">${t("fundador.stat_km_label")}</div> </div> <div class="p-6 rounded-xl border border-black/5 dark:border-white/5 bg-surface-alt text-center"> <div class="text-3xl font-bold text-[#E8530E]">84</div> <div class="text-sm text-ink-soft mt-1">${t("fundador.stat_countries_label")}</div> </div> <div class="p-6 rounded-xl border border-black/5 dark:border-white/5 bg-surface-alt text-center"> <div class="text-3xl font-bold text-[#E8530E]">11</div> <div class="text-sm text-ink-soft mt-1">${t("fundador.stat_years_label")}</div> </div> </div> <!-- Galería bento grid 8 fotos --> <div class="my-12"> <h2 class="text-2xl font-bold text-center text-ink mb-6">${t("fundador.gallery_title")}</h2> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[200px] md:[grid-template-areas:'a_a_b_b'_'a_a_b_b'_'c_c_d_e'_'c_c_f_f'_'g_h_f_f']"> <!-- Foto 1: Arriba izquierda (2×2) --> <div class="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 col-span-2 md:[grid-area:a]"> <img src="/images/fundador/foto-1.jpg"${addAttribute(t("fundador.photo1_alt"), "alt")} class="w-full h-full object-cover rounded-xl" loading="lazy"> </div> <!-- Foto 2: Arriba derecha (2×2) --> <div class="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 col-span-2 md:[grid-area:b]"> <img src="/images/fundador/foto-2.jpg"${addAttribute(t("fundador.photo2_alt"), "alt")} class="w-full h-full object-cover rounded-xl" loading="lazy"> </div> <!-- Foto 3: Medio izquierda vertical (2×2) --> <div class="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 col-span-2 md:[grid-area:c]"> <img src="/images/fundador/foto-3.jpg"${addAttribute(t("fundador.photo3_alt"), "alt")} class="w-full h-full object-cover rounded-xl" loading="lazy"> </div> <!-- Foto 4: Medio derecha arriba pequeña (1×1) --> <div class="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 col-span-1 md:[grid-area:d]"> <img src="/images/fundador/foto-4.jpg"${addAttribute(t("fundador.photo4_alt"), "alt")} class="w-full h-full object-cover rounded-xl" loading="lazy"> </div> <!-- Foto 5: Medio derecha arriba pequeña (1×1) --> <div class="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 col-span-1 md:[grid-area:e]"> <img src="/images/fundador/foto-5.jpg"${addAttribute(t("fundador.photo5_alt"), "alt")} class="w-full h-full object-cover rounded-xl" loading="lazy"> </div> <!-- Foto 6: Medio derecha abajo grande (2×2) --> <div class="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 col-span-2 md:[grid-area:f]"> <img src="/images/fundador/foto-6.jpeg"${addAttribute(t("fundador.photo6_alt"), "alt")} class="w-full h-full object-cover rounded-xl" loading="lazy"> </div> <!-- Foto 7: Abajo izquierda pequeña (1×1) --> <div class="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 col-span-1 md:[grid-area:g]"> <img src="/images/fundador/foto-7.jpg"${addAttribute(t("fundador.photo7_alt"), "alt")} class="w-full h-full object-cover rounded-xl" loading="lazy"> </div> <!-- Foto 8: Abajo izquierda pequeña (1×1) --> <div class="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 col-span-1 md:[grid-area:h]"> <img src="/images/fundador/foto-8.jpeg"${addAttribute(t("fundador.photo8_alt"), "alt")} class="w-full h-full object-cover rounded-xl" loading="lazy"> </div> </div> </div> <!-- CTA --> <div class="mt-12 text-center"> ${renderComponent($$result2, "RedesSocialesSection", $$RedesSocialesSection, {})} <a${addAttribute("/" + lang + "/#notificaciones", "href")} class="inline-block bg-[#E8530E] hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"> ${t("fundador.cta")} </a> </div> </div> </div> </section> ` })}`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/fundador/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/fundador/index.astro";
const $$url = "/[lang]/fundador";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

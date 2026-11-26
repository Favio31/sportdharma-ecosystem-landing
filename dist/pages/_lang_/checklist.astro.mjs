import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderScript } from '../../chunks/astro/server_Bt_anjVH.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_51J1j7KS.mjs';
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
  const fullList = [
    { id: "bike", title: "1. Revisi\xF3n de la bicicleta", desc: "Frenos, presi\xF3n de cubiertas, cadena lubricada y ajuste de cambios. Una bici segura es tu principal aliada." },
    { id: "gear", title: "2. Revisi\xF3n del equipamiento", desc: "Alforjas bien sujetas, kit de reparaci\xF3n, c\xE1mara de repuesto, documentaci\xF3n y agua suficiente para la etapa." },
    { id: "warmup", title: "3. Calentamiento", desc: "10 minutos de movilidad articular y estiramientos din\xE1micos. Prepara tus m\xFAsculos y previene lesiones en ruta." },
    { id: "quote", title: "4. Frase del d\xEDa", desc: "Conecta con tu prop\xF3sito. Lee una reflexi\xF3n, un verso o un pensamiento que gu\xEDe tu estado mental durante el pedaleo." },
    { id: "map", title: "5. Abrir OpenStreetMap", desc: "Descarga la zona de hoy. Verifica la ruta, los puntos de agua y los posibles refugios. Navegaci\xF3n 100% offline y soberana." },
    { id: "weather", title: "6. App de clima", desc: "Revis\xE1 el pron\xF3stico de las pr\xF3ximas 6 horas. Anticipate al viento, la lluvia o el calor extremo para ajustar tu ritmo." },
    { id: "health", title: "7. Cuidado f\xEDsico", desc: "Hidrataci\xF3n antes de salir. Proteger la piel del sol. Escuchar a tu cuerpo: si hay dolor agudo, es momento de parar." }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "title": "Lista de Verificaci\xF3n | SportDharma" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-b from-[#2C1810] to-[#1a0f0a] py-20 px-4 md:px-8"> <div class="max-w-3xl mx-auto"> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Antes de Pedalear</h1> <p class="text-amber-200/80 text-lg">Marcá cada ítem a medida que lo completás. Tu navegador guardará tu progreso localmente.</p> </div> <div class="space-y-4"> ${fullList.map((item) => renderTemplate`<label class="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group"> <input type="checkbox"${addAttribute(item.id, "id")} class="checklist-item mt-1 w-5 h-5 rounded border-gray-500 text-amber-500 focus:ring-amber-500 bg-transparent"> <div> <h3 class="text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">${item.title}</h3> <p class="text-amber-100/70 leading-relaxed">${item.desc}</p> </div> </label>`)} </div> <div class="mt-12 text-center"> <button id="resetBtn" class="text-sm text-amber-400 hover:text-amber-300 underline transition-colors">Reiniciar lista para mañana</button> </div> </div> </main> ${renderScript($$result2, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/checklist/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/checklist/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/checklist/index.astro";
const $$url = "/[lang]/checklist";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

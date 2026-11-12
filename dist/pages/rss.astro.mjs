import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bt_anjVH.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DF7ekleg.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "RSS Feed | SportDharma Ecosystem" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 px-6 bg-surface-alt transition-colors duration-300"> <div class="max-w-3xl mx-auto text-center"> <h1 class="text-4xl font-bold text-ink mb-6">📡 Suscripción vía RSS</h1> <p class="text-lg text-ink-soft mb-8">
El RSS es la forma más pura, privada y descentralizada de seguir nuestras novedades. 
        Sin algoritmos, sin emails, sin tracking.
</p> <div class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-transparent mb-8"> <p class="text-sm text-ink-soft mb-4">
Copiá esta URL en tu lector RSS favorito (Feedly, Inoreader, NetNewsWire):
</p> <div class="relative"> <code class="block bg-black/5 dark:bg-white/5 p-4 rounded-lg text-[#E8530E] font-mono text-sm break-all select-all border border-black/10 dark:border-white/10">
https://www.sportdharmaecosystem.com/rss.xml
</code> </div> </div> <div class="space-y-4"> <a href="/rss.xml" target="_blank" rel="noopener" class="inline-block text-sm text-ink-soft hover:text-[#E8530E] underline">
Ver el archivo XML crudo (para desarrolladores)
</a> <p class="text-xs text-ink-soft mt-6">
¿Qué es RSS? Es un formato estándar que permite a las aplicaciones leer actualizaciones de sitios web 
          de forma automática y privada.
</p> </div> </div> </section> ` })}`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/rss/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/rss/index.astro";
const $$url = "/rss";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createAstro, a as createComponent, e as renderScript, f as renderHead, b as renderTemplate } from '../chunks/astro/server_Bt_anjVH.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.sportdharmaecosystem.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  Astro2.redirect("/es/", 301);
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta http-equiv="refresh" content="0;url=/es/"><title>Redirigiendo a SportDharma Ecosystem...</title>${renderScript($$result, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/index.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body style="font-family: sans-serif; text-align: center; padding: 50px;"> <p>Redirigiendo a <a href="/es/">la versión en español</a>...</p> </body></html>`;
}, "C:/Users/User/sportdharma-ecosystem-landing/src/pages/index.astro", void 0);

const $$file = "C:/Users/User/sportdharma-ecosystem-landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

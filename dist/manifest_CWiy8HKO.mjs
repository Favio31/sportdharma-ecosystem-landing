import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_Bt_anjVH.mjs';
import 'clsx';
import './chunks/shared_9gEenf6c.mjs';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/User/sportdharma-ecosystem-landing/","cacheDir":"file:///C:/Users/User/sportdharma-ecosystem-landing/node_modules/.astro/","outDir":"file:///C:/Users/User/sportdharma-ecosystem-landing/dist/","srcDir":"file:///C:/Users/User/sportdharma-ecosystem-landing/src/","publicDir":"file:///C:/Users/User/sportdharma-ecosystem-landing/public/","buildClientDir":"file:///C:/Users/User/sportdharma-ecosystem-landing/dist/client/","buildServerDir":"file:///C:/Users/User/sportdharma-ecosystem-landing/dist/server/","adapterName":"","routes":[{"file":"file:///C:/Users/User/sportdharma-ecosystem-landing/dist/rss/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.YjL-9IqV.css"}],"routeData":{"route":"/rss","isIndex":true,"type":"page","pattern":"^\\/rss\\/?$","segments":[[{"content":"rss","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss/index.astro","pathname":"/rss","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/User/sportdharma-ecosystem-landing/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/User/sportdharma-ecosystem-landing/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.sportdharmaecosystem.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/User/sportdharma-ecosystem-landing/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/apoya/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/app/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/comunidad/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/contacto/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/descubri/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/ecosistema/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/estado/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/fundador/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/manifiesto/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/masf/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/noticias/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/pilares/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/rss/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/[lang]/web/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/rss/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/[lang]/apoya/index@_@astro":"pages/_lang_/apoya.astro.mjs","\u0000@astro-page:src/pages/[lang]/app/index@_@astro":"pages/_lang_/app.astro.mjs","\u0000@astro-page:src/pages/[lang]/comunidad/index@_@astro":"pages/_lang_/comunidad.astro.mjs","\u0000@astro-page:src/pages/[lang]/contacto/index@_@astro":"pages/_lang_/contacto.astro.mjs","\u0000@astro-page:src/pages/[lang]/descubri/index@_@astro":"pages/_lang_/descubri.astro.mjs","\u0000@astro-page:src/pages/[lang]/ecosistema/index@_@astro":"pages/_lang_/ecosistema.astro.mjs","\u0000@astro-page:src/pages/[lang]/estado/index@_@astro":"pages/_lang_/estado.astro.mjs","\u0000@astro-page:src/pages/[lang]/fundador/index@_@astro":"pages/_lang_/fundador.astro.mjs","\u0000@astro-page:src/pages/[lang]/index@_@astro":"pages/_lang_.astro.mjs","\u0000@astro-page:src/pages/[lang]/manifiesto/index@_@astro":"pages/_lang_/manifiesto.astro.mjs","\u0000@astro-page:src/pages/[lang]/masf/index@_@astro":"pages/_lang_/masf.astro.mjs","\u0000@astro-page:src/pages/[lang]/noticias/index@_@astro":"pages/_lang_/noticias.astro.mjs","\u0000@astro-page:src/pages/[lang]/pilares/index@_@astro":"pages/_lang_/pilares.astro.mjs","\u0000@astro-page:src/pages/[lang]/rss/index@_@astro":"pages/_lang_/rss.astro.mjs","\u0000@astro-page:src/pages/[lang]/web/index@_@astro":"pages/_lang_/web.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/rss/index@_@astro":"pages/rss.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astrojs-manifest":"manifest_CWiy8HKO.mjs","C:/Users/User/sportdharma-ecosystem-landing/src/components/SWRegister.astro?astro&type=script&index=0&lang.ts":"_astro/SWRegister.astro_astro_type_script_index_0_lang.Vkn15SiB.js","C:/Users/User/sportdharma-ecosystem-landing/src/components/sections/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BomR2hdb.js","C:/Users/User/sportdharma-ecosystem-landing/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BuCNLMgy.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/User/sportdharma-ecosystem-landing/src/components/SWRegister.astro?astro&type=script&index=0&lang.ts","\"serviceWorker\"in navigator&&window.addEventListener(\"load\",()=>{navigator.serviceWorker.register(\"/sw.js\").then(e=>console.log(\"SW registrado:\",e)).catch(e=>console.log(\"SW error:\",e))});"],["C:/Users/User/sportdharma-ecosystem-landing/src/components/sections/Header.astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"mobile-menu-btn\"),s=document.getElementById(\"mobile-menu\");n&&s&&(n.addEventListener(\"click\",()=>{s.classList.toggle(\"hidden\")}),s.querySelectorAll(\"a\").forEach(e=>{e.addEventListener(\"click\",()=>{s.classList.add(\"hidden\")})}));const m=document.documentElement,o=matchMedia(\"(prefers-color-scheme: dark)\"),l=()=>localStorage.getItem(\"theme\")||\"system\";function a(e){const d=e===\"dark\"||e===\"system\"&&o.matches;m.classList.toggle(\"dark\",d),localStorage.setItem(\"theme\",e),document.querySelectorAll(\"[data-theme-btn]\").forEach(t=>{const c=t.dataset.themeBtn===e;t.classList.toggle(\"bg-white/20\",c),t.classList.toggle(\"text-[#E8530E]\",c),t.setAttribute(\"aria-pressed\",String(c))})}document.querySelectorAll(\"[data-theme-btn]\").forEach(e=>e.addEventListener(\"click\",()=>a(e.dataset.themeBtn)));o.addEventListener(\"change\",()=>{l()===\"system\"&&a(\"system\")});a(l());"],["C:/Users/User/sportdharma-ecosystem-landing/src/pages/index.astro?astro&type=script&index=0&lang.ts","(window.location.pathname===\"/\"||window.location.pathname===\"/index.html\")&&window.location.replace(\"/es/\");"]],"assets":["/file:///C:/Users/User/sportdharma-ecosystem-landing/dist/rss/index.html","/file:///C:/Users/User/sportdharma-ecosystem-landing/dist/rss.xml","/file:///C:/Users/User/sportdharma-ecosystem-landing/dist/index.html"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["es","en","fr","pt","de","it"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"CV+eylIHVy/p5JImTKtT2ALanb/SuOxQvXOeSv3OJQc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

import type { APIContext, NextFunction } from 'astro';

export async function onRequest(context: APIContext, next: NextFunction) {
  const { url, request } = context;
  const pathname = new URL(url).pathname;
  
  // Si es la raíz, dejar que la redirección actual funcione
  if (pathname === '/') {
    return next();
  }
  
  // Si ya tiene prefijo de idioma, continuar normal
  const langPattern = /^\/(es|en|fr|pt|de|it)(\/|$)/;
  if (langPattern.test(pathname)) {
    return next();
  }
  
  // Si NO tiene prefijo de idioma, redirigir a /es/
  const newPath = `/es${pathname}`;
  return Response.redirect(new URL(newPath, url).toString(), 301);
}
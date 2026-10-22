import { dictionaries, defaultLocale, locales } from './index.js';

export function getLangFromUrl(url) {
  // Navegación segura: si url o pathname es undefined, usa '/'
  const pathname = url?.pathname || '/';
  const parts = pathname.split('/');
  const lang = parts[1]; // El idioma está después del primer '/'
  
  if (lang && locales.includes(lang)) return lang;
  return defaultLocale;
}

export function useTranslations(lang) {
  return function t(key) {
    const keys = key.split('.');
    let value = dictionaries[lang] || dictionaries[defaultLocale];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key; // Fallback a la clave si no se encuentra
  };
}

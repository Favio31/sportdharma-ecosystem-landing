import { dictionaries, defaultLocale, locales } from './index.js';

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (locales.includes(lang)) return lang;
  return defaultLocale;
}

export function useTranslations(lang) {
  return function t(key) {
    const keys = key.split('.');
    let value = dictionaries[lang] || dictionaries[defaultLocale];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key; // Si no encuentra la clave, devuelve la clave misma como fallback
  };
}

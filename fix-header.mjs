import { writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const HEADER_FILE = path.join(ROOT, 'src', 'components', 'sections', 'Header.astro');
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

// 1. Refactorizar Header.astro
let headerContent = await readFile(HEADER_FILE, 'utf8');

// Agregar import y uso de t() en el frontmatter
headerContent = headerContent.replace(
  "const { lang = 'es' } = Astro.props;",
  `import { useTranslations } from '../../i18n/utils.js';

const { lang = 'es' } = Astro.props;
const t = useTranslations(lang);`
);

// Reemplazar textos hardcodeados
const replacements = [
  { old: 'Pilares', key: 'header.nav_pillars' },
  { old: 'Ecosistema', key: 'header.nav_ecosystem' },
  { old: 'Contacto', key: 'header.nav_contact' },
  { old: 'Idioma:', key: 'header.mobile_lang_label' },
  { old: 'Tema:', key: 'header.mobile_theme_label' },
  { old: 'Tema sistema', key: 'header.theme_system' },
  { old: 'Tema claro', key: 'header.theme_light' },
  { old: 'Tema oscuro', key: 'header.theme_dark' },
  { old: 'Abrir menú', key: 'header.open_menu' }
];

for (const { old, key } of replacements) {
  // Usamos una regex que coincide con la palabra exacta para no reemplazar partes de otras palabras
  const regex = new RegExp(`(?<=>\\s*)${old}(?=\\s*<)`, 'g');
  // Para aria-labels y textos sueltos
  const regexLabel = new RegExp(`"${old}"`, 'g');
  
  headerContent = headerContent.replace(regex, `{t('${key}')}`);
  headerContent = headerContent.replace(regexLabel, `"{t('${key}')}"`);
}

await writeFile(HEADER_FILE, headerContent, 'utf8');
console.log('✅ Header.astro refactorizado con t()');

// 2. Actualizar JSONs con las nuevas claves del header
const translations = {
  es: { nav_pillars: 'Pilares', nav_ecosystem: 'Ecosistema', nav_contact: 'Contacto', mobile_lang_label: 'Idioma:', mobile_theme_label: 'Tema:', theme_system: 'Tema sistema', theme_light: 'Tema claro', theme_dark: 'Tema oscuro', open_menu: 'Abrir menú' },
  en: { nav_pillars: 'Pillars', nav_ecosystem: 'Ecosystem', nav_contact: 'Contact', mobile_lang_label: 'Language:', mobile_theme_label: 'Theme:', theme_system: 'System theme', theme_light: 'Light theme', theme_dark: 'Dark theme', open_menu: 'Open menu' },
  fr: { nav_pillars: 'Piliers', nav_ecosystem: 'Écosystème', nav_contact: 'Contact', mobile_lang_label: 'Langue :', mobile_theme_label: 'Thème :', theme_system: 'Thème système', theme_light: 'Thème clair', theme_dark: 'Thème sombre', open_menu: 'Ouvrir le menu' },
  pt: { nav_pillars: 'Pilares', nav_ecosystem: 'Ecossistema', nav_contact: 'Contato', mobile_lang_label: 'Idioma:', mobile_theme_label: 'Tema:', theme_system: 'Tema sistema', theme_light: 'Tema claro', theme_dark: 'Tema escuro', open_menu: 'Abrir menu' },
  de: { nav_pillars: 'Säulen', nav_ecosystem: 'Ökosystem', nav_contact: 'Kontakt', mobile_lang_label: 'Sprache:', mobile_theme_label: 'Thema:', theme_system: 'Systemthema', theme_light: 'Helles Thema', theme_dark: 'Dunkles Thema', open_menu: 'Menü öffnen' },
  it: { nav_pillars: 'Pilastri', nav_ecosystem: 'Ecosistema', nav_contact: 'Contatto', mobile_lang_label: 'Lingua:', mobile_theme_label: 'Tema:', theme_system: 'Tema sistema', theme_light: 'Tema chiaro', theme_dark: 'Tema scuro', open_menu: 'Apri menu' }
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = {};
  try { existing = JSON.parse(await readFile(filePath, 'utf8')); } catch (e) {}
  
  existing.header = { ...existing.header, ...translations[lang] };
  
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado con claves del header`);
}

console.log('\n🎉 Header completamente internacionalizado');
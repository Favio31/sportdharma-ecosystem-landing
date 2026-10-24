import { writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const HERO_FILE = path.join(ROOT, 'src', 'components', 'sections', 'Hero.astro');
const LAYOUT_FILE = path.join(ROOT, 'src', 'layouts', 'Layout.astro');
const FOOTER_FILE = path.join(ROOT, 'src', 'components', 'Footer.astro');
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

// 1. Refactorizar Hero.astro
let heroContent = await readFile(HERO_FILE, 'utf8');
const heroReplacements = [
  { old: 'Software libre', key: 'hero.badge_1' },
  { old: 'Local-first', key: 'hero.badge_2' },
  { old: 'Privacidad total', key: 'hero.badge_3' },
  { old: 'Infraestructura libre para', key: 'hero.title_1' },
  { old: 'quienes viven en libertad', key: 'hero.title_2' },
  { old: 'Nueve pilares. Arquitectura soberana. Resiliencia outdoor. \n        Un ecosistema abierto para deportistas, equipos de primera respuesta, \n        comunidades aisladas y territorios sin conectividad.', key: 'hero.subtitle' },
  { old: 'Explorar los Nueve Pilares', key: 'hero.btn_1' },
  { old: 'Ver el Ecosistema', key: 'hero.btn_2' },
  { old: 'Pilares', key: 'hero.stat_1' },
  { old: 'Código Abierto', key: 'hero.stat_2' },
  { old: 'Cookies', key: 'hero.stat_3' }
];
for (const { old, key } of heroReplacements) {
  heroContent = heroContent.replace(old, `{t('${key}')}`);
}
await writeFile(HERO_FILE, heroContent, 'utf8');
console.log('✅ Hero.astro refactorizado');

// 2. Refactorizar Layout.astro (Meta tags)
let layoutContent = await readFile(LAYOUT_FILE, 'utf8');
layoutContent = layoutContent.replace(
  'description = "SportDharma Ecosystem: Software libre, local-first y privacidad total para deportistas outdoor y comunidades."',
  'description = t("meta.description")'
);
layoutContent = layoutContent.replace(
  '<meta property="og:locale" content="es_AR" />',
  '<meta property="og:locale" content={t("meta.locale")} />'
);
await writeFile(LAYOUT_FILE, layoutContent, 'utf8');
console.log('✅ Layout.astro (meta tags) refactorizado');

// 3. Refactorizar Footer.astro (si existe)
try {
  let footerContent = await readFile(FOOTER_FILE, 'utf8');
  const footerReplacements = [
    { old: 'Infraestructura libre para quienes viven en ruta. Arquitectura local-first y resiliencia outdoor.', key: 'footer.desc' },
    { old: 'Enlaces', key: 'footer.links_title' },
    { old: 'Licencia', key: 'footer.license_title' },
    { old: 'Código bajo licencia', key: 'footer.license_text_1' },
    { old: 'Software soberano, sin tracking.', key: 'footer.license_text_2' },
    { old: 'Hecho con Astro + Tailwind.', key: 'footer.copyright' }
  ];
  for (const { old, key } of footerReplacements) {
    footerContent = footerContent.replace(old, `{t('${key}')}`);
  }
  await writeFile(FOOTER_FILE, footerContent, 'utf8');
  console.log('✅ Footer.astro refactorizado');
} catch (e) {
  console.log('⚠️ Footer.astro no encontrado o ya refactorizado');
}

// 4. Actualizar JSONs con las nuevas claves
const translations = {
  es: {
    hero: { badge_1: 'Software libre', badge_2: 'Local-first', badge_3: 'Privacidad total', title_1: 'Infraestructura libre para', title_2: 'quienes viven en libertad', subtitle: 'Nueve pilares. Arquitectura soberana. Resiliencia outdoor. Un ecosistema abierto para deportistas, equipos de primera respuesta, comunidades aisladas y territorios sin conectividad.', btn_1: 'Explorar los Nueve Pilares', btn_2: 'Ver el Ecosistema', stat_1: 'Pilares', stat_2: 'Código Abierto', stat_3: 'Cookies' },
    meta: { description: 'SportDharma Ecosystem: Software libre, local-first y privacidad total para deportistas outdoor y comunidades.', locale: 'es_AR' },
    footer: { desc: 'Infraestructura libre para quienes viven en ruta. Arquitectura local-first y resiliencia outdoor.', links_title: 'Enlaces', license_title: 'Licencia', license_text_1: 'Código bajo licencia', license_text_2: 'Software soberano, sin tracking.', copyright: 'Hecho con Astro + Tailwind.' }
  },
  en: {
    hero: { badge_1: 'Free Software', badge_2: 'Local-first', badge_3: 'Total Privacy', title_1: 'Free infrastructure for', title_2: 'those who live in freedom', subtitle: 'Nine pillars. Sovereign architecture. Outdoor resilience. An open ecosystem for athletes, first responders, isolated communities, and disconnected territories.', btn_1: 'Explore the Nine Pillars', btn_2: 'View the Ecosystem', stat_1: 'Pillars', stat_2: 'Open Source', stat_3: 'Cookies' },
    meta: { description: 'SportDharma Ecosystem: Free software, local-first, and total privacy for outdoor athletes and communities.', locale: 'en_US' },
    footer: { desc: 'Free infrastructure for those who live on the road. Local-first architecture and outdoor resilience.', links_title: 'Links', license_title: 'License', license_text_1: 'Code under', license_text_2: 'Sovereign software, no tracking.', copyright: 'Made with Astro + Tailwind.' }
  },
  fr: {
    hero: { badge_1: 'Logiciel libre', badge_2: 'Local-first', badge_3: 'Confidentialité totale', title_1: 'Infrastructure libre pour', title_2: 'ceux qui vivent en liberté', subtitle: 'Neuf piliers. Architecture souveraine. Résilience outdoor. Un écosystème ouvert pour les sportifs, les premiers intervenants, les communautés isolées et les territoires sans connectivité.', btn_1: 'Explorer les Neuf Piliers', btn_2: 'Voir l\'Écosystème', stat_1: 'Piliers', stat_2: 'Open Source', stat_3: 'Cookies' },
    meta: { description: 'SportDharma Ecosystem : Logiciel libre, local-first et confidentialité totale pour les sportifs outdoor et les communautés.', locale: 'fr_FR' },
    footer: { desc: 'Infrastructure libre pour ceux qui vivent sur la route. Architecture local-first et résilience outdoor.', links_title: 'Liens', license_title: 'Licence', license_text_1: 'Code sous licence', license_text_2: 'Logiciel souverain, sans tracking.', copyright: 'Fait avec Astro + Tailwind.' }
  },
  pt: {
    hero: { badge_1: 'Software livre', badge_2: 'Local-first', badge_3: 'Privacidade total', title_1: 'Infraestrutura livre para', title_2: 'quem vive em liberdade', subtitle: 'Nove pilares. Arquitetura soberana. Resiliência outdoor. Um ecossistema aberto para atletas, equipes de primeira resposta, comunidades isoladas e territórios sem conectividade.', btn_1: 'Explorar os Nove Pilares', btn_2: 'Ver o Ecossistema', stat_1: 'Pilares', stat_2: 'Código Aberto', stat_3: 'Cookies' },
    meta: { description: 'SportDharma Ecosystem: Software livre, local-first e privacidade total para atletas outdoor e comunidades.', locale: 'pt_BR' },
    footer: { desc: 'Infraestrutura livre para quem vive na estrada. Arquitetura local-first e resiliência outdoor.', links_title: 'Links', license_title: 'Licença', license_text_1: 'Código sob licença', license_text_2: 'Software soberano, sem tracking.', copyright: 'Feito com Astro + Tailwind.' }
  },
  de: {
    hero: { badge_1: 'Freie Software', badge_2: 'Local-first', badge_3: 'Totale Privatsphäre', title_1: 'Freie Infrastruktur für', title_2: 'die, die in Freiheit leben', subtitle: 'Neun Säulen. Souveräne Architektur. Outdoor-Resilienz. Ein offenes Ökosystem für Athleten, Ersthelfer, isolierte Gemeinden und Gebiete ohne Konnektivität.', btn_1: 'Die Neun Säulen entdecken', btn_2: 'Das Ökosystem ansehen', stat_1: 'Säulen', stat_2: 'Open Source', stat_3: 'Cookies' },
    meta: { description: 'SportDharma Ecosystem: Freie Software, Local-first und totale Privatsphäre für Outdoor-Athleten und Gemeinden.', locale: 'de_DE' },
    footer: { desc: 'Freie Infrastruktur für diejenigen, die unterwegs leben. Local-first-Architektur und Outdoor-Resilienz.', links_title: 'Links', license_title: 'Lizenz', license_text_1: 'Code unter', license_text_2: 'Souveräne Software, kein Tracking.', copyright: 'Gemacht mit Astro + Tailwind.' }
  },
  it: {
    hero: { badge_1: 'Software libero', badge_2: 'Local-first', badge_3: 'Privacy totale', title_1: 'Infrastruttura libera per', title_2: 'chi vive in libertà', subtitle: 'Nove pilastri. Architettura sovrana. Resilienza outdoor. Un ecosistema aperto per atleti, soccorritori, comunità isolate e territori senza connettività.', btn_1: 'Esplora i Nove Pilastri', btn_2: 'Vedi l\'Ecosistema', stat_1: 'Pilastri', stat_2: 'Open Source', stat_3: 'Cookies' },
    meta: { description: 'SportDharma Ecosystem: Software libero, local-first e privacy totale per atleti outdoor e comunità.', locale: 'it_IT' },
    footer: { desc: 'Infrastruttura libera per chi vive in viaggio. Architettura local-first e resilienza outdoor.', links_title: 'Link', license_title: 'Licenza', license_text_1: 'Codice sotto licenza', license_text_2: 'Software sovrano, senza tracking.', copyright: 'Realizzato con Astro + Tailwind.' }
  }
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = {};
  try { existing = JSON.parse(await readFile(filePath, 'utf8')); } catch (e) {}
  
  existing.hero = { ...existing.hero, ...translations[lang].hero };
  existing.meta = { ...existing.meta, ...translations[lang].meta };
  existing.footer = { ...existing.footer, ...translations[lang].footer };
  
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado`);
}
console.log('\n🎉 Hero, Layout y Footer completamente internacionalizados');
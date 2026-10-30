import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const I18N_DIR = join(__dirname, 'src', 'i18n');

const newSections = {
  es: {
    friendly_pages: { title: "Páginas Amigas", desc: "Proyectos y comunidades que comparten nuestra visión de software libre y resiliencia.", links: [{ name: "Proton Foundation", url: "https://proton.me" }, { name: "GNU/Linux", url: "https://www.gnu.org" }] },
    social_media: { title: "Conectá con Nosotros", desc: "Seguinos en nuestras plataformas oficiales y páginas registradas.", links: [{ name: "LinkedIn (Favio M. Giorgio)", url: "https://www.linkedin.com/in/faviomgiorgiodata" }, { name: "GitHub (SportDharma)", url: "https://github.com" }] }
  },
  en: {
    friendly_pages: { title: "Friendly Pages", desc: "Projects and communities sharing our vision of free software and resilience.", links: [{ name: "Proton Foundation", url: "https://proton.me" }, { name: "GNU/Linux", url: "https://www.gnu.org" }] },
    social_media: { title: "Connect With Us", desc: "Follow us on our official platforms and registered pages.", links: [{ name: "LinkedIn (Favio M. Giorgio)", url: "https://www.linkedin.com/in/faviomgiorgiodata" }, { name: "GitHub (SportDharma)", url: "https://github.com" }] }
  },
  fr: {
    friendly_pages: { title: "Pages Amies", desc: "Projets et communautés partageant notre vision du logiciel libre et de la résilience.", links: [{ name: "Proton Foundation", url: "https://proton.me" }, { name: "GNU/Linux", url: "https://www.gnu.org" }] },
    social_media: { title: "Connectez-vous avec nous", desc: "Suivez-nous sur nos plateformes officielles.", links: [{ name: "LinkedIn (Favio M. Giorgio)", url: "https://www.linkedin.com/in/faviomgiorgiodata" }, { name: "GitHub (SportDharma)", url: "https://github.com" }] }
  },
  pt: {
    friendly_pages: { title: "Páginas Amigas", desc: "Projetos e comunidades que compartilham nossa visão de software livre.", links: [{ name: "Proton Foundation", url: "https://proton.me" }, { name: "GNU/Linux", url: "https://www.gnu.org" }] },
    social_media: { title: "Conecte-se Conosco", desc: "Siga-nos em nossas plataformas oficiais.", links: [{ name: "LinkedIn (Favio M. Giorgio)", url: "https://www.linkedin.com/in/faviomgiorgiodata" }, { name: "GitHub (SportDharma)", url: "https://github.com" }] }
  },
  de: {
    friendly_pages: { title: "Freundliche Seiten", desc: "Projekte und Gemeinschaften, die unsere Vision von freier Software teilen.", links: [{ name: "Proton Foundation", url: "https://proton.me" }, { name: "GNU/Linux", url: "https://www.gnu.org" }] },
    social_media: { title: "Verbinden Sie sich mit uns", desc: "Folgen Sie uns auf unseren offiziellen Plattformen.", links: [{ name: "LinkedIn (Favio M. Giorgio)", url: "https://www.linkedin.com/in/faviomgiorgiodata" }, { name: "GitHub (SportDharma)", url: "https://github.com" }] }
  },
  it: {
    friendly_pages: { title: "Pagine Amiche", desc: "Progetti e comunità che condividono la nostra visione del software libero.", links: [{ name: "Proton Foundation", url: "https://proton.me" }, { name: "GNU/Linux", url: "https://www.gnu.org" }] },
    social_media: { title: "Connettiti con Noi", desc: "Seguici sulle nostre piattaforme ufficiali.", links: [{ name: "LinkedIn (Favio M. Giorgio)", url: "https://www.linkedin.com/in/faviomgiorgiodata" }, { name: "GitHub (SportDharma)", url: "https://github.com" }] }
  }
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = join(I18N_DIR, `${lang}.json`);
  let existing = JSON.parse(await readFile(filePath, 'utf8'));
  existing.home = { ...existing.home, ...newSections[lang] };
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado`);
}
console.log('\n🎉 Nuevas secciones agregadas a todos los idiomas');
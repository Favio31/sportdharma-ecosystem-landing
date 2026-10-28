import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

const newTranslations = {
  es: {
    photo7_alt: 'Aventura en ruta',
    photo8_alt: 'Encuentro en el camino'
  },
  en: {
    photo7_alt: 'Adventure on the road',
    photo8_alt: 'Encounter on the way'
  },
  fr: {
    photo7_alt: 'Aventure sur la route',
    photo8_alt: 'Rencontre sur le chemin'
  },
  pt: {
    photo7_alt: 'Aventura na estrada',
    photo8_alt: 'Encontro no caminho'
  },
  de: {
    photo7_alt: 'Abenteuer auf der Straße',
    photo8_alt: 'Begegnung unterwegs'
  },
  it: {
    photo7_alt: 'Avventura sulla strada',
    photo8_alt: 'Incontro lungo il cammino'
  }
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = JSON.parse(await readFile(filePath, 'utf8'));
  existing.fundador = { ...existing.fundador, ...newTranslations[lang] };
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado`);
}
console.log('\n Traducciones de foto-7 y foto-8 completadas');
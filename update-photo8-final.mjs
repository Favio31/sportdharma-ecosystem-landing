import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

const updatedTranslations = {
  es: {
    photo8_alt: 'Encuentro con grupo'
  },
  en: {
    photo8_alt: 'Encounter with group'
  },
  fr: {
    photo8_alt: 'Rencontre avec un groupe'
  },
  pt: {
    photo8_alt: 'Encontro com grupo'
  },
  de: {
    photo8_alt: 'Begegnung mit Gruppe'
  },
  it: {
    photo8_alt: 'Incontro con gruppo'
  }
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = JSON.parse(await readFile(filePath, 'utf8'));
  existing.fundador = { ...existing.fundador, ...updatedTranslations[lang] };
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado`);
}
console.log('\n Traducciones de foto-8 corregidas: Encuentro con grupo');
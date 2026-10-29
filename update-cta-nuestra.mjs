import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

const newCTA = {
  es: "¡Te invito a ser parte de nuestra comunidad!",
  en: "I invite you to be part of our community!",
  fr: "Je vous invite à faire partie de notre communauté !",
  pt: "Convido você a fazer parte da nossa comunidade!",
  de: "Ich lade Sie ein, Teil unserer Gemeinschaft zu werden!",
  it: "Ti invito a far parte della nostra comunità!"
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = JSON.parse(await readFile(filePath, 'utf8'));
  existing.fundador.cta = newCTA[lang];
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado`);
}
console.log('\n🎉 CTA actualizado: "nuestra comunidad" en 6 idiomas');
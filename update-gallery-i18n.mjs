import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

const galleryTranslations = {
  es: {
    gallery_title: 'Momentos que definieron el camino',
    photo1_alt: 'Momento épico del viaje',
    photo2_alt: 'Aventura en ruta',
    photo3_alt: 'Paisaje inolvidable',
    photo4_alt: 'Encuentro en el camino',
    photo5_alt: 'Desafío superado',
    photo6_alt: 'Horizonte infinito'
  },
  en: {
    gallery_title: 'Moments that defined the journey',
    photo1_alt: 'Epic moment of the journey',
    photo2_alt: 'Adventure on the road',
    photo3_alt: 'Unforgettable landscape',
    photo4_alt: 'Encounter on the way',
    photo5_alt: 'Challenge overcome',
    photo6_alt: 'Infinite horizon'
  },
  fr: {
    gallery_title: 'Moments qui ont défini le chemin',
    photo1_alt: 'Moment épique du voyage',
    photo2_alt: 'Aventure sur la route',
    photo3_alt: 'Paysage inoubliable',
    photo4_alt: 'Rencontre sur le chemin',
    photo5_alt: 'Défi relevé',
    photo6_alt: 'Horizon infini'
  },
  pt: {
    gallery_title: 'Momentos que definiram o caminho',
    photo1_alt: 'Momento épico da viagem',
    photo2_alt: 'Aventura na estrada',
    photo3_alt: 'Paisagem inesquecível',
    photo4_alt: 'Encontro no caminho',
    photo5_alt: 'Desafio superado',
    photo6_alt: 'Horizonte infinito'
  },
  de: {
    gallery_title: 'Momente, die den Weg definiert haben',
    photo1_alt: 'Epischer Moment der Reise',
    photo2_alt: 'Abenteuer auf der Straße',
    photo3_alt: 'Unvergessliche Landschaft',
    photo4_alt: 'Begegnung unterwegs',
    photo5_alt: 'Herausforderung gemeistert',
    photo6_alt: 'Unendlicher Horizont'
  },
  it: {
    gallery_title: 'Momenti che hanno definito il cammino',
    photo1_alt: 'Momento epico del viaggio',
    photo2_alt: 'Avventura sulla strada',
    photo3_alt: 'Paesaggio indimenticabile',
    photo4_alt: 'Incontro lungo il cammino',
    photo5_alt: 'Sfida superata',
    photo6_alt: 'Orizzonte infinito'
  }
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = JSON.parse(await readFile(filePath, 'utf8'));
  existing.fundador = { ...existing.fundador, ...galleryTranslations[lang] };
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado`);
}
console.log('\n🎉 Traducciones de galería completadas');
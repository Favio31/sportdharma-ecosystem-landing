import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

const galleryTranslations = {
  es: {
    gallery_title: 'Momentos que definieron el camino',
    photo1_alt: 'Logo de Sueños A Pedal - Vuelta al mundo en bicicleta',
    photo2_alt: 'Recorriendo el mundo en bicicleta',
    photo3_alt: 'Proyecto Ruta del Che en Bolivia',
    photo4_alt: 'Base actual en Luang Prabang, Laos'
  },
  en: {
    gallery_title: 'Moments that defined the journey',
    photo1_alt: 'Dreams on Pedals logo - Bicycle world tour',
    photo2_alt: 'Cycling around the world',
    photo3_alt: 'Che Guevara Route project in Bolivia',
    photo4_alt: 'Current base in Luang Prabang, Laos'
  },
  fr: {
    gallery_title: 'Moments qui ont défini le chemin',
    photo1_alt: 'Logo Rêves à Pédales - Tour du monde à vélo',
    photo2_alt: 'Faire le tour du monde à vélo',
    photo3_alt: 'Projet Route du Che en Bolivie',
    photo4_alt: 'Base actuelle à Luang Prabang, Laos'
  },
  pt: {
    gallery_title: 'Momentos que definiram o caminho',
    photo1_alt: 'Logo Sonhos Sobre Rodas - Volta ao mundo de bicicleta',
    photo2_alt: 'Pedalando ao redor do mundo',
    photo3_alt: 'Projeto Rota do Che na Bolívia',
    photo4_alt: 'Base atual em Luang Prabang, Laos'
  },
  de: {
    gallery_title: 'Momente, die den Weg definiert haben',
    photo1_alt: 'Träume auf Pedalen Logo - Fahrrad-Weltreise',
    photo2_alt: 'Mit dem Fahrrad um die Welt',
    photo3_alt: 'Che-Guevara-Route Projekt in Bolivien',
    photo4_alt: 'Aktuelle Basis in Luang Prabang, Laos'
  },
  it: {
    gallery_title: 'Momenti che hanno definito il cammino',
    photo1_alt: 'Logo Sogni sui Pedali - Giro del mondo in bicicletta',
    photo2_alt: 'Pedalare intorno al mondo',
    photo3_alt: 'Progetto Ruta del Che in Bolivia',
    photo4_alt: 'Base attuale a Luang Prabang, Laos'
  }
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = JSON.parse(await readFile(filePath, 'utf8'));
  
  existing.fundador = { ...existing.fundador, ...galleryTranslations[lang] };
  
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado con textos de galería`);
}

console.log('\n🎉 Traducciones de galería completadas en 6 idiomas');
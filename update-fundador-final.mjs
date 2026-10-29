import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

const newFundadorDesc = {
  es: "Recorrió el mundo en bicicleta durante 11 años: 120.000 km a través de 84 países. Coordinó proyectos sociales en Bolivia y Latinoamérica. Hoy, desde Laos, fusiona esa experiencia con formación en IA y UX para construir SportDharma Ecosystem: infraestructura digital libre y offline-first para la comunidad global.",
  
  en: "He traveled the world by bicycle for 11 years: 120,000 km across 84 countries. He coordinated social projects in Bolivia and Latin America. Today, from Laos, he combines that experience with training in AI and UX to build SportDharma Ecosystem: free and offline-first digital infrastructure for the global community.",
  
  fr: "Il a parcouru le monde à vélo pendant 11 ans : 120 000 km à travers 84 pays. Il a coordonné des projets sociaux en Bolivie et en Amérique latine. Aujourd'hui, depuis le Laos, il allie cette expérience à une formation en IA et UX pour construire SportDharma Ecosystem : infrastructure numérique libre et offline-first pour la communauté mondiale.",
  
  pt: "Percorreu o mundo de bicicleta durante 11 anos: 120.000 km através de 84 países. Coordenou projetos sociais na Bolívia e América Latina. Hoje, do Laos, combina essa experiência com formação em IA e UX para construir o SportDharma Ecosystem: infraestrutura digital livre e offline-first para a comunidade global.",
  
  de: "Er reiste 11 Jahre lang mit dem Fahrrad um die Welt: 120.000 km durch 84 Länder. Er koordinierte Sozialprojekte in Bolivien und Lateinamerika. Heute, aus Laos, verbindet er diese Erfahrung mit einer Ausbildung in KI und UX, um SportDharma Ecosystem aufzubauen: freie und offline-first digitale Infrastruktur für die globale Gemeinschaft.",
  
  it: "Ha percorso il mondo in bicicletta per 11 anni: 120.000 km attraverso 84 paesi. Ha coordinato progetti sociali in Bolivia e America Latina. Oggi, dal Laos, unisce quell'esperienza con formazione in IA e UX per costruire SportDharma Ecosystem: infrastruttura digitale libera e offline-first per la comunità globale."
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = JSON.parse(await readFile(filePath, 'utf8'));
  
  existing.home.fundador_desc = newFundadorDesc[lang];
  
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado`);
}

console.log('\n🎉 Texto del Fundador (Opción A) actualizado en 6 idiomas');
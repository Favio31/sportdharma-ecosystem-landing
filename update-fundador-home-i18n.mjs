import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

const newFundadorDesc = {
  es: "Fundador de SportDharma Ecosystem y cicloviajero con 11 años de ruta: 120.000 km a través de 84 países. Tras coordinar el proyecto de desarrollo histórico y cultural de la Ruta del Che Guevara en Bolivia, y completar la vuelta al mundo en bicicleta con 'Sueños A Pedal', hoy reside en Laos. Combina su experiencia en terreno con formación en Inteligencia Artificial y Diseño UX para desarrollar infraestructura digital libre y offline-first. A sus 60 años, continúa en movimiento, guiado por la meditación, el Tai Chi y el compromiso con la comunidad global.",
  
  en: "Founder of SportDharma Ecosystem and cycle traveler with 11 years on the road: 120,000 km across 84 countries. After coordinating the historical and cultural development project of the Che Guevara Route in Bolivia, and completing the bicycle tour around the world with 'Dreams on Pedals', he now resides in Laos. He combines his field experience with training in Artificial Intelligence and UX Design to develop free and offline-first digital infrastructure. At 60 years old, he continues in motion, guided by meditation, Tai Chi and commitment to the global community.",
  
  fr: "Fondateur de SportDharma Ecosystem et cyclovoyageur avec 11 ans de route : 120 000 km à travers 84 pays. Après avoir coordonné le projet de développement historique et culturel de la Route du Che Guevara en Bolivie, et avoir accompli le tour du monde à vélo avec 'Rêves à Pédales', il réside aujourd'hui au Laos. Il allie son expérience de terrain à une formation en Intelligence Artificielle et Design UX pour développer une infrastructure numérique libre et offline-first. À 60 ans, il continue en mouvement, guidé par la méditation, le Tai Chi et l'engagement envers la communauté mondiale.",
  
  pt: "Fundador do SportDharma Ecosystem e cicloviajante com 11 anos de estrada: 120.000 km através de 84 países. Após coordenar o projeto de desenvolvimento histórico e cultural da Rota do Che Guevara na Bolívia, e completar a volta ao mundo de bicicleta com 'Sonhos Sobre Rodas', hoje reside no Laos. Combina sua experiência em campo com formação em Inteligência Artificial e Design UX para desenvolver infraestrutura digital livre e offline-first. Aos 60 anos, continua em movimento, guiado pela meditação, Tai Chi e compromisso com a comunidade global.",
  
  de: "Gründer von SportDharma Ecosystem und Radreisender mit 11 Jahren unterwegs: 120.000 km durch 84 Länder. Nach der Koordination des Projekts zur historischen und kulturellen Entwicklung der Che-Guevara-Route in Bolivien und der Abschluss der Fahrrad-Weltreise mit 'Träume auf Pedalen' lebt er heute in Laos. Er verbindet seine Felderfahrung mit einer Ausbildung in Künstlicher Intelligenz und UX-Design, um freie und offline-first digitale Infrastruktur zu entwickeln. Mit 60 Jahren bleibt er in Bewegung, geleitet von Meditation, Tai Chi und dem Engagement für die globale Gemeinschaft.",
  
  it: "Fondatore di SportDharma Ecosystem e ciclovoyageur con 11 anni di strada: 120.000 km attraverso 84 paesi. Dopo aver coordinato il progetto di sviluppo storico e culturale della Ruta del Che Guevara in Bolivia, e aver completato il giro del mondo in bicicletta con 'Sogni sui Pedali', oggi risiede in Laos. Combina la sua esperienza sul campo con la formazione in Intelligenza Artificiale e Design UX per sviluppare infrastruttura digitale libera e offline-first. A 60 anni, continua in movimento, guidato dalla meditazione, dal Tai Chi e dall'impegno verso la comunità globale."
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = JSON.parse(await readFile(filePath, 'utf8'));
  
  existing.home.fundador_desc = newFundadorDesc[lang];
  
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado`);
}

console.log('\n🎉 Texto del Fundador actualizado en 6 idiomas');
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const I18N_DIR = join(__dirname, 'src', 'i18n');

const newFundadorDesc = {
  es: "La lectura y la pasión por la historia me llevaron a recorrer Latinoamérica y el Caribe, la Patria Grande. Allí creció mi conciencia social e ideológica: coordiné el Proyecto 'Ruta del Che Guevara en Bolivia' junto a campesinos e indígenas. Retomé los estudios en Administración de Empresas y, con años de preparación, diseñé el sueño de recorrer el mundo en bicicleta. El viaje planificado terminó en Nueva Zelanda. Pero mi ruta continuó...",
  
  en: "Reading and a passion for history led me to travel through Latin America and the Caribbean, the Patria Grande. There my social and ideological awareness grew: I coordinated the 'Che Guevara Route in Bolivia' project alongside peasants and indigenous communities. I resumed my studies in Business Administration and, after years of preparation, designed the dream of cycling around the world. The planned journey ended in New Zealand. But my road continued...",
  
  fr: "La lecture et la passion pour l'histoire m'ont conduit à parcourir l'Amérique latine et les Caraïbes, la Patria Grande. Là-bas, ma conscience sociale et idéologique s'est développée : j'ai coordonné le projet 'Route du Che Guevara en Bolivie' aux côtés de paysans et de communautés indigènes. J'ai repris mes études en administration des affaires et, après des années de préparation, j'ai conçu le rêve de faire le tour du monde à vélo. Le voyage prévu s'est terminé en Nouvelle-Zélande. Mais ma route a continué...",
  
  pt: "A leitura e a paixão pela história me levaram a percorrer a América Latina e o Caribe, a Pátria Grande. Ali cresceu minha consciência social e ideológica: coordenei o projeto 'Rota do Che Guevara na Bolívia' ao lado de camponeses e indígenas. Retomei os estudos em Administração de Empresas e, após anos de preparação, concebi o sonho de dar a volta ao mundo de bicicleta. A viagem planejada terminou na Nova Zelândia. Mas minha estrada continuou...",
  
  de: "Die Lektüre und die Leidenschaft für die Geschichte führten mich durch Lateinamerika und die Karibik, die Patria Grande. Dort wuchs mein soziales und ideologisches Bewusstsein: Ich koordinierte das Projekt 'Che-Guevara-Route in Bolivien' zusammen mit Bauern und indigenen Gemeinschaften. Ich nahm mein Studium der Betriebswirtschaft wieder auf und entwarf nach Jahren der Vorbereitung den Traum, mit dem Fahrrad um die Welt zu reisen. Die geplante Reise endete in Neuseeland. Aber meine Straße ging weiter...",
  
  it: "La lettura e la passione per la storia mi hanno portato a percorrere l'America Latina e i Caraibi, la Patria Grande. Lì è cresciuta la mia coscienza sociale e ideologica: ho coordinato il progetto 'Rotta del Che Guevara in Bolivia' insieme a contadini e comunità indigene. Ho ripreso gli studi in Amministrazione Aziendale e, dopo anni di preparazione, ho concepito il sogno di fare il giro del mondo in bicicletta. Il viaggio pianificato è terminato in Nuova Zelanda. Ma la mia strada è continuata..."
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = join(I18N_DIR, `${lang}.json`);
  let existing = JSON.parse(await readFile(filePath, 'utf8'));
  existing.home.fundador_desc = newFundadorDesc[lang];
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado a 1ra persona`);
}
console.log('\n🎉 Texto del Fundador unificado en 1ra persona (6 idiomas)');
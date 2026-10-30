import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const I18N_DIR = join(__dirname, 'src', 'i18n');

const newFundadorDesc = {
  es: "La lectura y la pasión por la historia lo llevaron a recorrer Latinoamérica y el Caribe, la Patria Grande. Allí creció su conciencia social e ideológica, coordinó el Proyecto 'Ruta del Che Guevara en Bolivia' junto a campesinos e indígenas. Retomó los estudios en Administración de Empresas y, con años de preparación, diseñó el sueño de recorrer el mundo en bicicleta. El viaje planificado terminó en Nueva Zelanda. Pero la ruta continuó...",
  
  en: "Reading and a passion for history led him to travel through Latin America and the Caribbean, the Patria Grande. There his social and ideological awareness grew: he coordinated the 'Che Guevara Route in Bolivia' project alongside peasants and indigenous communities. He resumed his studies in Business Administration and, after years of preparation, designed the dream of cycling around the world. The planned journey ended in New Zealand. But the road continued...",
  
  fr: "La lecture et la passion pour l'histoire l'ont conduit à parcourir l'Amérique latine et les Caraïbes, la Patria Grande. Là-bas, sa conscience sociale et idéologique s'est développée : il a coordonné le projet 'Route du Che Guevara en Bolivie' aux côtés de paysans et de communautés indigènes. Il a repris ses études en administration des affaires et, après des années de préparation, a conçu le rêve de faire le tour du monde à vélo. Le voyage prévu s'est terminé en Nouvelle-Zélande. Mais la route a continué...",
  
  pt: "A leitura e a paixão pela história o levaram a percorrer a América Latina e o Caribe, a Pátria Grande. Ali cresceu sua consciência social e ideológica: coordenou o projeto 'Rota do Che Guevara na Bolívia' ao lado de camponeses e indígenas. Retomou os estudos em Administração de Empresas e, após anos de preparação, concebeu o sonho de dar a volta ao mundo de bicicleta. A viagem planejada terminou na Nova Zelândia. Mas a estrada continuou...",
  
  de: "Die Lektüre und die Leidenschaft für die Geschichte führten ihn durch Lateinamerika und die Karibik, die Patria Grande. Dort wuchs sein soziales und ideologisches Bewusstsein: Er koordinierte das Projekt 'Che-Guevara-Route in Bolivien' zusammen mit Bauern und indigenen Gemeinschaften. Er nahm sein Studium der Betriebswirtschaft wieder auf und entwarf nach Jahren der Vorbereitung den Traum, mit dem Fahrrad um die Welt zu reisen. Die geplante Reise endete in Neuseeland. Aber die Straße ging weiter...",
  
  it: "La lettura e la passione per la storia lo hanno portato a percorrere l'America Latina e i Caraibi, la Patria Grande. Lì è cresciuta la sua coscienza sociale e ideologica: ha coordinato il progetto 'Rotta del Che Guevara in Bolivia' insieme a contadini e comunità indigene. Ha ripreso gli studi in Amministrazione Aziendale e, dopo anni di preparazione, ha concepito il sogno di fare il giro del mondo in bicicletta. Il viaggio pianificato è terminato in Nuova Zelanda. Ma la strada è continuata..."
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = join(I18N_DIR, `${lang}.json`);
  let existing = JSON.parse(await readFile(filePath, 'utf8'));
  existing.home.fundador_desc = newFundadorDesc[lang];
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado`);
}
console.log('\n🎉 Texto del Fundador actualizado en 6 idiomas');
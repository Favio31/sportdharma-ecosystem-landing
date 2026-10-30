import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const I18N_DIR = join(__dirname, 'src', 'i18n');

const newManifiestoDesc = {
  es: "Cuando el viaje planificado terminó en Nueva Zelanda, surgieron preguntas sobre la impermanencia y el propósito de vida. Buscando respuestas, descubrí el Ikigai japonés: la intersección entre pasión, misión y vocación. Allí nació SportDharma Ecosystem: infraestructura libre y soberana para quienes practican deporte, viven en zonas ailadas sin conexión y equipos de emergencia.",
  
  en: "When the planned journey ended in New Zealand, questions arose about impermanence and life's purpose. Seeking answers, I discovered the Japanese Ikigai: the intersection of passion, mission and vocation. There SportDharma Ecosystem was born: free and sovereign infrastructure for those who practice sports, live in isolated areas without connectivity, and emergency teams.",
  
  fr: "Lorsque le voyage prévu s'est terminé en Nouvelle-Zélande, des questions ont surgi sur l'impermanence et le sens de la vie. En cherchant des réponses, j'ai découvert l'Ikigai japonais : l'intersection entre passion, mission et vocation. Là est né SportDharma Ecosystem : infrastructure libre et souveraine pour ceux qui pratiquent le sport, vivent dans des zones isolées sans connexion et les équipes d'urgence.",
  
  pt: "Quando a viagem planejada terminou na Nova Zelândia, surgiram perguntas sobre a impermanência e o propósito de vida. Buscando respostas, descobri o Ikigai japonês: a interseção entre paixão, missão e vocação. Ali nasceu o SportDharma Ecosystem: infraestrutura livre e soberana para quem pratica esportes, vive em áreas isoladas sem conexão e equipes de emergência.",
  
  de: "Als die geplante Reise in Neuseeland endete, stellten sich Fragen nach der Vergänglichkeit und dem Lebenssinn. Auf der Suche nach Antworten entdeckte ich das japanische Ikigai: die Schnittstelle zwischen Leidenschaft, Mission und Berufung. Dort wurde SportDharma Ecosystem geboren: freie und souveräne Infrastruktur für Sportler, Menschen in abgelegenen Gebieten ohne Verbindung und Rettungsteams.",
  
  it: "Quando il viaggio pianificato è terminato in Nuova Zelanda, sono sorte domande sull'impermanenza e lo scopo della vita. Cercando risposte, ho scoperto l'Ikigai giapponese: l'intersezione tra passione, missione e vocazione. Lì è nato SportDharma Ecosystem: infrastruttura libera e sovrana per chi pratica sport, vive in zone isolate senza connessione e squadre di emergenza."
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = join(I18N_DIR, `${lang}.json`);
  let existing = JSON.parse(await readFile(filePath, 'utf8'));
  existing.home.manifiesto_desc = newManifiestoDesc[lang];
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado`);
}
console.log('\n🎉 Texto del Manifiesto actualizado en 6 idiomas');
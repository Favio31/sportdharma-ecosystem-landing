import { writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const FILE = path.join(ROOT, 'src', 'pages', '[lang]', 'manifiesto', 'index.astro');
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

// 1. Reescribir el manifiesto con t()
const manifiestoContent = `---
import Layout from '../../../layouts/Layout.astro';
import { useTranslations } from '../../../i18n/utils.js';

export async function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'en' } },
    { params: { lang: 'fr' } },
    { params: { lang: 'pt' } },
    { params: { lang: 'de' } },
    { params: { lang: 'it' } },
  ];
}
const { lang } = Astro.params;
const t = useTranslations(lang);
---

<Layout title={t('manifiesto.page_title')}>
  <section id="manifiesto" class="py-20 px-6 bg-surface-alt transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      
      <!-- Título -->
      <div class="text-center mb-16">
        <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">{t('manifiesto.label')}</p>
        <h1 class="text-4xl md:text-6xl font-bold text-ink mb-4">
          {t('manifiesto.title_1')} <span class="text-[#E8530E] dark:text-orange-500">{t('manifiesto.title_2')}</span>
        </h1>
        <p class="text-lg text-ink-soft max-w-2xl mx-auto">
          {t('manifiesto.subtitle')}
        </p>
      </div>

      <!-- Contenido principal -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        
        <!-- Texto -->
        <div>
          <blockquote class="border-l-4 border-[#E8530E] dark:border-orange-500 rounded-r-xl p-8 transition-colors duration-300">
            <p class="text-lg text-ink-soft leading-relaxed mb-4 text-justify">{t('manifiesto.p1')}</p>
            <p class="text-lg text-ink-soft leading-relaxed mb-4 text-justify">{t('manifiesto.p2')}</p>
            <p class="text-lg text-ink-soft leading-relaxed mb-4 text-justify">{t('manifiesto.p3')}</p>
            <p class="text-lg text-ink-soft leading-relaxed mb-4 text-justify">{t('manifiesto.p4')}</p>
            <p class="text-lg text-ink-soft leading-relaxed mb-4 text-justify">{t('manifiesto.p5')}</p>
            <p class="text-lg text-ink font-semibold text-justify">{t('manifiesto.p6')}</p>
          </blockquote>
        </div>

        <!-- Fotos con layout 2x3 grid -->
        <div class="grid grid-cols-2 grid-rows-3 gap-4 h-[650px]">
          
          <div class="rounded-xl overflow-hidden shadow-lg border-2 border-white/30">
            <img src="/manifiesto-laos.jpg" alt={t('manifiesto.alt_laos')} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          <div class="rounded-xl overflow-hidden shadow-lg border-2 border-white/30">
            <img src="/manifiesto-camino.jpg" alt={t('manifiesto.alt_camino')} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          <div class="rounded-xl overflow-hidden shadow-lg border-2 border-white/30">
            <img src="/manifiesto-ruta.jpg" alt={t('manifiesto.alt_ruta')} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          <div class="rounded-xl overflow-hidden shadow-lg border-2 border-white/30">
            <img src="/manifiesto-grupo.jpg" alt={t('manifiesto.alt_grupo')} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          <div class="rounded-xl overflow-hidden shadow-lg border-2 border-white/30">
            <img src="/manifiesto-pamir.jpg" alt={t('manifiesto.alt_pamir')} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          <div class="rounded-xl overflow-hidden shadow-lg border-2 border-white/30">
            <img src="/manifiesto-tayikistan.jpg" alt={t('manifiesto.alt_tayikistan')} class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

        </div>

      </div>
    </div>
  </section>
</Layout>
`;

await writeFile(FILE, manifiestoContent, 'utf8');
console.log('✅ manifiesto/index.astro refactorizado con t()');

// 2. Traducciones completas del manifiesto
const translations = {
  es: {
    page_title: 'Manifiesto | SportDharma Ecosystem',
    label: 'MANIFIESTO',
    title_1: 'Así nació',
    title_2: 'SportDharma Ecosystem',
    subtitle: 'De los libros de la infancia a la vuelta al mundo en bicicleta. Del budismo a la IA. Una búsqueda de propósito que se transformó en infraestructura libre para deportistas.',
    p1: 'De niño, los libros y películas sembraron en mí un sueño: conocer el mundo. Aquellas lecturas e historias crearon una fascinación que, con el tiempo, se transformó en mi destino. En el transitar de la vida elegí soñar despierto: abrirme a sentir el hoy, el aquí y el ahora.',
    p2: 'Durante años, "La Estrella" —mi compañera de dos ruedas— y yo recorrimos el mundo en bicicleta. Fue un viaje exterior e interior, con días únicos e irrepetibles.',
    p3: 'Como nos enseña el Buda: "Todo lo que tiene un comienzo tiene un final". Aquella vuelta al mundo planificada encontró su horizonte de cierre en Nueva Zelanda. Surgieron entonces sentimientos encontrados de festejo, profunda satisfacción y gratitud hacia todos los seres que hicieron posible el camino. Pero también brotaron preguntas existenciales sobre la impermanencia y ese futuro incierto que intentamos descifrar.',
    p4: 'Buscando respuestas, me adentré en la filosofía japonesa del Ikigai para redescubrir mi propósito de vida. El punto de convergencia marcaba con claridad una dirección: debía construir algo que honrara la experiencia del viaje, la exploración y el deporte, integrado con la necesidad de adquirir nuevo conocimiento alineado al mundo contemporáneo.',
    p5: 'Fue así como incursioné formalmente en el estudio de la arquitectura y gestión de la Inteligencia Artificial.',
    p6: 'El Proyecto SportDharma Ecosystem nace precisamente allí: en la unión entre la pasión por el deporte, el viaje, la resiliencia humana y la tecnología soberana.',
    alt_laos: 'Templo en Laos',
    alt_camino: 'Camino de tierra',
    alt_ruta: 'Cicloviajero en ruta',
    alt_grupo: 'Grupo de cicloviajeros',
    alt_pamir: 'Montañas del Pamir',
    alt_tayikistan: 'Cicloviaje en Tayikistán'
  },
  en: {
    page_title: 'Manifesto | SportDharma Ecosystem',
    label: 'MANIFESTO',
    title_1: 'How',
    title_2: 'SportDharma Ecosystem',
    subtitle: 'Was born. From childhood books to cycling around the world. From Buddhism to AI. A search for purpose that became free infrastructure for athletes.',
    p1: 'As a child, books and movies planted a dream in me: to see the world. Those readings and stories created a fascination that, over time, became my destiny. In the course of life I chose to dream awake: to open myself to feel today, the here and now.',
    p2: 'For years, "La Estrella" —my two-wheeled companion— and I traveled the world by bicycle. It was an outer and inner journey, with unique and unrepeatable days.',
    p3: 'As the Buddha teaches us: "Everything that has a beginning has an end." That planned trip around the world found its closing horizon in New Zealand. Mixed feelings then arose of celebration, deep satisfaction and gratitude towards all the beings who made the path possible. But existential questions also sprouted about impermanence and that uncertain future we try to decipher.',
    p4: 'Seeking answers, I delved into the Japanese philosophy of Ikigai to rediscover my life purpose. The point of convergence clearly marked a direction: I had to build something that honored the experience of travel, exploration and sport, integrated with the need to acquire new knowledge aligned with the contemporary world.',
    p5: 'That is how I formally ventured into the study of the architecture and management of Artificial Intelligence.',
    p6: 'The SportDharma Ecosystem Project is born precisely there: in the union between the passion for sport, travel, human resilience and sovereign technology.',
    alt_laos: 'Temple in Laos',
    alt_camino: 'Dirt road',
    alt_ruta: 'Cycle tourist on the road',
    alt_grupo: 'Group of cycle tourists',
    alt_pamir: 'Pamir Mountains',
    alt_tayikistan: 'Cycle touring in Tajikistan'
  },
  fr: {
    page_title: 'Manifeste | SportDharma Ecosystem',
    label: 'MANIFESTE',
    title_1: 'Comment est né',
    title_2: 'SportDharma Ecosystem',
    subtitle: 'Des livres d\'enfance au tour du monde à vélo. Du bouddhisme à l\'IA. Une quête de sens devenue infrastructure libre pour les sportifs.',
    p1: 'Enfant, les livres et les films ont planté en moi un rêve : voir le monde. Ces lectures et ces histoires ont créé une fascination qui, avec le temps, est devenue ma destinée. Au fil de la vie, j\'ai choisi de rêver éveillé : m\'ouvrir à ressentir aujourd\'hui, l\'ici et le maintenant.',
    p2: 'Pendant des années, "La Estrella" —ma compagne à deux roues— et moi avons parcouru le monde à vélo. Ce fut un voyage extérieur et intérieur, avec des jours uniques et irremplaçables.',
    p3: 'Comme nous l\'enseigne le Bouddha : "Tout ce qui a un commencement a une fin." Ce tour du monde planifié a trouvé son horizon de clôture en Nouvelle-Zélande. Des sentiments contradictoires ont alors surgi : célébration, profonde satisfaction et gratitude envers tous les êtres qui ont rendu le chemin possible. Mais des questions existentielles ont aussi germé sur l\'impermanence et cet avenir incertain que nous essayons de déchiffrer.',
    p4: 'En quête de réponses, je me suis plongé dans la philosophie japonaise de l\'Ikigai pour redécouvrir mon but dans la vie. Le point de convergence marquait clairement une direction : je devais construire quelque chose qui honore l\'expérience du voyage, de l\'exploration et du sport, intégré avec le besoin d\'acquérir de nouvelles connaissances alignées avec le monde contemporain.',
    p5: 'C\'est ainsi que je me suis lancé formellement dans l\'étude de l\'architecture et de la gestion de l\'Intelligence Artificielle.',
    p6: 'Le Projet SportDharma Ecosystem naît précisément là : dans l\'union entre la passion pour le sport, le voyage, la résilience humaine et la technologie souveraine.',
    alt_laos: 'Temple au Laos',
    alt_camino: 'Chemin de terre',
    alt_ruta: 'Cyclotouriste sur la route',
    alt_grupo: 'Groupe de cyclotouristes',
    alt_pamir: 'Montagnes du Pamir',
    alt_tayikistan: 'Cyclotourisme au Tadjikistan'
  },
  pt: {
    page_title: 'Manifesto | SportDharma Ecosystem',
    label: 'MANIFESTO',
    title_1: 'Como nasceu o',
    title_2: 'SportDharma Ecosystem',
    subtitle: 'Dos livros da infância à volta ao mundo de bicicleta. Do budismo à IA. Uma busca de propósito que se transformou em infraestrutura livre para atletas.',
    p1: 'Quando criança, livros e filmes plantaram em mim um sonho: conhecer o mundo. Aquelas leituras e histórias criaram um fascínio que, com o tempo, se transformou em meu destino. No transcorrer da vida, escolhi sonhar acordado: abrir-me para sentir o hoje, o aqui e o agora.',
    p2: 'Durante anos, "La Estrella" —minha companheira de duas rodas— e eu percorremos o mundo de bicicleta. Foi uma viagem exterior e interior, com dias únicos e irrepetíveis.',
    p3: 'Como nos ensina o Buda: "Tudo o que tem um começo tem um fim". Aquela volta ao mundo planejada encontrou seu horizonte de fechamento na Nova Zelândia. Surgiram então sentimentos contraditórios de celebração, profunda satisfação e gratidão a todos os seres que tornaram o caminho possível. Mas também brotaram questões existenciais sobre a impermanência e esse futuro incerto que tentamos decifrar.',
    p4: 'Em busca de respostas, mergulhei na filosofia japonesa do Ikigai para redescobrir meu propósito de vida. O ponto de convergência marcava claramente uma direção: eu devia construir algo que honrasse a experiência da viagem, da exploração e do esporte, integrado com a necessidade de adquirir novos conhecimentos alinhados ao mundo contemporâneo.',
    p5: 'Foi assim que incursionei formalmente no estudo da arquitetura e gestão da Inteligência Artificial.',
    p6: 'O Projeto SportDharma Ecosystem nasce precisamente aí: na união entre a paixão pelo esporte, a viagem, a resiliência humana e a tecnologia soberana.',
    alt_laos: 'Templo no Laos',
    alt_camino: 'Caminho de terra',
    alt_ruta: 'Cicloturista na estrada',
    alt_grupo: 'Grupo de cicloturistas',
    alt_pamir: 'Montanhas do Pamir',
    alt_tayikistan: 'Cicloturismo no Tajiquistão'
  },
  de: {
    page_title: 'Manifest | SportDharma Ecosystem',
    label: 'MANIFEST',
    title_1: 'Wie',
    title_2: 'SportDharma Ecosystem',
    subtitle: 'Entstand. Von Kindheitsbüchern zur Radreise um die Welt. Vom Buddhismus zur KI. Eine Sinnsuche, die zur freien Infrastruktur für Athleten wurde.',
    p1: 'Als Kind pflanzten Bücher und Filme einen Traum in mir: die Welt zu sehen. Diese Lektüren und Geschichten schufen eine Faszination, die mit der Zeit zu meinem Schicksal wurde. Im Laufe des Lebens wählte ich, wach zu träumen: mich zu öffnen, das Heute, das Hier und Jetzt zu fühlen.',
    p2: 'Jahre lang bereisten "La Estrella" —meine zweirädrige Gefährtin— und ich die Welt mit dem Fahrrad. Es war eine äußere und innere Reise, mit einzigartigen und unwiederholbaren Tagen.',
    p3: 'Wie der Buddha uns lehrt: "Alles, was einen Anfang hat, hat ein Ende." Diese geplante Weltreise fand ihren Abschluss in Neuseeland. Dann entstanden gemischte Gefühle der Feier, tiefer Zufriedenheit und Dankbarkeit gegenüber allen Wesen, die den Weg ermöglichten. Aber es keimten auch existenzielle Fragen über die Vergänglichkeit und diese ungewisse Zukunft, die wir zu entschlüsseln versuchen.',
    p4: 'Auf der Suche nach Antworten vertiefte ich mich in die japanische Philosophie des Ikigai, um meinen Lebenszweck wiederzuentdecken. Der Konvergenzpunkt markierte klar eine Richtung: Ich musste etwas bauen, das die Erfahrung des Reisens, der Exploration und des Sports ehrt, integriert mit der Notwendigkeit, neues Wissen zu erwerben, das mit der zeitgenössischen Welt übereinstimmt.',
    p5: 'So wagte ich mich formal in das Studium der Architektur und des Managements Künstlicher Intelligenz.',
    p6: 'Das Projekt SportDharma Ecosystem entsteht genau dort: in der Vereinigung zwischen der Leidenschaft für Sport, Reisen, menschliche Resilienz und souveräne Technologie.',
    alt_laos: 'Tempel in Laos',
    alt_camino: 'Feldweg',
    alt_ruta: 'Radreisender unterwegs',
    alt_grupo: 'Gruppe von Radreisenden',
    alt_pamir: 'Pamir-Gebirge',
    alt_tayikistan: 'Radreise in Tadschikistan'
  },
  it: {
    page_title: 'Manifesto | SportDharma Ecosystem',
    label: 'MANIFESTO',
    title_1: 'Come è nato',
    title_2: 'SportDharma Ecosystem',
    subtitle: 'Dai libri dell\'infanzia al giro del mondo in bicicletta. Dal buddismo all\'IA. Una ricerca di scopo diventata infrastruttura libera per atleti.',
    p1: 'Da bambino, libri e film hanno piantato in me un sogno: vedere il mondo. Quelle letture e storie hanno creato un fascino che, col tempo, è diventato il mio destino. Nel corso della vita ho scelto di sognare da sveglio: aprirmi a sentire l\'oggi, il qui e l\'ora.',
    p2: 'Per anni, "La Estrella" —la mia compagna a due ruote— e io abbiamo percorso il mondo in bicicletta. È stato un viaggio esteriore e interiore, con giorni unici e irripetibili.',
    p3: 'Come ci insegna il Buddha: "Tutto ciò che ha un inizio ha una fine". Quel giro del mondo pianificato ha trovato il suo orizzonte di chiusura in Nuova Zelanda. Sono sorti allora sentimenti contrastanti di festa, profonda soddisfazione e gratitudine verso tutti gli esseri che hanno reso possibile il cammino. Ma sono anche germogliate domande esistenziali sull\'impermanenza e quel futuro incerto che cerchiamo di decifrare.',
    p4: 'Cercando risposte, mi sono addentrato nella filosofia giapponese dell\'Ikigai per riscoprire il mio scopo di vita. Il punto di convergenza segnava chiaramente una direzione: dovevo costruire qualcosa che onorasse l\'esperienza del viaggio, dell\'esplorazione e dello sport, integrato con la necessità di acquisire nuove conoscenze allineate al mondo contemporaneo.',
    p5: 'Fu così che mi sono addentrato formalmente nello studio dell\'architettura e della gestione dell\'Intelligenza Artificiale.',
    p6: 'Il Progetto SportDharma Ecosystem nasce proprio lì: nell\'unione tra la passione per lo sport, il viaggio, la resilienza umana e la tecnologia sovrana.',
    alt_laos: 'Tempio in Laos',
    alt_camino: 'Strada sterrata',
    alt_ruta: 'Cicloturista in viaggio',
    alt_grupo: 'Gruppo di cicloturisti',
    alt_pamir: 'Montagne del Pamir',
    alt_tayikistan: 'Cicloturismo in Tagikistan'
  }
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = {};
  try { existing = JSON.parse(await readFile(filePath, 'utf8')); } catch (e) {}
  
  existing.manifiesto = translations[lang];
  
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado con manifiesto`);
}

console.log('\n🎉 Manifiesto completamente internacionalizado');
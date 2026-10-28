import { writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const FUNDADOR_FILE = path.join(ROOT, 'src', 'pages', '[lang]', 'fundador', 'index.astro');
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

// 1. Leer el archivo fundador actual
let content = await readFile(FUNDADOR_FILE, 'utf8');

// 2. Definir el nuevo contenido HTML con el texto y el CTA
const newFundadorHTML = `
<section class="py-16 px-4 max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold text-center mb-4 text-[#E8530E] dark:text-orange-500">
    {t('fundador.title')}
  </h1>
  <p class="text-xl text-center text-ink-soft mb-12 italic">
    {t('fundador.tagline')}
  </p>

  <div class="space-y-6 text-ink leading-relaxed text-lg">
    <p>{t('fundador.p1')}</p>
    <p>{t('fundador.p2')}</p>
    <p>{t('fundador.p3')}</p>
    <p>{t('fundador.p4')}</p>
    <p>{t('fundador.p5')}</p>
    <p>{t('fundador.p6')}</p>
    <p>{t('fundador.p7')}</p>
    <p>{t('fundador.p8')}</p>
  </div>

  <div class="mt-12 text-center">
    <a href={'/' + lang + '/noticias/'} class="inline-block bg-[#E8530E] hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
      {t('fundador.cta')}
    </a>
  </div>
</section>
`;

// 3. Reemplazar el contenido entre las etiquetas <main> y </main>
const mainRegex = /<main[\s\S]*?<\/main>/;
if (mainRegex.test(content)) {
  content = content.replace(mainRegex, `<main>\n${newFundadorHTML}\n</main>`);
  console.log('✅ Contenido de fundador actualizado');
} else {
  console.error('❌ No se encontró la etiqueta <main>. Revisar estructura.');
  process.exit(1);
}

await writeFile(FUNDADOR_FILE, content, 'utf8');
console.log('✅ Archivo fundador.astro guardado');

// 4. Actualizar los archivos de traducción con el nuevo texto
const translations = {
  es: {
    fundador: {
      title: 'Favio M. Giorgio Data',
      tagline: '120.000 km, 84 países, 11 años. Construyendo software libre para quienes viven en movimiento.',
      p1: 'Mi camino comenzó lejos de mi Rosario natal, viviendo en Europa. Fue allí, entre lecturas sobre Ernesto Che Guevara y una profunda conexión con mis raíces, donde surgió en mí la necesidad imperiosa de conocer y recorrer Nuestra Patria Grande.',
      p2: 'Esa búsqueda me trajo de vuelta al continente americano, dando inicio a mi primer gran viaje en bicicleta por Latinoamérica y el Caribe. Fue un reencuentro con el pasado y presente de nuestra historia identitaria. Esa experiencia me preparó para un compromiso más profundo: coordiné durante 4 años el proyecto de "Desarrollo histórico y cultural de la Ruta del Che Guevara en Bolivia". Trabajamos codo a codo con comunidades campesinas e indígenas en Vallegrande, La Higuera, Vado del Yeso, Pucará y Lagunillas. Allí aprendí el verdadero valor de la resiliencia, la memoria y el trabajo comunitario.',
      p3: 'Después de años compartimos la experiencia del viaje en bicicleta por Latinoamérica y el Caribe en un libro y video llamado "Un año en bicicleta", dando charlas en diversas ciudades de Argentina. La Intendencia Municipal de nuestra ciudad nos otorgó una mención especial por promover e impulsar el uso del transporte no motorizado y el viaje en bicicleta.',
      p4: 'Esa base sólida me impulsó, junto a un compañero de ruta, a lanzar "Sueños A Pedal": la vuelta al mundo en bicicleta. Durante 11 años, recorrimos 120.000 km a través de 84 países, acompañados por la compañera de dos ruedas "La Estrella", que ilumina el camino. Agradezco la solidaridad de los miles de seres sintientes que hicieron posible que concluyéramos la vuelta al mundo planificada.',
      p5: 'Cuando me preguntan qué me dejó el viaje, respondo: decidí vivir desde el amor, la compasión, la empatía, la solidaridad y el respeto. Ese es el resumen de todo el aprendizaje.',
      p6: 'La ruta, sin embargo, no había terminado. Tras concluir el viaje, continué pedaleando por el Sudeste Asiático hasta encontrar mi base actual en Luang Prabang, Laos. Lejos de detenerme, volví a las aulas, pero esta vez con un propósito claro: estudiar en Coursera Marketing Digital, Arquitectura de IA y Gestión de Productos de IA de instituciones como Google, Universidad Vanderbilt y la Universidad Duke, complementado actualmente con el Google Professional UX Design Certificate.',
      p7: 'De esta fusión entre la ruta y la tecnología surge SportDharma Ecosystem. Es la continuidad digital de la esencia de Sueños A Pedal, es mi legado y mi forma de devolver a la comunidad todo lo que el mundo me dio.',
      p8: 'Hoy, a mis 60 años, sigo en movimiento, sigo soñando con los ojos abiertos. Complemento la vida diaria con Tai Chi, meditación y caminatas; disciplinas que refuerzan el equilibrio y la conciencia que imprimo en cada línea de código de este proyecto.',
      cta: '¡Te invito a ser parte de esta comunidad!'
    }
  },
  en: {
    fundador: {
      title: 'Favio M. Giorgio Data',
      tagline: '120,000 km, 84 countries, 11 years. Building free software for those who live on the move.',
      p1: 'My journey began far from my hometown of Rosario, living in Europe. It was there, between readings about Ernesto Che Guevara and a deep connection with my roots, that an urgent need arose within me to know and travel Our Great Homeland.',
      p2: 'That search brought me back to the American continent, giving rise to my first great bicycle journey through Latin America and the Caribbean. It was a reunion with the past and present of our identity history. That experience prepared me for a deeper commitment: for 4 years I coordinated the "Historical and Cultural Development of the Che Guevara Route in Bolivia" project. We worked side by side with peasant and indigenous communities in Vallegrande, La Higuera, Vado del Yeso, Pucará and Lagunillas. There I learned the true value of resilience, memory and community work.',
      p3: 'After years, we shared the experience of the bicycle journey through Latin America and the Caribbean in a book and video called "A Year on a Bicycle", giving talks in various cities in Argentina. The Municipal Intendancy of our city granted us a special mention for promoting and encouraging the use of non-motorized transport and bicycle travel.',
      p4: 'That solid foundation pushed me, together with a travel companion, to launch "Dreams on Pedals": the bicycle tour around the world. For 11 years, we traveled 120,000 km across 84 countries, accompanied by the two-wheeled companion we named "The Star", which lights the way. I am grateful for the solidarity of the thousands of sentient beings who made it possible for us to complete the planned world tour.',
      p5: 'When people ask me what the journey left me, I answer: I decided to live from love, compassion, empathy, solidarity and respect. That is the summary of all learning.',
      p6: 'The route, however, was not over. After completing the journey, I continued cycling through Southeast Asia until finding my current base in Luang Prabang, Laos. Far from stopping, I returned to the classroom, but this time with a clear purpose: to study Digital Marketing, AI Architecture and AI Product Management at institutions such as Google, Vanderbilt University and Duke University, currently complemented with the Google Professional UX Design Certificate.',
      p7: 'From this fusion between the route and technology emerges SportDharma Ecosystem. It is the digital continuity of the essence of Dreams on Pedals, it is my legacy and my way of giving back to the community everything the world gave me.',
      p8: 'Today, at 60 years old, I keep moving, I keep dreaming with my eyes open. I complement daily life with Tai Chi, meditation and walking; disciplines that reinforce the balance and awareness that I imprint on every line of code of this project.',
      cta: 'I invite you to be part of this community!'
    }
  },
  fr: {
    fundador: {
      title: 'Favio M. Giorgio Data',
      tagline: '120 000 km, 84 pays, 11 ans. Construire un logiciel libre pour ceux qui vivent en mouvement.',
      p1: 'Mon chemin a commencé loin de ma ville natale de Rosario, en vivant en Europe. C\'est là, entre des lectures sur Ernesto Che Guevara et une connexion profonde avec mes racines, qu\'est née en moi le besoin impératif de connaître et de parcourir Notre Grande Patrie.',
      p2: 'Cette recherche m\'a ramené sur le continent américain, donnant naissance à mon premier grand voyage à vélo à travers l\'Amérique latine et les Caraïbes. Ce fut une retrouvaille avec le passé et le présent de notre histoire identitaire. Cette expérience m\'a préparé à un engagement plus profond : pendant 4 ans, j\'ai coordonné le projet de "Développement historique et culturel de la Route du Che Guevara en Bolivie". Nous avons travaillé côte à côte avec des communautés paysannes et indigènes à Vallegrande, La Higuera, Vado del Yeso, Pucará et Lagunillas. Là, j\'ai appris la vraie valeur de la résilience, de la mémoire et du travail communautaire.',
      p3: 'Après des années, nous avons partagé l\'expérience du voyage à vélo à travers l\'Amérique latine et les Caraïbes dans un livre et une vidéo intitulés "Un an à vélo", donnant des conférences dans diverses villes d\'Argentine. L\'Intendance Municipale de notre ville nous a accordé une mention spéciale pour promouvoir et encourager l\'utilisation du transport non motorisé et du voyage à vélo.',
      p4: 'Cette base solide m\'a poussé, avec un compagnon de route, à lancer "Rêves à Pédales" : le tour du monde à vélo. Pendant 11 ans, nous avons parcouru 120 000 km à travers 84 pays, accompagnés par la compagne à deux roues que nous avons baptisée "L\'Étoile", qui illumine le chemin. Je suis reconnaissant pour la solidarité des milliers d\'êtres sensibles qui ont rendu possible l\'achèvement du tour du monde planifié.',
      p5: 'Quand on me demande ce que le voyage m\'a laissé, je réponds : j\'ai décidé de vivre depuis l\'amour, la compassion, l\'empathie, la solidarité et le respect. C\'est le résumé de tout l\'apprentissage.',
      p6: 'La route, cependant, n\'était pas terminée. Après avoir terminé le voyage, j\'ai continué à pédaler à travers l\'Asie du Sud-Est jusqu\'à trouver ma base actuelle à Luang Prabang, au Laos. Loin de m\'arrêter, je suis retourné en classe, mais cette fois avec un objectif clair : étudier le Marketing Digital, l\'Architecture IA et la Gestion de Produits IA dans des institutions comme Google, l\'Université Vanderbilt et l\'Université Duke, complété actuellement par le Google Professional UX Design Certificate.',
      p7: 'De cette fusion entre la route et la technologie naît SportDharma Ecosystem. C\'est la continuité numérique de l\'essence de Rêves à Pédales, c\'est mon héritage et ma façon de redonner à la communauté tout ce que le monde m\'a donné.',
      p8: 'Aujourd\'hui, à 60 ans, je continue à bouger, je continue à rêver les yeux ouverts. Je complète la vie quotidienne avec le Tai Chi, la méditation et la marche ; des disciplines qui renforcent l\'équilibre et la conscience que j\'imprime dans chaque ligne de code de ce projet.',
      cta: 'Je vous invite à faire partie de cette communauté !'
    }
  },
  pt: {
    fundador: {
      title: 'Favio M. Giorgio Data',
      tagline: '120.000 km, 84 países, 11 anos. Construindo software livre para quem vive em movimento.',
      p1: 'Meu caminho começou longe da minha cidade natal de Rosário, vivendo na Europa. Foi lá, entre leituras sobre Ernesto Che Guevara e uma profunda conexão com minhas raízes, que surgiu em mim a necessidade imperiosa de conhecer e percorrer Nossa Grande Pátria.',
      p2: 'Essa busca me trouxe de volta ao continente americano, dando início à minha primeira grande viagem de bicicleta pela América Latina e Caribe. Foi um reencontro com o passado e presente de nossa história identitária. Essa experiência me preparou para um compromisso mais profundo: durante 4 anos coordenei o projeto de "Desenvolvimento histórico e cultural da Rota do Che Guevara na Bolívia". Trabalhamos lado a lado com comunidades camponesas e indígenas em Vallegrande, La Higuera, Vado del Yeso, Pucará e Lagunillas. Lá aprendi o verdadeiro valor da resiliência, da memória e do trabalho comunitário.',
      p3: 'Depois de anos, compartilhamos a experiência da viagem de bicicleta pela América Latina e Caribe em um livro e vídeo chamado "Um ano de bicicleta", dando palestras em várias cidades da Argentina. A Intendência Municipal de nossa cidade nos concedeu uma menção especial por promover e incentivar o uso do transporte não motorizado e a viagem de bicicleta.',
      p4: 'Essa base sólida me impulsionou, junto com um companheiro de rota, a lançar "Sonhos Sobre Rodas": a volta ao mundo de bicicleta. Durante 11 anos, percorremos 120.000 km por 84 países, acompanhados pela companheira de duas rodas que batizamos de "A Estrela", que ilumina o caminho. Agradeço a solidariedade dos milhares de seres sencientes que tornaram possível a conclusão da volta ao mundo planejada.',
      p5: 'Quando me perguntam o que a viagem me deixou, respondo: decidi viver a partir do amor, da compaixão, da empatia, da solidariedade e do respeito. Esse é o resumo de todo o aprendizado.',
      p6: 'A rota, no entanto, não havia terminado. Após concluir a viagem, continuei pedalando pelo Sudeste Asiático até encontrar minha base atual em Luang Prabang, Laos. Longe de parar, voltei às aulas, mas desta vez com um propósito claro: estudar Marketing Digital, Arquitetura de IA e Gestão de Produtos de IA em instituições como Google, Universidade Vanderbilt e Universidade Duke, atualmente complementado com o Google Professional UX Design Certificate.',
      p7: 'Desta fusão entre a rota e a tecnologia surge o SportDharma Ecosystem. É a continuidade digital da essência de Sonhos Sobre Rodas, é meu legado e minha forma de retribuir à comunidade tudo o que o mundo me deu.',
      p8: 'Hoje, aos 60 anos, continuo em movimento, continuo sonhando com os olhos abertos. Complemento a vida diária com Tai Chi, meditação e caminhadas; disciplinas que reforçam o equilíbrio e a consciência que imprimo em cada linha de código deste projeto.',
      cta: 'Convido você a fazer parte desta comunidade!'
    }
  },
  de: {
    fundador: {
      title: 'Favio M. Giorgio Data',
      tagline: '120.000 km, 84 Länder, 11 Jahre. Freie Software für Menschen, die sich bewegen.',
      p1: 'Mein Weg begann weit entfernt von meiner Geburtsstadt Rosario, als ich in Europa lebte. Dort, zwischen Lektüren über Ernesto Che Guevara und einer tiefen Verbindung zu meinen Wurzeln, entstand in mir das dringende Bedürfnis, Unsere Große Heimat kennenzulernen und zu bereisen.',
      p2: 'Diese Suche brachte mich zurück auf den amerikanischen Kontinent und gab den Anstoß zu meiner ersten großen Fahrradreise durch Lateinamerika und die Karibik. Es war ein Wiedersehen mit der Vergangenheit und Gegenwart unserer identitären Geschichte. Diese Erfahrung bereitete mich auf ein tieferes Engagement vor: 4 Jahre lang koordinierte ich das Projekt "Historische und kulturelle Entwicklung der Che-Guevara-Route in Bolivien". Wir arbeiteten Seite an Seite mit bäuerlichen und indigenen Gemeinschaften in Vallegrande, La Higuera, Vado del Yeso, Pucará und Lagunillas. Dort lernte ich den wahren Wert von Resilienz, Erinnerung und Gemeinschaftsarbeit kennen.',
      p3: 'Nach Jahren teilten wir die Erfahrung der Fahrradreise durch Lateinamerika und die Karibik in einem Buch und Video namens "Ein Jahr auf dem Fahrrad" und hielten Vorträge in verschiedenen Städten Argentiniens. Die städtische Intendanz unserer Stadt verlieh uns eine besondere Erwähnung für die Förderung und Unterstützung der Nutzung nicht motorisierter Transportmittel und des Fahrradfahrens.',
      p4: 'Diese solide Basis spornte mich zusammen mit einem Reisegefährten an, "Träume auf Pedalen" zu starten: die Fahrrad-Weltreise. 11 Jahre lang legten wir 120.000 km durch 84 Länder zurück, begleitet von der zweirädrigen Gefährtin, die wir "Der Stern" tauften, die den Weg erleuchtet. Ich bin dankbar für die Solidarität der Tausende von fühlenden Wesen, die es ermöglichten, die geplante Weltreise abzuschließen.',
      p5: 'Wenn man mich fragt, was die Reise mir hinterlassen hat, antworte ich: Ich habe mich entschieden, aus Liebe, Mitgefühl, Empathie, Solidarität und Respekt zu leben. Das ist die Zusammenfassung des gesamten Lernens.',
      p6: 'Die Route war jedoch noch nicht zu Ende. Nach Abschluss der Reise radelte ich weiter durch Südostasien, bis ich meine aktuelle Basis in Luang Prabang, Laos, fand. Weit davon entfernt aufzuhören, ging ich zurück ins Klassenzimmer, aber diesmal mit einem klaren Ziel: Digital Marketing, KI-Architektur und KI-Produktmanagement an Institutionen wie Google, Vanderbilt University und Duke University zu studieren, derzeit ergänzt durch das Google Professional UX Design Certificate.',
      p7: 'Aus dieser Verschmelzung von Route und Technologie entsteht SportDharma Ecosystem. Es ist die digitale Kontinuität der Essenz von Träume auf Pedalen, es ist mein Vermächtnis und meine Art, der Gemeinschaft alles zurückzugeben, was die Welt mir gegeben hat.',
      p8: 'Heute, mit 60 Jahren, bin ich immer noch in Bewegung, ich träume weiterhin mit offenen Augen. Ich ergänze den Alltag mit Tai Chi, Meditation und Wandern; Disziplinen, die das Gleichgewicht und das Bewusstsein stärken, das ich in jede Zeile Code dieses Projekts einpräge.',
      cta: 'Ich lade Sie ein, Teil dieser Gemeinschaft zu werden!'
    }
  },
  it: {
    fundador: {
      title: 'Favio M. Giorgio Data',
      tagline: '120.000 km, 84 paesi, 11 anni. Costruire software libero per chi vive in movimento.',
      p1: 'Il mio cammino è iniziato lontano dalla mia città natale Rosario, vivendo in Europa. Fu lì, tra letture su Ernesto Che Guevara e una profonda connessione con le mie radici, che nacque in me il bisogno imperioso di conoscere e percorrere La Nostra Grande Patria.',
      p2: 'Quella ricerca mi riportò nel continente americano, dando inizio al mio primo grande viaggio in bicicletta attraverso l\'America Latina e i Caraibi. Fu una riunione con il passato e il presente della nostra storia identitaria. Quell\'esperienza mi preparò a un impegno più profondo: per 4 anni ho coordinato il progetto "Sviluppo storico e culturale della Ruta del Che Guevara in Bolivia". Abbiamo lavorato fianco a fianco con comunità contadine e indigene a Vallegrande, La Higuera, Vado del Yeso, Pucará e Lagunillas. Lì ho imparato il vero valore della resilienza, della memoria e del lavoro comunitario.',
      p3: 'Dopo anni abbiamo condiviso l\'esperienza del viaggio in bicicletta attraverso l\'America Latina e i Caraibi in un libro e un video intitolati "Un anno in bicicletta", tenendo conferenze in varie città dell\'Argentina. L\'Intendenza Municipale della nostra città ci ha concesso una menzione speciale per promuovere e incoraggiare l\'uso del trasporto non motorizzato e il viaggio in bicicletta.',
      p4: 'Quella solida base mi ha spinto, insieme a un compagno di viaggio, a lanciare "Sogni sui Pedali": il giro del mondo in bicicletta. Per 11 anni abbiamo percorso 120.000 km attraverso 84 paesi, accompagnati dalla compagna a due ruote che abbiamo battezzato "La Stella", che illumina il cammino. Sono grato per la solidarietà delle migliaia di esseri senzienti che hanno reso possibile il completamento del giro del mondo pianificato.',
      p5: 'Quando mi chiedono cosa mi ha lasciato il viaggio, rispondo: ho deciso di vivere dall\'amore, dalla compassione, dall\'empatia, dalla solidarietà e dal rispetto. Questo è il riassunto di tutto l\'apprendimento.',
      p6: 'La strada, tuttavia, non era finita. Dopo aver completato il viaggio, ho continuato a pedalare attraverso il Sud-est asiatico fino a trovare la mia base attuale a Luang Prabang, Laos. Lungi dal fermarmi, sono tornato in aula, ma questa volta con uno scopo chiaro: studiare Marketing Digitale, Architettura AI e Gestione dei Prodotti AI in istituzioni come Google, Università Vanderbilt e Università Duke, attualmente integrato con il Google Professional UX Design Certificate.',
      p7: 'Da questa fusione tra la strada e la tecnologia nasce SportDharma Ecosystem. È la continuità digitale dell\'essenza di Sogni sui Pedali, è la mia eredità e il mio modo di restituire alla comunità tutto ciò che il mondo mi ha dato.',
      p8: 'Oggi, a 60 anni, continuo a muovermi, continuo a sognare a occhi aperti. Completo la vita quotidiana con Tai Chi, meditazione e camminate; discipline che rafforzano l\'equilibrio e la consapevolezza che imprimo in ogni riga di codice di questo progetto.',
      cta: 'Ti invito a far parte di questa comunità!'
    }
  }
};

// 5. Actualizar cada archivo JSON de traducción
const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = {};
  try { existing = JSON.parse(await readFile(filePath, 'utf8')); } catch (e) {}
  
  existing.fundador = { ...existing.fundador, ...translations[lang].fundador };
  
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado con el nuevo texto del fundador`);
}

console.log('\n🎉 Sección Fundador actualizada con el nuevo texto y CTA a Noticias');
import { writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

const translations = {
  es: {
    page_title: "Fundador | SportDharma Ecosystem",
    subtitle: "Cicloviajero · Fundador · Desarrollador",
    bio_p1: "Durante <strong>11 años</strong> recorrí <strong>120.000 kilómetros</strong> en bicicleta a través de <strong>84 países</strong>. Desde los Pamir de Tayikistán hasta los templos de Luang Prabang en Laos, donde actualmente resido, descubrí que el deporte al aire libre necesita herramientas digitales que respeten la privacidad, funcionen sin conexión y pertenezcan a quienes las usan.",
    bio_p2: "<strong>SportDharma Ecosystem</strong> nació de esa necesidad: una infraestructura de software libre, soberana y offline-first para deportistas outdoor. Sin algoritmos, sin tracking, sin venta de datos. Solo herramientas que te acompañen en la ruta.",
    stat_km_label: "Kilómetros recorridos",
    stat_countries_label: "Países visitados",
    stat_years_label: "Años en ruta",
    bio_p3: "Hoy combino la vida en ruta con el desarrollo de software libre, construyendo herramientas que yo mismo uso cada día y que comparto con la comunidad global de deportistas conscientes."
  },
  en: {
    page_title: "Founder | SportDharma Ecosystem",
    subtitle: "Cycle Tourer · Founder · Developer",
    bio_p1: "For <strong>11 years</strong> I traveled <strong>120,000 kilometers</strong> by bicycle across <strong>84 countries</strong>. From the Pamir Mountains of Tajikistan to the temples of Luang Prabang in Laos, where I currently reside, I discovered that outdoor sports need digital tools that respect privacy, work offline, and belong to those who use them.",
    bio_p2: "<strong>SportDharma Ecosystem</strong> was born from that need: a free, sovereign, offline-first software infrastructure for outdoor athletes. No algorithms, no tracking, no data selling. Just tools that accompany you on the road.",
    stat_km_label: "Kilometers traveled",
    stat_countries_label: "Countries visited",
    stat_years_label: "Years on the road",
    bio_p3: "Today I combine life on the road with free software development, building tools that I use every day and share with the global community of conscious athletes."
  },
  fr: {
    page_title: "Fondateur | SportDharma Ecosystem",
    subtitle: "Cyclotouriste · Fondateur · Développeur",
    bio_p1: "Pendant <strong>11 ans</strong>, j'ai parcouru <strong>120 000 kilomètres</strong> à vélo à travers <strong>84 pays</strong>. Des Pamir du Tadjikistan aux temples de Luang Prabang au Laos, où je réside actuellement, j'ai découvert que le sport de plein air a besoin d'outils numériques qui respectent la vie privée, fonctionnent hors ligne et appartiennent à ceux qui les utilisent.",
    bio_p2: "<strong>SportDharma Ecosystem</strong> est né de ce besoin : une infrastructure logicielle libre, souveraine et offline-first pour les sportifs outdoor. Pas d'algorithmes, pas de tracking, pas de vente de données. Juste des outils qui vous accompagnent sur la route.",
    stat_km_label: "Kilomètres parcourus",
    stat_countries_label: "Pays visités",
    stat_years_label: "Années sur la route",
    bio_p3: "Aujourd'hui, je combine la vie sur la route avec le développement de logiciels libres, construisant des outils que j'utilise moi-même chaque jour et que je partage avec la communauté mondiale de sportifs conscients."
  },
  pt: {
    page_title: "Fundador | SportDharma Ecosystem",
    subtitle: "Cicloturista · Fundador · Desenvolvedor",
    bio_p1: "Durante <strong>11 anos</strong> percorri <strong>120.000 quilômetros</strong> de bicicleta por <strong>84 países</strong>. Dos Pamir do Tajiquistão aos templos de Luang Prabang no Laos, onde atualmente resido, descobri que o esporte ao ar livre precisa de ferramentas digitais que respeitem a privacidade, funcionem offline e pertençam a quem as usa.",
    bio_p2: "<strong>SportDharma Ecosystem</strong> nasceu dessa necessidade: uma infraestrutura de software livre, soberana e offline-first para atletas outdoor. Sem algoritmos, sem tracking, sem venda de dados. Apenas ferramentas que te acompanham na estrada.",
    stat_km_label: "Quilômetros percorridos",
    stat_countries_label: "Países visitados",
    stat_years_label: "Anos na estrada",
    bio_p3: "Hoje combino a vida na estrada com o desenvolvimento de software livre, construindo ferramentas que eu mesmo uso todos os dias e que compartilho com a comunidade global de atletas conscientes."
  },
  de: {
    page_title: "Gründer | SportDharma Ecosystem",
    subtitle: "Radreisender · Gründer · Entwickler",
    bio_p1: "<strong>11 Jahre</strong> lang fuhr ich <strong>120.000 Kilometer</strong> mit dem Fahrrad durch <strong>84 Länder</strong>. Vom Pamir in Tadschikistan bis zu den Tempeln von Luang Prabang in Laos, wo ich derzeit lebe, entdeckte ich, dass der Outdoor-Sport digitale Tools braucht, die die Privatsphäre respektieren, offline funktionieren und denen gehören, die sie nutzen.",
    bio_p2: "<strong>SportDharma Ecosystem</strong> entstand aus diesem Bedürfnis: eine freie, souveräne, offline-first Software-Infrastruktur für Outdoor-Athleten. Keine Algorithmen, kein Tracking, kein Datenverkauf. Nur Tools, die dich auf der Straße begleiten.",
    stat_km_label: "Kilometer zurückgelegt",
    stat_countries_label: "Länder besucht",
    stat_years_label: "Jahre unterwegs",
    bio_p3: "Heute verbinde ich das Leben unterwegs mit der Entwicklung freier Software und baue Tools, die ich selbst jeden Tag nutze und mit der globalen Gemeinschaft bewusster Athleten teile."
  },
  it: {
    page_title: "Fondatore | SportDharma Ecosystem",
    subtitle: "Cicloturista · Fondatore · Sviluppatore",
    bio_p1: "Per <strong>11 anni</strong> ho percorso <strong>120.000 chilometri</strong> in bicicletta attraverso <strong>84 paesi</strong>. Dai Pamir del Tagikistan ai templi di Luang Prabang in Laos, dove attualmente risiedo, ho scoperto che lo sport all'aria aperta ha bisogno di strumenti digitali che rispettino la privacy, funzionino offline e appartengano a chi li usa.",
    bio_p2: "<strong>SportDharma Ecosystem</strong> è nato da questa necessità: un'infrastruttura software libera, sovrana e offline-first per atleti outdoor. Nessun algoritmo, nessun tracking, nessuna vendita di dati. Solo strumenti che ti accompagnano sulla strada.",
    stat_km_label: "Chilometri percorsi",
    stat_countries_label: "Paesi visitati",
    stat_years_label: "Anni in viaggio",
    bio_p3: "Oggi combino la vita in viaggio con lo sviluppo di software libero, costruendo strumenti che uso io stesso ogni giorno e che condivido con la comunità globale di atleti consapevoli."
  }
};

async function main() {
  const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
  
  for (const lang of langs) {
    const filePath = path.join(I18N_DIR, `${lang}.json`);
    let existing = {};
    
    try {
      const content = await readFile(filePath, 'utf8');
      existing = JSON.parse(content);
    } catch (e) {
      // Si no existe o está vacío, empezamos de cero
    }
    
    // Fusionar con las nuevas traducciones de 'fundador'
    existing.fundador = translations[lang];
    
    // Escribir sin escapado de caracteres (JSON.stringify con espacios)
    await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
    console.log(`✅ ${lang}.json actualizado correctamente`);
  }
  
  console.log('\n🎉 Todos los archivos i18n actualizados sin escapado HTML.');
}

main();
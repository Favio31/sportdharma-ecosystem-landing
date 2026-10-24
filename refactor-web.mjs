import { writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const FILE = path.join(ROOT, 'src', 'pages', '[lang]', 'web', 'index.astro');
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

// 1. Reescribir web/index.astro con t()
const webContent = `---
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

<Layout title={t('web.page_title')}>
  <section class="py-20 px-6 bg-surface-alt transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      
      <div class="text-center mb-16">
        <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">{t('web.label')}</p>
        <h1 class="text-4xl md:text-6xl font-bold text-ink mb-4">
          {t('web.title_1')} <span class="text-[#E8530E] dark:text-orange-500">{t('web.title_2')}</span>
        </h1>
        <p class="text-lg text-ink-soft max-w-2xl mx-auto">
          {t('web.subtitle')}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <div class="space-y-8">
          
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-ink mb-2">{t('web.f1_title')}</h3>
              <p class="text-ink-soft leading-relaxed">{t('web.f1_desc')}</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-ink mb-2">{t('web.f2_title')}</h3>
              <p class="text-ink-soft leading-relaxed">{t('web.f2_desc')}</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-ink mb-2">{t('web.f3_title')}</h3>
              <p class="text-ink-soft leading-relaxed">{t('web.f3_desc')}</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-ink mb-2">{t('web.f4_title')}</h3>
              <p class="text-ink-soft leading-relaxed">{t('web.f4_desc')}</p>
            </div>
          </div>

        </div>

        <div class="bg-gradient-to-br from-[#E8530E]/10 to-ink/5 dark:from-[#E8530E]/20 dark:to-ink/20 rounded-2xl p-8 border border-line flex items-center justify-center min-h-[400px]">
          <div class="text-center">
            <svg class="w-32 h-32 text-[#E8530E] dark:text-orange-500 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <p class="text-ink-soft font-mono text-sm">{t('web.placeholder_title')}</p>
            <p class="text-ink-soft text-xs mt-2">{t('web.placeholder_desc')}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</Layout>
`;

await writeFile(FILE, webContent, 'utf8');
console.log('✅ web/index.astro refactorizado con t()');

// 2. Traducciones
const translations = {
  es: {
    page_title: 'Página Web | SportDharma Ecosystem',
    label: 'ECOSISTEMA',
    title_1: 'Página',
    title_2: 'Web',
    subtitle: 'Contenido curado por humanos, no por algoritmos. Conocimiento accesible, verificable y libre de sesgos comerciales.',
    f1_title: 'Contenido Curado por Humanos',
    f1_desc: 'Artículos, guías y recursos seleccionados por expertos en deporte, viaje y tecnología. Sin algoritmos opacos ni sesgos comerciales.',
    f2_title: 'Actualización Constante',
    f2_desc: 'Nuevas publicaciones diarias organizadas en seis categorías. Siempre contenido fresco y relevante para la comunidad outdoor.',
    f3_title: 'Instalable como PWA',
    f3_desc: 'Instalala como app en tu navegador. Funciona offline gracias al Service Worker. Acceso rápido desde cualquier dispositivo.',
    f4_title: 'Multi-idioma Nativo',
    f4_desc: 'Español e inglés desde el día 1. Selector con localStorage, sin cookies. Accesible para la comunidad global de deportistas.',
    placeholder_title: 'Portal Web (Próximamente)',
    placeholder_desc: 'Accesible desde cualquier navegador'
  },
  en: {
    page_title: 'Website | SportDharma Ecosystem',
    label: 'ECOSYSTEM',
    title_1: 'Web',
    title_2: 'Portal',
    subtitle: 'Content curated by humans, not algorithms. Accessible, verifiable knowledge free from commercial biases.',
    f1_title: 'Human-Curated Content',
    f1_desc: 'Articles, guides and resources selected by experts in sport, travel and technology. No opaque algorithms or commercial biases.',
    f2_title: 'Constant Updates',
    f2_desc: 'New daily publications organized in six categories. Always fresh and relevant content for the outdoor community.',
    f3_title: 'Installable as PWA',
    f3_desc: 'Install it as an app in your browser. Works offline thanks to the Service Worker. Quick access from any device.',
    f4_title: 'Native Multi-language',
    f4_desc: 'Spanish and English from day one. Selector with localStorage, no cookies. Accessible for the global community of athletes.',
    placeholder_title: 'Web Portal (Coming Soon)',
    placeholder_desc: 'Accessible from any browser'
  },
  fr: {
    page_title: 'Site Web | SportDharma Ecosystem',
    label: 'ÉCOSYSTÈME',
    title_1: 'Portail',
    title_2: 'Web',
    subtitle: 'Contenu organisé par des humains, pas par des algorithmes. Connaissances accessibles, vérifiables et libres de biais commerciaux.',
    f1_title: 'Contenu Organisé par des Humains',
    f1_desc: 'Articles, guides et ressources sélectionnés par des experts en sport, voyage et technologie. Pas d\'algorithmes opaques ni de biais commerciaux.',
    f2_title: 'Mises à Jour Constantes',
    f2_desc: 'Nouvelles publications quotidiennes organisées en six catégories. Toujours du contenu frais et pertinent pour la communauté outdoor.',
    f3_title: 'Installable en PWA',
    f3_desc: 'Installez-le comme une application dans votre navigateur. Fonctionne hors ligne grâce au Service Worker. Accès rapide depuis tout appareil.',
    f4_title: 'Multilingue Natif',
    f4_desc: 'Espagnol et anglais dès le premier jour. Sélecteur avec localStorage, sans cookies. Accessible à la communauté mondiale de sportifs.',
    placeholder_title: 'Portail Web (Bientôt)',
    placeholder_desc: 'Accessible depuis n\'importe quel navigateur'
  },
  pt: {
    page_title: 'Site Web | SportDharma Ecosystem',
    label: 'ECOSSISTEMA',
    title_1: 'Portal',
    title_2: 'Web',
    subtitle: 'Conteúdo curado por humanos, não por algoritmos. Conhecimento acessível, verificável e livre de vieses comerciais.',
    f1_title: 'Conteúdo Curado por Humanos',
    f1_desc: 'Artigos, guias e recursos selecionados por especialistas em esporte, viagem e tecnologia. Sem algoritmos opacos ou vieses comerciais.',
    f2_title: 'Atualização Constante',
    f2_desc: 'Novas publicações diárias organizadas em seis categorias. Sempre conteúdo fresco e relevante para a comunidade outdoor.',
    f3_title: 'Instalável como PWA',
    f3_desc: 'Instale como app no seu navegador. Funciona offline graças ao Service Worker. Acesso rápido de qualquer dispositivo.',
    f4_title: 'Multi-idioma Nativo',
    f4_desc: 'Espanhol e inglês desde o dia 1. Seletor com localStorage, sem cookies. Acessível para a comunidade global de atletas.',
    placeholder_title: 'Portal Web (Em Breve)',
    placeholder_desc: 'Acessível de qualquer navegador'
  },
  de: {
    page_title: 'Webseite | SportDharma Ecosystem',
    label: 'ÖKOSYSTEM',
    title_1: 'Web',
    title_2: 'Portal',
    subtitle: 'Von Menschen kuratierte Inhalte, nicht von Algorithmen. Zugängliches, überprüfbares Wissen frei von kommerziellen Verzerrungen.',
    f1_title: 'Von Menschen Kuratierte Inhalte',
    f1_desc: 'Artikel, Leitfäden und Ressourcen, ausgewählt von Experten für Sport, Reisen und Technologie. Keine undurchsichtigen Algorithmen oder kommerziellen Verzerrungen.',
    f2_title: 'Ständige Aktualisierung',
    f2_desc: 'Tägliche neue Veröffentlichungen in sechs Kategorien. Immer frische und relevante Inhalte für die Outdoor-Community.',
    f3_title: 'Als PWA Installierbar',
    f3_desc: 'Installieren Sie es als App in Ihrem Browser. Funktioniert offline dank Service Worker. Schneller Zugriff von jedem Gerät.',
    f4_title: 'Native Mehrsprachigkeit',
    f4_desc: 'Spanisch und Englisch ab Tag eins. Selektor mit localStorage, keine Cookies. Zugänglich für die globale Gemeinschaft der Athleten.',
    placeholder_title: 'Webportal (Demnächst)',
    placeholder_desc: 'Von jedem Browser aus zugänglich'
  },
  it: {
    page_title: 'Sito Web | SportDharma Ecosystem',
    label: 'ECOSISTEMA',
    title_1: 'Portale',
    title_2: 'Web',
    subtitle: 'Contenuti curati da umani, non da algoritmi. Conoscenza accessibile, verificabile e libera da bias commerciali.',
    f1_title: 'Contenuti Curati da Umani',
    f1_desc: 'Articoli, guide e risorse selezionati da esperti di sport, viaggio e tecnologia. Nessun algoritmo opaco o bias commerciale.',
    f2_title: 'Aggiornamento Costante',
    f2_desc: 'Nuove pubblicazioni giornaliere organizzate in sei categorie. Sempre contenuti freschi e rilevanti per la comunità outdoor.',
    f3_title: 'Installabile come PWA',
    f3_desc: 'Installalo come app nel tuo browser. Funziona offline grazie al Service Worker. Accesso rapido da qualsiasi dispositivo.',
    f4_title: 'Multilingua Nativo',
    f4_desc: 'Spagnolo e inglese dal primo giorno. Selettore con localStorage, senza cookie. Accessibile alla comunità globale di atleti.',
    placeholder_title: 'Portale Web (Prossimamente)',
    placeholder_desc: 'Accessibile da qualsiasi browser'
  }
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = {};
  try { existing = JSON.parse(await readFile(filePath, 'utf8')); } catch (e) {}
  
  existing.web = translations[lang];
  
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado con web`);
}

console.log('\n🎉 Web completamente internacionalizada');
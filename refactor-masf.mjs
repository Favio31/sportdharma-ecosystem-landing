import { writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const FILE = path.join(ROOT, 'src', 'pages', '[lang]', 'masf', 'index.astro');
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

// 1. Reescribir masf/index.astro con t()
const masfContent = `---
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

<Layout title={t('masf.page_title')}>
  <section class="py-20 px-6 bg-surface-alt transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      
      <div class="text-center mb-16">
        <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">{t('masf.label')}</p>
        <h1 class="text-4xl md:text-6xl font-bold text-ink mb-4">
          {t('masf.title_1')} <span class="text-[#E8530E] dark:text-orange-500">{t('masf.title_2')}</span>
        </h1>
        <p class="text-lg text-ink-soft max-w-2xl mx-auto">
          {t('masf.subtitle')}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <div class="space-y-8">
          
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-ink mb-2">{t('masf.f1_title')}</h3>
              <p class="text-ink-soft leading-relaxed">{t('masf.f1_desc')}</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-ink mb-2">{t('masf.f2_title')}</h3>
              <p class="text-ink-soft leading-relaxed">{t('masf.f2_desc')}</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-ink mb-2">{t('masf.f3_title')}</h3>
              <p class="text-ink-soft leading-relaxed">{t('masf.f3_desc')}</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-ink mb-2">{t('masf.f4_title')}</h3>
              <p class="text-ink-soft leading-relaxed">{t('masf.f4_desc')}</p>
            </div>
          </div>

        </div>

        <div class="space-y-6">
          <div class="rounded-xl overflow-hidden shadow-lg border border-slate-600/50 bg-surface dark:bg-surface/50 transition-colors duration-300">
            <img 
              src="/masf-captura-v2.png" 
              alt={t('masf.alt_image')} 
              class="w-full h-auto object-cover transition-transform duration-500"
            />
          </div>
          <p class="text-sm text-ink-soft text-center italic">
            {t('masf.caption')}
          </p>
        </div>

      </div>
    </div>
  </section>
</Layout>
`;

await writeFile(FILE, masfContent, 'utf8');
console.log('✅ masf/index.astro refactorizado con t()');

// 2. Traducciones (cero "Edge AI", tono técnico y soberano)
const translations = {
  es: {
    page_title: 'Motor MASF | SportDharma Ecosystem',
    label: 'ECOSISTEMA',
    title_1: 'Motor',
    title_2: 'MASF',
    subtitle: 'Arquitectura de Enjambre Multiagente. Curación humana asistida por IA. Contenido verificado, sin algoritmos opacos ni sesgos ocultos.',
    f1_title: 'Curación Humana Primero',
    f1_desc: 'Los curadores humanos encuentran y seleccionan el contenido relevante. La IA asiste, no decide. Calidad sobre cantidad.',
    f2_title: 'Verificación Transparente',
    f2_desc: 'Cada artículo incluye fuente, resumen y nota de transparencia. Trazabilidad total del proceso de curación.',
    f3_title: 'Flujo Human-in-the-Loop',
    f3_desc: 'Los agentes de IA procesan, clasifican y sugieren. Los humanos validan, corrigen y publican. Sin automatización ciega.',
    f4_title: 'Código Abierto y Auditable',
    f4_desc: 'El flujo completo es transparente y auditable. Sin cajas negras. La comunidad puede verificar y contribuir al proceso.',
    alt_image: 'Interfaz del sistema MASF',
    caption: 'Interfaz del Motor MASF en acción'
  },
  en: {
    page_title: 'MASF Engine | SportDharma Ecosystem',
    label: 'ECOSYSTEM',
    title_1: 'MASF',
    title_2: 'Engine',
    subtitle: 'Multi-Agent Swarm Architecture. Human curation assisted by AI. Verified content, no opaque algorithms or hidden biases.',
    f1_title: 'Human Curation First',
    f1_desc: 'Human curators find and select relevant content. AI assists, it does not decide. Quality over quantity.',
    f2_title: 'Transparent Verification',
    f2_desc: 'Each article includes source, summary and transparency note. Full traceability of the curation process.',
    f3_title: 'Human-in-the-Loop Flow',
    f3_desc: 'AI agents process, classify and suggest. Humans validate, correct and publish. No blind automation.',
    f4_title: 'Open Source and Auditable',
    f4_desc: 'The complete flow is transparent and auditable. No black boxes. The community can verify and contribute to the process.',
    alt_image: 'MASF system interface',
    caption: 'MASF Engine interface in action'
  },
  fr: {
    page_title: 'Moteur MASF | SportDharma Ecosystem',
    label: 'ÉCOSYSTÈME',
    title_1: 'Moteur',
    title_2: 'MASF',
    subtitle: 'Architecture en Essaim Multi-Agent. Curation humaine assistée par IA. Contenu vérifié, sans algorithmes opaques ni biais cachés.',
    f1_title: 'Curation Humaine d\'Abord',
    f1_desc: 'Les curateurs humains trouvent et sélectionnent le contenu pertinent. L\'IA assiste, ne décide pas. La qualité avant la quantité.',
    f2_title: 'Vérification Transparente',
    f2_desc: 'Chaque article inclut source, résumé et note de transparence. Traçabilité totale du processus de curation.',
    f3_title: 'Flux Human-in-the-Loop',
    f3_desc: 'Les agents IA traitent, classent et suggèrent. Les humains valident, corrigent et publient. Pas d\'automatisation aveugle.',
    f4_title: 'Open Source et Auditable',
    f4_desc: 'Le flux complet est transparent et auditable. Pas de boîtes noires. La communauté peut vérifier et contribuer au processus.',
    alt_image: 'Interface du système MASF',
    caption: 'Interface du Moteur MASF en action'
  },
  pt: {
    page_title: 'Motor MASF | SportDharma Ecosystem',
    label: 'ECOSSISTEMA',
    title_1: 'Motor',
    title_2: 'MASF',
    subtitle: 'Arquitetura de Enxame Multiagente. Curadoria humana assistida por IA. Conteúdo verificado, sem algoritmos opacos ou vieses ocultos.',
    f1_title: 'Curadoria Humana Primeiro',
    f1_desc: 'Curadores humanos encontram e selecionam o conteúdo relevante. A IA assiste, não decide. Qualidade sobre quantidade.',
    f2_title: 'Verificação Transparente',
    f2_desc: 'Cada artigo inclui fonte, resumo e nota de transparência. Rastreabilidade total do processo de curadoria.',
    f3_title: 'Fluxo Human-in-the-Loop',
    f3_desc: 'Agentes de IA processam, classificam e sugerem. Humanos validam, corrigem e publicam. Sem automação cega.',
    f4_title: 'Código Aberto e Auditável',
    f4_desc: 'O fluxo completo é transparente e auditável. Sem caixas pretas. A comunidade pode verificar e contribuir para o processo.',
    alt_image: 'Interface do sistema MASF',
    caption: 'Interface do Motor MASF em ação'
  },
  de: {
    page_title: 'MASF-Engine | SportDharma Ecosystem',
    label: 'ÖKOSYSTEM',
    title_1: 'MASF',
    title_2: 'Engine',
    subtitle: 'Multi-Agenten-Schwarm-Architektur. Menschliche Kuratierung, unterstützt durch KI. Verifizierte Inhalte, keine undurchsichtigen Algorithmen oder versteckten Verzerrungen.',
    f1_title: 'Menschliche Kuratierung Zuerst',
    f1_desc: 'Menschliche Kuratoren finden und wählen relevante Inhalte aus. KI assistiert, entscheidet nicht. Qualität vor Quantität.',
    f2_title: 'Transparente Verifizierung',
    f2_desc: 'Jeder Artikel enthält Quelle, Zusammenfassung und Transparenzhinweis. Vollständige Rückverfolgbarkeit des Kuratierungsprozesses.',
    f3_title: 'Human-in-the-Loop-Fluss',
    f3_desc: 'KI-Agenten verarbeiten, klassifizieren und schlagen vor. Menschen validieren, korrigieren und veröffentlichen. Keine blinde Automatisierung.',
    f4_title: 'Open Source und Auditierbar',
    f4_desc: 'Der vollständige Fluss ist transparent und auditierbar. Keine Black Boxes. Die Community kann den Prozess überprüfen und dazu beitragen.',
    alt_image: 'MASF-Systemoberfläche',
    caption: 'MASF-Engine-Oberfläche in Aktion'
  },
  it: {
    page_title: 'Motore MASF | SportDharma Ecosystem',
    label: 'ECOSISTEMA',
    title_1: 'Motore',
    title_2: 'MASF',
    subtitle: 'Architettura Sciame Multi-Agente. Curazione umana assistita da IA. Contenuti verificati, senza algoritmi opachi o bias nascosti.',
    f1_title: 'Curazione Umana Prima',
    f1_desc: 'I curatori umani trovano e selezionano i contenuti rilevanti. L\'IA assiste, non decide. Qualità sopra quantità.',
    f2_title: 'Verifica Trasparente',
    f2_desc: 'Ogni articolo include fonte, riassunto e nota di trasparenza. Tracciabilità totale del processo di curazione.',
    f3_title: 'Flusso Human-in-the-Loop',
    f3_desc: 'Gli agenti IA elaborano, classificano e suggeriscono. Gli umani validano, correggono e pubblicano. Nessuna automazione cieca.',
    f4_title: 'Open Source e Auditabile',
    f4_desc: 'Il flusso completo è trasparente e auditabile. Nessuna scatola nera. La comunità può verificare e contribuire al processo.',
    alt_image: 'Interfaccia del sistema MASF',
    caption: 'Interfaccia del Motore MASF in azione'
  }
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = {};
  try { existing = JSON.parse(await readFile(filePath, 'utf8')); } catch (e) {}
  
  existing.masf = translations[lang];
  
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado con masf`);
}

console.log('\n🎉 MASF completamente internacionalizado');
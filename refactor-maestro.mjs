import { writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PAGES_DIR = path.join(ROOT, 'src', 'pages', '[lang]');
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

// ==========================================
// 1. REESCRITURA DE ARCHIVOS .ASTRO
// ==========================================

const filesToRefactor = {
  'ecosistema/index.astro': `---
import Layout from '../../layouts/Layout.astro';
import { useTranslations } from '../../i18n/utils.js';

export async function getStaticPaths() {
  return [
    { params: { lang: 'es' } }, { params: { lang: 'en' } }, { params: { lang: 'fr' } },
    { params: { lang: 'pt' } }, { params: { lang: 'de' } }, { params: { lang: 'it' } },
  ];
}
const { lang } = Astro.params;
const t = useTranslations(lang);
---
<Layout title={t('ecosistema.page_title')}>
  <section class="py-20 px-6 bg-surface-alt transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <a href={'/' + lang + '/manifiesto/'} class="group block h-full rounded-2xl border border-black/5 bg-transparent p-8 outline-none! transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] dark:border-white/5 dark:hover:border-orange-500/40">
          <div class="grid grid-cols-2 gap-6 h-full">
            <div class="flex flex-col justify-center">
              <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">{t('ecosistema.card1_label')}</p>
              <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">{t('ecosistema.card1_title')}</h3>
              <p class="text-ink-soft leading-relaxed text-sm">{t('ecosistema.card1_desc')}</p>
            </div>
            <div class="space-y-3">
              <div class="rounded-lg overflow-hidden border border-black/5 dark:border-white/5 h-[140px]">
                <img src="/manifiesto-grupo.jpg" alt={t('ecosistema.alt_grupo')} class="w-full h-full object-cover" draggable="false" />
              </div>
              <div class="rounded-lg overflow-hidden border border-black/5 dark:border-white/5 h-[140px]">
                <img src="/manifiesto-laos.jpg" alt={t('ecosistema.alt_laos')} class="w-full h-full object-cover" draggable="false" />
              </div>
            </div>
          </div>
        </a>
        <a href={'/' + lang + '/ecosistema/'} class="group block h-full rounded-2xl border border-black/5 bg-transparent p-8 outline-none! transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] dark:border-white/5 dark:hover:border-orange-500/40">
          <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">{t('ecosistema.card2_label')}</p>
          <h3 class="text-2xl font-bold text-ink mb-4 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">{t('ecosistema.card2_title')}</h3>
          <div class="rounded-xl overflow-hidden border border-black/5 dark:border-white/5 h-[280px]">
            <img src="/masf-captura-v2.png" alt={t('ecosistema.alt_masf')} class="w-full h-full object-cover" draggable="false" />
          </div>
        </a>
      </div>
    </div>
  </section>
</Layout>`,

  'pilares/index.astro': `---
import Layout from '../../layouts/Layout.astro';
import { useTranslations } from '../../i18n/utils.js';

export async function getStaticPaths() {
  return [
    { params: { lang: 'es' } }, { params: { lang: 'en' } }, { params: { lang: 'fr' } },
    { params: { lang: 'pt' } }, { params: { lang: 'de' } }, { params: { lang: 'it' } },
  ];
}
const { lang } = Astro.params;
const t = useTranslations(lang);
---
<Layout title={t('pilares.page_title')}>
  <section class="py-20 px-6 bg-surface">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-ink mb-6">{t('pilares.title')}</h1>
      <p class="text-lg text-ink-soft">{t('pilares.desc')}</p>
    </div>
  </section>
</Layout>`,

  'estado/index.astro': `---
import Layout from '../../layouts/Layout.astro';
import { useTranslations } from '../../i18n/utils.js';

export async function getStaticPaths() {
  return [
    { params: { lang: 'es' } }, { params: { lang: 'en' } }, { params: { lang: 'fr' } },
    { params: { lang: 'pt' } }, { params: { lang: 'de' } }, { params: { lang: 'it' } },
  ];
}
const { lang } = Astro.params;
const t = useTranslations(lang);
---
<Layout title={t('estado.page_title')}>
  <section class="py-20 px-6 bg-surface">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <div class="text-6xl mb-6">📊</div>
        <h1 class="text-4xl md:text-5xl font-bold text-ink mb-4">{t('estado.title')}</h1>
        <p class="text-xl text-ink-soft">{t('estado.subtitle')}</p>
      </div>
      <div class="space-y-6">
        <div class="p-6 rounded-xl border-l-4 border-green-500 bg-surface-alt">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-bold text-ink">{t('estado.s1_title')}</h3>
            <span class="px-3 py-1 rounded-full bg-green-500/20 text-green-600 text-sm font-semibold">✅ {t('estado.s1_status')}</span>
          </div>
          <p class="text-ink-soft">{t('estado.s1_desc')}</p>
        </div>
        <div class="p-6 rounded-xl border-l-4 border-yellow-500 bg-surface-alt">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-bold text-ink">{t('estado.s2_title')}</h3>
            <span class="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-600 text-sm font-semibold">🚧 {t('estado.s2_status')}</span>
          </div>
          <p class="text-ink-soft">{t('estado.s2_desc')}</p>
        </div>
        <div class="p-6 rounded-xl border-l-4 border-blue-500 bg-surface-alt">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-bold text-ink">{t('estado.s3_title')}</h3>
            <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-600 text-sm font-semibold">🔬 {t('estado.s3_status')}</span>
          </div>
          <p class="text-ink-soft">{t('estado.s3_desc')}</p>
        </div>
        <div class="p-6 rounded-xl border-l-4 border-gray-400 bg-surface-alt">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-bold text-ink">{t('estado.s4_title')}</h3>
            <span class="px-3 py-1 rounded-full bg-gray-400/20 text-gray-600 text-sm font-semibold">📋 {t('estado.s4_status')}</span>
          </div>
          <p class="text-ink-soft">{t('estado.s4_desc')}</p>
        </div>
      </div>
    </div>
  </section>
</Layout>`,

  'noticias/index.astro': `---
import Layout from '../../layouts/Layout.astro';
import { useTranslations } from '../../i18n/utils.js';

export async function getStaticPaths() {
  return [
    { params: { lang: 'es' } }, { params: { lang: 'en' } }, { params: { lang: 'fr' } },
    { params: { lang: 'pt' } }, { params: { lang: 'de' } }, { params: { lang: 'it' } },
  ];
}
const { lang } = Astro.params;
const t = useTranslations(lang);
---
<Layout title={t('noticias.page_title')}>
  <section id="noticias" class="py-20 px-6 bg-surface-alt transition-colors duration-300">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold text-ink mb-4">{t('noticias.title')}</h2>
      <p class="text-ink-soft text-lg mb-10">{t('noticias.subtitle')}</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-transparent hover:border-[#E8530E]/40 transition-all">
          <div class="text-5xl mb-4">🔔</div>
          <h3 class="text-2xl font-bold text-ink mb-3">{t('noticias.c1_title')}</h3>
          <p class="text-ink-soft mb-6">{t('noticias.c1_desc')}</p>
          <button class="inline-block px-8 py-3 rounded-lg bg-[#E8530E] text-white font-semibold hover:bg-[#d14a0c] transition-all hover:scale-105 cursor-pointer">
            {t('noticias.c1_btn')}
          </button>
        </div>
        <div class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-transparent hover:border-[#E8530E]/40 transition-all">
          <div class="text-5xl mb-4">📡</div>
          <h3 class="text-2xl font-bold text-ink mb-3">{t('noticias.c2_title')}</h3>
          <p class="text-ink-soft mb-6">{t('noticias.c2_desc')}</p>
          <a href={'/' + lang + '/rss/'} class="inline-block px-8 py-3 rounded-lg border border-[#E8530E] text-[#E8530E] font-semibold hover:bg-[#E8530E]/10 transition-all">
            {t('noticias.c2_btn')}
          </a>
        </div>
      </div>
    </div>
  </section>
</Layout>`,

  'apoya/index.astro': `---
import Layout from '../../layouts/Layout.astro';
import { useTranslations } from '../../i18n/utils.js';

export async function getStaticPaths() {
  return [
    { params: { lang: 'es' } }, { params: { lang: 'en' } }, { params: { lang: 'fr' } },
    { params: { lang: 'pt' } }, { params: { lang: 'de' } }, { params: { lang: 'it' } },
  ];
}
const { lang } = Astro.params;
const t = useTranslations(lang);
---
<Layout title={t('apoya.page_title')}>
  <section class="py-20 px-6 bg-surface">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <div class="text-6xl mb-6">🤝</div>
        <h1 class="text-4xl md:text-5xl font-bold text-ink mb-4">{t('apoya.title')}</h1>
        <p class="text-xl text-ink-soft">{t('apoya.subtitle')}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-alt">
          <div class="text-4xl mb-4">💚</div>
          <h3 class="text-2xl font-bold text-ink mb-3">{t('apoya.c1_title')}</h3>
          <p class="text-ink-soft mb-6">{t('apoya.c1_desc')}</p>
          <a href="mailto:favio@sportdharmaecosystem.com" class="inline-block px-6 py-3 rounded-lg bg-[#E8530E] text-white font-semibold hover:bg-[#d14a0c] transition-all">
            {t('apoya.c1_btn')}
          </a>
        </div>
        <div class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-alt">
          <div class="text-4xl mb-4">🏛️</div>
          <h3 class="text-2xl font-bold text-ink mb-3">{t('apoya.c2_title')}</h3>
          <p class="text-ink-soft mb-6">{t('apoya.c2_desc')}</p>
          <a href="mailto:favio@sportdharmaecosystem.com?subject=Grant%20Proposal" class="inline-block px-6 py-3 rounded-lg border border-[#E8530E] text-[#E8530E] font-semibold hover:bg-[#E8530E]/10 transition-all">
            {t('apoya.c2_btn')}
          </a>
        </div>
      </div>
      <div class="p-8 rounded-2xl border-2 border-[#E8530E]/30 bg-surface-alt text-center">
        <h3 class="text-2xl font-bold text-ink mb-4">{t('apoya.c3_title')}</h3>
        <p class="text-ink-soft mb-6">{t('apoya.c3_desc')}</p>
        <a href={'/' + lang + '/contacto/'} class="inline-block px-8 py-3 rounded-lg bg-[#E8530E] text-white font-semibold hover:bg-[#d14a0c] transition-all">
          {t('apoya.c3_btn')}
        </a>
      </div>
    </div>
  </section>
</Layout>`,

  'contacto/index.astro': `---
import Layout from '../../layouts/Layout.astro';
import { useTranslations } from '../../i18n/utils.js';

export async function getStaticPaths() {
  return [
    { params: { lang: 'es' } }, { params: { lang: 'en' } }, { params: { lang: 'fr' } },
    { params: { lang: 'pt' } }, { params: { lang: 'de' } }, { params: { lang: 'it' } },
  ];
}
const { lang } = Astro.params;
const t = useTranslations(lang);
---
<Layout title={t('contacto.page_title')}>
  <section class="py-20 px-6 bg-surface">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <div class="text-6xl mb-6">✉️</div>
        <h1 class="text-4xl md:text-5xl font-bold text-ink mb-4">{t('contacto.title')}</h1>
        <p class="text-xl text-ink-soft">{t('contacto.subtitle')}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-alt text-center">
          <div class="text-4xl mb-4">📧</div>
          <h3 class="text-xl font-bold text-ink mb-2">{t('contacto.c1_title')}</h3>
          <p class="text-ink-soft mb-4">{t('contacto.c1_desc')}</p>
          <a href="mailto:favio@sportdharmaecosystem.com" class="text-[#E8530E] font-semibold hover:underline break-all">
            favio@sportdharmaecosystem.com
          </a>
        </div>
        <div class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-alt text-center">
          <div class="text-4xl mb-4">📍</div>
          <h3 class="text-xl font-bold text-ink mb-2">{t('contacto.c2_title')}</h3>
          <p class="text-ink-soft mb-4">{t('contacto.c2_desc')}</p>
          <p class="text-[#E8530E] font-semibold">Luang Prabang, Laos 🇱🇦</p>
        </div>
      </div>
      <div class="p-8 rounded-2xl border-2 border-[#E8530E]/30 bg-surface-alt">
        <h3 class="text-2xl font-bold text-ink mb-4 text-center">{t('contacto.c3_title')}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="mailto:favio@sportdharmaecosystem.com?subject=Colaboración" class="p-4 rounded-lg border border-black/5 dark:border-white/5 hover:border-[#E8530E] transition-all text-center">
            <div class="font-semibold text-ink">{t('contacto.c3_opt1')}</div>
            <div class="text-sm text-ink-soft mt-1">{t('contacto.c3_opt1_desc')}</div>
          </a>
          <a href="mailto:favio@sportdharmaecosystem.com?subject=Grant" class="p-4 rounded-lg border border-black/5 dark:border-white/5 hover:border-[#E8530E] transition-all text-center">
            <div class="font-semibold text-ink">{t('contacto.c3_opt2')}</div>
            <div class="text-sm text-ink-soft mt-1">{t('contacto.c3_opt2_desc')}</div>
          </a>
          <a href="mailto:favio@sportdharmaecosystem.com?subject=Prensa" class="p-4 rounded-lg border border-black/5 dark:border-white/5 hover:border-[#E8530E] transition-all text-center">
            <div class="font-semibold text-ink">{t('contacto.c3_opt3')}</div>
            <div class="text-sm text-ink-soft mt-1">{t('contacto.c3_opt3_desc')}</div>
          </a>
        </div>
      </div>
    </div>
  </section>
</Layout>`,

  'comunidad/index.astro': `---
import Layout from '../../layouts/Layout.astro';
import { useTranslations } from '../../i18n/utils.js';

export async function getStaticPaths() {
  return [
    { params: { lang: 'es' } }, { params: { lang: 'en' } }, { params: { lang: 'fr' } },
    { params: { lang: 'pt' } }, { params: { lang: 'de' } }, { params: { lang: 'it' } },
  ];
}
const { lang } = Astro.params;
const t = useTranslations(lang);
---
<Layout title={t('comunidad.page_title')}>
  <section class="py-20 px-6 bg-surface">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <div class="text-6xl mb-6">🌐</div>
        <h1 class="text-4xl md:text-5xl font-bold text-ink mb-4">{t('comunidad.title')}</h1>
        <p class="text-xl text-ink-soft">{t('comunidad.subtitle')}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <a href="https://github.com/Favio31" target="_blank" rel="noopener" class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-alt hover:border-[#E8530E] transition-all group">
          <div class="text-4xl mb-4">💻</div>
          <h3 class="text-xl font-bold text-ink mb-2 group-hover:text-[#E8530E] transition-colors">{t('comunidad.c1_title')}</h3>
          <p class="text-ink-soft text-sm">{t('comunidad.c1_desc')}</p>
        </a>
        <a href={'/' + lang + '/rss/'} class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-alt hover:border-[#E8530E] transition-all group">
          <div class="text-4xl mb-4">📡</div>
          <h3 class="text-xl font-bold text-ink mb-2 group-hover:text-[#E8530E] transition-colors">{t('comunidad.c2_title')}</h3>
          <p class="text-ink-soft text-sm">{t('comunidad.c2_desc')}</p>
        </a>
        <a href="mailto:favio@sportdharmaecosystem.com?subject=Newsletter" class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-alt hover:border-[#E8530E] transition-all group">
          <div class="text-4xl mb-4">📩</div>
          <h3 class="text-xl font-bold text-ink mb-2 group-hover:text-[#E8530E] transition-colors">{t('comunidad.c3_title')}</h3>
          <p class="text-ink-soft text-sm">{t('comunidad.c3_desc')}</p>
        </a>
        <a href={'/' + lang + '/contacto/'} class="p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-surface-alt hover:border-[#E8530E] transition-all group">
          <div class="text-4xl mb-4">🤝</div>
          <h3 class="text-xl font-bold text-ink mb-2 group-hover:text-[#E8530E] transition-colors">{t('comunidad.c4_title')}</h3>
          <p class="text-ink-soft text-sm">{t('comunidad.c4_desc')}</p>
        </a>
      </div>
      <div class="p-8 rounded-2xl bg-gradient-to-br from-[#E8530E]/10 to-transparent border border-[#E8530E]/30 text-center">
        <h3 class="text-2xl font-bold text-ink mb-4">{t('comunidad.philosophy_title')}</h3>
        <p class="text-ink-soft text-lg max-w-2xl mx-auto">{t('comunidad.philosophy_desc')}</p>
      </div>
    </div>
  </section>
</Layout>`
};

for (const [filePath, content] of Object.entries(filesToRefactor)) {
  const fullPath = path.join(PAGES_DIR, filePath);
  await writeFile(fullPath, content, 'utf8');
  console.log(`✅ ${filePath} refactorizado`);
}

// ==========================================
// 2. TRADUCCIONES PARA LOS 6 IDIOMAS
// ==========================================
const translations = {
  es: {
    ecosistema: { page_title: 'Ecosistema | SportDharma', card1_label: 'MANIFIESTO', card1_title: 'Así nació SportDharma Ecosystem', card1_desc: 'De los libros de la infancia a la vuelta al mundo en bicicleta. Del budismo a la IA. Una búsqueda de propósito que se transformó en infraestructura libre para deportistas.', alt_grupo: 'Cicloviajeros', alt_laos: 'Templo en Laos', card2_label: 'DESCUBRÍ', card2_title: '¿Qué es SportDharma Ecosystem?', alt_masf: 'Interfaz del sistema MASF' },
    pilares: { page_title: 'Pilares | SportDharma', title: 'Pilares', desc: 'Contenido en desarrollo. Próximamente.' },
    estado: { page_title: 'Estado del Ecosistema | SportDharma', title: 'Estado del Ecosistema', subtitle: 'Transparencia total sobre el desarrollo y el roadmap.', s1_title: 'Landing Page Multilingüe', s1_status: 'En producción', s1_desc: 'Sitio público en 6 idiomas con SEO, PWA y Open Graph optimizado.', s2_title: 'Sistema de Noticias Curadas', s2_status: 'En desarrollo', s2_desc: 'Curación humana de contenido outdoor, 6 publicaciones diarias. RSS y notificaciones nativas.', s3_title: 'Multi-Agent Swarm Framework', s3_status: 'Fase de investigación', s3_desc: 'Framework de agentes IA descentralizados para curación y análisis de contenido deportivo.', s4_title: 'Apps Offline-First', s4_status: 'Planificado', s4_desc: 'Aplicaciones móviles para deportistas outdoor que funcionen sin conexión a internet.' },
    noticias: { page_title: 'Noticias e Información | SportDharma', title: 'Noticias e Información', subtitle: 'Curación humana, 6 publicaciones diarias. Contenido fresco, verificado y relevante.', c1_title: 'Activar Notificaciones', c1_desc: 'Sin emails, sin registro, sin tracking. Solo notificaciones nativas del navegador.', c1_btn: 'Suscribirse', c2_title: 'RSS Feed (Open Source)', c2_desc: 'La forma más pura y descentralizada de seguir nuestras novedades.', c2_btn: 'Ver instrucciones' },
    apoya: { page_title: 'Apoya el Proyecto | SportDharma', title: 'Apoyá el proyecto', subtitle: 'SportDharma es software libre. Tu apoyo mantiene la infraestructura viva.', c1_title: 'Donación directa', c1_desc: 'Contribución única o recurrente para mantener servidores, dominios y desarrollo.', c1_btn: 'Contactar para donar', c2_title: 'Grants y fondos', c2_desc: 'Si representás una organización, fundación o programa de grants de software libre.', c2_btn: 'Proponer grant', c3_title: '¿Querés contribuir con código o contenido?', c3_desc: 'Buscamos colaboradores apasionados por el deporte, la tecnología soberana y el bienestar global.', c3_btn: 'Sumate al equipo' },
    contacto: { page_title: 'Contacto | SportDharma', title: 'Contacto', subtitle: '¿Tenés una pregunta, propuesta o querés colaborar? Escribinos.', c1_title: 'Email directo', c1_desc: 'Respuesta en 24-48 horas.', c2_title: 'Ubicación actual', c2_desc: 'Operando desde:', c3_title: '¿De qué querés hablar?', c3_opt1: 'Colaboración', c3_opt1_desc: 'Código, contenido, traducciones', c3_opt2: 'Grants', c3_opt2_desc: 'Financiamiento y fondos', c3_opt3: 'Prensa', c3_opt3_desc: 'Entrevistas y medios' },
    comunidad: { page_title: 'Comunidad | SportDharma', title: 'Comunidad', subtitle: 'Construyendo juntos una red global de deportistas conscientes.', c1_title: 'GitHub', c1_desc: 'Código fuente, issues y contribuciones técnicas.', c2_title: 'RSS Feed', c2_desc: 'Seguí las novedades sin algoritmos ni tracking.', c3_title: 'Newsletter', c3_desc: 'Actualizaciones mensuales directas a tu email.', c4_title: 'Colaborá', c4_desc: 'Sumate al equipo de desarrollo y curación.', philosophy_title: 'Filosofía de la comunidad', philosophy_desc: 'Sin redes sociales centralizadas. Sin algoritmos que deciden qué ves. Solo herramientas libres que conectan a deportistas que valoran la privacidad, la soberanía digital y el bienestar real.' }
  },
  en: {
    ecosistema: { page_title: 'Ecosystem | SportDharma', card1_label: 'MANIFESTO', card1_title: 'How SportDharma Ecosystem was born', card1_desc: 'From childhood books to cycling around the world. From Buddhism to AI. A search for purpose that became free infrastructure for athletes.', alt_grupo: 'Cycle tourists', alt_laos: 'Temple in Laos', card2_label: 'DISCOVER', card2_title: 'What is SportDharma Ecosystem?', alt_masf: 'MASF system interface' },
    pilares: { page_title: 'Pillars | SportDharma', title: 'Pillars', desc: 'Content under development. Coming soon.' },
    estado: { page_title: 'Ecosystem Status | SportDharma', title: 'Ecosystem Status', subtitle: 'Total transparency on development and roadmap.', s1_title: 'Multilingual Landing Page', s1_status: 'In production', s1_desc: 'Public site in 6 languages with optimized SEO, PWA and Open Graph.', s2_title: 'Curated News System', s2_status: 'In development', s2_desc: 'Human curation of outdoor content, 6 daily publications. RSS and native notifications.', s3_title: 'Multi-Agent Swarm Framework', s3_status: 'Research phase', s3_desc: 'Decentralized AI agents framework for curation and analysis of sports content.', s4_title: 'Offline-First Apps', s4_status: 'Planned', s4_desc: 'Mobile applications for outdoor athletes that work without internet connection.' },
    noticias: { page_title: 'News and Information | SportDharma', title: 'News and Information', subtitle: 'Human curation, 6 daily publications. Fresh, verified and relevant content.', c1_title: 'Activate Notifications', c1_desc: 'No emails, no registration, no tracking. Only native browser notifications.', c1_btn: 'Subscribe', c2_title: 'RSS Feed (Open Source)', c2_desc: 'The purest and most decentralized way to follow our news.', c2_btn: 'View instructions' },
    apoya: { page_title: 'Support the Project | SportDharma', title: 'Support the project', subtitle: 'SportDharma is free software. Your support keeps the infrastructure alive.', c1_title: 'Direct donation', c1_desc: 'One-time or recurring contribution to maintain servers, domains and development.', c1_btn: 'Contact to donate', c2_title: 'Grants and funds', c2_desc: 'If you represent an organization, foundation or free software grant program.', c2_btn: 'Propose grant', c3_title: 'Want to contribute with code or content?', c3_desc: 'We are looking for collaborators passionate about sports, sovereign technology and global well-being.', c3_btn: 'Join the team' },
    contacto: { page_title: 'Contact | SportDharma', title: 'Contact', subtitle: 'Do you have a question, proposal or want to collaborate? Write to us.', c1_title: 'Direct email', c1_desc: 'Response in 24-48 hours.', c2_title: 'Current location', c2_desc: 'Operating from:', c3_title: 'What do you want to talk about?', c3_opt1: 'Collaboration', c3_opt1_desc: 'Code, content, translations', c3_opt2: 'Grants', c3_opt2_desc: 'Funding and funds', c3_opt3: 'Press', c3_opt3_desc: 'Interviews and media' },
    comunidad: { page_title: 'Community | SportDharma', title: 'Community', subtitle: 'Building together a global network of conscious athletes.', c1_title: 'GitHub', c1_desc: 'Source code, issues and technical contributions.', c2_title: 'RSS Feed', c2_desc: 'Follow the news without algorithms or tracking.', c3_title: 'Newsletter', c3_desc: 'Monthly updates direct to your email.', c4_title: 'Collaborate', c4_desc: 'Join the development and curation team.', philosophy_title: 'Community philosophy', philosophy_desc: 'No centralized social networks. No algorithms deciding what you see. Only free tools that connect athletes who value privacy, digital sovereignty and real well-being.' }
  },
  fr: {
    ecosistema: { page_title: 'Écosystème | SportDharma', card1_label: 'MANIFESTE', card1_title: 'Comment est né SportDharma Ecosystem', card1_desc: 'Des livres d\'enfance au tour du monde à vélo. Du bouddhisme à l\'IA. Une quête de sens devenue infrastructure libre pour les sportifs.', alt_grupo: 'Cyclotouristes', alt_laos: 'Temple au Laos', card2_label: 'DÉCOUVRIR', card2_title: 'Qu\'est-ce que SportDharma Ecosystem ?', alt_masf: 'Interface du système MASF' },
    pilares: { page_title: 'Piliers | SportDharma', title: 'Piliers', desc: 'Contenu en développement. Bientôt disponible.' },
    estado: { page_title: 'État de l\'Écosystème | SportDharma', title: 'État de l\'Écosystème', subtitle: 'Transparence totale sur le développement et la feuille de route.', s1_title: 'Page d\'accueil multilingue', s1_status: 'En production', s1_desc: 'Site public en 6 langues avec SEO, PWA et Open Graph optimisés.', s2_title: 'Système d\'actualités organisées', s2_status: 'En développement', s2_desc: 'Curation humaine de contenu outdoor, 6 publications quotidiennes. RSS et notifications natives.', s3_title: 'Framework Essaim Multi-Agent', s3_status: 'Phase de recherche', s3_desc: 'Framework d\'agents IA décentralisés pour la curation et l\'analyse de contenu sportif.', s4_title: 'Applications Offline-First', s4_status: 'Prévu', s4_desc: 'Applications mobiles pour sportifs outdoor fonctionnant sans connexion internet.' },
    noticias: { page_title: 'Actualités et Informations | SportDharma', title: 'Actualités et Informations', subtitle: 'Curation humaine, 6 publications quotidiennes. Contenu frais, vérifié et pertinent.', c1_title: 'Activer les Notifications', c1_desc: 'Pas d\'emails, pas d\'inscription, pas de tracking. Seulement des notifications natives du navigateur.', c1_btn: 'S\'abonner', c2_title: 'Flux RSS (Open Source)', c2_desc: 'La façon la plus pure et décentralisée de suivre nos actualités.', c2_btn: 'Voir les instructions' },
    apoya: { page_title: 'Soutenir le Projet | SportDharma', title: 'Soutenez le projet', subtitle: 'SportDharma est un logiciel libre. Votre soutien maintient l\'infrastructure en vie.', c1_title: 'Don direct', c1_desc: 'Contribution unique ou récurrente pour maintenir les serveurs, les domaines et le développement.', c1_btn: 'Contacter pour faire un don', c2_title: 'Subventions et fonds', c2_desc: 'Si vous représentez une organisation, une fondation ou un programme de subventions pour logiciels libres.', c2_btn: 'Proposer une subvention', c3_title: 'Vous voulez contribuer avec du code ou du contenu ?', c3_desc: 'Nous recherchons des collaborateurs passionnés par le sport, la technologie souveraine et le bien-être mondial.', c3_btn: 'Rejoindre l\'équipe' },
    contacto: { page_title: 'Contact | SportDharma', title: 'Contact', subtitle: 'Vous avez une question, une proposition ou vous voulez collaborer ? Écrivez-nous.', c1_title: 'Email direct', c1_desc: 'Réponse en 24-48 heures.', c2_title: 'Emplacement actuel', c2_desc: 'Opérant depuis :', c3_title: 'De quoi voulez-vous parler ?', c3_opt1: 'Collaboration', c3_opt1_desc: 'Code, contenu, traductions', c3_opt2: 'Subventions', c3_opt2_desc: 'Financement et fonds', c3_opt3: 'Presse', c3_opt3_desc: 'Entretiens et médias' },
    comunidad: { page_title: 'Communauté | SportDharma', title: 'Communauté', subtitle: 'Construisons ensemble un réseau mondial de sportifs conscients.', c1_title: 'GitHub', c1_desc: 'Code source, issues et contributions techniques.', c2_title: 'Flux RSS', c2_desc: 'Suivez les actualités sans algorithmes ni tracking.', c3_title: 'Newsletter', c3_desc: 'Mises à jour mensuelles directes dans votre email.', c4_title: 'Collaborez', c4_desc: 'Rejoignez l\'équipe de développement et de curation.', philosophy_title: 'Philosophie de la communauté', philosophy_desc: 'Pas de réseaux sociaux centralisés. Pas d\'algorithmes qui décident de ce que vous voyez. Seulement des outils libres qui connectent les sportifs qui valorisent la vie privée, la souveraineté numérique et le bien-être réel.' }
  },
  pt: {
    ecosistema: { page_title: 'Ecossistema | SportDharma', card1_label: 'MANIFESTO', card1_title: 'Como nasceu o SportDharma Ecosystem', card1_desc: 'Dos livros da infância à volta ao mundo de bicicleta. Do budismo à IA. Uma busca de propósito que se transformou em infraestrutura livre para atletas.', alt_grupo: 'Cicloturistas', alt_laos: 'Templo no Laos', card2_label: 'DESCUBRA', card2_title: 'O que é o SportDharma Ecosystem?', alt_masf: 'Interface do sistema MASF' },
    pilares: { page_title: 'Pilares | SportDharma', title: 'Pilares', desc: 'Conteúdo em desenvolvimento. Em breve.' },
    estado: { page_title: 'Estado do Ecossistema | SportDharma', title: 'Estado do Ecossistema', subtitle: 'Transparência total sobre o desenvolvimento e o roadmap.', s1_title: 'Landing Page Multilíngue', s1_status: 'Em produção', s1_desc: 'Site público em 6 idiomas com SEO, PWA e Open Graph otimizados.', s2_title: 'Sistema de Notícias Curadas', s2_status: 'Em desenvolvimento', s2_desc: 'Curadoria humana de conteúdo outdoor, 6 publicações diárias. RSS e notificações nativas.', s3_title: 'Framework de Enxame Multiagente', s3_status: 'Fase de pesquisa', s3_desc: 'Framework de agentes de IA descentralizados para curadoria e análise de conteúdo esportivo.', s4_title: 'Apps Offline-First', s4_status: 'Planejado', s4_desc: 'Aplicativos móveis para atletas outdoor que funcionam sem conexão com a internet.' },
    noticias: { page_title: 'Notícias e Informações | SportDharma', title: 'Notícias e Informações', subtitle: 'Curadoria humana, 6 publicações diárias. Conteúdo fresco, verificado e relevante.', c1_title: 'Ativar Notificações', c1_desc: 'Sem emails, sem registro, sem tracking. Apenas notificações nativas do navegador.', c1_btn: 'Inscrever-se', c2_title: 'Feed RSS (Open Source)', c2_desc: 'A forma mais pura e descentralizada de acompanhar nossas novidades.', c2_btn: 'Ver instruções' },
    apoya: { page_title: 'Apoie o Projeto | SportDharma', title: 'Apoie o projeto', subtitle: 'SportDharma é software livre. Seu apoio mantém a infraestrutura viva.', c1_title: 'Doação direta', c1_desc: 'Contribuição única ou recorrente para manter servidores, domínios e desenvolvimento.', c1_btn: 'Contatar para doar', c2_title: 'Grants e fundos', c2_desc: 'Se você representa uma organização, fundação ou programa de grants de software livre.', c2_btn: 'Propor grant', c3_title: 'Quer contribuir com código ou conteúdo?', c3_desc: 'Buscamos colaboradores apaixonados por esporte, tecnologia soberana e bem-estar global.', c3_btn: 'Junte-se à equipe' },
    contacto: { page_title: 'Contato | SportDharma', title: 'Contato', subtitle: 'Tem uma pergunta, proposta ou quer colaborar? Escreva-nos.', c1_title: 'Email direto', c1_desc: 'Resposta em 24-48 horas.', c2_title: 'Localização atual', c2_desc: 'Operando de:', c3_title: 'Sobre o que quer falar?', c3_opt1: 'Colaboração', c3_opt1_desc: 'Código, conteúdo, traduções', c3_opt2: 'Grants', c3_opt2_desc: 'Financiamento e fundos', c3_opt3: 'Imprensa', c3_opt3_desc: 'Entrevistas e mídia' },
    comunidad: { page_title: 'Comunidade | SportDharma', title: 'Comunidade', subtitle: 'Construindo juntos uma rede global de atletas conscientes.', c1_title: 'GitHub', c1_desc: 'Código-fonte, issues e contribuições técnicas.', c2_title: 'Feed RSS', c2_desc: 'Acompanhe as novidades sem algoritmos ou tracking.', c3_title: 'Newsletter', c3_desc: 'Atualizações mensais diretas para seu email.', c4_title: 'Colabore', c4_desc: 'Junte-se à equipe de desenvolvimento e curadoria.', philosophy_title: 'Filosofia da comunidade', philosophy_desc: 'Sem redes sociais centralizadas. Sem algoritmos decidindo o que você vê. Apenas ferramentas livres que conectam atletas que valorizam a privacidade, a soberania digital e o bem-estar real.' }
  },
  de: {
    ecosistema: { page_title: 'Ökosystem | SportDharma', card1_label: 'MANIFEST', card1_title: 'Wie SportDharma Ecosystem entstand', card1_desc: 'Von Kindheitsbüchern zur Radreise um die Welt. Vom Buddhismus zur KI. Eine Sinnsuche, die zur freien Infrastruktur für Athleten wurde.', alt_grupo: 'Radreisende', alt_laos: 'Tempel in Laos', card2_label: 'ENTDECKEN', card2_title: 'Was ist SportDharma Ecosystem?', alt_masf: 'MASF-Systemoberfläche' },
    pilares: { page_title: 'Säulen | SportDharma', title: 'Säulen', desc: 'Inhalt in Entwicklung. Demnächst verfügbar.' },
    estado: { page_title: 'Status des Ökosystems | SportDharma', title: 'Status des Ökosystems', subtitle: 'Totale Transparenz über Entwicklung und Roadmap.', s1_title: 'Mehrsprachige Landing Page', s1_status: 'In Produktion', s1_desc: 'Öffentliche Seite in 6 Sprachen mit optimiertem SEO, PWA und Open Graph.', s2_title: 'Kuratiertes Nachrichtensystem', s2_status: 'In Entwicklung', s2_desc: 'Menschliche Kuratierung von Outdoor-Inhalten, 6 tägliche Veröffentlichungen. RSS und native Benachrichtigungen.', s3_title: 'Multi-Agenten-Schwarm-Framework', s3_status: 'Forschungsphase', s3_desc: 'Framework dezentraler KI-Agenten zur Kuratierung und Analyse von Sportinhalten.', s4_title: 'Offline-First-Apps', s4_status: 'Geplant', s4_desc: 'Mobile Anwendungen für Outdoor-Athleten, die ohne Internetverbindung funktionieren.' },
    noticias: { page_title: 'Nachrichten und Informationen | SportDharma', title: 'Nachrichten und Informationen', subtitle: 'Menschliche Kuratierung, 6 tägliche Veröffentlichungen. Frische, verifizierte und relevante Inhalte.', c1_title: 'Benachrichtigungen aktivieren', c1_desc: 'Keine E-Mails, keine Registrierung, kein Tracking. Nur native Browser-Benachrichtigungen.', c1_btn: 'Abonnieren', c2_title: 'RSS-Feed (Open Source)', c2_desc: 'Die reinste und dezentralste Art, unsere Neuigkeiten zu verfolgen.', c2_btn: 'Anweisungen anzeigen' },
    apoya: { page_title: 'Projekt unterstützen | SportDharma', title: 'Unterstütze das Projekt', subtitle: 'SportDharma ist freie Software. Deine Unterstützung hält die Infrastruktur am Leben.', c1_title: 'Direkte Spende', c1_desc: 'Einmaliger oder wiederkehrender Beitrag zur Wartung von Servern, Domains und Entwicklung.', c1_btn: 'Kontakt für Spende', c2_title: 'Grants und Fonds', c2_desc: 'Wenn Sie eine Organisation, Stiftung oder ein Förderprogramm für freie Software vertreten.', c2_btn: 'Grant vorschlagen', c3_title: 'Möchten Sie mit Code oder Inhalten beitragen?', c3_desc: 'Wir suchen Mitarbeiter, die sich für Sport, souveräne Technologie und globales Wohlbefinden begeistern.', c3_btn: 'Team beitreten' },
    contacto: { page_title: 'Kontakt | SportDharma', title: 'Kontakt', subtitle: 'Haben Sie eine Frage, einen Vorschlag oder möchten Sie zusammenarbeiten? Schreiben Sie uns.', c1_title: 'Direkte E-Mail', c1_desc: 'Antwort in 24-48 Stunden.', c2_title: 'Aktueller Standort', c2_desc: 'Betrieb von:', c3_title: 'Worüber möchten Sie sprechen?', c3_opt1: 'Zusammenarbeit', c3_opt1_desc: 'Code, Inhalte, Übersetzungen', c3_opt2: 'Grants', c3_opt2_desc: 'Finanzierung und Fonds', c3_opt3: 'Presse', c3_opt3_desc: 'Interviews und Medien' },
    comunidad: { page_title: 'Community | SportDharma', title: 'Community', subtitle: 'Gemeinsam ein globales Netzwerk bewusster Athleten aufbauen.', c1_title: 'GitHub', c1_desc: 'Quellcode, Issues und technische Beiträge.', c2_title: 'RSS-Feed', c2_desc: 'Folgen Sie den Neuigkeiten ohne Algorithmen oder Tracking.', c3_title: 'Newsletter', c3_desc: 'Monatliche Updates direkt in Ihre E-Mail.', c4_title: 'Zusammenarbeiten', c4_desc: 'Treten Sie dem Entwicklungs- und Kuratierungsteam bei.', philosophy_title: 'Philosophie der Community', philosophy_desc: 'Keine zentralisierten sozialen Netzwerke. Keine Algorithmen, die entscheiden, was Sie sehen. Nur freie Tools, die Athleten verbinden, die Privatsphäre, digitale Souveränität und echtes Wohlbefinden schätzen.' }
  },
  it: {
    ecosistema: { page_title: 'Ecosistema | SportDharma', card1_label: 'MANIFESTO', card1_title: 'Come è nato SportDharma Ecosystem', card1_desc: 'Dai libri dell\'infanzia al giro del mondo in bicicletta. Dal buddismo all\'IA. Una ricerca di scopo diventata infrastruttura libera per atleti.', alt_grupo: 'Cicloturisti', alt_laos: 'Tempio in Laos', card2_label: 'SCOPRI', card2_title: 'Cos\'è SportDharma Ecosystem?', alt_masf: 'Interfaccia del sistema MASF' },
    pilares: { page_title: 'Pilastri | SportDharma', title: 'Pilastri', desc: 'Contenuto in sviluppo. Prossimamente.' },
    estado: { page_title: 'Stato dell\'Ecosistema | SportDharma', title: 'Stato dell\'Ecosistema', subtitle: 'Trasparenza totale sullo sviluppo e sulla roadmap.', s1_title: 'Landing Page Multilingue', s1_status: 'In produzione', s1_desc: 'Sito pubblico in 6 lingue con SEO, PWA e Open Graph ottimizzati.', s2_title: 'Sistema di Notizie Curate', s2_status: 'In sviluppo', s2_desc: 'Curazione umana di contenuti outdoor, 6 pubblicazioni giornaliere. RSS e notifiche native.', s3_title: 'Framework Sciame Multi-Agente', s3_status: 'Fase di ricerca', s3_desc: 'Framework di agenti IA decentralizzati per la curazione e l\'analisi di contenuti sportivi.', s4_title: 'App Offline-First', s4_status: 'Pianificato', s4_desc: 'Applicazioni mobili per atleti outdoor che funzionano senza connessione internet.' },
    noticias: { page_title: 'Notizie e Informazioni | SportDharma', title: 'Notizie e Informazioni', subtitle: 'Curazione umana, 6 pubblicazioni giornaliere. Contenuti freschi, verificati e rilevanti.', c1_title: 'Attiva Notifiche', c1_desc: 'Niente email, niente registrazione, niente tracking. Solo notifiche native del browser.', c1_btn: 'Iscriviti', c2_title: 'Feed RSS (Open Source)', c2_desc: 'Il modo più puro e decentralizzato di seguire le nostre novità.', c2_btn: 'Vedi istruzioni' },
    apoya: { page_title: 'Sostieni il Progetto | SportDharma', title: 'Sostieni il progetto', subtitle: 'SportDharma è software libero. Il tuo sostegno mantiene viva l\'infrastruttura.', c1_title: 'Donazione diretta', c1_desc: 'Contributo unico o ricorrente per mantenere server, domini e sviluppo.', c1_btn: 'Contatta per donare', c2_title: 'Grant e fondi', c2_desc: 'Se rappresenti un\'organizzazione, una fondazione o un programma di grant per software libero.', c2_btn: 'Proponi un grant', c3_title: 'Vuoi contribuire con codice o contenuti?', c3_desc: 'Cerchiamo collaboratori appassionati di sport, tecnologia sovrana e benessere globale.', c3_btn: 'Unisciti al team' },
    contacto: { page_title: 'Contatto | SportDharma', title: 'Contatto', subtitle: 'Hai una domanda, una proposta o vuoi collaborare? Scrivici.', c1_title: 'Email diretta', c1_desc: 'Risposta in 24-48 ore.', c2_title: 'Posizione attuale', c2_desc: 'Operativo da:', c3_title: 'Di cosa vuoi parlare?', c3_opt1: 'Collaborazione', c3_opt1_desc: 'Codice, contenuti, traduzioni', c3_opt2: 'Grant', c3_opt2_desc: 'Finanziamenti e fondi', c3_opt3: 'Stampa', c3_opt3_desc: 'Interviste e media' },
    comunidad: { page_title: 'Comunità | SportDharma', title: 'Comunità', subtitle: 'Costruiamo insieme una rete globale di atleti consapevoli.', c1_title: 'GitHub', c1_desc: 'Codice sorgente, issue e contributi tecnici.', c2_title: 'Feed RSS', c2_desc: 'Segui le novità senza algoritmi o tracking.', c3_title: 'Newsletter', c3_desc: 'Aggiornamenti mensili diretti alla tua email.', c4_title: 'Collabora', c4_desc: 'Unisciti al team di sviluppo e curazione.', philosophy_title: 'Filosofia della comunità', philosophy_desc: 'Nessun social network centralizzato. Nessun algoritmo che decide cosa vedi. Solo strumenti liberi che connettono atleti che valorizzano la privacy, la sovranità digitale e il benessere reale.' }
  }
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = {};
  try { existing = JSON.parse(await readFile(filePath, 'utf8')); } catch (e) {}
  
  // Fusionar todas las nuevas secciones
  existing.ecosistema = { ...existing.ecosistema, ...translations[lang].ecosistema };
  existing.pilares = { ...existing.pilares, ...translations[lang].pilares };
  existing.estado = { ...existing.estado, ...translations[lang].estado };
  existing.noticias = { ...existing.noticias, ...translations[lang].noticias };
  existing.apoya = { ...existing.apoya, ...translations[lang].apoya };
  existing.contacto = { ...existing.contacto, ...translations[lang].contacto };
  existing.comunidad = { ...existing.comunidad, ...translations[lang].comunidad };
  
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado con 7 nuevas secciones`);
}

console.log('\n🎉 7 páginas completamente internacionalizadas');
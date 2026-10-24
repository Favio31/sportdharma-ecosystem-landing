import { writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const FILE = path.join(ROOT, 'src', 'pages', '[lang]', 'app', 'index.astro');
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

// 1. Reescribir app/index.astro con t()
const appContent = `---
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

<Layout title={t('app.page_title')}>
  <section class="py-20 px-6 bg-surface-alt transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      
      <div class="text-center mb-16">
        <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">{t('app.label')}</p>
        <h1 class="text-4xl md:text-6xl font-bold text-ink mb-4">
          {t('app.title_1')} <span class="text-[#E8530E] dark:text-orange-500">{t('app.title_2')}</span>
        </h1>
        <p class="text-lg text-ink-soft max-w-2xl mx-auto">
          {t('app.subtitle')}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <div class="space-y-8">
          
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-ink mb-2">{t('app.f1_title')}</h3>
              <p class="text-ink-soft leading-relaxed">{t('app.f1_desc')}</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-ink mb-2">{t('app.f2_title')}</h3>
              <p class="text-ink-soft leading-relaxed">{t('app.f2_desc')}</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-ink mb-2">{t('app.f3_title')}</h3>
              <p class="text-ink-soft leading-relaxed">{t('app.f3_desc')}</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-lg bg-[#E8530E]/10 dark:bg-[#E8530E]/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-[#E8530E] dark:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-ink mb-2">{t('app.f4_title')}</h3>
              <p class="text-ink-soft leading-relaxed">{t('app.f4_desc')}</p>
            </div>
          </div>

        </div>

        <div class="bg-gradient-to-br from-[#E8530E]/10 to-ink/5 dark:from-[#E8530E]/20 dark:to-ink/20 rounded-2xl p-8 border border-line flex items-center justify-center min-h-[400px]">
          <div class="text-center">
            <svg class="w-32 h-32 text-[#E8530E] dark:text-orange-500 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
            <p class="text-ink-soft font-mono text-sm">{t('app.placeholder_title')}</p>
            <p class="text-ink-soft text-xs mt-2">{t('app.placeholder_desc')}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</Layout>
`;

await writeFile(FILE, appContent, 'utf8');
console.log('✅ app/index.astro refactorizado con t()');

// 2. Traducciones
const translations = {
  es: {
    page_title: 'App Móvil | SportDharma Ecosystem',
    label: 'ECOSISTEMA',
    title_1: 'App',
    title_2: 'Móvil',
    subtitle: 'Tu compañero offline en ruta. Soberanía digital, privacidad total y funcionalidad garantizada en los territorios más remotos.',
    f1_title: 'Mapas Topográficos Offline',
    f1_desc: 'Descargá las zonas que vas a recorrer antes de salir. Funciona 100% sin conexión a internet, ideal para montañas, selvas y desiertos.',
    f2_title: 'Tracking GPS Preciso',
    f2_desc: 'Registrá tu ruta, altitud, velocidad y distancia en tiempo real. Tus datos de ubicación nunca salen de tu dispositivo.',
    f3_title: 'Comunicación Segura',
    f3_desc: 'Mensajería encriptada de extremo a extremo para coordinar con tu equipo de primera respuesta o grupo de cicloviajeros.',
    f4_title: 'Diario de Viaje Local',
    f4_desc: 'Documentá tu travesía con fotos, notas y waypoints. Todo se guarda localmente en tu dispositivo, bajo tu total control.',
    placeholder_title: 'Mockup de la App (Próximamente)',
    placeholder_desc: 'Disponible para Android e iOS'
  },
  en: {
    page_title: 'Mobile App | SportDharma Ecosystem',
    label: 'ECOSYSTEM',
    title_1: 'Mobile',
    title_2: 'App',
    subtitle: 'Your offline companion on the road. Digital sovereignty, total privacy and guaranteed functionality in the most remote territories.',
    f1_title: 'Offline Topographic Maps',
    f1_desc: 'Download the areas you will travel before leaving. Works 100% without internet connection, ideal for mountains, jungles and deserts.',
    f2_title: 'Precise GPS Tracking',
    f2_desc: 'Record your route, altitude, speed and distance in real time. Your location data never leaves your device.',
    f3_title: 'Secure Communication',
    f3_desc: 'End-to-end encrypted messaging to coordinate with your first response team or group of cycle tourists.',
    f4_title: 'Local Travel Diary',
    f4_desc: 'Document your journey with photos, notes and waypoints. Everything is saved locally on your device, under your total control.',
    placeholder_title: 'App Mockup (Coming Soon)',
    placeholder_desc: 'Available for Android and iOS'
  },
  fr: {
    page_title: 'Application Mobile | SportDharma Ecosystem',
    label: 'ÉCOSYSTÈME',
    title_1: 'Application',
    title_2: 'Mobile',
    subtitle: 'Votre compagnon hors ligne sur la route. Souveraineté numérique, confidentialité totale et fonctionnalité garantie dans les territoires les plus reculés.',
    f1_title: 'Cartes Topographiques Hors Ligne',
    f1_desc: 'Téléchargez les zones que vous allez parcourir avant de partir. Fonctionne à 100% sans connexion internet, idéal pour les montagnes, les jungles et les déserts.',
    f2_title: 'Suivi GPS Précis',
    f2_desc: 'Enregistrez votre itinéraire, altitude, vitesse et distance en temps réel. Vos données de localisation ne quittent jamais votre appareil.',
    f3_title: 'Communication Sécurisée',
    f3_desc: 'Messagerie chiffrée de bout en bout pour coordonner avec votre équipe de premiers secours ou votre groupe de cyclotouristes.',
    f4_title: 'Journal de Voyage Local',
    f4_desc: 'Documentez votre voyage avec des photos, des notes et des waypoints. Tout est enregistré localement sur votre appareil, sous votre contrôle total.',
    placeholder_title: 'Maquette de l\'App (Bientôt)',
    placeholder_desc: 'Disponible pour Android et iOS'
  },
  pt: {
    page_title: 'App Móvel | SportDharma Ecosystem',
    label: 'ECOSSISTEMA',
    title_1: 'App',
    title_2: 'Móvel',
    subtitle: 'Seu companheiro offline na estrada. Soberania digital, privacidade total e funcionalidade garantida nos territórios mais remotos.',
    f1_title: 'Mapas Topográficos Offline',
    f1_desc: 'Baixe as áreas que você vai percorrer antes de sair. Funciona 100% sem conexão com a internet, ideal para montanhas, selvas e desertos.',
    f2_title: 'Rastreamento GPS Preciso',
    f2_desc: 'Registre sua rota, altitude, velocidade e distância em tempo real. Seus dados de localização nunca saem do seu dispositivo.',
    f3_title: 'Comunicação Segura',
    f3_desc: 'Mensagens criptografadas de ponta a ponta para coordenar com sua equipe de primeira resposta ou grupo de cicloturistas.',
    f4_title: 'Diário de Viagem Local',
    f4_desc: 'Documente sua jornada com fotos, notas e waypoints. Tudo é salvo localmente no seu dispositivo, sob seu controle total.',
    placeholder_title: 'Mockup do App (Em Breve)',
    placeholder_desc: 'Disponível para Android e iOS'
  },
  de: {
    page_title: 'Mobile App | SportDharma Ecosystem',
    label: 'ÖKOSYSTEM',
    title_1: 'Mobile',
    title_2: 'App',
    subtitle: 'Ihr Offline-Begleiter unterwegs. Digitale Souveränität, totale Privatsphäre und garantierte Funktionalität in den abgelegensten Gebieten.',
    f1_title: 'Offline Topografische Karten',
    f1_desc: 'Laden Sie die Gebiete, die Sie durchqueren werden, vor der Abfahrt herunter. Funktioniert 100% ohne Internetverbindung, ideal für Berge, Dschungel und Wüsten.',
    f2_title: 'Präzises GPS-Tracking',
    f2_desc: 'Zeichnen Sie Ihre Route, Höhe, Geschwindigkeit und Entfernung in Echtzeit auf. Ihre Standortdaten verlassen niemals Ihr Gerät.',
    f3_title: 'Sichere Kommunikation',
    f3_desc: 'Ende-zu-Ende-verschlüsselte Nachrichten zur Koordination mit Ihrem Erste-Hilfe-Team oder Ihrer Gruppe von Radreisenden.',
    f4_title: 'Lokales Reisetagebuch',
    f4_desc: 'Dokumentieren Sie Ihre Reise mit Fotos, Notizen und Wegpunkten. Alles wird lokal auf Ihrem Gerät gespeichert, unter Ihrer totalen Kontrolle.',
    placeholder_title: 'App-Mockup (Demnächst)',
    placeholder_desc: 'Verfügbar für Android und iOS'
  },
  it: {
    page_title: 'App Mobile | SportDharma Ecosystem',
    label: 'ECOSISTEMA',
    title_1: 'App',
    title_2: 'Mobile',
    subtitle: 'Il tuo compagno offline in viaggio. Sovranità digitale, privacy totale e funzionalità garantita nei territori più remoti.',
    f1_title: 'Mappe Topografiche Offline',
    f1_desc: 'Scarica le zone che percorrerai prima di partire. Funziona al 100% senza connessione internet, ideale per montagne, giungle e deserti.',
    f2_title: 'Tracking GPS Preciso',
    f2_desc: 'Registra il tuo percorso, altitudine, velocità e distanza in tempo reale. I tuoi dati di localizzazione non lasciano mai il tuo dispositivo.',
    f3_title: 'Comunicazione Sicura',
    f3_desc: 'Messaggistica criptata end-to-end per coordinarti con la tua squadra di primo soccorso o il tuo gruppo di cicloturisti.',
    f4_title: 'Diario di Viaggio Locale',
    f4_desc: 'Documenta il tuo viaggio con foto, note e waypoint. Tutto viene salvato localmente sul tuo dispositivo, sotto il tuo totale controllo.',
    placeholder_title: 'Mockup dell\'App (Prossimamente)',
    placeholder_desc: 'Disponibile per Android e iOS'
  }
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = {};
  try { existing = JSON.parse(await readFile(filePath, 'utf8')); } catch (e) {}
  
  existing.app = translations[lang];
  
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado con app`);
}

console.log('\n App completamente internacionalizada');
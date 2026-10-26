import { writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const HOME_FILE = path.join(ROOT, 'src', 'pages', '[lang]', 'index.astro');
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

// 1. Leer el home actual
let content = await readFile(HOME_FILE, 'utf8');

// 2. Regex robusta: busca el comentario y todo hasta el primer </a> que le sigue
const regex = /<!-- 2\. FUNDADOR -->[\s\S]*?<\/a>/;

const newFundador = `<!-- 2. FUNDADOR -->
        <a href={'/' + lang + '/fundador/'} class="group block h-full rounded-2xl border border-black/5 bg-transparent p-8 outline-none! [-webkit-tap-highlight-color:transparent] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] focus-visible:border-[#E8530E]/40 active:translate-y-0 active:scale-[0.99] dark:border-white/5 dark:hover:border-orange-500/40 dark:hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)] dark:focus-visible:border-orange-500/40">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            <div class="flex flex-col justify-center">
              <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">{t('home.fundador_label')}</p>
              <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">{t('home.fundador_name')}</h3>
              <p class="text-ink-soft leading-relaxed text-sm text-justify">{t('home.fundador_desc')}</p>
            </div>
            <div class="space-y-3">
              <div class="rounded-lg overflow-hidden border border-black/5 dark:border-white/5 h-[120px]">
                <img src="/fundador-1.jpg" alt={t('home.fundador_alt_1')} class="w-full h-full object-cover" draggable="false" />
              </div>
              <div class="rounded-lg overflow-hidden border border-black/5 dark:border-white/5 h-[120px]">
                <img src="/fundador-2.jpg" alt={t('home.fundador_alt_2')} class="w-full h-full object-cover" draggable="false" />
              </div>
            </div>
          </div>
        </a>`;

if (!regex.test(content)) {
  console.error('❌ No se encontró el bloque Fundador. Revisar el archivo.');
  process.exit(1);
}

content = content.replace(regex, newFundador);
await writeFile(HOME_FILE, content, 'utf8');
console.log('✅ Tarjeta Fundador actualizada con layout de 2 columnas + 2 fotos');

// 3. Agregar las claves de alt text a los 6 JSON
const altTranslations = {
  es: { fundador_alt_1: 'Cicloviajero en ruta', fundador_alt_2: 'En camino' },
  en: { fundador_alt_1: 'Cycle tourist on the road', fundador_alt_2: 'On the way' },
  fr: { fundador_alt_1: 'Cyclotouriste sur la route', fundador_alt_2: 'En chemin' },
  pt: { fundador_alt_1: 'Cicloturista na estrada', fundador_alt_2: 'A caminho' },
  de: { fundador_alt_1: 'Radreisender unterwegs', fundador_alt_2: 'Unterwegs' },
  it: { fundador_alt_1: 'Cicloturista in viaggio', fundador_alt_2: 'In cammino' }
};

const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];
for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = {};
  try { existing = JSON.parse(await readFile(filePath, 'utf8')); } catch (e) {}
  
  existing.home = { ...existing.home, ...altTranslations[lang] };
  
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado con alt texts de fundador`);
}

console.log('\n🎉 Tarjeta Fundador con fotos lista');
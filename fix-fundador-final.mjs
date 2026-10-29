import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(filePath, 'utf8');

const startMarker = '<!-- 2. FUNDADOR -->';
const endMarker = '<!-- 3.';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('❌ No se encontraron los marcadores de la sección Fundador.');
  process.exit(1);
}

const before = content.substring(0, startIndex);
const after = content.substring(endIndex);

const newBlock = `<!-- 2. FUNDADOR -->
        <a href={'/' + lang + '/fundador/'} class="group block rounded-2xl border border-black/5 bg-transparent p-8 outline-none! [-webkit-tap-highlight-color:transparent] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] focus-visible:border-[#E8530E]/40 active:translate-y-0 active:scale-[0.99] dark:border-white/5 dark:hover:border-orange-500/40 dark:hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)] dark:focus-visible:border-orange-500/40">
          <!-- Texto + fotos: grid de 2 columnas -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="flex flex-col justify-center">
              <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">{t('home.fundador_label')}</p>
              <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">{t('home.fundador_name')}</h3>
              <p class="text-ink-soft leading-relaxed text-sm text-justify hyphens-auto break-words">{t('home.fundador_desc')}</p>
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
          <!-- Estadísticas: fuera del grid, ancho completo, centradas -->
          <div class="mt-6 border-t border-black/5 pt-6 dark:border-white/5">
            <div class="mx-auto grid max-w-lg grid-cols-3 gap-3 sm:gap-4">
              <div class="min-w-0 rounded-lg border border-white/30 p-3 text-center sm:p-4">
                <div class="text-xl font-bold leading-tight text-[#E8530E] dark:text-orange-500 sm:text-2xl">120.000</div>
                <div class="mt-1 text-xs text-ink-soft">km recorridos</div>
              </div>
              <div class="min-w-0 rounded-lg border border-white/30 p-3 text-center sm:p-4">
                <div class="text-xl font-bold leading-tight text-[#E8530E] dark:text-orange-500 sm:text-2xl">84</div>
                <div class="mt-1 text-xs text-ink-soft">países</div>
              </div>
              <div class="min-w-0 rounded-lg border border-white/30 p-3 text-center sm:p-4">
                <div class="text-xl font-bold leading-tight text-[#E8530E] dark:text-orange-500 sm:text-2xl">11</div>
                <div class="mt-1 text-xs text-ink-soft">años en ruta</div>
              </div>
            </div>
          </div>
        </a>

        `;

const newContent = before + newBlock + after;
await writeFile(filePath, newContent, 'utf8');
console.log('✅ Reemplazo exitoso usando marcadores (Node.js)');
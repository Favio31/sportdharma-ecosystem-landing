import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(filePath, 'utf8');

// Buscar el bloque de las dos fotos y agregar la tercera
const oldPhotosBlock = `<div class="space-y-3">
              <div class="rounded-lg overflow-hidden border border-black/5 dark:border-white/5 h-[120px]">
                <img src="/fundador-1.jpg" alt={t('home.fundador_alt_1')} class="w-full h-full object-cover" draggable="false" />
              </div>
              <div class="rounded-lg overflow-hidden border border-black/5 dark:border-white/5 h-[120px]">
                <img src="/fundador-2.jpg" alt={t('home.fundador_alt_2')} class="w-full h-full object-cover" draggable="false" />
              </div>
            </div>`;

const newPhotosBlock = `<div class="space-y-3">
              <div class="rounded-lg overflow-hidden border border-black/5 dark:border-white/5 h-[120px]">
                <img src="/fundador-1.jpg" alt={t('home.fundador_alt_1')} class="w-full h-full object-cover" draggable="false" />
              </div>
              <div class="rounded-lg overflow-hidden border border-black/5 dark:border-white/5 h-[120px]">
                <img src="/fundador-2.jpg" alt={t('home.fundador_alt_2')} class="w-full h-full object-cover" draggable="false" />
              </div>
              <div class="rounded-lg overflow-hidden border border-black/5 dark:border-white/5 h-[120px]">
                <img src="/images/fundador/documental-un-ano-en-bicicleta.jpg" alt="Documental Un Año en Bicicleta" class="w-full h-full object-cover" draggable="false" />
              </div>
            </div>`;

if (content.includes(oldPhotosBlock)) {
  content = content.replace(oldPhotosBlock, newPhotosBlock);
  await writeFile(filePath, content, 'utf8');
  console.log('✅ Tercera foto (documental) agregada a la tarjeta Fundador');
} else {
  console.error('❌ No se encontró el bloque de fotos exacto');
  process.exit(1);
}
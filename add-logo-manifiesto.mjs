import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');

// Buscar el bloque de fotos del Manifiesto (las dos fotos actuales) y agregar el logo
// Patrón: las dos fotos de camping y templo, seguidas del cierre del div
const oldManifiestoPhotos = `<div class="space-y-3">
              <div class="w-full rounded-xl border border-black/5 dark:border-white/5">
                <img src="/images/camping-atardecer.jpeg" alt="Camping al atardecer en ruta" class="w-full h-auto rounded-xl" draggable="false" />
              </div>
              <div class="w-full rounded-xl border border-black/5 dark:border-white/5">
                <img src="/images/templo-blanco.jpg" alt="Templo Blanco en Tailandia - Ruta en bicicleta" class="w-full h-auto rounded-xl" draggable="false" />
              </div>
            </div>`;

const newManifiestoPhotos = `<div class="space-y-3">
              <div class="w-full rounded-xl border border-black/5 dark:border-white/5">
                <img src="/images/camping-atardecer.jpeg" alt="Camping al atardecer en ruta" class="w-full h-auto rounded-xl" draggable="false" />
              </div>
              <div class="w-full rounded-xl border border-black/5 dark:border-white/5">
                <img src="/images/templo-blanco.jpg" alt="Templo Blanco en Tailandia - Ruta en bicicleta" class="w-full h-auto rounded-xl" draggable="false" />
              </div>
              <div class="w-full rounded-xl border border-black/5 dark:border-white/5">
                <img src="/logo-social2.jpg" alt="SportDharma Ecosystem Logo" class="w-full h-auto rounded-xl" draggable="false" />
              </div>
            </div>`;

if (content.includes(oldManifiestoPhotos)) {
  content = content.replace(oldManifiestoPhotos, newManifiestoPhotos);
  await writeFile(homePath, content, 'utf8');
  console.log('✅ Logo agregado como tercera imagen en la tarjeta Manifiesto');
} else {
  console.error('❌ No se encontró el bloque exacto de fotos del Manifiesto');
  console.log('Buscando fragmento...');
  if (content.includes('camping-atardecer')) {
    console.log('   - La foto camping-atardecer existe en el archivo');
  }
  process.exit(1);
}
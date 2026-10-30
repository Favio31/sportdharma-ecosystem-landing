import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');

// 1. Quitar overflow-hidden de los contenedores de fotos
content = content.replace(/w-full rounded-xl overflow-hidden border border-black\/5 dark:border-white\/5 h-\[120px\]/g, 
  'w-full rounded-xl border border-black/5 dark:border-white/5 h-[120px]');

content = content.replace(/rounded-xl overflow-hidden border border-black\/5 dark:border-white/5 h-\[120px\]/g, 
  'w-full rounded-xl border border-black/5 dark:border-white/5 h-[120px]');

content = content.replace(/rounded-xl overflow-hidden border border-black\/5 dark:border-white\/5 h-\[180px\]/g,
  'w-full rounded-xl border border-black/5 dark:border-white/5 h-[180px] mt-auto');

// 2. Cambiar object-cover por object-contain rounded-xl en las imágenes
content = content.replace(/class="w-full h-full object-cover"/g, 
  'class="w-full h-full object-contain rounded-xl"');

await writeFile(homePath, content, 'utf8');

// Verificar
const verify = await readFile(homePath, 'utf8');
const imgCount = (verify.match(/object-contain rounded-xl/g) || []).length;
const containerCount = (verify.match(/w-full rounded-xl border/g) || []).length;
console.log(`✅ Imágenes con object-contain rounded-xl: ${imgCount}`);
console.log(`✅ Contenedores con w-full rounded-xl (sin overflow-hidden): ${containerCount}`);
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');

// 1. Cambiar object-contain bg-surface-alt rounded-3xl por object-cover en imágenes
content = content.replace(/object-contain bg-surface-alt rounded-3xl/g, 'object-cover');

// 2. Agregar overflow-hidden a los contenedores de fotos (los que tienen h-[120px])
content = content.replace(/rounded-3xl border border-black\/5 dark:border-white\/5 h-\[120px\]/g, 
  'rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 h-[120px]');

// 3. También el contenedor de MASF que tiene h-[180px]
content = content.replace(/rounded-xl overflow-hidden border border-black\/5 dark:border-white\/5 h-\[180px\]/g,
  'rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 h-[180px]');

await writeFile(homePath, content, 'utf8');

// Verificar
const verify = await readFile(homePath, 'utf8');
const imgCount = (verify.match(/object-cover/g) || []).length;
const containerCount = (verify.match(/rounded-3xl overflow-hidden/g) || []).length;
console.log(`✅ Imágenes con object-cover: ${imgCount}`);
console.log(`✅ Contenedores con rounded-3xl overflow-hidden: ${containerCount}`);
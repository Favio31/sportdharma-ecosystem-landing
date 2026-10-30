import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');

// Agregar w-full a los contenedores de fotos (los que tienen h-[120px] y h-[180px])
content = content.replace(/rounded-xl overflow-hidden border border-black\/5 dark:border-white\/5 h-\[120px\]/g, 
  'w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/5 h-[120px]');

content = content.replace(/rounded-xl overflow-hidden border border-black\/5 dark:border-white\/5 h-\[180px\]/g,
  'w-full rounded-xl overflow-hidden border border-black/5 dark:border-white/5 h-[180px]');

await writeFile(homePath, content, 'utf8');

// Verificar
const verify = await readFile(homePath, 'utf8');
const count = (verify.match(/w-full rounded-xl overflow-hidden/g) || []).length;
console.log(`✅ Contenedores de fotos con w-full: ${count}`);
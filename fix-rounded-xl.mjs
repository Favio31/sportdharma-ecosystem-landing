import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');

// Cambiar solo los contenedores de fotos (los que tienen overflow-hidden y h-[120px] o h-[180px])
content = content.replace(/rounded-3xl overflow-hidden border border-black\/5 dark:border-white\/5 h-\[120px\]/g, 
  'rounded-xl overflow-hidden border border-black/5 dark:border-white/5 h-[120px]');

content = content.replace(/rounded-3xl overflow-hidden border border-black\/5 dark:border-white\/5 h-\[180px\]/g,
  'rounded-xl overflow-hidden border border-black/5 dark:border-white/5 h-[180px]');

await writeFile(homePath, content, 'utf8');

// Verificar
const verify = await readFile(homePath, 'utf8');
const count = (verify.match(/rounded-xl overflow-hidden border/g) || []).length;
console.log(`✅ Contenedores de fotos con rounded-xl: ${count}`);
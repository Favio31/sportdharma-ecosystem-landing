import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');

// 1. Quitar la altura fija (h-[120px] y h-[180px]) de los contenedores
content = content.replace(/w-full rounded-xl overflow-hidden border border-black\/5 dark:border-white\/5 h-\[120px\]/g, 
  'w-full rounded-xl border border-black/5 dark:border-white/5');

content = content.replace(/w-full rounded-xl overflow-hidden border border-black\/5 dark:border-white\/5 h-\[180px\] mt-auto/g,
  'w-full rounded-xl border border-black/5 dark:border-white/5 mt-auto');

// 2. Cambiar las imágenes para que tengan altura natural y bordes redondeados
content = content.replace(/class="w-full h-full object-cover"/g, 
  'class="w-full h-auto rounded-xl"');
  
content = content.replace(/class="w-full h-full object-contain rounded-xl"/g, 
  'class="w-full h-auto rounded-xl"');

await writeFile(homePath, content, 'utf8');

// Verificar
const verify = await readFile(homePath, 'utf8');
const imgCount = (verify.match(/w-full h-auto rounded-xl/g) || []).length;
console.log(`✅ Imágenes con altura natural y bordes redondeados: ${imgCount}`);
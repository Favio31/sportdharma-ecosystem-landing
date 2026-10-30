import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');

// Cambiar object-cover por object-contain rounded-xl en todas las imágenes
content = content.replace(/class="w-full h-full object-cover"/g, 
  'class="w-full h-full object-contain rounded-xl"');

await writeFile(homePath, content, 'utf8');

// Verificar
const verify = await readFile(homePath, 'utf8');
const count = (verify.match(/object-contain rounded-xl/g) || []).length;
console.log(`✅ Imágenes actualizadas a object-contain rounded-xl: ${count}`);
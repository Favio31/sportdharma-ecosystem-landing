import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');

// Revertir: quitar md:h-[120px] y md:object-cover, dejar h-auto puro
content = content.replace(/class="w-full h-auto md:h-\[120px\] object-contain md:object-cover rounded-xl"/g, 
  'class="w-full h-auto rounded-xl"');

await writeFile(homePath, content, 'utf8');

// Verificar
const verify = await readFile(homePath, 'utf8');
const count = (verify.match(/w-full h-auto rounded-xl/g) || []).length;
console.log(`✅ Revertido a h-auto puro: ${count} imágenes`);
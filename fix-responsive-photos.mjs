import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');

// Cambiar las imágenes para que sean responsivas:
// - Móvil: h-auto + object-contain (se ven completas)
// - Desktop: md:h-[120px] + md:object-cover (uniformes)
content = content.replace(/class="w-full h-auto rounded-xl"/g, 
  'class="w-full h-auto md:h-[120px] object-contain md:object-cover rounded-xl"');

await writeFile(homePath, content, 'utf8');

// Verificar
const verify = await readFile(homePath, 'utf8');
const count = (verify.match(/h-auto md:h-\[120px\]/g) || []).length;
console.log(`✅ Imágenes responsivas aplicadas: ${count}`);
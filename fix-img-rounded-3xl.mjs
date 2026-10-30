import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');

// 1. Quitar overflow-hidden de los contenedores de fotos (las imágenes ya tienen rounded-3xl)
content = content.replace(/rounded-3xl overflow-hidden border/g, 'rounded-3xl border');

// 2. Asegurar que todas las imágenes tengan rounded-3xl
content = content.replace(/object-contain bg-surface-alt rounded-2xl/g, 'object-contain bg-surface-alt rounded-3xl');

await writeFile(homePath, content, 'utf8');

// Verificar
const verify = await readFile(homePath, 'utf8');
const imgCount = (verify.match(/object-contain bg-surface-alt rounded-3xl/g) || []).length;
const containerCount = (verify.match(/rounded-3xl border border-black/g) || []).length;
console.log(`✅ Imágenes con rounded-3xl: ${imgCount}`);
console.log(`✅ Contenedores sin overflow-hidden: ${containerCount}`);
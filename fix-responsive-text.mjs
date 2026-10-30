import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');

// Reemplazar text-justify por text-left sm:text-justify en los párrafos de las tarjetas
// Esto evita los "ríos" de espacios en móvil
content = content.replace(/text-justify hyphens-auto/g, 'text-left sm:text-justify hyphens-auto');

await writeFile(homePath, content, 'utf8');

// Verificar
const verify = await readFile(homePath, 'utf8');
const count = (verify.match(/text-left sm:text-justify/g) || []).length;
console.log(`✅ Textos responsivos aplicados: ${count} párrafos`);
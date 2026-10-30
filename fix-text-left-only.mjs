import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');

// 1. Quitar hyphens-auto (causa problemas en móviles) y sm:text-justify
// Dejar solo text-left puro
content = content.replace(/text-left sm:text-justify hyphens-auto/g, 'text-left');

await writeFile(homePath, content, 'utf8');

// Verificar
const verify = await readFile(homePath, 'utf8');
const count = (verify.match(/text-ink-soft leading-relaxed text-sm text-left/g) || []).length;
console.log(`✅ Párrafos con text-left puro (sin justificación): ${count}`);
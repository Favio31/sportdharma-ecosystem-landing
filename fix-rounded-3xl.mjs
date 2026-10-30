import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');
const founderPath = join(__dirname, 'src', 'pages', '[lang]', 'fundador', 'index.astro');

// 1. Home: cambiar rounded-2xl a rounded-3xl en imágenes
let home = await readFile(homePath, 'utf8');
home = home.replace(/rounded-2xl/g, 'rounded-3xl');
await writeFile(homePath, home, 'utf8');
console.log('✅ Home: imágenes actualizadas a rounded-3xl');

// 2. Fundador: cambiar rounded-2xl a rounded-3xl en imágenes y contenedores
let founder = await readFile(founderPath, 'utf8');
founder = founder.replace(/rounded-2xl/g, 'rounded-3xl');
founder = founder.replace(/rounded-xl overflow-hidden/g, 'rounded-3xl overflow-hidden');
await writeFile(founderPath, founder, 'utf8');
console.log('✅ Fundador: imágenes y contenedores actualizados a rounded-3xl');
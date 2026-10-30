import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');

// Contar contenedores de fotos con rounded-lg
const photoContainers = content.match(/rounded-lg overflow-hidden border/g);
console.log(`📊 Contenedores de fotos encontrados: ${photoContainers ? photoContainers.length : 0}`);

// Cambiar rounded-lg a rounded-3xl en contenedores de fotos
content = content.replace(/rounded-lg overflow-hidden border/g, 'rounded-3xl overflow-hidden border');

await writeFile(homePath, content, 'utf8');
console.log('✅ Contenedores de fotos actualizados a rounded-3xl');

// Verificar
const verify = await readFile(homePath, 'utf8');
const afterCount = (verify.match(/rounded-3xl overflow-hidden border/g) || []).length;
console.log(`📊 Contenedores con rounded-3xl después: ${afterCount}`);
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 1. Actualizar página del Fundador: agregar rounded-2xl a las imágenes
let fundadorContent = await readFile(join(__dirname, 'src', 'pages', '[lang]', 'fundador', 'index.astro'), 'utf8');

// Buscar las líneas de las imágenes que NO tienen rounded- y agregar rounded-2xl
fundadorContent = fundadorContent.replace(
  /(<img\s+[^>]*?)class="([^"]*?)"([^>]*?)>/g,
  (match, before, classes, after) => {
    if (!classes.includes('rounded-')) {
      return `<img ${before}class="${classes} rounded-2xl"${after}>`;
    }
    return match;
  }
);

await writeFile(join(__dirname, 'src', 'pages', '[lang]', 'fundador', 'index.astro'), fundadorContent, 'utf8');
console.log('✅ Página Fundador: imágenes actualizadas a rounded-2xl');

// 2. Actualizar Home: cambiar rounded-xl por rounded-2xl en todas las imágenes
let homeContent = await readFile(join(__dirname, 'src', 'pages', '[lang]', 'index.astro'), 'utf8');

homeContent = homeContent.replace(
  /object-contain bg-surface-alt rounded-xl/g,
  'object-contain bg-surface-alt rounded-2xl'
);

await writeFile(join(__dirname, 'src', 'pages', '[lang]', 'index.astro'), homeContent, 'utf8');
console.log('✅ Home: imágenes actualizadas de rounded-xl a rounded-2xl');

console.log('\n🎉 Todas las fotos ahora tienen bordes más redondeados (rounded-2xl)');
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function addRoundedToImages(filePath, label) {
  let content = await readFile(filePath, 'utf8');
  
  // Buscar todas las etiquetas <img> y agregar rounded-xl si no lo tienen
  // Patrón: class="..." donde no existe rounded-
  const imgRegex = /<img\s+([^>]*?)class="([^"]*?)"([^>]*?)>/g;
  let count = 0;
  
  content = content.replace(imgRegex, (match, before, classes, after) => {
    if (!classes.includes('rounded-')) {
      count++;
      // Agregar rounded-xl al final de las clases existentes
      return `<img ${before}class="${classes} rounded-xl"${after}>`;
    }
    return match;
  });
  
  await writeFile(filePath, content, 'utf8');
  console.log(`✅ ${label}: ${count} fotos actualizadas con rounded-xl`);
}

// Aplicar en Home y página del Fundador
await addRoundedToImages(
  join(__dirname, 'src', 'pages', '[lang]', 'index.astro'),
  'Home (index.astro)'
);

await addRoundedToImages(
  join(__dirname, 'src', 'pages', '[lang]', 'fundador', 'index.astro'),
  'Fundador (fundador/index.astro)'
);

console.log('\n🎉 Todas las fotos ahora tienen bordes redondeados');
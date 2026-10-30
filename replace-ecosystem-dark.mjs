import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');

// Reemplazar por la versión con fondo dark mode
const oldImg = '<img src="/ecosistema-diagram-transparente.png" alt="Ecosistema: App + Web + MASF" class="w-full h-auto rounded-xl" draggable="false" />';
const newImg = '<img src="/ecosistema-diagram-dark.png" alt="Ecosistema: App + Web + MASF" class="w-full h-auto rounded-xl" draggable="false" />';

if (content.includes(oldImg)) {
  content = content.replace(oldImg, newImg);
  await writeFile(homePath, content, 'utf8');
  console.log('✅ Imagen reemplazada por ecosistema-diagram-dark.png');
} else {
  console.error('❌ No se encontró la imagen anterior');
  process.exit(1);
}
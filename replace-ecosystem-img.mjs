import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');

// Reemplazar la imagen masf-captura-v2.png por ecosistema-diagram.jpg en la tarjeta Ecosistema
const oldImg = '<img src="/masf-captura-v2.png" alt="Interfaz del sistema MASF" class="w-full h-auto rounded-xl" draggable="false" />';
const newImg = '<img src="/ecosistema-diagram.jpg" alt="Ecosistema: App + Web + MASF" class="w-full h-auto rounded-xl" draggable="false" />';

if (content.includes(oldImg)) {
  content = content.replace(oldImg, newImg);
  await writeFile(homePath, content, 'utf8');
  console.log('✅ Imagen de la tarjeta Ecosistema reemplazada por ecosistema-diagram.jpg');
} else {
  console.error('❌ No se encontró la imagen masf-captura-v2.png');
  process.exit(1);
}
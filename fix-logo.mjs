import { readFile, writeFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function replaceInFile(filePath, search, replacement) {
  try {
    let content = await readFile(filePath, 'utf8');
    if (content.includes(search)) {
      content = content.replaceAll(search, replacement);
      await writeFile(filePath, content, 'utf8');
      console.log(`✅ ${filePath}`);
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}

async function walkDir(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules' && entry.name !== 'dist') {
      files.push(...await walkDir(path));
    } else if (entry.isFile() && (entry.name.endsWith('.astro') || entry.name.endsWith('.json') || entry.name.endsWith('.webmanifest'))) {
      files.push(path);
    }
  }
  return files;
}

const srcDir = join(__dirname, 'src');
const files = await walkDir(srcDir);
let count = 0;

// Reemplazar logo.jpg por logo-header.png en todos los archivos fuente
for (const file of files) {
  const changed = await replaceInFile(file, 'logo.jpg', 'logo-header.png');
  if (changed) count++;
}

// También actualizar manifest.webmanifest si existe
const manifestPath = join(__dirname, 'public', 'manifest.webmanifest');
try {
  const changed = await replaceInFile(manifestPath, 'logo.jpg', 'logo-header.png');
  if (changed) count++;
} catch (e) {}

console.log(`\n Total de archivos actualizados: ${count}`);
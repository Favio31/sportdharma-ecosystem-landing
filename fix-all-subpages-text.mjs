import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pagesDir = join(__dirname, 'src', 'pages', '[lang]');

async function processDirectory(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  let totalUpdated = 0;
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      totalUpdated += await processDirectory(fullPath);
    } else if (entry.name.endsWith('.astro')) {
      let content = await readFile(fullPath, 'utf8');
      const originalContent = content;
      
      // 1. Reemplazar text-justify por text-left
      content = content.replace(/text-justify/g, 'text-left');
      
      // 2. Eliminar hyphens-auto
      content = content.replace(/hyphens-auto/g, '');
      
      // 3. Limpiar espacios dobles en las clases
      content = content.replace(/class="([^"]*)"/g, (match, p1) => {
        return `class="${p1.replace(/\s+/g, ' ').trim()}"`;
      });

      if (content !== originalContent) {
        await writeFile(fullPath, content, 'utf8');
        const relativePath = fullPath.replace(__dirname + '\\', '').replace(/\\/g, '/');
        console.log(`✅ Actualizado: ${relativePath}`);
        totalUpdated++;
      }
    }
  }
  return totalUpdated;
}

console.log('🔍 Escaneando subpáginas en src/pages/[lang]/...');
const count = await processDirectory(pagesDir);
console.log(`\n🎉 Total de archivos actualizados: ${count}`);
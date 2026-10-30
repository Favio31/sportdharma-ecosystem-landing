import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(filePath, 'utf8');

// Contar cuántos object-cover hay antes
const beforeCount = (content.match(/object-cover/g) || []).length;
console.log(`📊 Fotos con object-cover antes: ${beforeCount}`);

// Reemplazar TODOS los object-cover por object-contain bg-surface-alt
content = content.replace(/object-cover/g, 'object-contain bg-surface-alt');

// Contar cuántos object-contain hay después
const afterCount = (content.match(/object-contain/g) || []).length;
console.log(`📊 Fotos con object-contain después: ${afterCount}`);

await writeFile(filePath, content, 'utf8');
console.log(`\n✅ ${beforeCount} fotos actualizadas a object-contain`);
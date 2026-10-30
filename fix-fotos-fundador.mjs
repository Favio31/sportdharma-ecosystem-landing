import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'src', 'pages', '[lang]', 'fundador', 'index.astro');

let content = await readFile(filePath, 'utf8');

// 1. Reemplazar el contenedor del grid para que sea responsivo
const oldGridContainer = '<div class="grid gap-4 auto-rows-[200px]" style="grid-template-columns: repeat(4, 1fr); grid-template-areas: \'a a b b\' \'a a b b\' \'c c d e\' \'c c f f\' \'g h f f\';">';
const newGridContainer = '<div class="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:[grid-template-areas:\'a_a_b_b\'_\'a_a_b_b\'_\'c_c_d_e\'_\'c_c_f_f\'_\'g_h_f_f\']">';

content = content.replace(oldGridContainer, newGridContainer);

// 2. Reemplazar cada div de foto para que tenga col-span en móvil y grid-area en desktop
const replacements = [
  { area: 'a', span: 'col-span-2' },
  { area: 'b', span: 'col-span-2' },
  { area: 'c', span: 'col-span-2' },
  { area: 'd', span: 'col-span-1' },
  { area: 'e', span: 'col-span-1' },
  { area: 'f', span: 'col-span-2' },
  { area: 'g', span: 'col-span-1' },
  { area: 'h', span: 'col-span-1' }
];

for (const item of replacements) {
  const oldDiv = `style="grid-area: ${item.area};"`;
  const newDiv = `class="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ${item.span} md:[grid-area:${item.area}]"`;
  // Reemplazamos tanto la clase existente + el style, o solo el style si no hay clase previa en ese div específico
  const regex = new RegExp(`<div class="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300" style="grid-area: ${item.area};">`, 'g');
  content = content.replace(regex, `<div class="${newDiv}">`);
}

await writeFile(filePath, content, 'utf8');
console.log('✅ Grid de fotos hecho responsivo (2 columnas en móvil, Bento en desktop)');
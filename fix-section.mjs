import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');
let content = await readFile(indexPath, 'utf8');

// 1. Eliminar la tarjeta "SUMATE AL PROYECTO" de la grilla
const cardRegex = /<!-- 13\.\s*SUMATE AL PROYECTO -->[\s\S]*?<\/a>\s*/;
content = content.replace(cardRegex, '');
console.log('✅ Tarjeta eliminada de la grilla');

// 2. Agregar la sección completa "SUMATE AL PROYECTO" después de la grilla
const newSection = `
<!-- SECCIÓN: SUMATE AL PROYECTO (estilo Páginas Amigas / Conectá con Nosotros) -->
<section class="py-20 px-6 bg-surface-alt transition-colors duration-300">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-4">¿Querés contribuir o contactarnos?</h2>
    <p class="text-ink-soft mb-10 text-lg">Apoyá con tu tiempo, código o recursos. Construyamos juntos.</p>
    
    <div class="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
      <a href="https://liberapay.com/SportDharmaEcosystem/donate" target="_blank" rel="noopener noreferrer" class="flex-1 px-6 py-4 rounded-xl border-2 border-[#F6C915] text-[#F6C915] font-bold text-lg hover:bg-[#F6C915] hover:text-slate-900 transition-all">
        Liberapay
      </a>
      <a href="https://ko-fi.com/sportdharmaecosystem" target="_blank" rel="noopener noreferrer" class="flex-1 px-6 py-4 rounded-xl border-2 border-[#FF5E5B] text-[#FF5E5B] font-bold text-lg hover:bg-[#FF5E5B] hover:text-white transition-all">
        Ko-fi
      </a>
      <a href="https://github.com/sponsors/Favio31" target="_blank" rel="noopener noreferrer" class="flex-1 px-6 py-4 rounded-xl border-2 border-slate-400 text-slate-400 font-bold text-lg hover:bg-slate-400 hover:text-slate-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all">
        GitHub Sponsor
      </a>
    </div>
  </div>
</section>`;

// Insertar antes del footer o al final del main
if (content.includes('</main>')) {
  content = content.replace('</main>', `${newSection}\n</main>`);
  console.log('✅ Sección "SUMATE AL PROYECTO" agregada como sección completa');
} else {
  content += newSection;
  console.log('✅ Sección agregada al final del archivo');
}

await writeFile(indexPath, content, 'utf8');
console.log('\n🎯 index.astro actualizado');
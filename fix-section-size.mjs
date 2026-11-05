import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');
let content = await readFile(indexPath, 'utf8');

// 1. Eliminar la tarjeta pequeña de la grilla
const smallCardRegex = /<!-- 13\.\s*SUMATE AL PROYECTO -->[\s\S]*?<\/a>\s*/;
if (smallCardRegex.test(content)) {
  content = content.replace(smallCardRegex, '');
  console.log('✅ Eliminada tarjeta pequeña de la grilla');
} else {
  console.log('⚠️ No se encontró la tarjeta pequeña');
}

// 2. Crear la sección grande (estilo Páginas Amigas / Conectá con Nosotros)
const bigSection = `
<!-- SUMATE AL PROYECTO (Sección grande) -->
<section class="py-20 px-6 bg-surface-alt transition-colors duration-300">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-ink mb-4">¿Querés contribuir o contactarnos?</h2>
    <p class="text-ink-soft mb-10 text-lg">Apoyá con tu tiempo, código o recursos. Construyamos juntos.</p>
    
    <div class="flex flex-col sm:flex-row justify-center gap-4 max-w-3xl mx-auto">
      <a href="https://liberapay.com/SportDharmaEcosystem/donate" target="_blank" rel="noopener noreferrer" class="flex-1 px-8 py-4 rounded-xl border-2 border-[#F6C915] text-[#F6C915] font-bold text-lg hover:bg-[#F6C915] hover:text-slate-900 transition-all">
        Liberapay
      </a>
      <a href="https://ko-fi.com/sportdharmaecosystem" target="_blank" rel="noopener noreferrer" class="flex-1 px-8 py-4 rounded-xl border-2 border-[#FF5E5B] text-[#FF5E5B] font-bold text-lg hover:bg-[#FF5E5B] hover:text-white transition-all">
        Ko-fi
      </a>
      <a href="https://github.com/sponsors/Favio31" target="_blank" rel="noopener noreferrer" class="flex-1 px-8 py-4 rounded-xl border-2 border-slate-400 text-slate-400 font-bold text-lg hover:bg-slate-400 hover:text-slate-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all">
        GitHub Sponsor
      </a>
    </div>
  </div>
</section>`;

// 3. Insertar antes de "Páginas Amigas"
if (content.includes('<!-- PAGINAS AMIGAS -->')) {
  content = content.replace('<!-- PAGINAS AMIGAS -->', `${bigSection}\n\n<!-- PAGINAS AMIGAS -->`);
  console.log('✅ Sección grande insertada antes de Páginas Amigas');
} else {
  console.log('⚠️ No se encontró "PAGINAS AMIGAS"');
}

await writeFile(indexPath, content, 'utf8');
console.log('\n🎯 index.astro actualizado');
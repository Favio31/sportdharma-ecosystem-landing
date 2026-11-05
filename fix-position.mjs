import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');
let content = await readFile(indexPath, 'utf8');

// 1. Eliminar la sección que está DESPUÉS del </Layout> (está mal ubicada)
const wrongSectionRegex = /<!-- SECCIÓN: SUMATE AL PROYECTO[\s\S]*?<\/section>\s*$/;
content = content.replace(wrongSectionRegex, '');
console.log('✅ Eliminada sección mal ubicada después del </Layout>');

// 2. Crear la tarjeta "SUMATE AL PROYECTO" en formato de grilla (igual que las demás)
const newCard = `
        <!-- 13. SUMATE AL PROYECTO -->
        <a href={'/' + lang + '/apoya/'} class="group block rounded-3xl border border-black/5 bg-transparent p-8 outline-none! [-webkit-tap-highlight-color:transparent] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8530E]/40 hover:shadow-[0_0_40px_-8px_rgba(232,83,14,0.35)] focus-visible:border-[#E8530E]/40 active:translate-y-0 active:scale-[0.99] dark:border-white/5 dark:hover:border-orange-500/40 dark:hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.35)] dark:focus-visible:border-orange-500/40">
          <p class="text-[#E8530E] dark:text-orange-500 font-semibold text-xs uppercase tracking-wider mb-2">SUMATE AL PROYECTO</p>
          <h3 class="text-2xl font-bold text-ink mb-3 group-hover:text-[#E8530E] dark:group-hover:text-orange-500 transition-colors">¿Querés contribuir o contactarnos?</h3>
          <p class="text-ink-soft leading-relaxed text-sm text-left break-words mb-4">Apoyá con tu tiempo, código o recursos. Construyamos juntos.</p>
          
          <!-- Botones pequeños -->
          <div class="flex flex-wrap gap-2">
            <span class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F6C915]/10 text-[#F6C915] border border-[#F6C915]/30 text-xs font-semibold">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              Liberapay
            </span>
            <span class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FF5E5B]/10 text-[#FF5E5B] border border-[#FF5E5B]/30 text-xs font-semibold">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.143c0 .135-.073.26-.189.326l-4.323 2.49v4.934c0 .134-.072.258-.188.324L9.93 23.333a.376.376 0 0 1-.188.05.376.376 0 0 1-.188-.05l-9.024-5.187a.376.376 0 0 1-.188-.325V2.617c0-.134.073-.258.188-.324L9.554.104a.376.376 0 0 1 .188-.05c.065 0 .13.017.188.05l9.024 5.187a.376.376 0 0 1 .188.325v4.934l4.323-2.49a.364.364 0 0 1 .177-.02z"/></svg>
              Ko-fi
            </span>
            <span class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/10 text-slate-800 border border-slate-800/30 text-xs font-semibold dark:bg-white/10 dark:text-white dark:border-white/30">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </span>
          </div>
        </a>`;

// 3. Insertar la tarjeta entre la tarjeta 12 (apoya) y la tarjeta 14 (comunidad)
const cardRegex = /(<!-- 12\.\s*\{t\('home\.apoya_label'\)\} -->[\s\S]*?<\/a>\s*)/;
if (cardRegex.test(content)) {
  content = content.replace(cardRegex, `$1${newCard}`);
  console.log('✅ Tarjeta "SUMATE AL PROYECTO" insertada entre APOYA y COMUNIDAD');
} else {
  console.log(' No se pudo insertar la tarjeta');
}

await writeFile(indexPath, content, 'utf8');
console.log('\n🎯 index.astro corregido - Footer ahora es lo último');
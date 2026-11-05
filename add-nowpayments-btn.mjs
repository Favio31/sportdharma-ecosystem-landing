import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');
let content = await readFile(indexPath, 'utf8');

// Reemplazar el div de los 3 botones por 4 botones
const oldButtons = `<div class="flex flex-col sm:flex-row justify-center gap-4 max-w-3xl mx-auto">
        <a href="https://liberapay.com/SportDharmaEcosystem/donate" target="_blank" rel="noopener noreferrer" class="flex-1 px-8 py-4 rounded-xl border-2 border-[#F6C915] text-[#F6C915] font-bold text-lg hover:bg-[#F6C915] hover:text-slate-900 transition-all">
          Liberapay
        </a>
        <a href="https://ko-fi.com/sportdharmaecosystem" target="_blank" rel="noopener noreferrer" class="flex-1 px-8 py-4 rounded-xl border-2 border-[#FF5E5B] text-[#FF5E5B] font-bold text-lg hover:bg-[#FF5E5B] hover:text-white transition-all">
          Ko-fi
        </a>
        <a href="https://github.com/sponsors/Favio31" target="_blank" rel="noopener noreferrer" class="flex-1 px-8 py-4 rounded-xl border-2 border-slate-400 text-slate-400 font-bold text-lg hover:bg-slate-400 hover:text-slate-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all">
          GitHub Sponsor
        </a>
      </div>`;

const newButtons = `<div class="flex flex-col sm:flex-row justify-center gap-4 max-w-4xl mx-auto">
        <a href="https://liberapay.com/SportDharmaEcosystem/donate" target="_blank" rel="noopener noreferrer" class="flex-1 px-6 py-4 rounded-xl border-2 border-[#F6C915] text-[#F6C915] font-bold text-lg hover:bg-[#F6C915] hover:text-slate-900 transition-all text-center">
          Liberapay
        </a>
        <a href="https://ko-fi.com/sportdharmaecosystem" target="_blank" rel="noopener noreferrer" class="flex-1 px-6 py-4 rounded-xl border-2 border-[#FF5E5B] text-[#FF5E5B] font-bold text-lg hover:bg-[#FF5E5B] hover:text-white transition-all text-center">
          Ko-fi
        </a>
        <a href="https://github.com/sponsors/Favio31" target="_blank" rel="noopener noreferrer" class="flex-1 px-6 py-4 rounded-xl border-2 border-slate-400 text-slate-400 font-bold text-lg hover:bg-slate-400 hover:text-slate-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all text-center">
          GitHub
        </a>
        <a href="https://nowpayments.io/donation/sportdharmaecosystem" target="_blank" rel="noopener noreferrer" class="flex-1 px-6 py-4 rounded-xl border-2 border-purple-500 text-purple-500 font-bold text-lg hover:bg-purple-500 hover:text-white transition-all text-center">
          Cripto
        </a>
      </div>`;

if (content.includes(oldButtons)) {
  content = content.replace(oldButtons, newButtons);
  await writeFile(indexPath, content, 'utf8');
  console.log('✅ Botón NOWPayments agregado - Ahora hay 4 botones');
} else {
  console.log('️ No se encontró el bloque exacto de botones');
}
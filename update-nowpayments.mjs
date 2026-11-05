import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');
let content = await readFile(indexPath, 'utf8');

// Reemplazar el botón de Cripto con el enlace NOWPayments
const oldCryptoBtn = `<a href={'/' + lang + '/cripto/'} class="flex-1 px-6 py-4 rounded-xl border-2 border-purple-500 text-purple-500 font-bold text-lg hover:bg-purple-500 hover:text-white transition-all text-center">
        Cripto (BTC/XMR)
      </a>`;

const newCryptoBtn = `<a href="https://nowpayments.io/donation/sportdharmaecosystem" target="_blank" rel="noopener noreferrer" class="flex-1 px-6 py-4 rounded-xl border-2 border-purple-500 text-purple-500 font-bold text-lg hover:bg-purple-500 hover:text-white transition-all text-center">
        Cripto
      </a>`;

if (content.includes(oldCryptoBtn)) {
  content = content.replace(oldCryptoBtn, newCryptoBtn);
  console.log('✅ Botón de Cripto actualizado con NOWPayments');
} else {
  console.log('️ No se encontró el botón de Cripto exacto');
}

await writeFile(indexPath, content, 'utf8');
console.log('\n index.astro actualizado - NOWPayments integrado');
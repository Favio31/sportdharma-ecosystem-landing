import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');
let content = await readFile(indexPath, 'utf8');

// Método 1: Regex tolerante a espacios y saltos de línea
const regex = /(GitHub Sponsor\s*<\/a>\s*)(<\/div>)/;

if (regex.test(content)) {
  const newButton = `$1        <a href="https://nowpayments.io/donation/sportdharmaecosystem" target="_blank" rel="noopener noreferrer" class="flex-1 px-6 py-4 rounded-xl border-2 border-purple-500 text-purple-500 font-bold text-lg hover:bg-purple-500 hover:text-white transition-all text-center">
          Cripto
        </a>
      $2`;
  
  content = content.replace(regex, newButton);
  await writeFile(indexPath, content, 'utf8');
  console.log('✅ Botón NOWPayments agregado exitosamente (Método Regex)');
} else {
  console.log('⚠️ Regex falló. Intentando método de reemplazo directo de texto...');
  
  // Método 2: Reemplazo directo de la cadena más específica posible
  const fallbackSearch = "GitHub Sponsor\n        </a>\n      </div>";
  const fallbackReplace = `GitHub Sponsor
        </a>
        <a href="https://nowpayments.io/donation/sportdharmaecosystem" target="_blank" rel="noopener noreferrer" class="flex-1 px-6 py-4 rounded-xl border-2 border-purple-500 text-purple-500 font-bold text-lg hover:bg-purple-500 hover:text-white transition-all text-center">
          Cripto
        </a>
      </div>`;

  if (content.includes("GitHub Sponsor")) {
    // Limpiamos posibles \r para que coincida
    content = content.replace(/GitHub Sponsor\s*<\/a>\s*<\/div>/, fallbackReplace);
    await writeFile(indexPath, content, 'utf8');
    console.log('✅ Botón NOWPayments agregado exitosamente (Método Fallback)');
  } else {
    console.log('❌ ERROR: No se encontró "GitHub Sponsor" en el archivo. Revisá el código manualmente.');
  }
}
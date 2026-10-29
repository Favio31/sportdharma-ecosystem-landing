import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(ROOT, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(filePath, 'utf8');

// Buscar la línea exacta con "120.000"
const lines = content.split('\n');
const targetLine = lines.findIndex(line => line.includes('120.000') && line.includes('font-bold'));

if (targetLine === -1) {
  console.log('❌ No se encontró la línea con 120.000');
  process.exit(1);
}

console.log(`📍 Línea encontrada: ${targetLine + 1}`);

// Buscar el inicio del bloque de estadísticas (buscar hacia arriba)
let statsStart = targetLine;
while (statsStart > 0 && !lines[statsStart].includes('flex justify-center gap-4')) {
  statsStart--;
}

// Buscar el final del bloque (buscar hacia abajo)
let statsEnd = targetLine;
let braceCount = 0;
while (statsEnd < lines.length) {
  if (lines[statsEnd].includes('</div>')) {
    braceCount++;
    if (braceCount >= 4) break; // Cerrar los 3 divs de stats + el contenedor
  }
  statsEnd++;
}

console.log(`📍 Bloque de estadísticas: líneas ${statsStart + 1} a ${statsEnd + 1}`);

// Mostrar el bloque actual
console.log('\n📄 Bloque actual:');
for (let i = statsStart; i <= statsEnd; i++) {
  console.log(`${i + 1}: ${lines[i]}`);
}

// Reemplazar el bloque
const newStatsBlock = `      <div class="mt-6 pt-6 border-t border-black/5 dark:border-white/5">
        <div class="mx-auto grid w-full max-w-lg grid-cols-3 gap-3 sm:gap-4">
          <div class="min-w-0 rounded-lg border border-white/30 p-3 sm:p-4 text-center">
            <div class="text-xl sm:text-2xl font-bold leading-tight text-[#E8530E] dark:text-orange-500">120.000</div>
            <div class="text-xs text-ink-soft mt-1">km recorridos</div>
          </div>
          <div class="min-w-0 rounded-lg border border-white/30 p-3 sm:p-4 text-center">
            <div class="text-xl sm:text-2xl font-bold leading-tight text-[#E8530E] dark:text-orange-500">84</div>
            <div class="text-xs text-ink-soft mt-1">países</div>
          </div>
          <div class="min-w-0 rounded-lg border border-white/30 p-3 sm:p-4 text-center">
            <div class="text-xl sm:text-2xl font-bold leading-tight text-[#E8530E] dark:text-orange-500">11</div>
            <div class="text-xs text-ink-soft mt-1">años en ruta</div>
          </div>
        </div>
      </div>`;

lines.splice(statsStart, statsEnd - statsStart + 1, newStatsBlock);
content = lines.join('\n');

await writeFile(filePath, content, 'utf8');
console.log('\n✅ Reemplazo aplicado con éxito');

// Verificar
const verify = await readFile(filePath, 'utf8');
if (verify.includes('mx-auto grid w-full max-w-lg')) {
  console.log('✅ Verificación: la solución de Claude está en el archivo');
} else {
  console.log('❌ Verificación falló');
  process.exit(1);
}
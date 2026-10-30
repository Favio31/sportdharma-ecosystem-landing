import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const homePath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(homePath, 'utf8');
const lines = content.split('\n');

// === PROBLEMA 1: Agregar logo después de la foto del templo-blanco ===
// Buscar la línea que contiene templo-blanco
const temploLineIndex = lines.findIndex(line => line.includes('templo-blanco'));

if (temploLineIndex === -1) {
  console.error('❌ No se encontró la foto templo-blanco');
  process.exit(1);
}

console.log(` Foto templo-blanco en línea ${temploLineIndex + 1}`);

// Buscar el cierre del div contenedor de esa foto (siguiente </div> con misma indentación)
// La estructura es: <div class="w-full rounded-xl..."> <img...> </div>
let insertIndex = temploLineIndex + 1;
while (insertIndex < lines.length && !lines[insertIndex].trim().startsWith('</div>')) {
  insertIndex++;
}

// insertIndex ahora apunta al </div> que cierra el contenedor de la foto del templo
// Insertar el bloque del logo DESPUÉS de ese </div>
const logoBlock = `
                <div class="w-full rounded-xl border border-black/5 dark:border-white/5">
                  <img src="/logo-social2.jpg" alt="SportDharma Ecosystem Logo" class="w-full h-auto rounded-xl" draggable="false" />
                </div>`;

lines.splice(insertIndex + 1, 0, logoBlock);
console.log(`✅ Logo insertado después de la línea ${insertIndex + 1}`);

// === PROBLEMA 2: Quitar items-center de la tarjeta Manifiesto ===
// Buscar el manifiesto_label y luego subir hasta encontrar el items-center de su contenedor
const manifiestoLabelIndex = lines.findIndex(line => line.includes('manifiesto_label'));

if (manifiestoLabelIndex === -1) {
  console.error('❌ No se encontró manifiesto_label');
  process.exit(1);
}

// Buscar hacia arriba el div con items-center
let itemsCenterIndex = manifiestoLabelIndex;
while (itemsCenterIndex > 0 && !lines[itemsCenterIndex].includes('items-center')) {
  itemsCenterIndex--;
}

if (itemsCenterIndex > 0 && lines[itemsCenterIndex].includes('items-center')) {
  // Verificar que sea el de Manifiesto (no el de Fundador)
  // El de Manifiesto está después de manifiesto_label en el archivo
  // Reemplazar items-center por items-start (alineación izquierda)
  lines[itemsCenterIndex] = lines[itemsCenterIndex].replace('items-center', 'items-start');
  console.log(`✅ items-center cambiado a items-start en línea ${itemsCenterIndex + 1}`);
} else {
  console.log('⚠️ No se encontró items-center para Manifiesto (quizás ya fue quitado)');
}

// Escribir archivo
const newContent = lines.join('\n');
await writeFile(homePath, newContent, 'utf8');

// Verificar
const verify = await readFile(homePath, 'utf8');
const hasLogo = verify.includes('logo-social2');
const hasItemsStart = verify.includes("manifiesto_label") && !verify.match(/manifiesto_label[\s\S]{0,500}items-center/);
console.log(`\n Verificación:`);
console.log(`   - Logo en código: ${hasLogo ? '✅' : '❌'}`);
console.log(`   - Manifiesto alineado: ${hasItemsStart ? '✅' : '️ revisar'}`);
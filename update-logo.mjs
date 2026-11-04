import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 1. Actualizar Layout.astro (favicon y apple-touch-icon)
const layoutPath = join(__dirname, 'src', 'layouts', 'Layout.astro');
let layout = await readFile(layoutPath, 'utf8');
layout = layout.replace(/logo\.png/g, 'logo.jpg');
await writeFile(layoutPath, layout, 'utf8');
console.log('✅ Layout.astro actualizado');

// 2. Actualizar manifest.webmanifest (PWA icons)
const manifestPath = join(__dirname, 'public', 'manifest.webmanifest');
let manifest = await readFile(manifestPath, 'utf8');
manifest = manifest.replace(/logo\.png/g, 'logo.jpg');
await writeFile(manifestPath, manifest, 'utf8');
console.log('✅ manifest.webmanifest actualizado');
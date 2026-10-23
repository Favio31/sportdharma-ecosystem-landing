#!/usr/bin/env node
// fix-routes.mjs
// Arregla imports de Layout e inyecta getStaticPaths en src/pages/[lang]/**
// Uso:  node fix-routes.mjs            (aplica cambios)
//       node fix-routes.mjs --dry-run  (solo muestra qué cambiaría)
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DRY_RUN = process.argv.includes('--dry-run');
// Carpetas con manejo especial: se omiten (ajusta a tu gusto).
const SKIP_DIRS = new Set(['noticias', 'rss']);
// Raíz del proyecto = carpeta donde está este script.
const ROOT = path.dirname(fileURLToPath(import.meta.url));
const LANG_DIR = path.join(ROOT, 'src', 'pages', '[lang]');
const LAYOUT_FILE = path.join(ROOT, 'src', 'layouts', 'Layout.astro');

const STATIC_PATHS_FN = `export async function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'en' } },
    { params: { lang: 'fr' } },
    { params: { lang: 'pt' } },
    { params: { lang: 'de' } },
  ];
}`;
const LANG_CONST = `const { lang } = Astro.params;`;
const LAYOUT_IMPORT_RE = /^[ \t]*import\s+Layout\s+from\s+['"][^'"]*layouts\/Layout\.astro['"];?[ \t]*$/m;

const toPosix = (p) => p.split(path.sep).join('/');

function layoutImportFor(filePath) {
  let rel = toPosix(path.relative(path.dirname(filePath), LAYOUT_FILE));
  if (!rel.startsWith('.')) rel = './' + rel;
  return `import Layout from '${rel}';`;
}

function processContent(content, filePath) {
  const eol = content.includes('\r\n') ? '\r\n' : '\n';
  const changes = [];
  let out = content;

  const wantedImport = layoutImportFor(filePath);
  const hasStaticPaths = /getStaticPaths/.test(out);
  const hasLangConst = /const\s*\{[^}]*\blang\b[^}]*\}\s*=\s*Astro\.params/.test(out);

  // Bloque a inyectar (solo lo que falte)
  const blockParts = [];
  if (!hasStaticPaths) blockParts.push(STATIC_PATHS_FN);
  if (!hasLangConst) blockParts.push(LANG_CONST);
  const block = blockParts.join('\n').replace(/\n/g, eol);

  const match = out.match(LAYOUT_IMPORT_RE);
  if (match) {
    // 1) Corregir import
    if (match[0].trim() !== wantedImport) {
      out = out.replace(LAYOUT_IMPORT_RE, wantedImport);
      changes.push('import de Layout corregido');
    }
    // 2) Inyectar justo debajo del import
    if (block) {
      out = out.replace(wantedImport, wantedImport + eol + block);
      changes.push(
        [!hasStaticPaths && 'getStaticPaths', !hasLangConst && 'const lang']
          .filter(Boolean)
          .join(' + ') + ' añadido'
      );
    }
  } else {
    // Sin import de Layout: se avisa, y se inyecta tras el "---" inicial si hace falta
    changes.push(' no se encontró import de Layout (revisar a mano)');
    if (block) {
      const fm = out.match(/^---[ \t]*\r?\n/);
      if (fm) {
        out = out.slice(0, fm[0].length) + block + eol + out.slice(fm[0].length);
        changes.push('bloque inyectado al inicio del frontmatter');
      } else {
        changes.push('⚠ sin frontmatter: no se inyectó nada');
      }
    }
  }

  return { out, changes };
}

async function collectTargets() {
  const targets = [];
  const warnings = [];

  const homeFile = path.join(LANG_DIR, 'index.astro');
  try {
    await stat(homeFile);
    targets.push(homeFile);
  } catch {
    warnings.push(`No existe ${path.relative(ROOT, homeFile)}`);
  }

  const entries = await readdir(LANG_DIR, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (SKIP_DIRS.has(entry.name)) {
      warnings.push(`Omitida carpeta con manejo especial: ${entry.name}`);
      continue;
    }
    const file = path.join(LANG_DIR, entry.name, 'index.astro');
    try {
      await stat(file);
      targets.push(file);
    } catch {
      warnings.push(`Sin index.astro en: ${entry.name}`);
    }
  }

  return { targets, warnings };
}

async function main() {
  try {
    await stat(LANG_DIR);
  } catch {
    console.error(`❌ No existe ${LANG_DIR}\nColoca fix-routes.mjs en la raíz del proyecto Astro.`);
    process.exit(1);
  }

  console.log(`${DRY_RUN ? '🔍 DRY RUN — ' : ''}Procesando ${LANG_DIR}\n`);
  const { targets, warnings } = await collectTargets();
  const modified = [];
  const unchanged = [];

  for (const file of targets) {
    const original = await readFile(file, 'utf8');
    const { out, changes } = processContent(original, file);
    const rel = toPosix(path.relative(ROOT, file));

    if (out !== original) {
      if (!DRY_RUN) await writeFile(file, out, 'utf8');
      modified.push({ rel, changes });
    } else {
      unchanged.push({ rel, changes });
    }
  }

  console.log('===== RESUMEN =====');
  console.log(`\n✅ Modificados (${modified.length}):`);
  for (const m of modified) console.log(`  • ${m.rel}\n    - ${m.changes.join('\n    - ')}`);

  console.log(`\n⏭  Sin cambios (${unchanged.length}):`);
  for (const u of unchanged) {
    console.log(`  • ${u.rel}${u.changes.length ? '  ' + u.changes.join('; ') : ''}`);
  }

  if (warnings.length) {
    console.log(`\n⚠ Avisos:`);
    for (const w of warnings) console.log(`  • ${w}`);
  }
  console.log('');
}

main().catch((err) => {
  console.error('❌ Error inesperado:', err);
  process.exit(1);
});
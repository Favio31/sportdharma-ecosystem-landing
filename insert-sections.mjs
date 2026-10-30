import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const astroPath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');

let content = await readFile(astroPath, 'utf8');

// Las nuevas secciones a insertar antes del footer
const newSections = `
  <!-- SECCIÓN: PÁGINAS AMIGAS -->
  <section class="py-16 px-6 bg-surface transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-ink mb-2 text-center">{t('home.friendly_pages.title')}</h2>
      <p class="text-ink-soft text-center mb-8 max-w-2xl mx-auto">{t('home.friendly_pages.desc')}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {t('home.friendly_pages.links').map((link) => (
          <a href={link.url} target="_blank" rel="noopener noreferrer" class="block p-5 rounded-xl border border-black/5 dark:border-white/5 hover:border-[#E8530E]/40 hover:bg-[#E8530E]/5 transition-all text-center group">
            <span class="text-lg font-semibold text-ink group-hover:text-[#E8530E] transition-colors">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  </section>

  <!-- SECCIÓN: REDES SOCIALES -->
  <section class="py-16 px-6 bg-surface-alt transition-colors duration-300">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-ink mb-2">{t('home.social_media.title')}</h2>
      <p class="text-ink-soft mb-8">{t('home.social_media.desc')}</p>
      <div class="flex flex-wrap justify-center gap-4">
        {t('home.social_media.links').map((link) => (
          <a href={link.url} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-6 py-3 rounded-lg border border-black/5 dark:border-white/5 hover:bg-[#E8530E] hover:text-white hover:border-[#E8530E] transition-all font-semibold">
            {link.name}
          </a>
        ))}
      </div>
    </div>
  </section>
`;

// Buscar el footer e insertar las secciones justo antes
const footerPattern = /(\s*<footer class="bg-slate-900)/;
if (footerPattern.test(content)) {
  content = content.replace(footerPattern, `${newSections}\n  <footer class="bg-slate-900`);
  await writeFile(astroPath, content, 'utf8');
  console.log('✅ Secciones insertadas correctamente en index.astro');
} else {
  console.error('❌ No se encontró el patrón del footer');
  process.exit(1);
}

// Verificar
const verify = await readFile(astroPath, 'utf8');
const hasFriendly = verify.includes('friendly_pages');
const hasSocial = verify.includes('social_media');
console.log(`\nVerificación:`);
console.log(`   - friendly_pages: ${hasFriendly ? '✅' : '❌'}`);
console.log(`   - social_media: ${hasSocial ? '✅' : '❌'}`);
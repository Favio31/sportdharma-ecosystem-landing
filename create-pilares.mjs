import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(ROOT, 'src', 'pages', '[lang]', 'pilares');
const file = path.join(dir, 'index.astro');

const content = `---
import Layout from '../../../layouts/Layout.astro';

export async function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'en' } },
    { params: { lang: 'fr' } },
    { params: { lang: 'pt' } },
    { params: { lang: 'de' } },
  ];
}
const { lang } = Astro.params;
---

<Layout title="Pilares | SportDharma Ecosystem" lang={lang}>
  <section class="py-20 px-6 bg-surface">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-ink mb-6">Pilares</h1>
      <p class="text-lg text-ink-soft">Contenido en desarrollo. Próximamente.</p>
    </div>
  </section>
</Layout>
`;

await mkdir(dir, { recursive: true });
await writeFile(file, content, 'utf8');
console.log('✅ Página Pilares creada correctamente.');
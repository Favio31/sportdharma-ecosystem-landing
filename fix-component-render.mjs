import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, 'src', 'pages', '[lang]', 'index.astro');
let content = await readFile(indexPath, 'utf8');

// 1. Agregar el import si no existe
const importStatement = "import WebPushSubscribe from '../components/WebPushSubscribe.astro';";
if (!content.includes("import WebPushSubscribe")) {
    if (content.includes('---')) {
        // Buscar el primer import existente en el frontmatter y agregarlo debajo
        const firstImportMatch = content.match(/import\s+[^;]+;/);
        if (firstImportMatch) {
            content = content.replace(firstImportMatch[0], `${firstImportMatch[0]}\n${importStatement}`);
        } else {
            // Si no hay imports, ponerlo justo después del primer ---
            content = content.replace('---', `---\n${importStatement}`);
        }
        console.log('✅ Import del componente agregado al frontmatter');
    } else {
        content = importStatement + '\n' + content;
        console.log('✅ Import agregado al inicio del archivo');
    }
}

// 2. Insertar el componente en el HTML, justo antes de PAGINAS AMIGAS
const componentTag = `<WebPushSubscribe />\n\n`;
if (content.includes('<!-- PAGINAS AMIGAS -->')) {
    content = content.replace('<!-- PAGINAS AMIGAS -->', `${componentTag}<!-- PAGINAS AMIGAS -->`);
    console.log('✅ Etiqueta <WebPushSubscribe /> insertada antes de Páginas Amigas');
} else {
    console.log('⚠️ No se encontró el comentario <!-- PAGINAS AMIGAS -->');
}

await writeFile(indexPath, content, 'utf8');
console.log('\n🎯 index.astro actualizado correctamente');
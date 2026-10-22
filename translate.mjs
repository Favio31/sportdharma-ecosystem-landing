import fs from 'fs';
import path from 'path';

const OLLAMA_URL = 'http://localhost:11434/api/chat';
const MODEL = 'qwen3:4b-instruct';
const TARGET_LANGS = ['en', 'fr', 'pt', 'de'];
const LANG_NAMES = { en: 'Inglés', fr: 'Francés', pt: 'Portugués', de: 'Alemán' };

const esPath = path.join('src', 'i18n', 'es.json');
const esText = fs.readFileSync(esPath, 'utf-8').replace(/^\uFEFF/, ''); // Eliminar BOM si existe
const esData = JSON.parse(esText);

console.log('\n🤖 Iniciando traducción con ' + MODEL + '...\n');

for (const lang of TARGET_LANGS) {
  console.log('🔄 Traduciendo al ' + LANG_NAMES[lang] + ' (' + lang + ')...');
  
  const prompt = 'You are a professional translator. Translate the following JSON object from Spanish to ' + LANG_NAMES[lang] + '. Keep the exact same JSON structure, keys, and formatting. Do not translate proper nouns like "SportDharma Ecosystem" or "MASF". Return ONLY the valid JSON, no markdown, no explanations.\n\nSource JSON:\n' + JSON.stringify(esData, null, 2);

  try {
    const response = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: 'user', content: prompt }],
        stream: false
      })
    });

    const result = await response.json();
    let translatedText = result.message.content.trim();
    
    // Limpiar bloques de markdown de forma segura
    translatedText = translatedText.replace(/```json/gi, '').replace(/```/g, '').trim();
    
    const translatedData = JSON.parse(translatedText);
    const outPath = path.join('src', 'i18n', lang + '.json');
    fs.writeFileSync(outPath, JSON.stringify(translatedData, null, 2), 'utf-8');
    
    console.log('✅ ' + LANG_NAMES[lang] + ' guardado en ' + outPath + '\n');
  } catch (err) {
    console.error('❌ Error traduciendo al ' + LANG_NAMES[lang] + ':', err.message);
  }
}

console.log('🚀 Proceso de traducción finalizado.\n');

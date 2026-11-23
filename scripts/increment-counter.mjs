import fs from 'node:fs';
import path from 'node:path';
const FILE = 'public/stats.json';
const KEY = 'push_subscribers';
let data = {};
if (fs.existsSync(FILE)) {
  let raw = fs.readFileSync(FILE, 'utf8');
  if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
  try { data = JSON.parse(raw); }
  catch (e) { console.error('[FATAL] stats.json corrupto:', e.message); process.exit(1); }
}
if (typeof data[KEY] !== 'number' || !Number.isFinite(data[KEY]) || data[KEY] < 0) {
  console.warn('[WARN] campo invalido, reset a 0'); data[KEY] = 0;
}
const prev = data[KEY];
data[KEY] = prev + 1;
fs.mkdirSync(path.dirname(FILE), { recursive: true });
const tmp = `${FILE}.${process.pid}.tmp`;
fs.writeFileSync(tmp, JSON.stringify(data, null, 2) + '\n', 'utf8');
fs.renameSync(tmp, FILE);
console.log(`OK: ${KEY} ${prev} -> ${data[KEY]}`);
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const contentDir = path.join(root, 'src', 'content', 'fr');
const write = process.argv.includes('--write');

function collect(dir, relativeDir = '') {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absolute = path.join(dir, entry.name);
    const relative = path.posix.join(relativeDir, entry.name);
    if (entry.isDirectory()) files.push(...collect(absolute, relative));
    else if (entry.isFile() && /\.mdx?$/.test(entry.name)) files.push({ absolute, relative });
  }
  return files;
}

function extractFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  return { end: match ? match[0].length : 0 };
}

function protectInlineCode(line) {
  const parts = [];
  const value = line.replace(/(`+)([^`]*?)\1/g, (full) => {
    const token = '§§MDINLINE' + parts.length + '§§';
    parts.push(full);
    return token;
  });
  return { value, parts };
}

function protectValidEmphasis(value, parts) {
  return value
    .replace(/\*\*([^*\n]*?\S)\*\*/g, (full) => { const token = '§§MDEMPH' + parts.length + '§§'; parts.push(full); return token; })
    .replace(/(?<!\*)\*([^*\n]*?\S)\*(?!\*)/g, (full) => { const token = '§§MDEMPH' + parts.length + '§§'; parts.push(full); return token; })
    .replace(/__([^_\n]*?\S)__/g, (full) => { const token = '§§MDEMPH' + parts.length + '§§'; parts.push(full); return token; })
    .replace(/(?<!_)_([^_\n]*?\S)_(?!_)/g, (full) => { const token = '§§MDEMPH' + parts.length + '§§'; parts.push(full); return token; });
}

function restoreInlineCode(value, parts) {
  return value.replace(/§§MDINLINE(\d+)§§/g, (_, index) => parts[Number(index)]);
}

function repairHtmlInline(line) {
  return line.replace(/(<(?:p|span|div|li|td|th)(?:\\s+[^>]*)?>)(.*?)(<\\/(?:p|span|div|li|td|th)>)/g, (full, open, inner, close) => {
    if (!/[*_]{1,2}\\S/.test(inner)) return full;
    const repaired = repairLine(inner);
    const html = repaired
      .replace(/\\*\\*([^*\\n]+?)\\*\\*/g, '<strong>$1</strong>')
      .replace(/(?<!\\*)\\*([^*\\n]+?)\\*(?!\\*)/g, '<em>$1</em>')
      .replace(/__([^_\\n]+?)__/g, '<strong>$1</strong>')
      .replace(/(?<!_)_([^_\\n]+?)_(?!_)/g, '<em>$1</em>');
    return open + html + close;
  });
}

export function repairLine(line) {
  const protectedLine = protectInlineCode(line);
  const emphasisParts = [];
  let value = protectValidEmphasis(protectedLine.value, emphasisParts);
  value = value
    .replace(/\*\*([ \t]+)([^*\n]*?)([ \t]+)\*\*/g, '**$2**')
    .replace(/\*\*([ \t]+)([^*\n]*?)\*\*/g, '**$2**')
    .replace(/\*\*([^*\n]*?)([ \t]+)\*\*/g, '**$1**')
    .replace(/(?<!\*)\*([ \t]+)([^*\n]*?)([ \t]+)\*(?!\*)/g, '*$2*')
    .replace(/(?<!\*)\*([ \t]+)([^*\n]*?)\*(?!\*)/g, '*$2*')
    .replace(/(?<!\*)\*([^*\n]*?)([ \t]+)\*(?!\*)/g, '*$1*')
    .replace(/__([ \t]+)([^_\n]*?)([ \t]+)__/g, '__$2__')
    .replace(/__([ \t]+)([^_\n]*?)__/g, '__$2__')
    .replace(/__([^_\n]*?)([ \t]+)__/g, '__$1__')
    .replace(/(?<!_)_([ \t]+)([^_\n]*?)([ \t]+)_(?!_)/g, '_$2_')
    .replace(/(?<!_)_([ \t]+)([^_\n]*?)_(?!_)/g, '_$2_')
    .replace(/(?<!_)_([^_\n]*?)([ \t]+)_(?!_)/g, '_$1_');
  value = restoreInlineCode(value, protectedLine.parts);\n  return repairHtmlInline(value);
}

export function repairSource(source) {
  const fm = extractFrontmatter(source);
  const prefix = source.slice(0, fm.end);
  const body = source.slice(fm.end);
  const lines = body.split(/(\r?\n)/);
  let fenced = false;
  let changes = 0;
  for (let i = 0; i < lines.length; i += 2) {
    const line = lines[i];
    if (line == null) continue;
    if (/^\s*(`{3,}|~{3,})/.test(line)) { fenced = !fenced; continue; }
    if (fenced) continue;
    const next = repairLine(line);
    if (next !== line) { lines[i] = next; changes++; }
  }
  return { source: prefix + lines.join(''), changes };
}

if (import.meta.url !== pathToFileURL(process.argv[1]).href) process.exit(0);

const files = collect(contentDir);
const changed = [];
let totalChanges = 0;
for (const file of files) {
  const source = fs.readFileSync(file.absolute, 'utf8');
  const result = repairSource(source);
  if (result.changes) {
    const display = path.posix.join('src/content/fr', file.relative);
    changed.push({ path: display, changes: result.changes });
    totalChanges += result.changes;
    if (write) fs.writeFileSync(file.absolute, result.source);
  }
}

console.log('=== MARKDOWN EMPHASIS FORMAT AUDIT ===');
console.log('Files scanned: ' + files.length);
console.log('Files with repairs: ' + changed.length);
console.log('Formatting repairs: ' + totalChanges);
for (const item of changed) console.log('- ' + item.path + ' → ' + item.changes);
if (!write && changed.length) { console.log('Dry run only. Use --write to apply these repairs.'); process.exitCode = 1; }
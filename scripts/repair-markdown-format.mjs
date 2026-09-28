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

function restoreInlineCode(value, parts) {
  return value.replace(/§§MDINLINE(\d+)§§/g, (_, index) => parts[Number(index)]);
}

export function repairLine(line) {
  const protectedLine = protectInlineCode(line);
  let value = protectedLine.value;
  value = value
    .replace(/\*\*\s+([^\n]*?\S)\s+\*\*/g, '**$1**')
    .replace(/\*\*\s+([^\n]*?\S)\*\*/g, '**$1**')
    .replace(/\*\*([^\n]*?\S)\s+\*\*/g, '**$1**')
    .replace(/(?<!\*)\*\s+([^\n]*?\S)\s+\*(?!\*)/g, '*$1*')
    .replace(/(?<!\*)\*\s+([^\n]*?\S)\*(?!\*)/g, '*$1*')
    .replace(/(?<!\*)\*([^\n]*?\S)\s+\*(?!\*)/g, '*$1*')
    .replace(/__\s+([^\n]*?\S)\s+__/g, '__$1__')
    .replace(/__\s+([^\n]*?\S)__/g, '__$1__')
    .replace(/__([^\n]*?\S)\s+__/g, '__$1__')
    .replace(/(?<!_)_\s+([^\n]*?\S)\s+_(?!_)/g, '_$1_')
    .replace(/(?<!_)_\s+([^\n]*?\S)_(?!_)/g, '_$1_')
    .replace(/(?<!_)_([^\n]*?\S)\s+_(?!_)/g, '_$1_');
  return restoreInlineCode(value, protectedLine.parts);
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
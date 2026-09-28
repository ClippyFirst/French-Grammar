import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const contentDir = path.join(root, 'src', 'content', 'fr');

const arrayDefaults = new Set([
  'canonical_ids', 'prerequisites', 'related', 'contrast', 'next',
  'variant', 'aliases', 'tags', 'variety', 'sources',
]);

const scalarDefaults = new Map([
  ['order', '100'],
  ['depth', 'medium'],
  ['status', 'draft'],
  ['contrastive_uk', 'none'],
  ['formula', 'false'],
  ['toc', 'true'],
  ['featured', 'false'],
]);

const optionalScalars = new Set(['level', 'register', 'part_of', 'reviewed_at']);
const required = new Set(['title_uk', 'title_fr', 'description_uk', 'category']);

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

function frontmatterBounds(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) return null;
  return { start: match.index, end: match.index + match[0].length, body: match[1] };
}

function isNullish(value) {
  return value === '' || value === 'null' || value === '~';
}

const files = collect(contentDir);
let changed = 0;
let repairedFields = 0;
const unresolved = [];

for (const file of files) {
  const source = fs.readFileSync(file.absolute, 'utf8');
  const bounds = frontmatterBounds(source);
  const display = path.posix.join('src/content/fr', file.relative);

  if (!bounds) {
    unresolved.push(display + ' → missing/invalid frontmatter');
    continue;
  }

  const lines = bounds.body.split(/\r?\n/);
  const out = [];
  const seen = new Set();
  let fileChanged = false;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const m = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):[ \t]*(.*)$/);
    if (!m) {
      out.push(line);
      continue;
    }

    const field = m[1];
    const value = m[2].trim();
    seen.add(field);

    if (arrayDefaults.has(field) && isNullish(value)) {
      out.push(field + ': []');
      fileChanged = true;
      repairedFields += 1;
      continue;
    }

    if (scalarDefaults.has(field) && isNullish(value)) {
      out.push(field + ': ' + scalarDefaults.get(field));
      fileChanged = true;
      repairedFields += 1;
      continue;
    }

    if (optionalScalars.has(field) && isNullish(value)) {
      // Optional zod fields reject YAML null; omission is the schema-valid form.
      fileChanged = true;
      repairedFields += 1;
      continue;
    }

    if (required.has(field) && isNullish(value)) {
      unresolved.push(display + ' → ' + field + ' is required but empty');
    }

    out.push(line);
  }

  // Insert schema-default fields only when they are completely absent.
  // This is intentionally limited to fields whose Astro schema has defaults.
  for (const [field, value] of scalarDefaults) {
    if (!seen.has(field)) {
      out.push(field + ': ' + value);
      fileChanged = true;
      repairedFields += 1;
    }
  }
  for (const field of arrayDefaults) {
    if (!seen.has(field)) {
      out.push(field + ': []');
      fileChanged = true;
      repairedFields += 1;
    }
  }

  if (fileChanged) {
    const newBody = out.join('\n');
    const newSource = source.slice(0, bounds.start) +
      '---\n' + newBody + '\n---\n' +
      source.slice(bounds.end).replace(/^\r?\n/, '');
    fs.writeFileSync(file.absolute, newSource, 'utf8');
    changed += 1;
    console.log('[repair-content-schema] fixed ' + display);
  }
}

console.log('');
console.log('=== FRENCH-GRAMMAR CONTENT SCHEMA REPAIR ===');
console.log('Files scanned: ' + files.length);
console.log('Files changed: ' + changed);
console.log('Fields repaired: ' + repairedFields);
console.log('Unresolved: ' + unresolved.length);
if (unresolved.length) {
  console.log('');
  for (const item of unresolved) console.log('- ' + item);
  process.exitCode = 1;
} else {
  console.log('—');
}

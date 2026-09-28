import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const root = process.cwd();
const contentDir = path.join(root, 'src', 'content', 'fr');

const arrayFields = new Set([
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

function repairBody(body, display) {
  let lines = body.split(/\r?\n/);
  const out = [];
  let changed = false;
  const seen = new Set();

  // Safe structural repair: a known array written as "field: []" cannot
  // legally have an indented block sequence underneath it. Fold that
  // sequence into the array instead of guessing at unrelated YAML.
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const inline = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):\s*\[\s*\]\s*$/);
    if (inline && arrayFields.has(inline[1]) && i + 1 < lines.length && /^\s+-\s+/.test(lines[i + 1])) {
      const items = [];
      let j = i + 1;
      while (j < lines.length && /^\s+-\s+/.test(lines[j])) {
        items.push(lines[j].replace(/^\s+-\s+/, '').trim());
        j += 1;
      }
      out.push(inline[1] + ': [' + items.join(', ') + ']');
      changed = true;
      i = j - 1;
      continue;
    }
    out.push(line);
  }
  lines = out;

  const repaired = [];
  for (const line of lines) {
    const m = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):[ \t]*(.*)$/);
    if (!m) {
      repaired.push(line);
      continue;
    }

    const field = m[1];
    const value = m[2].trim();
    seen.add(field);

    if (arrayFields.has(field) && isNullish(value)) {
      repaired.push(field + ': []');
      changed = true;
      continue;
    }

    if (scalarDefaults.has(field) && isNullish(value)) {
      repaired.push(field + ': ' + scalarDefaults.get(field));
      changed = true;
      continue;
    }

    if (optionalScalars.has(field) && isNullish(value)) {
      // Optional Zod fields reject explicit YAML null. Omission is valid.
      changed = true;
      continue;
    }

    if (required.has(field) && isNullish(value)) {
      // Never invent required content.
      repaired.push(line);
      continue;
    }

    repaired.push(line);
  }

  // Do not materialize every schema default into every document. Zod already
  // supplies defaults for omitted fields; adding them would create needless
  // churn. This repairer only fixes malformed/explicitly null values.
  return { body: repaired.join('\n'), changed };
}

const files = collect(contentDir);
let changed = 0;
let repairedFields = 0;
const unresolved = [];

for (const file of files) {
  const source = fs.readFileSync(file.absolute, 'utf8');
  const display = path.posix.join('src/content/fr', file.relative);
  const bounds = frontmatterBounds(source);

  if (!bounds) {
    unresolved.push(display + ' → missing/invalid frontmatter');
    continue;
  }

  const result = repairBody(bounds.body, display);

  // Always validate the resulting frontmatter with the same YAML parser
  // family Astro uses. A repair is committed only when YAML is parseable.
  try {
    yaml.load(result.body);
  } catch (error) {
    const mark = error?.mark;
    const line = Number.isInteger(mark?.line) ? mark.line + 2 : 2;
    const column = Number.isInteger(mark?.column) ? mark.column + 1 : 1;
    unresolved.push(
      display + ':' + line + ':' + column + ' → YAML remains invalid → ' +
      (error?.reason || error?.message || String(error))
    );
    continue;
  }

  if (result.changed) {
    const newSource =
      source.slice(0, bounds.start) +
      '---\n' + result.body + '\n---\n' +
      source.slice(bounds.end).replace(/^\r?\n/, '');

    fs.writeFileSync(file.absolute, newSource, 'utf8');
    changed += 1;

    // Count changed frontmatter lines rather than pretending every file
    // repair has exactly one field.
    repairedFields += result.body.split(/\r?\n/).filter((line, index) => {
      const oldLines = bounds.body.split(/\r?\n/);
      return line !== oldLines[index];
    }).length;

    console.log('[repair-content-schema] fixed ' + display);
  }
}

console.log('');
console.log('=== FRENCH-GRAMMAR CONTENT SCHEMA REPAIR ===');
console.log('Files scanned: ' + files.length);
console.log('Files changed: ' + changed);
console.log('Frontmatter lines repaired: ' + repairedFields);
console.log('Unresolved: ' + unresolved.length);

if (unresolved.length) {
  console.log('');
  for (const item of unresolved) console.log('- ' + item);
  process.exitCode = 1;
} else {
  console.log('All repaired frontmatter parses successfully as YAML.');
}

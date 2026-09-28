import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const contentDir = path.join(root, 'src', 'content', 'fr');

const required = ['title_uk', 'title_fr', 'description_uk', 'category'];
const arrays = new Set([
  'canonical_ids', 'prerequisites', 'related', 'contrast', 'next',
  'variant', 'aliases', 'tags', 'variety', 'sources',
]);
const numbers = new Set(['order']);
const booleans = new Set(['formula', 'toc', 'featured']);
const enums = {
  level: new Set(['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'REFERENCE']),
  depth: new Set(['short', 'medium', 'high']),
  register: new Set(['neutral', 'formal', 'informal', 'spoken', 'written', 'literary', 'regional']),
  contrastive_uk: new Set(['high', 'medium', 'low', 'none']),
  status: new Set(['planned', 'catalogued', 'draft', 'review', 'release-ready', 'deprecated', 'DRAFT', 'PARTIAL', 'DONE', 'REFERENCE']),
  variety: new Set(['FR', 'QC', 'BE', 'CH', 'AFR', 'other']),
};

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

function parseFrontmatter(source) {
  if (!source.startsWith('---\n') && !source.startsWith('---\r\n')) {
    return { error: 'missing opening ---' };
  }
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) return { error: 'missing closing ---' };
  const lines = match[1].split(/\r?\n/);
  const fields = new Map();
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const m = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):(?:[ \t]*(.*))?$/);
    if (!m) continue;
    fields.set(m[1], { value: (m[2] ?? '').trim(), lineNo: i + 2 });
  }
  return { fields };
}

function classify(value) {
  if (value === '') return 'empty';
  if (/^\[.*\]$/.test(value)) return 'array';
  if (value === 'true' || value === 'false') return 'boolean';
  if (/^-?(?:0|[1-9]\d*)(?:\.\d+)?$/.test(value)) return 'number';
  if (/^(?:null|~)$/.test(value)) return 'null';
  return 'scalar';
}

const files = collect(contentDir);
const issues = [];

for (const file of files) {
  const source = fs.readFileSync(file.absolute, 'utf8');
  const fm = parseFrontmatter(source);
  const display = path.posix.join('src/content/fr', file.relative);

  if (fm.error) {
    issues.push({ path: display, line: 1, field: 'frontmatter', problem: fm.error });
    continue;
  }

  for (const field of required) {
    if (!fm.fields.has(field) || fm.fields.get(field).value === '') {
      issues.push({ path: display, line: 1, field, problem: 'missing required field' });
    }
  }

  for (const [field, meta] of fm.fields) {
    const type = classify(meta.value);

    if (arrays.has(field)) {
      if (type === 'scalar' || type === 'number' || type === 'boolean' || type === 'null') {
        issues.push({ path: display, line: meta.lineNo, field, problem: 'expected array, found ' + type + ': ' + meta.value });
      }
      if (field === 'canonical_ids' && type === 'array' &&
          !/^\[(?:\s*FR-\d{3}\s*(?:,\s*FR-\d{3}\s*)*)?\]$/.test(meta.value)) {
        issues.push({ path: display, line: meta.lineNo, field, problem: 'canonical_ids must contain only FR-### values' });
      }
      continue;
    }

    if (numbers.has(field) && type !== 'number' && type !== 'empty') {
      issues.push({ path: display, line: meta.lineNo, field, problem: 'expected number, found ' + type + ': ' + meta.value });
      continue;
    }

    if (booleans.has(field) && type !== 'boolean' && type !== 'empty') {
      issues.push({ path: display, line: meta.lineNo, field, problem: 'expected boolean, found ' + type + ': ' + meta.value });
      continue;
    }

    if (enums[field] && type !== 'empty') {
      const value = meta.value.replace(/^(['"])(.*)\\1$/, '$2');
      if (!enums[field].has(value)) {
        issues.push({ path: display, line: meta.lineNo, field, problem: 'invalid value: ' + meta.value });
      }
    }
  }
}

const lines = [
  '=== FRENCH-GRAMMAR CONTENT SCHEMA SHAPE AUDIT ===',
  '',
  'Files scanned: ' + files.length,
  'Issues: ' + issues.length,
  '',
  ...(issues.length
    ? issues.map((issue) => '- ' + issue.path + ':' + issue.line + ' → ' + issue.field + ' → ' + issue.problem)
    : ['—']),
  '',
];

process.stdout.write(lines.join('\n'));
if (issues.length) process.exitCode = 1;

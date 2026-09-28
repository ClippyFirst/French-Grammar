import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

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

function extractFrontmatter(source) {
  if (!/^---\r?\n/.test(source)) return { error: 'missing opening ---' };
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) return { error: 'missing closing ---' };
  return { body: match[1], startLine: 2 };
}

function yamlErrorLocation(error, startLine = 2) {
  const mark = error?.mark;
  return {
    line: Number.isInteger(mark?.line) ? startLine + mark.line : startLine,
    column: Number.isInteger(mark?.column) ? mark.column + 1 : 1,
  };
}

function validateValue(issues, display, field, value, line = 1) {
  if (arrays.has(field)) {
    if (!Array.isArray(value)) {
      issues.push({ path: display, line, field, problem: 'expected array, found ' + (value === null ? 'null' : typeof value) });
      return;
    }
    if (field === 'canonical_ids' && value.some((item) => typeof item !== 'string' || !/^FR-\d{3}$/.test(item))) {
      issues.push({ path: display, line, field, problem: 'canonical_ids must contain only FR-### values' });
    }
    if (field === 'variety' && value.some((item) => typeof item !== 'string' || !enums.variety.has(item))) {
      issues.push({ path: display, line, field, problem: 'variety contains an invalid value' });
    }
    return;
  }

  if (numbers.has(field) && typeof value !== 'number') {
    issues.push({ path: display, line, field, problem: 'expected number, found ' + (value === null ? 'null' : typeof value) });
    return;
  }

  if (booleans.has(field) && typeof value !== 'boolean') {
    issues.push({ path: display, line, field, problem: 'expected boolean, found ' + (value === null ? 'null' : typeof value) });
    return;
  }

  if (enums[field] && value !== null && value !== undefined) {
    if (typeof value !== 'string' || !enums[field].has(value)) {
      issues.push({ path: display, line, field, problem: 'invalid value: ' + JSON.stringify(value) });
    }
  }
}

const files = collect(contentDir);
const issues = [];

for (const file of files) {
  const source = fs.readFileSync(file.absolute, 'utf8');
  const display = path.posix.join('src/content/fr', file.relative);
  const fm = extractFrontmatter(source);

  if (fm.error) {
    issues.push({ path: display, line: 1, field: 'frontmatter', problem: fm.error });
    continue;
  }

  let data;
  try {
    data = yaml.load(fm.body) ?? {};
  } catch (error) {
    const loc = yamlErrorLocation(error, fm.startLine);
    issues.push({
      path: display,
      line: loc.line,
      field: 'frontmatter',
      problem: 'invalid YAML: ' + (error?.reason || error?.message || String(error)),
      column: loc.column,
    });
    continue;
  }

  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    issues.push({ path: display, line: 1, field: 'frontmatter', problem: 'frontmatter must be a YAML mapping' });
    continue;
  }

  for (const field of required) {
    if (!(field in data) || data[field] === null || data[field] === '') {
      issues.push({ path: display, line: 1, field, problem: 'missing required field' });
    }
  }

  for (const [field, value] of Object.entries(data)) {
    validateValue(issues, display, field, value);
  }
}

const lines = [
  '=== FRENCH-GRAMMAR CONTENT SCHEMA + YAML AUDIT ===',
  '',
  'Files scanned: ' + files.length,
  'Issues: ' + issues.length,
  '',
  ...(issues.length
    ? issues.map((issue) => '- ' + issue.path + ':' + issue.line + (issue.column ? ':' + issue.column : '') + ' → ' + issue.field + ' → ' + issue.problem)
    : ['—']),
  '',
];

process.stdout.write(lines.join('\n'));
if (issues.length) process.exitCode = 1;

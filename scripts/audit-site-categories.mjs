import fs from 'node:fs';
import path from 'node:path';
import { categories, canonicalCategory } from '../src/data/categories.mjs';

const root = process.cwd();
const contentDir = path.join(root, 'src', 'content', 'fr');
const strict = process.argv.includes('--strict');
const known = new Set(categories.map((category) => category.key));

function frontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  return match ? match[1] : '';
}

function scalar(front, name) {
  const line = front.split(/\r?\n/).find((value) => value.startsWith(name + ':'));
  if (!line) return '';
  return line.slice(name.length + 1).trim().replace(/^["']|["']$/g, '');
}

function collectContentFiles(dir, relativeDir = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(dir, entry.name);
    const relative = path.posix.join(relativeDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectContentFiles(absolute, relative));
    } else if (entry.isFile() && /\.mdx?$/.test(entry.name)) {
      files.push({ absolute, relative });
    }
  }
  return files;
}

const files = collectContentFiles(contentDir).map(({ absolute, relative }) => {
  const source = fs.readFileSync(absolute, 'utf8');
  const raw = scalar(frontmatter(source), 'category');
  const slug = relative.replace(/\\/g, '/').replace(/\.(md|mdx)$/, '');
  return {
    path: path.posix.join('src/content/fr', relative),
    slug,
    raw,
    canonical: raw ? canonicalCategory(raw) : '',
  };
});

const missing = files.filter((file) => !file.raw);
const unknown = files.filter((file) => file.raw && !known.has(file.canonical));
const legacy = files.filter((file) => file.raw && file.raw !== file.canonical);
const routes = new Map();
const duplicateRoutes = [];

for (const file of files) {
  if (!file.canonical) continue;
  const route = '/fr/' + file.canonical + '/' + file.slug.split('/').pop() + '/';
  if (routes.has(route)) {
    duplicateRoutes.push([route, routes.get(route), file.path]);
  } else {
    routes.set(route, file.path);
  }
}

const lines = [
  '=== FRENCH-GRAMMAR SITE CATEGORY AUDIT ===',
  '',
  'Files: ' + files.length,
  'Known canonical categories: ' + categories.length,
  'Missing category: ' + missing.length,
  'Unknown category: ' + unknown.length,
  'Legacy categories normalized: ' + legacy.length,
  'Duplicate generated routes: ' + duplicateRoutes.length,
  '',
  '--- Missing category ---',
  ...(missing.length ? missing.map((file) => '- ' + file.path) : ['—']),
  '',
  '--- Unknown category ---',
  ...(unknown.length ? unknown.map((file) => '- ' + file.path + ' → ' + file.raw + ' → ' + file.canonical) : ['—']),
  '',
  '--- Legacy normalization ---',
  ...(legacy.length ? legacy.map((file) => '- ' + file.path + ' → ' + file.raw + ' → ' + file.canonical) : ['—']),
  '',
  '--- Duplicate generated routes ---',
  ...(duplicateRoutes.length ? duplicateRoutes.map(([route, first, second]) => '- ' + route + ' ← ' + first + ', ' + second) : ['—']),
  '',
];

process.stdout.write(lines.join('\n'));

if (strict && (missing.length || unknown.length || duplicateRoutes.length)) {
  process.exitCode = 1;
}

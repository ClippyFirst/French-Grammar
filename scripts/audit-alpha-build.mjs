import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const root = resolve('dist');
const base = '/French-Grammar';

if (!existsSync(root)) {
  console.error('Alpha build audit: dist/ does not exist. Run npm run build first.');
  process.exit(1);
}

const htmlFiles = [];
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name.endsWith('.html')) htmlFiles.push(path);
  }
}
walk(root);

const refs = [];
const pattern = /(?:href|src)=(?:"([^"]+)"|'([^']+)')/g;
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  let match;
  while ((match = pattern.exec(html))) {
    refs.push({ file, value: match[1] ?? match[2] });
  }
}

const failures = [];
function stripUrl(value) {
  return value.split('#')[0].split('?')[0];
}

function targetFor(url) {
  const clean = stripUrl(url);
  if (!clean || clean.startsWith('#') || /^(?:[a-z][a-z0-9+.-]*:|\\/\\/)/i.test(clean)) return null;
  if (!clean.startsWith(base)) return { type: 'absolute-root', url: clean };

  const suffix = clean.slice(base.length) || '/';
  const normalized = suffix.startsWith('/') ? suffix : '/' + suffix;
  const candidates = [];

  if (normalized.endsWith('/')) {
    candidates.push(join(root, normalized, 'index.html'));
  } else {
    candidates.push(join(root, normalized));
    candidates.push(join(root, normalized + '.html'));
    candidates.push(join(root, normalized, 'index.html'));
  }

  return {
    type: 'local',
    url: clean,
    exists: candidates.some((candidate) => existsSync(candidate)),
  };
}

for (const ref of refs) {
  const target = targetFor(ref.value);
  if (!target) continue;
  if (target.type === 'absolute-root') {
    failures.push(`${relative(process.cwd(), ref.file)} -> ${ref.value} (absolute URL ignores GitHub Pages base)`);
  }
}


console.log(`Alpha build audit: ${htmlFiles.length} HTML files, ${refs.length} references inspected.`);
if (failures.length) {
  console.error(`Alpha build audit failed: ${failures.length} issue(s).`);
  for (const item of failures) console.error(`- ${item}`);
  process.exit(1);
}

console.log('Alpha build audit passed: internal routes and root-relative assets respect /French-Grammar/.');
for (const required of [
  'index.html',
  'exams/index.html',
  'search/index.html',
  'fr/index.html',
  '404.html',
]) {
  if (!existsSync(join(root, required))) {
    failures.push(`dist/${required} is missing`);
  }
}


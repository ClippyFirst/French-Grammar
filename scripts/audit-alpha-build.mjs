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

const config = readFileSync(resolve('astro.config.mjs'), 'utf8');
if (!config.includes("base: '/French-Grammar'")) {
  console.error("Alpha build audit failed: astro.config.mjs does not declare base '/French-Grammar'.");
  process.exit(1);
}

for (const required of [
  'index.html',
  'exams/index.html',
  'search/index.html',
  'fr/index.html',
  '404.html',
  'styles/global.css',
  'js/main.js',
  'favicon.svg',
]) {
  if (!existsSync(join(root, required))) {
    failures.push(`dist/${required} is missing`);
  }
}


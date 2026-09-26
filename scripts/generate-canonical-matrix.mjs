import fs from 'node:fs';
import path from 'node:path';
import { parseCanonicalIds, parseCatalogIds, parseStatus } from './lib/canonical-coverage.mjs';

const root = process.cwd();
const taxonomyPath = path.join(root, 'docs', 'grammar_taxonomy_canonical.md');
const contentDir = path.join(root, 'src', 'content', 'fr');
const outputPath = path.join(root, 'docs', 'canonical_topic_article_matrix.md');
const tick = String.fromCharCode(96);

function parseFrontmatter(source) {
  const match = source.match(/^---\\r?\\n([\\s\\S]*?)\\r?\\n---/);
  return match ? match[1] : '';
}
function field(frontmatter, name) {
  const match = frontmatter.match(new RegExp('^' + name + ':\\\\s*(.*)$', 'm'));
  return match ? match[1].trim().replace(/^['\"]|['\"]$/g, '') : '';
}

const catalogSource = fs.readFileSync(taxonomyPath, 'utf8');
const catalogIds = parseCatalogIds(catalogSource);
const catalog = new Map(catalogIds.map((id) => [id, { id, articles: [] }]));

for (const name of fs.readdirSync(contentDir).filter((n) => /\\.mdx?$/.test(n)).sort()) {
  const source = fs.readFileSync(path.join(contentDir, name), 'utf8');
  const article = { path: 'src/content/fr/' + name, slug: name.replace(/\\.mdx?$/, ''), title: field(parseFrontmatter(source), 'title_uk'), status: parseStatus(source) ?? 'unknown' };
  for (const id of parseCanonicalIds(source)) if (catalog.has(id)) catalog.get(id).articles.push(article);
}

const rows = [...catalog.values()];
const covered = rows.filter((r) => r.articles.length);
const missing = rows.filter((r) => !r.articles.length);
const duplicate = rows.filter((r) => r.articles.length > 1);
const deprecated = rows.filter((r) => r.articles.some((a) => a.status === 'deprecated'));
const esc = (v) => String(v ?? '').replaceAll('|', '\\\\|').replaceAll('\\n', ' ');
const links = (articles) => articles.length ? articles.map((a) => '[' + esc(a.title || a.slug) + '](../' + a.path.replace(/^src\\//, '') + ')' + (a.status === 'deprecated' ? ' [deprecated]' : '')).join('<br>') : '—';

const lines = [
  '# Матриця «канонічна тема → стаття»', '',
  '> Автоматично генерується з canonical_ids у src/content/fr/*.md та live-каталогу docs/grammar_taxonomy_canonical.md.',
  '> Не редагувати вручну: npm run audit:canonical:matrix.', '',
  '## Зведення', '', '| Метрика | Значення |', '|---|---:|',
  '| Канонічних тем | ' + catalogIds.length + ' |',
  '| Тем із хоча б однією статтею | ' + covered.length + ' |',
  '| Покриття | ' + (catalogIds.length ? (covered.length / catalogIds.length * 100).toFixed(1) : '100.0') + '% |',
  '| Тем без статті | ' + missing.length + ' |',
  '| Тем із кількома статтями | ' + duplicate.length + ' |',
  '| Тем, прив’язаних до deprecated-файла | ' + deprecated.length + ' |', '',
  '## Матриця', '', '| ID | Стаття / статті |', '|---|---|',
  ...rows.map((r) => '| ' + tick + r.id + tick + ' | ' + links(r.articles) + ' |'), '',
  '## Missing', '', ...(missing.length ? missing.map((r) => '- ' + tick + r.id + tick) : ['—']), '',
  '## Duplicate mappings', '', ...(duplicate.length ? duplicate.map((r) => '- ' + tick + r.id + tick + ' → ' + r.articles.map((a) => tick + a.slug + tick).join(', ')) : ['—']), ''
];
fs.writeFileSync(outputPath, lines.join('\\n') + '\\n');
console.log('Wrote ' + outputPath);
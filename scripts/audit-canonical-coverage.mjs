import fs from 'node:fs';
import path from 'node:path';
import {
  auditCanonicalCoverage,
  formatCoverageReport,
  parseCanonicalIds,
  parseCatalogIds,
  parseStatus,
} from './lib/canonical-coverage.mjs';

const root = process.cwd();
const taxonomyPath = path.join(root, 'docs', 'grammar_taxonomy_canonical.md');
const contentDir = path.join(root, 'src', 'content', 'fr');
const strict = process.argv.includes('--strict');

const catalogSource = fs.readFileSync(taxonomyPath, 'utf8');
const catalogIds = parseCatalogIds(catalogSource);

function collectContentFiles(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...collectContentFiles(filePath));
    else if (entry.isFile() && /\.mdx?$/.test(entry.name)) result.push(filePath);
  }
  return result;
}

const files = collectContentFiles(contentDir).map((filePath) => {
  const source = fs.readFileSync(filePath, 'utf8');
  return {
    path: path.relative(root, filePath).replaceAll(path.sep, '/'),
    canonicalIds: parseCanonicalIds(source),
    status: parseStatus(source),
  };
});

const result = auditCanonicalCoverage({ catalogIds, files });
process.stdout.write(formatCoverageReport(result));

if (
  strict &&
  (result.catalogGaps.length > 0 || result.missing.length > 0 || result.invalid.length > 0 || result.duplicates.length > 0 || result.duplicateCatalogIds.length > 0 || result.duplicateFileMappings.length > 0 || result.deprecatedMappings.length > 0)
) {
  process.exitCode = 1;
}

import fs from 'node:fs';
import path from 'node:path';
import {
  auditCanonicalCoverage,
  formatCoverageReport,
  parseCanonicalIds,
  parseCatalogIds,
} from './lib/canonical-coverage.mjs';

const root = process.cwd();
const taxonomyPath = path.join(root, 'docs', 'grammar_taxonomy_canonical.md');
const contentDir = path.join(root, 'src', 'content', 'fr');
const strict = process.argv.includes('--strict');

const catalogSource = fs.readFileSync(taxonomyPath, 'utf8');
const catalogIds = parseCatalogIds(catalogSource);

const files = fs.readdirSync(contentDir, { withFileTypes: true })
  .filter((entry) => entry.isFile() && /\.mdx?$/.test(entry.name))
  .map((entry) => {
    const filePath = path.join(contentDir, entry.name);
    const source = fs.readFileSync(filePath, 'utf8');
    return {
      path: path.relative(root, filePath).replaceAll(path.sep, '/'),
      canonicalIds: parseCanonicalIds(source),
    };
  });

const result = auditCanonicalCoverage({ catalogIds, files });
process.stdout.write(formatCoverageReport(result));

if (
  strict &&
  (result.missing.length > 0 || result.invalid.length > 0 || result.duplicates.length > 0)
) {
  process.exitCode = 1;
}

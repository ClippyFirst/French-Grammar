const CANONICAL_ID_RE = /FR-\d{3}/g;

export function parseCanonicalIds(source) {
  const inline = source.match(/^canonical_ids:\s*\[([^\]]*)\]\s*$/m);
  if (inline) return [...inline[1].matchAll(/FR-\d{3}/g)].map((m) => m[0]);

  const multiline = source.match(/^canonical_ids:\s*\n((?:\s+-\s+FR-\d{3}\s*\n?)*)/m);
  if (!multiline) return [];
  return [...multiline[1].matchAll(/FR-\d{3}/g)].map((m) => m[0]);
}

export function parseCatalogIds(source) {
  return [...source.matchAll(/^\s*-\s+(FR-\d{3})\s+/gm)].map((m) => m[1]);
}

export function auditCanonicalCoverage({ catalogIds, files }) {
  const catalog = new Set(catalogIds);
  const pathsById = new Map();

  for (const file of files) {
    for (const id of file.canonicalIds) {
      const paths = pathsById.get(id) ?? [];
      paths.push(file.path);
      pathsById.set(id, paths);
    }
  }

  const covered = [...catalog].filter((id) => pathsById.has(id));
  const missing = [...catalog].filter((id) => !pathsById.has(id));

  const invalid = [...pathsById.entries()]
    .filter(([id]) => !catalog.has(id))
    .map(([id, paths]) => ({ id, paths }))
    .sort((a, b) => a.id.localeCompare(b.id));

  const duplicates = [...pathsById.entries()]
    .filter(([id, paths]) => catalog.has(id) && paths.length > 1)
    .map(([id, paths]) => ({ id, paths }))
    .sort((a, b) => a.id.localeCompare(b.id));

  return {
    catalogCount: catalog.size,
    coveredCount: covered.length,
    missing,
    invalid,
    duplicates,
    filesWithoutCanonicalIds: files.filter((file) => file.canonicalIds.length === 0).map((file) => file.path),
  };
}

export function formatCoverageReport(result) {
  const pct = result.catalogCount === 0
    ? 100
    : ((result.coveredCount / result.catalogCount) * 100).toFixed(1);

  const lines = [
    '# Canonical coverage audit',
    '',
    `- Catalog topics: ${result.catalogCount}`,
    `- Covered topics: ${result.coveredCount}`,
    `- Coverage: ${pct}%`,
    `- Missing topics: ${result.missing.length}`,
    `- Invalid IDs: ${result.invalid.length}`,
    `- Duplicate mappings: ${result.duplicates.length}`,
    `- Files without explicit canonical IDs: ${result.filesWithoutCanonicalIds.length}`,
  ];

  if (result.missing.length) {
    lines.push('', '## Missing', ...result.missing.map((id) => `- ${id}`));
  }
  if (result.invalid.length) {
    lines.push('', '## Invalid IDs', ...result.invalid.map(({ id, paths }) => `- ${id}: ${paths.join(', ')}`));
  }
  if (result.duplicates.length) {
    lines.push('', '## Duplicate mappings', ...result.duplicates.map(({ id, paths }) => `- ${id}: ${paths.join(', ')}`));
  }

  return lines.join('\n') + '\n';
}

const CANONICAL_ID_RE = /FR-\\d{3}/g;

export function parseCanonicalIds(source) {
  const inline = source.match(/^canonical_ids:\\s*\\[([^\\]]*)\\]\\s*$/m);
  if (inline) return [...inline[1].matchAll(CANONICAL_ID_RE)].map((m) => m[0]);

  const multiline = source.match(/^canonical_ids:[ \\t]*\\r?\\n((?:[ \\t]*-[ \\t]*FR-\\d{3}[ \\t]*\\r?\\n?)*)/m);
  if (!multiline) return [];
  return [...multiline[1].matchAll(CANONICAL_ID_RE)].map((m) => m[0]);
}

export function parseCatalogIds(source) {
  return [...source.matchAll(/^\\s*-\\s+(FR-\\d{3})\\s+/gm)].map((m) => m[1]);
}

export function parseStatus(source) {
  const match = source.match(/^status:\\s*["']?([A-Za-z-]+)["']?\\s*$/m);
  if (!match) return undefined;
  const legacy = {
    DRAFT: 'draft',
    PARTIAL: 'catalogued',
    REVIEW: 'review',
    DONE: 'release-ready',
    REFERENCE: 'release-ready',
  };
  return legacy[match[1]] ?? match[1];
}

export function auditCanonicalCoverage({ catalogIds, files }) {
  const catalog = new Set(catalogIds);
  const catalogCounts = new Map();
  for (const id of catalogIds) catalogCounts.set(id, (catalogCounts.get(id) ?? 0) + 1);
  const duplicateCatalogIds = [...catalogCounts.entries()]
    .filter(([, count]) => count > 1)
    .map(([id]) => id)
    .sort();

  const pathsById = new Map();
  const duplicateFileMappings = [];
  const deprecatedMappings = [];

  for (const file of files) {
    const ids = new Set(file.canonicalIds);
    const duplicateIds = [...ids]
      .filter((id) => file.canonicalIds.filter((value) => value === id).length > 1)
      .sort();

    if (duplicateIds.length) duplicateFileMappings.push({ path: file.path, ids: duplicateIds });

    for (const id of file.canonicalIds) {
      const paths = pathsById.get(id) ?? [];
      paths.push(file.path);
      pathsById.set(id, paths);
    }

    if (file.status === 'deprecated') {
      for (const id of ids) {
        if (!catalog.has(id)) continue;
        const entry = deprecatedMappings.find((item) => item.id === id);
        if (entry) entry.paths.push(file.path);
        else deprecatedMappings.push({ id, paths: [file.path] });
      }
    }
  }

  deprecatedMappings.sort((a, b) => a.id.localeCompare(b.id));

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
    duplicateCatalogIds,
    duplicateFileMappings,
    deprecatedMappings,
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
    `- Duplicate catalog IDs: ${result.duplicateCatalogIds.length}`,
    `- Duplicate IDs inside files: ${result.duplicateFileMappings.length}`,
    `- Deprecated-file mappings: ${result.deprecatedMappings.length}`,
    `- Files without explicit canonical IDs: ${result.filesWithoutCanonicalIds.length}`,
  ];

  if (result.duplicateCatalogIds.length) {
    lines.push('', '## Duplicate catalog IDs', ...result.duplicateCatalogIds.map((id) => `- ${id}`));
  }
  if (result.duplicateFileMappings.length) {
    lines.push('', '## Duplicate IDs inside files', ...result.duplicateFileMappings.map(({ path, ids }) => `- ${path}: ${ids.join(', ')}`));
  }
  if (result.deprecatedMappings.length) {
    lines.push('', '## Deprecated-file mappings', ...result.deprecatedMappings.map(({ id, paths }) => `- ${id}: ${paths.join(', ')}`));
  }
  if (result.missing.length) {
    lines.push('', '## Missing', ...result.missing.map((id) => `- ${id}`));
  }
  if (result.invalid.length) {
    lines.push('', '## Invalid IDs', ...result.invalid.map(({ id, paths }) => `- ${id}: ${paths.join(', ')}`));
  }
  if (result.duplicates.length) {
    lines.push('', '## Duplicate mappings', ...result.duplicates.map(({ id, paths }) => `- ${id}: ${paths.join(', ')}`));
  }

  return lines.join('\\n') + '\\n';
}

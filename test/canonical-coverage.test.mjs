import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCanonicalIds, parseCatalogIds, parseStatus, auditCanonicalCoverage } from '../scripts/lib/canonical-coverage.mjs';

test('parseCanonicalIds extracts canonical IDs from frontmatter', () => {
  const source = `---
title_uk: Тест
canonical_ids:
  - FR-001
  - FR-014
---
# Текст
`;
  assert.deepEqual(parseCanonicalIds(source), ['FR-001', 'FR-014']);
});

test('parseCanonicalIds also extracts inline arrays', () => {
  const source = `---
canonical_ids: ["FR-439", "FR-440"]
---
`;
  assert.deepEqual(parseCanonicalIds(source), ['FR-439', 'FR-440']);
});

test('auditCanonicalCoverage reports missing, invalid and duplicate mappings', () => {
  const result = auditCanonicalCoverage({
    catalogIds: ['FR-001', 'FR-002', 'FR-003'],
    files: [
      { path: 'a.md', canonicalIds: ['FR-001', 'FR-999'] },
      { path: 'b.md', canonicalIds: ['FR-001'] },
    ],
  });

  assert.deepEqual(result.missing, ['FR-002', 'FR-003']);
  assert.deepEqual(result.invalid, [{ id: 'FR-999', paths: ['a.md'] }]);
  assert.deepEqual(result.duplicates, [{ id: 'FR-001', paths: ['a.md', 'b.md'] }]);
  assert.equal(result.coveredCount, 1);
});


test('auditCanonicalCoverage detects duplicate catalog IDs and duplicate IDs inside one file', () => {
  const result = auditCanonicalCoverage({
    catalogIds: ['FR-001', 'FR-001', 'FR-002'],
    files: [
      { path: 'a.md', canonicalIds: ['FR-001', 'FR-001'], status: 'review' },
    ],
  });

  assert.deepEqual(result.duplicateCatalogIds, ['FR-001']);
  assert.deepEqual(result.duplicateFileMappings, [{ path: 'a.md', ids: ['FR-001'] }]);
});

test('auditCanonicalCoverage reports canonical mappings on deprecated files', () => {
  const result = auditCanonicalCoverage({
    catalogIds: ['FR-001'],
    files: [
      { path: 'legacy.md', canonicalIds: ['FR-001'], status: 'deprecated' },
    ],
  });

  assert.deepEqual(result.deprecatedMappings, [{ id: 'FR-001', paths: ['legacy.md'] }]);
});


test('parseStatus normalizes legacy status values', () => {
  assert.equal(parseStatus('status: REVIEW'), 'review');
  assert.equal(parseStatus('status: DONE'), 'release-ready');
  assert.equal(parseStatus('status: deprecated'), 'deprecated');
});

test('auditCanonicalCoverage detects a non-contiguous canonical catalog', () => {
  const result = auditCanonicalCoverage({
    catalogIds: ['FR-001', 'FR-003'],
    files: [],
  });

  assert.deepEqual(result.catalogGaps, ['FR-002']);
});


test('parseCatalogIds ignores historical audit bullet lists outside the live catalog', () => {
  const source = [
    '# CANONICAL TOPIC CATALOG',
    '',
    '- FR-001 First topic',
    '- FR-002 Second topic',
    '',
    '# 2. Audit history',
    '',
    '- FR-999 Historical note',
  ].join('\n');
  assert.deepEqual(parseCatalogIds(source), ['FR-001', 'FR-002']);
});

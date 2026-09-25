import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCanonicalIds, auditCanonicalCoverage } from '../scripts/lib/canonical-coverage.mjs';

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

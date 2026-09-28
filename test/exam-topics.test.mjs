import test from 'node:test';
import assert from 'node:assert/strict';
import { examSections, examMeta, examBadge } from '../src/data/exam-topics.mjs';

const rows = examSections.flatMap((section) => section.topics);

test('exam catalog has no duplicate topic labels', () => {
  const labels = rows.map(([title]) => title);
  assert.equal(new Set(labels).size, labels.length);
});

test('every exam marker is supported', () => {
  for (const [, , exam] of rows) {
    assert.ok(['nmt', 'evi', 'both'].includes(exam));
  }
});

test('both badge is reserved for shared requirements', () => {
  assert.equal(examBadge('both'), 'both');
  assert.equal(examBadge('nmt'), 'nmt');
  assert.equal(examBadge('evi'), 'evi');
});

test('exam metadata exposes all three labels', () => {
  assert.deepEqual(Object.keys(examMeta), ['nmt', 'evi', 'both']);
  assert.equal(examMeta.nmt.label, 'НМТ');
  assert.equal(examMeta.evi.label, 'ЄВІ');
  assert.equal(examMeta.both.label, 'НМТ + ЄВІ');
});

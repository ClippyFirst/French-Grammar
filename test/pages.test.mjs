import test from 'node:test';
import assert from 'node:assert/strict';
import { canonicalCategory } from '../src/data/categories.mjs';
import { relatedFor, slugFromId, sectionsFor, catCountsFor } from '../src/lib/pages.mjs';

const all = [
  {
    id: 'adjective-position.md',
    data: {
      category: 'adjectives',
      title_uk: 'Позиція прикметника',
      title_fr: 'La place de l’adjectif',
      description_uk: 'Тестова стаття.',
    },
  },
  {
    id: 'pronouns-cod.md',
    data: {
      category: 'pronouns',
      title_uk: 'COD',
      title_fr: 'Les pronoms COD',
      description_uk: 'Тестова стаття.',
    },
  },
];

test('relatedFor resolves a plain canonical slug', () => {
  const result = relatedFor(all, 'adjectives', ['adjective-position']);
  assert.deepEqual(result.map((item) => item.href), ['/fr/adjectives/adjective-position/']);
});

test('relatedFor preserves category/slug references for legacy content', () => {
  const result = relatedFor(all, 'adjectives', ['pronouns/pronouns-cod']);
  assert.deepEqual(result.map((item) => item.href), ['/fr/pronouns/pronouns-cod/']);
});


test('relatedFor does not silently resolve an ambiguous plain slug', () => {
  const ambiguous = [
    ...all,
    {
      id: 'other/adjective-position.md',
      data: {
        category: 'other',
        title_uk: 'Дубль',
        title_fr: 'Duplicate',
        description_uk: 'Тестова стаття.',
      },
    },
  ];
  const result = relatedFor(ambiguous, 'adjectives', ['adjective-position']);
  assert.deepEqual(result, []);
});


test('canonicalCategory normalizes legacy site categories', () => {
  assert.equal(canonicalCategory('numbers'), 'quantification');
  assert.equal(canonicalCategory('punctuation'), 'orthography');
  assert.equal(canonicalCategory('complex-sentences'), 'complex');
  assert.equal(canonicalCategory('modality'), 'modals');
  assert.equal(canonicalCategory('relative-clauses'), 'relative');
  assert.equal(canonicalCategory('variation'), 'regional');
  assert.equal(canonicalCategory('Узгодження'), 'agreement');
});

test('slugFromId normalizes extension and nested IDs', () => {
  assert.equal(slugFromId('topic.md'), 'topic');
  assert.equal(slugFromId('legacy/topic.mdx'), 'topic');
});


test('navigation helpers group legacy categories under canonical sections', () => {
  const legacyEntries = [
    {
      id: 'cardinal-numerals.md',
      data: { category: 'numbers', order: 1, title_uk: 'Числівники', description_uk: 'Тестова стаття.' },
    },
    {
      id: 'punctuation.md',
      data: { category: 'punctuation', order: 2, title_uk: 'Пунктуація', description_uk: 'Тестова стаття.' },
    },
  ];
  const categoryList = [
    { key: 'quantification', uk: 'Кількісні конструкції' },
    { key: 'orthography', uk: 'Орфографія' },
  ];
  const sections = sectionsFor(legacyEntries, categoryList);
  assert.deepEqual(sections.map((section) => section.id), ['h-quantification', 'h-orthography']);
  assert.equal(catCountsFor(legacyEntries).quantification, 1);
  assert.equal(catCountsFor(legacyEntries).orthography, 1);
});

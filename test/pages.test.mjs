import test from 'node:test';
import assert from 'node:assert/strict';
import { relatedFor } from '../src/lib/pages.mjs';

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

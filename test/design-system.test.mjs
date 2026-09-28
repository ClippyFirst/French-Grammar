import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync('public/styles/global.css', 'utf8');
const header = readFileSync('src/components/Header.astro', 'utf8');
const base = readFileSync('src/layouts/Base.astro', 'utf8');
const main = readFileSync('public/js/main.js', 'utf8');
const pages = [
  readFileSync('src/pages/index.astro', 'utf8'),
  readFileSync('src/pages/fr/index.astro', 'utf8'),
  readFileSync('src/pages/fr/[category]/index.astro', 'utf8'),
];

test('design system exposes required semantic tokens', () => {
  for (const token of [
    '--bg:',
    '--surface:',
    '--ink:',
    '--ink-soft:',
    '--accent:',
    '--border:',
    '--focus:',
    '--reading-max:',
    '--serif:',
    '--space-5:',
  ]) {
    assert.match(css, new RegExp(token.replace(/[.*+?^{}()|[\]\\]/g, '\\$&')));
  }
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /@media print/);
});

test('global controls have accessible state and names', () => {
  assert.match(header, /aria-label="Відкрити пошук"/);
  assert.match(header, /id="theme-toggle"/);
  assert.match(header, /aria-pressed="false"/);
  assert.match(header, /aria-controls="mobile-navigation"/);
  assert.match(header, /aria-expanded="false"/);
  assert.match(main, /setAttribute\('aria-expanded'/);
  assert.match(main, /event\.key === 'Escape'/);
});

test('theme initialization supports stored and system preferences', () => {
  assert.match(base, /localStorage\.getItem\('theme'\)/);
  assert.match(base, /prefers-color-scheme: dark/);
  assert.match(main, /localStorage\.setItem\('theme', next\)/);
});

test('directory pages contain no ad-hoc inline presentation styles', () => {
  for (const page of pages) assert.doesNotMatch(page, /style="/);
});

test('design system preserves content-independent semantic grammar hooks', () => {
  for (const selector of ['\.formula', '\.example', '\.callout', '\.mistake', '\.related']) {
    assert.match(css, new RegExp(selector));
  }
});

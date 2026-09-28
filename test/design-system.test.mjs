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
    '--bg:', '--surface:', '--ink:', '--ink-soft:', '--accent:',
    '--border:', '--focus:', '--reading-max:', '--serif:', '--space-5:',
  ]) {
    assert.ok(css.includes(token), `missing design token: ${token}`);
  }
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /@media print/);
});

test('global controls have accessible state and names', () => {
  assert.ok(header.includes('aria-label="Відкрити пошук"'));
  assert.ok(header.includes('id="theme-toggle"'));
  assert.ok(header.includes('aria-pressed="false"'));
  assert.ok(header.includes('aria-controls="mobile-navigation"'));
  assert.ok(header.includes('aria-expanded="false"'));
  assert.ok(main.includes("setAttribute('aria-expanded'"));
  assert.ok(main.includes("event.key === 'Escape'"));
});

test('theme initialization supports stored and system preferences', () => {
  assert.ok(base.includes("localStorage.getItem('theme')"));
  assert.ok(base.includes("prefers-color-scheme: dark"));
  assert.ok(main.includes("localStorage.setItem('theme', next)"));
});

test('directory pages contain no ad-hoc inline presentation styles', () => {
  for (const page of pages) assert.doesNotMatch(page, /style="/);
});

test('design system preserves content-independent semantic grammar hooks', () => {
  for (const selector of ['.formula', '.example', '.callout', '.mistake', '.related']) {
    assert.ok(css.includes(selector), `missing grammar hook: ${selector}`);
  }
});

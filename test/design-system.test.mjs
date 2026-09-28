import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const read = (path) => {
  assert.ok(existsSync(path), `missing design source: ${path}`);
  return readFileSync(path, 'utf8');
};

const css = read('src/styles/global.css');
const header = read('src/components/Header.astro');
const base = read('src/layouts/Base.astro');
const main = read('src/scripts/main.js');

test('design system exposes required semantic tokens and media rules', () => {
  for (const token of [
    '--bg:', '--surface:', '--ink:', '--ink-soft:', '--accent:',
    '--border:', '--focus:', '--reading-max:', '--serif:', '--space-5:',
  ]) {
    assert.ok(css.includes(token), `missing design token: ${token}`);
  }
  assert.match(css, /@media \\(prefers-reduced-motion: reduce\\)/);
  assert.match(css, /@media print/);
  for (const selector of ['.formula', '.example', '.callout', '.mistake', '.related']) {
    assert.ok(css.includes(selector), `missing grammar hook: ${selector}`);
  }
});

test('global controls expose accessible names and state hooks', () => {
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

test('directory pages remain free of ad-hoc inline presentation styles', () => {
  for (const path of [
    'src/pages/index.astro',
    'src/pages/fr/index.astro',
    'src/pages/fr/[category]/index.astro',
  ]) {
    assert.doesNotMatch(read(path), /style="/);
  }
});

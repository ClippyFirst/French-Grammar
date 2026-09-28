import test from 'node:test';
import assert from 'node:assert/strict';
import { repairLine, repairSource } from '../scripts/repair-markdown-format.mjs';

test('repairs whitespace inside emphasis delimiters', () => {
  assert.equal(repairLine('Це ** привіт **.'), 'Це **привіт**.');
  assert.equal(repairLine('Це **привіт **.'), 'Це **привіт**.');
  assert.equal(repairLine('Це ** привіт**.'), 'Це **привіт**.');
  assert.equal(repairLine('Це * привіт *.'), 'Це *привіт*.');
});

test('converts Markdown emphasis inside simple HTML blocks', () => {\n  assert.equal(repairLine('  <p class="fr">**Paris**, *France*</p>'), '  <p class="fr"><strong>Paris</strong>, <em>France</em></p>');\n});\n\ntest('does not change inline code', () => {
  assert.equal(repairLine('`** привіт **` і ** привіт **'), '`** привіт **` і **привіт**');
});

test('does not change fenced code', () => {
  const input = ['```md', '** привіт **', '```', '', '** привіт **'].join('\n');
  const expected = ['```md', '** привіт **', '```', '', '**привіт**'].join('\n');
  assert.equal(repairSource(input).source, expected);
});
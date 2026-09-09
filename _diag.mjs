import fs from 'node:fs';
import { compile } from '@astrojs/compiler';
import { transform } from '/f:/GitHub/Grammars/French Grammar/node_modules/vite/node_modules/esbuild/lib/main.js';

const file = 'F:/GitHub/Grammars/French Grammar/src/pages/fr/index.astro';
const src = fs.readFileSync(file, 'utf8');

async function main() {
  console.log('=== Astro compile ===');
  const res = await compile(src, { jsx: 'automatic', filename: file });
  console.log('diagnostics:', JSON.stringify(res.diagnostics || []));
  fs.writeFileSync('F:/GitHub/Grammars/French Grammar/_compiled.js', res.code, 'utf8');
  console.log('compiled ok, code.length=', res.code.length);
  console.log('=== esbuild transform on compiled ===');
  try {
    const out = await transform(res.code, { loader: 'js', target: 'es2020' });
    console.log('esbuild OK, out len=', out.code.length);
  } catch (e) {
    console.log('ESBUILD ERROR:', e.message);
  }
  process.exit(0);
}
main().catch((e) => { console.error('MAINERR', e.message); process.exit(1); });
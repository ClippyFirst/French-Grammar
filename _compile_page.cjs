const fs = require('fs');
const { compile, transform } = require('f:/GitHub/Grammars/French Grammar/node_modules/@astrojs/compiler/dist/node/index.js');
async function main() {
  const f = 'f:/GitHub/Grammars/French Grammar/src/pages/fr/index.astro';
  const src = fs.readFileSyncPath ? null : fs.readFileSync(f, 'utf8');
  const res = await compile(src, { jsx: 'automatic' });
  console.log('=== DIAGNOSTICS ===');
  console.log(JSON.stringify(res.diagnostics, null, 2));
  console.log('=== CODE (first 4000) ===');
  console.log(res.code.slice(0, 4000));
  process.exit(0);
}
main().catch((e) => { console.error('MAINERR', e); process.exit(1); });
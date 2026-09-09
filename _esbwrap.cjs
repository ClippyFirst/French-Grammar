// Reproduce esbuild node-wrapper transform crash
const esbuild = require('f:/GitHub/Grammars/French Grammar/node_modules/vite/node_modules/esbuild/lib/main.js');
const src = `
const categories = [{ key: 'nouns', uk: 'Іменник і визначники' }];
const sections = categories.map((c) => ({ id: 'h-' + c.key, catUk: c.uk }));
const title = 'Всі теми — Французька граматика';
const meta = { description: 'структурований — довідник для україномовних' };
console.log(sections, title, meta);
`;
(async () => {
  try {
    const r = await esbuild.transform(src, { loader: 'js' });
    console.log('OK len=', r.code.length);
  } catch (e) {
    console.log('ERR', e.message);
  } finally {
    process.exit(0);
  }
})();
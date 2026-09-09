const x = { href: '/fr/' + 'a' + '/' };
const y = categories.map((c) => ({ id: 'h-' + c.key, catUk: c.uk }));
const t = '<title>Всі теми — Французька граматика</title>';
const label = { meta: 'структурований — довідник' };
console.log(x, y, t, label);
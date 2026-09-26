import { canonicalCategory } from '../data/categories.mjs';

function slugFromId(id) {
  return id.replace(/\\/g, '/').split('/').pop().replace(/\.(md|mdx)$/, '');
}

export function sectionsFor(all, categories) {
  return categories.map((c) => ({
    id: 'h-' + c.key,
    catUk: c.uk,
    topics: all
      .filter((e) => canonicalCategory(e.data.category) === c.key)
      .sort((a, b) => a.data.order - b.data.order)
      .map((e) => ({ href: '/fr/' + c.key + '/' + slugFromId(e.id) + '/', title: e.data.title_uk, desc: e.data.description_uk })),
  })).filter((s) => s.topics.length > 0);
}

export function catCountsFor(all) {
  const counts = {};
  for (const e of all) {
    const category = canonicalCategory(e.data.category);
    counts[category] = (counts[category] || 0) + 1;
  }
  return counts;
}

export function topicsFor(all, category) {
  const canonical = canonicalCategory(category);
  return all.filter((e) => canonicalCategory(e.data.category) === canonical)
    .sort((a, b) => a.data.order - b.data.order)
    .map((e) => ({ title: e.data.title_uk, desc: e.data.description_uk, href: '/fr/' + canonical + '/' + slugFromId(e.id) + '/' }));
}

export function tocFromHeadings(headings) {
  return headings.filter((h) => h.depth === 2 || h.depth === 3).map((h) => ({ id: h.slug, text: h.text }));
}

export function relatedFor(all, category, refs) {
  const canonical = canonicalCategory(category);
  return refs.map((ref) => {
    const slash = ref.indexOf('/');
    if (slash === -1) {
      const matches = all.filter((e) => slugFromId(e.id) === ref && canonicalCategory(e.data.category) === canonical);
      return matches.length === 1 ? matches[0] : undefined;
    }
    const rcat = canonicalCategory(ref.slice(0, slash));
    const rslug = ref.slice(slash + 1);
    return all.find((e) => slugFromId(e.id) === rslug && canonicalCategory(e.data.category) === rcat);
  }).filter(Boolean).map((e) => ({
    title_uk: e.data.title_uk, title_fr: e.data.title_fr, description_uk: e.data.description_uk,
    href: '/fr/' + canonicalCategory(e.data.category) + '/' + slugFromId(e.id) + '/',
  }));
}

// Helpers to build resolved page data.
// Keeps .astro templates declarative and logic in plain JS modules.

export function sectionsFor(all, categories) {
  return categories
    .map((c) => ({
      id: 'h-' + c.key,
      catUk: c.uk,
      topics: all
        .filter((e) => e.data.category === c.key)
        .map((e) => ({
          href: '/fr/' + e.data.category + '/' + e.id + '/',
          title: e.data.title_uk,
          desc: e.data.description_uk,
        })),
    }))
    .filter((s) => s.topics.length > 0);
}

export function catCountsFor(all) {
  const counts = {};
  for (const e of all) {
    counts[e.data.category] = (counts[e.data.category] || 0) + 1;
  }
  return counts;
}

export function topicsFor(all, category) {
  return all
    .filter((e) => e.data.category === category)
    .sort((a, b) => a.data.order - b.data.order)
    .map((e) => ({
      title: e.data.title_uk,
      desc: e.data.description_uk,
      href: '/fr/' + category + '/' + e.id + '/',
    }));
}

export function tocFromHeadings(headings) {
  return headings
    .filter((h) => h.depth === 2 || h.depth === 3)
    .map((h) => ({ id: h.slug, text: h.text }));
}

export function relatedFor(all, category, refs) {
  return refs
    .map((ref) => {
      const slash = ref.indexOf('/');
      const rcat = ref.slice(0, slash);
      const rslug = ref.slice(slash + 1);
      return all.find((e) => e.id === rslug && e.data.category === rcat);
    })
    .filter(Boolean)
    .map((e) => ({
      title_uk: e.data.title_uk,
      title_fr: e.data.title_fr,
      description_uk: e.data.description_uk,
      href: '/fr/' + e.data.category + '/' + e.id + '/',
    }));
}
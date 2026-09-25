// Helpers to build resolved page data.
// Keeps .astro templates declarative and logic in plain JS modules.

/**
 * Strip file extension from a content collection entry id.
 * In Astro 5, entry IDs may include the .md extension; we normalize to slug.
 */
function slugFromId(id) {
  return id.replace(/\.(md|mdx)$/, '');
}

export function sectionsFor(all, categories) {
  return categories
    .map((c) => ({
      id: 'h-' + c.key,
      catUk: c.uk,
      topics: all
        .filter((e) => e.data.category === c.key)
        .map((e) => ({
          href: '/fr/' + e.data.category + '/' + slugFromId(e.id) + '/',
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
      href: '/fr/' + category + '/' + slugFromId(e.id) + '/',
    }));
}

export function tocFromHeadings(headings) {
  return headings
    .filter((h) => h.depth === 2 || h.depth === 3)
    .map((h) => ({ id: h.slug, text: h.text }));
}

/**
 * Resolve both current canonical slug references and legacy category/slug references.
 * Plain slugs are matched uniquely by entry id; namespaced refs retain their
 * explicit category constraint for backward compatibility.
 */
export function relatedFor(all, category, refs) {
  return refs
    .map((ref) => {
      const slash = ref.indexOf('/');
      if (slash === -1) {
        const matches = all.filter((e) => slugFromId(e.id) === ref);
        return matches.length === 1 ? matches[0] : undefined;
      }

      const rcat = ref.slice(0, slash);
      const rslug = ref.slice(slash + 1);
      return all.find((e) => slugFromId(e.id) === rslug && e.data.category === rcat);
    })
    .filter(Boolean)
    .map((e) => ({
      title_uk: e.data.title_uk,
      title_fr: e.data.title_fr,
      description_uk: e.data.description_uk,
      href: '/fr/' + e.data.category + '/' + slugFromId(e.id) + '/',
    }));
}

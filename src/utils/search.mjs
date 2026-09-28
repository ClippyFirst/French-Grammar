export function fold(value) {
  return String(value)
    .toLocaleLowerCase('uk')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[-’'`]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function tokens(value) {
  return fold(value).split(' ').filter((token) => token.length > 0);
}

export function searchTopics(query, catalog, limit = 30) {
  const q = fold(query);
  if (!q) return [];
  const qTokens = tokens(query);
  const hits = [];

  for (const topic of catalog) {
    const titleUk = fold(topic.titleUk);
    const titleFr = fold(topic.titleFr);
    const id = fold(topic.id);
    const slug = fold(topic.slug);
    const summary = fold(topic.summary);
    const aliases = topic.aliases.map(fold);
    const tags = topic.tags.map(fold);
    let score = 0;
    let reason = topic.summary;

    if (titleUk === q || titleFr === q || id === q) {
      score = 100; reason = 'Точна назва';
    } else if (titleUk.startsWith(q) || titleFr.startsWith(q)) {
      score = 88; reason = topic.titleFr;
    } else if (aliases.some((alias) => alias === q || alias.startsWith(q))) {
      score = 84; reason = 'Ключове слово';
    } else if (titleUk.includes(q) || titleFr.includes(q)) {
      score = 76; reason = topic.titleFr;
    } else if (aliases.some((alias) => alias.includes(q))) {
      score = 68; reason = 'Ключове слово';
    } else if (tags.some((tag) => tag === q || tag.includes(q))) {
      score = 62; reason = 'Тег';
    } else if (id.includes(q) || slug.includes(q)) {
      score = 60; reason = topic.titleFr;
    } else if (summary.includes(q)) {
      score = 48; reason = topic.summary;
    } else {
      const blob = [titleUk, titleFr, id, slug, summary, ...aliases, ...tags].join(' ');
      const matched = qTokens.filter((token) => token.length > 1 && blob.includes(token)).length;
      if (matched === 0) continue;
      score = 30 + matched * 8;
    }

    if (topic.featured) score += 2;
    hits.push({ topic, score, reason });
  }

  hits.sort((a, b) => b.score - a.score || a.topic.titleUk.localeCompare(b.topic.titleUk, 'uk'));
  return hits.slice(0, limit);
}

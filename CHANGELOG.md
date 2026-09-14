# CHANGELOG — French Grammar Reference

## Stage 1 — BATCH 01: Fundamentals (2026-09-14)

### Infrastructure (new files)

1. **`src/content.config.ts`** — Astro 5 content collection config for the "fr" collection.
   - Zod schema matching `.astro/collections/fr.schema.json` (title_uk, title_fr, description_uk,
     category, order, related, tags, formula, toc, featured).
   - This was the **critical missing piece**: `getCollection('fr')` was called in `fr/index.astro`
     but no content config existed, so the build would fail without it.

2. **`src/pages/fr/[category]/index.astro`** — Dynamic category listing page.
   - Uses `getStaticPaths` to generate one page per used category.
   - Uses `sectionsFor()` helper to group topics by category.
   - Breadcrumbs + category header + topic list.

3. **`src/pages/fr/[category]/[topic].astro`** — Dynamic topic rendering page.
   - Uses `getStaticPaths` to generate a page for each content collection entry.
   - Uses `render()` from `astro:content` to render markdown to HTML.
   - Passes `entry`, `headings`, and `relatedEntries` to `MarkdownPage` layout.
   - Strips `.md` extension from entry ID to produce clean URLs (e.g., `/fr/fundamentals/alphabet/`).

### Infrastructure (rewrites)

4. **`src/layouts/MarkdownPage.astro`** — Complete rewrite.
   - Changed from old Astro frontmatter-based props to content-collection-based
     (`entry`, `headings`, `relatedEntries`).
   - Added TOC sidebar (desktop) using `TOC.astro` component.
   - Added `RelatedTopics.astro` component for automatically resolved related links.
   - Added content-grid layout (`.content-grid`) with responsive behavior.
   - Added article header with Ukrainian title, French title, and description.
   - Fixed `og:title` meta tag: `content="{data.title_uk}"` was a literal string;
     changed to `content={`${data.title_uk} — Французька граматика`}` (template literal).

5. **`src/pages/index.astro`** — Complete rewrite (was a stub).
  - Hero section with "Французька граматика" heading.
  - Search trigger button (data-search-input → triggers Pagefind modal).
  - Category cards grid (20 categories from `categories.mjs`).
  - Each card shows Ukrainian name, description, and topic count.

6. **`src/pages/fr/index.astro`** — Complete rewrite (was a stub).
   - Category overview page: lists all categories that have content.
   - Uses `sectionsFor()` helper to group topics by category.
   - Breadcrumbs + per-category topic lists.

### Infrastructure (bug fixes)

7. **`src/components/Breadcrumbs.astro`** — Added `const { crumbs } = Astro.props;`.
   - The component referenced `crumbs` as a bare variable but never destructured it
     from `Astro.props`, causing a runtime error "crumbs is not defined" when rendered.

8. **`src/components/TOC.astro`** — Added `const { items } = Astro.props;`.
   - Same bug as Breadcrumbs — `items` was never destructured from props.

9. **`src/components/RelatedTopics.astro`** — Added `const { entries } = Astro.props;`.
   - Same bug as Breadcrumbs — `entries` was never destructured from props.

10. **`src/components/Header.astro`** — Fixed "Поиск" → "Пошук" (Russian → Ukrainian).
11. **`src/components/Footer.astro`** — Fixed "україномовный" → "україномовні" (typo).
12. **`src/lib/pages.mjs`** — Added `slugFromId()` helper to strip `.md`/`.mdx`
    extensions from content collection entry IDs. Updated `sectionsFor()`,
    `topicsFor()`, and `relatedFor()` to use it. This resolves URLs like
    `/fr/fundamentals/accents.md/` → `/fr/fundamentals/accents/`.
13. **`src/components/TOC.astro`** — Fixed "На этой сторінкі" (Russian) →
    "На цій сторінкі" (Ukrainian).

### Content (BATCH 01: Fundamentals — 9 pages)

14. alphabet.md — Алфавіт (26 літер)
15. reading-rules.md — Правила читання (мовчазні літери)
16. accents.md — Акценти (é, è, à, ù, ê, â, î, ô, û, ë, ï, ü, ÿ)
17. liaison.md — Ліаціон (обов'язкова/необов'язкова/заборонена)
18. elision.md — Елізіон (апостроф перед голосними)
19. enchainement.md — Енхейнем (зв'язка звуків між словами)
20. h-muet-aspire.md — H м'яке vs H запальне
21. punctuation.md — Пунктуація (.,!? :; « » з пробілами)
22. capitalization.md — Капіталізація (імена, дні, мови, ролі)

### Build verification
- `npx astro build` — SUCCESS (13 pages built)
- URLs clean (no `.md` in paths)
- RelatedTopics, TOC, Breadcrumbs all render correctly
- SEO meta tags correct (title, description, canonical, og:title, keywords)

---

## Next Stage — BATCH 02: Nouns + Articles

### What needs to be done

1. Create 14 content pages for "Іменник і визначники" category:
   Topics 10-23 (gender, articles, quantifiers, etc.)
2. Category page `/fr/nouns/` auto-generates from existing infrastructure.
3. Update related links in Fundamentals pages to point to noun/article topics.
4. Verify with `npx astro build`.

### Deferred / Known Issues
- Duplicate ID warnings during build (harmless cache issue).
- Pagefind search indexing not yet tested (run `npm run build`).
- No comparison pages (BATCH 23).
- Empty category pages 404 (add fallback later).
   - Hero section with "Французька граматика" heading.
   - Search trigger button (data-search-input → triggers Pagefind modal).
   - Category cards grid (20 categories from `categories.mjs`).
   - Each card shows Ukrainian name, description, and topic count.

6. **`src/pages/fr/index.astro`** — Complete rewrite (was a stub).
   - Category overview page: lists all categories that have content.
   - Uses `sectionsFor()` helper to group topics by category.
   - Breadcrumbs + per-category topic lists.
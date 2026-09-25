# Harmonization matrix — French-Grammar

Branch: `harmonize/reference-standard-2026`

## Зберегти як основу

- сильну L1-методологію для україномовного студента;
- lookup / learning / navigation distinction;
- окремі prerequisites / related / contrast / next;
- просту статичну Astro-архітектуру;
- editorial/content-first design.

## Підтягнути з Portuguese-Grammar

- machine-readable canonical topic catalog;
- explicit content status;
- explicit variety/register metadata;
- typed relation model;
- source/review metadata;
- richer search aliases;
- structural content QA;
- distinction between catalog coverage and verified content.

## Перебудувати

- `categories.mjs` → canonical category definitions, без змішування taxonomy та metadata;
- topic metadata → explicit graph relations;
- article status → controlled enum;
- Ukrainian contrast → first-class metadata;
- search → title + aliases + terminology + body;
- release gate → explicit.

## Не переносити

- React/TanStack/database/auth complexity;
- Portuguese-specific variety enum;
- generic generated-page strategy as authoritative content.

## Content priority

1. виправити мовні помилки у вже написаних статтях;
2. позначити status кожної статті;
3. нормалізувати graph;
4. розширити catalog;
5. лише після цього масштабувати coverage.

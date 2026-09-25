# French-Grammar — аудит архітектури

Дата: 2026-09-25

## 1. Поточний стан

Репозиторій є статичним довідником на Astro з Markdown-контентом і Pagefind. Поточна гілка за замовчуванням — `master`. У `src/content/fr/` фактично є **54 Markdown-теми**.

README та старі audit-документи розходяться з фактичним станом: вони досі говорять про 23 теми / початкову стадію, хоча репозиторій уже має 54 теми та охоплює артиклі, займенники, часи, заперечення, питання, subjonctif, conditionnel, дієслова й прийменники.

## 2. Архітектурна схема

```
Markdown topics
    ↓
src/content.config.ts
    ↓
Astro content collection: fr
    ↓
src/pages/fr/[category]/[topic].astro
    ↓
MarkdownPage.astro
    ├── Header
    ├── Breadcrumbs
    ├── TOC
    ├── content
    └── RelatedTopics
    ↓
Astro static build
    ↓
dist/
    ↓
Pagefind full-text index
```

## 3. Сильні сторони

- Контент відокремлений від presentation layer.
- Astro content collection задає schema.
- URL побудовані семантично через category/topic.
- Є централізований каталог категорій.
- Є related topics.
- Є TOC і breadcrumbs.
- Pagefind дає локальний повнотекстовий пошук без серверної БД.
- Markdown зручний для ревізії та AI-assisted content workflow.
- Поточний стек достатньо легкий для статичного хостингу.

## 4. Ключові архітектурні проблеми

### 4.1. Розрив між taxonomy та content

`categories.mjs` містить 20 категорій, серед них `conjunctions`, `spoken`, `regional`, `passive`, `indirect`, `complex`, `sentences`, але стара матриця має 22 категорії й окремо виділяє conditional, subjunctive, imperative.

Потрібно мати **одну канонічну taxonomy**, а не паралельні класифікації.

### 4.2. Дублікати тем

У контенті одночасно присутні:
- `definite-articles.md` і `articles-definite.md`;
- `indefinite-articles.md` і `articles-indefinite.md`;
- `partitive-articles.md` і `articles-partitive.md`;
- `present.md` і `present-tense.md`.

Це явний кандидат на merge/redirect/canonicalization. Не можна залишати дві незалежні сторінки для одного поняття без чіткої різниці.

### 4.3. Content schema занадто слабка для педагогічного графа

Поточна schema має:
`title_uk, title_fr, description_uk, category, order, related, tags, formula, toc, featured`.

Для системного довідника варто додати:
- `status`;
- `difficulty` або краще `scope` (core / advanced / reference);
- `prerequisites`;
- `contrasts`;
- `ukrainianNotes`;
- `register`;
- `variant`;
- `sourceRefs`;
- `lastReviewed`.

Не все мусить бути frontmatter: джерела та QA можна зберігати в окремій machine-readable матриці.

### 4.4. Related ≠ prerequisite

`related` не дає навчальної послідовності. Для складних тем потрібні directed prerequisites:
`articles → object pronouns → pronoun order → y/en`,
`present → passé composé/imparfait → plus-que-parfait`,
`indicative → subjonctif`,
`COD/COI → past participle agreement`.

### 4.5. Немає канонічного coverage manifest

Потрібен один machine-readable manifest, наприклад `src/data/grammar-manifest.mjs`, де кожна тема має стабільний ID, category, status, prerequisite IDs і canonical slug.

Тоді можна автоматично перевіряти:
- orphan topics;
- duplicate topics;
- missing planned topics;
- broken related links;
- circular prerequisites;
- category drift.

### 4.6. Технічна документація застаріла

`docs/audit_results.md` та `docs/french_grammar_topics_uk.md` датовані 2025-09-17 і описують стан, який уже не відповідає репозиторію. Це створює хибне джерело істини.

## 5. Рекомендована цільова архітектура

```
src/
├── content/
│   └── fr/
│       ├── fundamentals/
│       ├── nouns/
│       ├── determiners/
│       ├── pronouns/
│       ├── adjectives/
│       ├── adverbs/
│       ├── prepositions/
│       ├── conjunctions/
│       ├── verbs/
│       ├── tenses/
│       ├── moods/
│       ├── negation/
│       ├── questions/
│       ├── syntax/
│       ├── complex-sentences/
│       ├── agreement/
│       ├── reported-speech/
│       ├── passive/
│       ├── spoken/
│       └── regional/
├── data/
│   ├── categories.mjs
│   └── grammar-manifest.mjs
├── lib/
│   ├── pages.mjs
│   ├── graph.mjs
│   └── validation.mjs
├── components/
└── pages/
```

Фізичну структуру можна не перебудовувати негайно. Спочатку треба стабілізувати canonical IDs/slugs і лише потім мігрувати директорії.

## 6. Якість контенту як частина архітектури

Для довідника такого типу QA має бути багаторівневим:

1. **Schema QA** — frontmatter.
2. **Build QA** — Astro build.
3. **Link QA** — related/prerequisites.
4. **Coverage QA** — manifest проти реального content tree.
5. **Language QA** — українська термінологія.
6. **French QA** — граматична правильність прикладів.
7. **Pedagogical QA** — чи пояснення реально адресує носія української.
8. **Source QA** — складні/спірні правила мають перевірене джерело.
9. **Accessibility QA** — таблиці, headings, keyboard, contrast.
10. **Search QA** — Pagefind знаходить французький та український термін.

## 7. Архітектурний висновок

Технічний фундамент добрий і достатньо простий для довгострокової підтримки. Основний ризик зараз не в Astro, а в **content architecture**: відсутність одного канонічного coverage manifest, дублікати slug/topic, розходження taxonomy та застаріла документація.

Правильна стратегія: **не переписувати сайт з нуля**, а спершу зафіксувати canonical information architecture, потім очистити дублікати, після цього нарощувати контент за coverage matrix.

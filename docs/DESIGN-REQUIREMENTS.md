# Design Requirements — French Grammar Reference

> Статус: canonical design specification
> Продукт: French Grammar — довідник французької граматики для україномовних
> Принцип: еволюційне покращення наявного сайту без руйнування робочої архітектури

Цей документ визначає візуальні та UX-вимоги до сайту. Він доповнює docs/GRAMMAR-REFERENCE-STANDARD.md і не змінює контентну модель, canonical taxonomy чи стабільні URL.

## 1. Мета

French Grammar — цифровий граматичний довідник, а не курс, блог, LMS чи гра. Користувач приходить із конкретним питанням: як утворюється форма, коли її вживати, чим дві форми відрізняються, чи є форма стандартною, розмовною або регіональною, і чому вона може бути складною для україномовного учня.

Основний сценарій: знайти → зорієнтуватися → прочитати → порівняти → перейти далі.

Краса має працювати на читання та орієнтацію, а не конкурувати з граматикою.

## 2. Візуальний характер

Сайт має відчуватися як сучасна, дуже добре зверстана граматична книжка, перенесена в цифрове середовище.

Ключові якості: editorial, typographic, calm, modern, precise, книжковий, функціональний, з великою кількістю повітря.

Формула стилю: Ukrainian clarity + French editorial elegance + modern web typography.

Французький характер передається культурою верстки — типографікою, пропорціями, тонкими правилами, стриманим синім, книжковою ієрархією — а не туристичними кліше.

Не використовувати Eiffel Tower, baguette, beret, fleur-de-lis, постійний французький прапор, ornamental/script fonts, псевдовінтаж або pseudo-luxury styling.

## 3. Архітектура, яку потрібно зберегти

Поточна Astro/Markdown/Pagefind архітектура є робочою. Зберегти Astro static generation, Markdown/MDX content collection, src/content/fr, canonical taxonomy, стабільні category/topic URLs, Base.astro, MarkdownPage.astro, Header.astro, Footer.astro, Breadcrumbs.astro, TOC.astro, RelatedTopics.astro, Pagefind, мінімальний main.js, global CSS, light/dark theme та print CSS.

Нові компоненти повинні доповнювати наявні primitives, а не дублювати їх.

Не переносити сайт на React/Vue/Svelte, не додавати backend, не робити client-side application shell, не змінювати canonical IDs або taxonomy через дизайн, не ламати URL і не вводити frontend complexity заради моди.

## 4. Принципи дизайну

1. Content first.
2. Typography before decoration.
3. Hierarchy before cards.
4. Whitespace is structure.
5. Progressive disclosure.
6. Predictable navigation.
7. Accessibility by default.
8. Static by default.
9. French accent is restrained editorial character.

## 5. Layout

Desktop: Header → Breadcrumbs → article header → optional TOC + reading column → related topics → Footer.

Основна reading column має бути приблизно 65–78ch. Ширші області дозволені для великих таблиць, парадигм і порівняльних схем. Не повертати важку постійну sidebar-навігацію.

Mobile: Header → Breadcrumbs → title → compact navigation/TOC за потреби → content → related topics → Footer.

Нічого важливого не повинно залежати від hover, fixed sidebar або непридатного горизонтального scroll.

## 6. Типографіка

Типографіка — центральний елемент дизайну.

Орієнтири: body приблизно 1rem–1.1rem; line-height приблизно 1.65–1.8; reading measure приблизно 65–78ch.

Заголовки повинні мати виразну ієрархію, але не бути гігантськими. Уникати десятків розмірів, надмірної жирності та landing-page typography.

Serif можна використовувати вибірково для editorial/display treatment, але основний український текст має залишатися максимально читабельним.

Не додавати remote fonts лише заради зовнішнього вигляду. Пріоритет: Unicode coverage, читабельність української, performance, потім декоративна відмінність.

## 7. Українська та французька

Українська — мова пояснення. Французька — мова об'єкта дослідження.

Французькі приклади повинні мати стабільну типографічну відмінність: вага, окремий example block або інша ненав'язлива treatment. Український переклад має залишатися легким для швидкого зіставлення.

Підсвічувати лише граматичний елемент, який пояснюється, а не кожне слово.

Для французького тексту зберігати accents, apostrophes, hyphens та доречні французькі типографічні conventions. Українська типографіка не повинна автоматично копіювати французьку.

## 8. Колір

Поточні CSS variables є правильною основою. Зберегти нейтральний фон, темний text, restrained accent і окремі semantic colours.

Глибокий синій може бути основним французьким accent, але не потрібно відтворювати французький прапор у всьому інтерфейсі.

Success/error/warning/information повинні мати не лише колір, а й текстовий або структурний маркер. Колір не може бути єдиним носієм значення.

Ціль — WCAG 2.2 AA.

## 9. Header

Наявний Header.astro залишається основою. Зберігаються бренд, Головна, Всі теми, Пошук, theme toggle та mobile navigation.

Header має бути легким і компактним. Логотип — типографічний або дуже простий SVG/mark; складна ілюстрація не потрібна.

## 10. Homepage

Homepage залишається directory, а не marketing landing page.

Поточна структура hero + short description + search + category grid зберігається. Покращується hierarchy: назва → коротка proposition → prominent search → категорії.

Category card є navigation object і містить назву, короткий опис та за потреби кількість тем. Не перетворювати homepage на стіну однакових декоративних cards.

## 11. Category pages

Category page: breadcrumbs → H1 → description → scannable topic list.

Topic list важливіший за decorative cards. Кожен entry має чітку clickable area, українську назву і короткий опис; французький термін може додаватися, коли він покращує recognition.

## 12. Article pages

Наявний MarkdownPage.astro залишається основою.

Рекомендований flow: breadcrumbs → H1 → French title/term → description → quick answer → formula/form → formation → usage → examples → distinctions → exceptions/notes → contrastive/register/regional information за потреби → related topics.

Не створювати порожні секції. Довгі статті повинні мати чіткі landmarks.

## 13. Quick Answer

Початок статті має дозволяти зрозуміти суть приблизно за 30–60 секунд.

Це може бути короткий paragraph, summary, formula або minimal pair. Quick Answer не повинен ставати decorative hero card.

## 14. Grammar Formula

Formula — один із головних спеціалізованих UI patterns.

Приклад: Affirmative | Negative | Question.

Formula має використовувати semantic HTML, працювати без JavaScript, мати достатній contrast і не залежати від кольору. На вузьких екранах колонки повинні stack, якщо це зберігає семантику; horizontal scroll дозволяється лише коли він справді необхідний.

## 15. Examples

Основна модель: French sentence → Ukrainian translation. За потреби додається grammatical annotation.

Французька форма має бути помітною, але не декоративною. Не підсвічувати весь sentence, якщо пояснюється лише одна форма.

## 16. Tables

Tables використовуються для paradigms, endings, pronouns, tenses, minimal pairs та contrasts.

Обов'язково semantic table, th для headers, caption за потреби, достатній spacing і mobile behavior. Не використовувати table для page layout.

На mobile спочатку адаптувати структуру; якщо таблиця принципово таблична — дозволити горизонтальний scroll із збереженням headers.

## 17. Callouts

Callout — функціональний компонент. Семантичні типи: Виняток, Зверніть увагу, У живій французькій, У письмовій мові, Регіональний варіант, Для україномовного учня.

Не використовувати callout для звичайного paragraph і не створювати десятки кольорових box variants.

## 18. Common mistakes

Помилка повинна бути реальною та релевантною.

Модель: ❌ incorrect → ✅ correct → Why.

Не генерувати штучні mistakes тільки для заповнення шаблону.

## 19. Spoken, written, regional

Коли релевантно, чітко розрізняти standard written, neutral spoken, informal spoken та regional.

Наприклад: Standard — Je ne sais pas. Spoken — Je sais pas. Візуальний treatment має допомагати відразу побачити статус форми, не створюючи відчуття, що всі форми рівнозначні.

## 20. TOC

Наявний TOC.astro зберігається. TOC потрібен насамперед для довгих статей, показує реальні headings і працює без JavaScript.

На коротких статтях TOC може бути відсутнім. На mobile допускається compact navigation, але не складний interactive widget без потреби.

## 21. Related Topics

Наявний RelatedTopics.astro зберігається. Related topics повинні походити з semantic graph: related, contrast, next, prerequisites, variant.

Не створювати випадкові рекомендації. Картка повинна відповідати на питання: що читати далі?

## 22. Cards, borders, shadows

Cards потрібні для category navigation, related topics та окремих structured blocks. Не робити card із кожного paragraph, example чи definition.

Ієрархію визначають typography, whitespace і тонкі borders. Shadows мають бути рідкісними або відсутніми. Radius — невеликий і послідовний.

Не використовувати glassmorphism, floating cards everywhere, huge soft shadows або excessive pills.

## 23. Motion

Animation — progressive enhancement. Допустимі короткі menu/focus/hover transitions.

Не використовувати parallax, scroll-jacking, animated backgrounds або content, доступний лише після animation.

Для prefers-reduced-motion: reduce motion має бути мінімізовано або вимкнено.

## 24. Dark mode

Поточний dark mode зберігається. Окремо перевірити body text, links, headings, tables, formulas, examples, callouts, borders, focus states і Pagefind UI.

Dark theme не повинна бути просто механічною інверсією кольорів.

## 25. Accessibility

Ціль: WCAG 2.2 AA.

Обов'язкові semantic HTML, логічна heading hierarchy, landmarks, keyboard navigation, visible focus, skip link, accessible controls, accessible tables, descriptive links, достатній contrast, reduced motion, нормальні touch targets та відсутність colour-only semantics.

Особливо перевіряти search, theme toggle, mobile navigation, TOC, tables, formula blocks і wrong/right examples.

## 26. Responsive design

Mobile-first означає перебудову layout, а не просте зменшення desktop.

Desktop може використовувати TOC, ширші tables та multi-column formula blocks. Mobile має один reading column, compact header, stacked formulas і зручний vertical related-topic flow.

Breakpoints визначаються контентом, а не конкретними моделями пристроїв.

## 27. Search

Pagefind залишається search engine. Search має бути доступним з homepage і header, включно з mobile.

Пошук повинен підтримувати українські назви, французькі terms, aliases і корисну English terminology, якщо вона індексується.

Search result: title + category + short description. Не створювати окремий application shell.

## 28. SEO

Зберегти semantic title, description, canonical, robots, sitemap, Open Graph та clean URLs.

Design changes не є причиною для зміни stable semantic URLs.

## 29. Performance і static integrity

Принцип: Static HTML first.

Пріоритет: generated HTML → CSS → minimal JS → Pagefind → optional progressive enhancement.

Уникати великих image assets, third-party scripts, unnecessary remote fonts, JS UI libraries, client-side rendering та hydration заради decoration.

Grammar page має залишатися змістовно корисною, навіть якщо JavaScript не виконується.

## 30. Print

Print stylesheet зберігається і вдосконалюється за потреби. Navigation/search controls приховуються, content і tables зберігаються, formula/callout за можливості не розриваються між сторінками.

Друк — корисний режим тієї самої reference page.

## 31. Content/design separation

Контент залишається у Markdown/MDX. Components відповідають за presentation. Не hard-code grammar content у Astro components.

Metadata frontmatter продовжує керувати title, category, description, related, variety, register, status та discovery.

Не створювати паралельну metadata system заради дизайну.

## 32. Design tokens

CSS має поступово перейти до невеликої token system.

Групи: colour roles, typography scale, reading/global/wide widths, spacing scale, radii та focus ring.

Не створювати десятки arbitrary values і не будувати token system заради самої системи.

## 33. Iconography та images

Icons мають бути мінімальними, consistent та accessible. Не додавати icon library заради кількох піктограм, якщо достатньо CSS/SVG.

Images не є необхідними для grammar experience. Якщо з'являються, вони повинні мати information/editorial purpose, alt text та оптимізований weight.

Не додавати stock photos Парижа або людей лише для decoration.

## 34. Заборонений visual language

Не використовувати як основний стиль generic SaaS dashboard, AI-chat aesthetic, gradient-heavy landing page, glassmorphism, neon accents, excessive shadows, oversized rounded cards, gamification, progress bars, badges everywhere, confetti, decorative 3D, giant hero illustrations або Duolingo-like UI.

## 35. Implementation rules

Перед UI-змінами перевірити поточні компоненти й layout usage. Reuse existing primitives. Спочатку вирішувати проблему CSS/layout, а не новою dependency.

Не змінювати content schema або taxonomy для purely visual reason.

Реалізація повинна бути incremental: foundation → global chrome → reference surfaces → grammar components → search/polish → verification.

## 36. QA

Після UI-змін перевірити homepage desktop/mobile, category page, short article, long article, article with TOC, formula-heavy article, table-heavy article, callouts, common mistakes, related topics, dark mode, keyboard navigation, reduced motion, print preview та Pagefind.

Technical gate:

    npm run test
    npm run audit:canonical
    npm run audit:site-categories
    npm run audit:content-schema
    npm run build

Design QA не може бути причиною послаблення content QA.

## 37. Definition of Done

UI готовий, коли сайт усе ще очевидно є тим самим grammar reference, але став coherent, modern та editorial; grammar content легше сканувати й читати; French examples чітко відрізняються від Ukrainian explanation; search і navigation залишаються швидкими; mobile, accessibility, dark mode і print працюють; static build залишається clean; stable URLs і content architecture не порушені.

Головне правило:

> Не прикрашати граматику. Зробити саму структуру граматики красивою.
## Search implementation standard

The primary site search uses the same static, metadata-driven architecture established in the Spanish and Portuguese grammar references:

- build a searchable catalog from the Astro content collection at build time;
- search locally in the browser without a backend or third-party search service;
- normalize case and diacritics so French queries remain forgiving;
- search Ukrainian titles, French titles, aliases and tags;
- rank exact title matches above prefix matches, aliases, title substrings, tags, identifiers and description/token matches;
- support the `/` keyboard shortcut when focus is not already inside a form control;
- keep the query in the URL as `?q=` so results are linkable and reloadable;
- render useful empty, result and no-result states with semantic live status;
- keep the search catalog content-derived so taxonomy/content changes automatically propagate to search;
- do not introduce a server, database, external search API or client framework merely for search;

The search is a reference-navigation tool, not a full-text document index. If full article-body search is introduced later, it must preserve this metadata search as the fast primary path and be justified by measured user need.

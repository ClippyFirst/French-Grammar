# French-Grammar — генеральний аудит

Дата: 2026-09-25  
Репозиторій: `ClippyFirst/French-Grammar`  
Default branch: `master`

## Генеральний статус одним словом

# НЕЗАВЕРШЕНО

Це не означає, що зроблена робота слабка. Навпаки: фундамент уже суттєво просунувся. «НЕЗАВЕРШЕНО» означає, що репозиторій ще не може вважатися повним довідником французької граматики для носіїв української мови.

## 1. Що реально зроблено

У поточному дереві є **54 Markdown-сторінки** в `src/content/fr/`.

Остання серія комітів показує системне розширення проєкту:
- Stage 8 — прийменники;
- Stage 7 — часи;
- présent;
- займенники;
- артиклі;
- être / avoir / aller / faire;
- узгодження;
- питання;
- subjonctif.

Отже, старий документ із твердженням «23 з 204» більше не описує поточний стан.

## 2. Покриття

Фактично добре представлені:
- базові фонетико-орфографічні теми;
- іменники та артиклі;
- базові кількісні конструкції;
- частина особових/об'єктних/присвійних займенників;
- y/en;
- présent;
- passé composé;
- imparfait;
- futur simple;
- conditionnel présent;
- subjonctif;
- negation;
- questions;
- базові прийменники;
- être/avoir/aller/faire;
- узгодження.

Водночас відсутні або неповні великі системи:
- прикметники;
- прислівники;
- повна система займенників;
- повна система прийменників;
- більшість дієслівної морфології;
- plus-que-parfait / futur antérieur / passé simple / passé antérieur;
- conditionnel passé;
- impératif;
- subjonctif passé та просунуте вживання;
- модальні дієслова;
- повна система складних речень;
- relative clauses;
- indirect speech;
- passive;
- impersonal constructions;
- системна agreement matrix;
- spoken French;
- regional French;
- числівники/дата/час як окрема система.

## 3. Найважливіша проблема змісту

Поточний repository уже не можна оцінювати лише за кількістю файлів.

54 файли ≠ 54 незалежні граматичні одиниці, тому що є дублікати:
- `definite-articles.md` / `articles-definite.md`;
- `indefinite-articles.md` / `articles-indefinite.md`;
- `partitive-articles.md` / `articles-partitive.md`;
- `present.md` / `present-tense.md`.

Потрібно встановити canonical topic IDs і лише після цього рахувати coverage.

## 4. Проблема старої матриці 204 тем

Стара матриця була корисним backlog, але не є достатнім стандартом.

Основні проблеми:
1. taxonomy розходиться з `categories.mjs`;
2. conditional/subjunctive/imperative в різних місцях трактуються то як категорії, то як теми;
3. conjunctions є в коді, але відсутні в старій матриці як окрема повноцінна категорія;
4. grammar, orthography, pronunciation та regional variation змішані;
5. частина тем дублюється;
6. бракує кількох важливих конструкцій сучасної французької;
7. формулювання «спільний рід» для французької некоректне як базова категорія;
8. «наголоси» краще називати **діакритичними знаками**, бо французькі accents не виконують функцію словесного наголосу так, як український наголос;
9. статуси у старій матриці не оновлюються автоматично.

## 5. Педагогічний аудит для носіїв української

Ціль потрібно формулювати саме як:

> **Довідник французької граматики для носіїв української мови.**

Не «для україномовних» у сенсі просто мови інтерфейсу.

Це принципова різниця. Користувачеві потрібен не український переклад французького правила, а **пояснення французької системи через точки контрасту з українською**, де це допомагає.

Особливо важливі:
- артиклі;
- граматичний рід;
- порядок слів;
- виражений підмет;
- COD/COI;
- clitic pronouns;
- y/en;
- прийменники;
- passé composé vs imparfait;
- subjonctif;
- conditionnel;
- negation;
- questions;
- agreement;
- relative clauses.

Наукові дослідження L2 acquisition показують, що морфологічні та функціональні відмінності між L1 і L2 можуть бути окремим джерелом труднощів; для французької, зокрема, описано проблеми з інфлексією та засвоєнням складних структур. Це підтримує рішення робити L1-specific notes, але не виправдовує категоричних тверджень про «типові помилки всіх українців».

## 6. Джерельна політика

Для нормативних і спірних питань варто спиратися на:
- сучасні академічні граматики;
- Grevisse / Le Bon Usage;
- Grammaire méthodique du français;
- Académie française для нормативних/ужиткових питань;
- CEFR / language-specific reference descriptions для освітньої повноти;
- академічні праці з L2 acquisition для пояснення труднощів навчання.

CEFR прямо описує language reference descriptions як структуровані інвентарі форм, граматики, морфології, синтаксису, графіки та вимови, а не як простий список правил. Це відповідає необхідності мати coverage matrix, а не лише список статей. citeturn0search0turn0search13

Сучасний Grevisse de l’enseignant також прямо позиціонує повну граматику як систему «від звуку до тексту» та поєднує сучасну лінгвістику, традиційну граматику й увагу до usage. citeturn2view0

Académie française окремо документує складні питання відносних займенників, порядку clitics, узгодження та варіантності; це показує, що такі теми не варто зводити до однієї короткої сторінки. citeturn0search2turn0search5

## 7. Що робити далі

### Фаза 1 — стабілізація
- прийняти `docs/grammar_coverage_master.md` як benchmark;
- визначити canonical topic IDs;
- об'єднати дублікати;
- синхронізувати `categories.mjs`, документацію та URL;
- замінити старі 2025-09-17 документи або позначити їх deprecated.

### Фаза 2 — content graph
- додати `prerequisites`;
- створити coverage manifest;
- автоматично перевіряти orphan/missing/duplicate topics;
- створити dependency graph.

### Фаза 3 — системне наповнення
Пріоритет:
1. займенники + порядок займенників;
2. прикметники;
3. прийменники;
4. повна дієслівна система;
5. indicatif;
6. moods;
7. negation/questions;
8. complex sentences + relatives;
9. agreement;
10. reported speech/passive;
11. spoken French;
12. regional/reference material.

### Фаза 4 — редакційний QA
Для кожної сторінки:
- французька форма;
- українське пояснення;
- український переклад прикладів;
- L1-specific contrast;
- exceptions;
- register;
- cross-links;
- source review;
- build/link QA.

## 8. Наукові орієнтири

- Дослідження Herschensohn показує, що морфологічна інфлексія може бути особливо проблемною для дорослих L2 learners французької, що підтримує окреме опрацювання verb morphology та agreement. [Herschensohn, 2001](https://consensus.app/papers/missing-inflection-in-second-language-french-accidental-herschensohn/8df5f89186a756928983818f7ebc17c9/)
- Огляд Grevisse, Watorek та Isel розглядає французький subjonctif як складну L2-структуру та пов'язує її засвоєння з мовним переносом і типологічною відстанню. [Grevisse, Watorek & Isel, 2023](https://consensus.app/papers/the-subjunctive-as-a-model-of-grammatical-complexity-an-grevisse-watorek/a079bb618f3e557589983818f7ebc17c9/)
- Дослідження Sabourin, Stowe & de Haan демонструє, що подібність систем граматичного роду між L1 та L2 може впливати на засвоєння L2 gender; це корисний аргумент на користь контрастивних пояснень, але не доказ конкретних помилок українців. [Sabourin, Stowe & de Haan, 2006](https://consensus.app/papers/transfer-effects-in-learning-a-second-language-sabourin-stowe/6b908fd1d4a85e48ad910dc95d5c707a/)

## 9. Фінальний висновок

Технічна база проєкту вже достатньо хороша. Основна робота тепер — не «ще більше сторінок», а **перетворення набору статей на цілісну, контрольовану граматичну систему**.

Критичний наступний артефакт — canonical coverage manifest. Після його появи кожен новий PR має відповідати конкретному topic ID, prerequisite graph та Definition of Done.

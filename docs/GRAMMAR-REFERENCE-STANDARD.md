# Grammar Reference Standard v1.0

> Єдиний нормативний стандарт для French-Grammar, Portuguese-Grammar та наступних мовних довідників.
>
> Мета: зробити всі довідники методологічно узгодженими, але не стирати мовну специфіку.

## 1. Принципи

1. Довідник — reference system, а не курс і не набір ізольованих статей.
2. Кожна тема має одночасно підтримувати **lookup**, **learning** і **navigation**.
3. Канонічна тема визначається стабільним `id`, а не назвою файла.
4. Каталог тем не дорівнює готовому контенту.
5. Генерований fallback ніколи не вважається авторитетним завершеним матеріалом.
6. Український L1-шар є контрастивним, а не стереотипізуючим.
7. Варіантність мови — metadata dimension, а не хаотичні окремі сторінки.
8. Технічна QA не замінює лінгвістичної перевірки.
9. Кількість сторінок не є метрикою граматичної повноти.
10. Однакова архітектурна модель важливіша за однаковий frontend framework.

## 2. Канонічна модель теми

Кожна тема повинна мати:

- `id` — стабільний canonical identifier;
- `slug` — URL;
- `category` — граматична система;
- `titleUk` — українська назва;
- target-language title;
- `summary`;
- `aliases`;
- `depth` — short / medium / high;
- `status`;
- `prerequisites`;
- `related`;
- `contrast`;
- `next`;
- `register`;
- `variety`;
- `ukrainianContrast`;
- `sources`;
- `reviewedAt`.

Додаткові поля можуть бути language-specific.

## 3. Семантика зв'язків

Зв'язки не можна зводити до одного `related`:

- **prerequisites** — знання, необхідні для розуміння;
- **related** — змістово суміжні теми;
- **contrast** — теми, які користувачеві треба розрізняти;
- **next** — логічний наступний крок;
- **variant** — регіональна/реєстрова реалізація;
- **partOf** — належність до ширшої системи.

## 4. Статуси контенту

Канонічні статуси:

- `planned` — тема запланована;
- `catalogued` — є в каталозі, але контент ще не написаний;
- `draft` — є авторський чернетковий матеріал;
- `review` — написано, але потрібна редакторська/лінгвістична перевірка;
- `release-ready` — пройдено всі релевантні QA;
- `deprecated` — тема замінена/об'єднана.

`generated`, `stub` і `fallback` — технічні стани, а не рівні якості.

## 5. Стандарт статті

Для short/medium/high тем застосовується одна структура з різною глибиною:

1. **Швидка відповідь** — правило/суть за 30–60 секунд.
2. **Визначення** — що це і місце в системі.
3. **Форма / формула**.
4. **Значення та вживання**.
5. **Контекст і вибір**.
6. **Протиставлення**, якщо є реальна конкуренція.
7. **Для носія української**, якщо є L1-ризик.
8. **Типові помилки**, лише якщо вони реальні.
9. **Винятки / межі правила**.
10. **Регістр і варіантність**.
11. **Приклади** з природним українським перекладом.
12. **Практична перевірка** для high/medium тем, якщо це технічно підтримується.
13. **Куди далі** — prerequisites / related / next.

Структура може стискатися для дрібної теми, але не повинна втрачати семантично необхідні частини.

## 6. Приклади

Кожен приклад повинен бути:

- граматично правильним;
- природним;
- достатньо контекстним;
- релевантним конкретному твердженню;
- перекладеним природною українською.

Для contrast topics переважні мінімальні пари.

Не створювати помилки або «типові помилки» лише для заповнення шаблону.

## 7. Український контрастивний шар

Для high-depth тем перевіряється:

1. Чи існує аналогічна категорія в українській?
2. Чи працює вона так само?
3. Чи є ризик буквальної кальки?
4. Чи відрізняється розподіл значень?
5. Чи впливають українські відмінки, вид, порядок слів або нульові визначники?
6. Чи є доказ реальної інтерференційної помилки?

Заборонені твердження на кшталт «українці завжди...», якщо вони не мають належної емпіричної підстави.

## 8. Варіантність

Спільна модель підтримує:

- variety;
- register;
- spoken/written;
- regional;
- formal/informal;
- normative/descriptive distinction.

Конкретний набір варіантів є мовоспецифічним.

Наприклад, Portuguese має PT-BR, PT-PT та окремі Lusophone varieties; French може мати FR, QC, BE, CH та інші лише там, де це реально потрібно.

## 9. Таксономія

Категорія відповідає на питання **«до якої системи належить явище?»**.

CEFR/depth відповідає на питання **«наскільки складною є тема для засвоєння?»**.

Регіон, реєстр і L1-контраст не повинні бути змішані з граматичною категорією.

Рекомендовані спільні верхні домени:

1. foundations;
2. phonology / pronunciation;
3. orthography;
4. nouns;
5. adjectives;
6. determiners / articles;
7. pronouns;
8. verbs;
9. tense / aspect / mood;
10. non-finite forms;
11. prepositions / government / valency;
12. sentence syntax;
13. coordination / subordination;
14. negation;
15. questions;
16. passive / impersonal / reflexive systems;
17. discourse / information structure;
18. word formation;
19. pragmatics;
20. variation;
21. contrastive topics.

Мова може об'єднувати або розділяти ці домени, але змістова модель має залишатися сумісною.

## 10. Джерела

Нормативні твердження мають спиратися на:

1. академічні граматики;
2. сучасні лінгвістичні описи;
3. корпусні дані;
4. авторитетні нормативні джерела;
5. дослідження L2 acquisition;
6. якісні педагогічні граматики.

Навчальні сайти не повинні бути єдиною опорою для складних або спірних тверджень.

High-risk topics обов'язково проходять source review.

## 11. QA

### Structural
- унікальні IDs;
- унікальні slugs;
- валідна schema;
- усі graph references існують;
- немає orphan pages;
- немає duplicate canonical topics;
- catalogued/generated сторінки не маскуються під release-ready.

### Linguistic
- приклади;
- форми;
- узгодження;
- terminology;
- exceptions;
- regional/register claims;
- source claims.

### Contrastive
- український контраст для high-risk topics;
- відсутність false one-to-one equivalents;
- відсутність вигаданих L1 mistakes.

### UX
- search за українськими, target-language та English aliases;
- зрозуміла ієрархія;
- читабельні таблиці;
- mobile;
- keyboard/focus;
- reduced motion;
- доступні semantic headings.

## 12. Release gate

Тема може бути `release-ready` лише коли:

- контент написаний;
- усі релевантні секції покриті;
- приклади перевірені;
- graph links валідні;
- L1 layer перевірений;
- variety/register claims перевірені;
- sources додані для high-risk claims;
- technical QA проходить.

Проєкт не можна називати «повністю покритим» лише тому, що каталог містить N topics.

## 13. Architecture rule

Репозиторії повинні мати однакову **domain architecture**, але не зобов'язані мати ідентичний framework.

Canonical pipeline:

`catalog → normalized topic metadata → content → graph/navigation → search index → rendered reference → QA`

Frontend може бути Astro, React або іншим лише якщо це не руйнує цей pipeline.

## 14. Design system

Обидва довідники повинні дотримуватися:

- content-first hierarchy;
- editorial typography;
- мінімум декоративного шуму;
- однакова семантика статусів і callouts;
- однакова інформаційна поведінка таблиць;
- consistent focus states;
- responsive reading width;
- no ornamental UI that competes with grammar content.

Мова може мати власний акцентний колір, але semantic tokens і component behavior повинні бути сумісними.

## 15. Заборонено

- штучно збільшувати coverage page count;
- генерувати авторитетний текст із generic fallback;
- змішувати normative/descriptive claims без маркування;
- змішувати grammar category, CEFR, region і register в одній осі;
- використовувати `related` як універсальний смітник;
- дублювати однаковий контент замість canonical source;
- вигадувати L1 mistakes;
- робити frontend complexity заради complexity.

## 16. Definition of Done

Довідник відповідає стандарту, якщо його architecture, content model, navigation, QA, search and design semantics сумісні з цим документом.

Мовна специфіка повинна жити в language-specific extensions, а не в різних фундаментальних правилах проєкту.

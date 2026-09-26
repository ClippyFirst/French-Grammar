# Grammar Reference Standard v1.0

> Єдиний нормативний стандарт для French-Grammar, Portuguese-Grammar та наступних мовних довідників.
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
- **prerequisites** — знання, необхідні для розуміння;
- **related** — змістово суміжні теми;
- **contrast** — теми, які користувачеві треба розрізняти;
- **next** — логічний наступний крок;
- **variant** — регіональна/реєстрова реалізація;
- **partOf** — належність до ширшої системи.

## 4. Статуси контенту
- `planned` — тема запланована;
- `catalogued` — є в каталозі, але контент ще не написаний;
- `draft` — є авторський чернетковий матеріал;
- `review` — написано, але потрібна редакторська/лінгвістична перевірка;
- `release-ready` — пройдено всі релевантні QA;
- `deprecated` — тема замінена/об'єднана.

`generated`, `stub` і `fallback` — технічні стани, а не рівні якості.

## 5. Стандарт статті
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

## 6. Приклади
Кожен приклад повинен бути граматично правильним, природним, достатньо контекстним, релевантним конкретному твердженню та перекладеним природною українською. Для contrast topics переважні мінімальні пари. Не створювати помилки або «типові помилки» лише для заповнення шаблону.

## 7. Український контрастивний шар
Для high-depth тем перевіряється: аналогічна категорія в українській, відмінність функціонування, ризик кальки, відмінність розподілу значень, вплив відмінків/виду/порядку слів/нульових визначників, доказ реальної інтерференційної помилки. Заборонені узагальнення про українців без належної емпіричної підстави.

## 8. Варіантність
Спільна модель підтримує variety, register, spoken/written, regional, formal/informal, normative/descriptive distinction. Конкретний набір варіантів є мовоспецифічним.

## 9. Таксономія
Категорія відповідає на питання «до якої системи належить явище?». CEFR і depth описують складність теми для засвоєння, а не її місце в граматичній системі. Регіон, реєстр і L1-контраст є окремими metadata dimensions: вони описують варіантність, комунікативний контекст і контраст із першою мовою та тому не повинні ставати альтернативними значеннями поля category. Такий поділ дає змогу одночасно будувати стабільну навігацію за граматичною системою й фільтрувати матеріал за навчальними та мовними властивостями без змішування різних осей.

Рекомендовані домени: foundations; phonology/pronunciation; orthography; nouns; adjectives; determiners/articles; pronouns; verbs; tense/aspect/mood; non-finite forms; prepositions/government/valency; sentence syntax; coordination/subordination; negation; questions; passive/impersonal/reflexive systems; discourse/information structure; word formation; pragmatics; variation; contrastive topics.

## 10. Джерела
Нормативні твердження мають спиратися на академічні граматики, сучасні лінгвістичні описи, корпусні дані, авторитетні нормативні джерела, дослідження L2 acquisition та якісні педагогічні граматики. Навчальні сайти не повинні бути єдиною опорою для складних або спірних тверджень.

## 11. QA
Structural: унікальні IDs/slugs; валідна schema; існуючі graph references; відсутність orphan/duplicate canonical topics; catalogued/generated не маскуються під release-ready.
Linguistic: приклади, форми, узгодження, terminology, exceptions, regional/register claims, source claims.
Contrastive: L1-контраст для high-risk topics, відсутність false one-to-one equivalents і вигаданих L1 mistakes.
UX: пошук українськими/target-language/English aliases; ієрархія; таблиці; mobile; keyboard/focus; reduced motion; semantic headings.

## 12. Release gate
`release-ready` лише коли контент написаний, релевантні секції покриті, приклади перевірені, graph links валідні, L1 layer перевірений, variety/register claims перевірені, sources додані для high-risk claims, technical QA проходить.

## 13. Architecture rule
Репозиторії повинні мати однакову domain architecture, але не зобов'язані мати ідентичний framework.

Canonical pipeline:
`catalog → normalized topic metadata → content → graph/navigation → search index → rendered reference → QA`

## 14. Design system
Content-first hierarchy; editorial typography; мінімум декоративного шуму; однакова семантика status/callouts; однакова інформаційна поведінка таблиць; consistent focus states; responsive reading width; no ornamental UI that competes with grammar content.

## 15. Заборонено
Штучно збільшувати coverage page count; генерувати авторитетний текст із generic fallback; змішувати normative/descriptive claims без маркування; змішувати grammar category, CEFR, region і register в одній осі; використовувати `related` як універсальний смітник; дублювати canonical source; вигадувати L1 mistakes; робити frontend complexity заради complexity.

## 16. Definition of Done
Довідник відповідає стандарту, якщо його architecture, content model, navigation, QA, search and design semantics сумісні з цим документом. Мовна специфіка повинна жити в language-specific extensions, а не в різних фундаментальних правилах проєкту.

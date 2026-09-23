# French Grammar v2 — журнал редакції

## Гілка

rewrite/ukrainian-grammar-v2

## Виконано

- Створено окрему гілку, не змінюючи master.
- Проведено аудит наявної структури репозиторію.
- Переглянуто чинний syllabus і наявні markdown-статті.
- Виявлено надмірні спрощення у поясненні часової системи та subjonctif.
- Переписано:
  - present.md
  - passe-compose.md
  - imparfait.md
  - passe-compose-vs-imparfait.md
  - subjonctif.md
- Додано:
  - pronouns-subject.md
  - adjective-position.md
  - comparative-superlative.md
  - futur-proche.md
  - plus-que-parfait.md
  - conditionnel-passe.md
  - imperatif.md
  - relative-pronouns.md
  - si-clauses.md
  - indirect-speech.md
  - passive.md

## Методологічний QA

Academic Writing Toolkit: paragraph logic review — проблем не виявлено для перевірених концептуальних фрагментів.

## Джерельна перевірка

Для правил узгодження та прономінальних конструкцій звірено сучасні матеріали Académie française. Особливу увагу приділено тому, що узгодження participe passé залежить від синтаксичної функції та позиції COD, а не просто від наявності être/avoir.

## Що ще НЕ зроблено

- Повна переробка всіх наявних статей.
- Повне покриття всіх 200+ запланованих тем.
- Повна перевірка всіх внутрішніх посилань.
- Повний build/lint у середовищі репозиторію.
- Повний контентний фактчек кожної сторінки.
- Повна редакція regional French.
- Повні comparison pages.

## B01 — Articles: second-pass correction

Переписано й виправлено чотири взаємопов’язані сторінки:
- articles-partitive.md
- articles-after-negation.md
- article-omission.md
- contracted-articles.md

Особливу увагу приділено розмежуванню partitif та `de + article`, а також тому, що формули «pas → de» і «їжа → без артикля» не є універсальними.

Виявлені та усунені проблеми старої редакції: некоректне трактування `des` як партитивного артикля; надмірне ототожнення partitif з українським родовим; помилкове твердження про автоматичне зникнення артикля після `être`; подання розмовного *Je mange poulet* як нейтральної норми; змішування елізії, злиття та нульового артикля.

## B02 — Prepositions: rigorous second pass

Переписано `prepositions-a.md`, `prepositions-de.md` та `prepositions-en.md`.

Фокус: відмова від універсальних відповідностей «українське слово → французький прийменник», систематизація керування, мінімальні пари, розмежування `en/dans`, `à/de`, географічних назв і транспортних конструкцій.

Окремо виправлено небезпечні твердження попередньої редакції: `coûter` не потребує обов’язкового `à`; вибір `en` для транспорту не пояснюється граматичним родом транспортного іменника; `dans la voiture` та `en voiture` мають різні функції; `dans deux heures` і `en deux heures` виражають різні часові відношення.

Методологічний QA: Academic Writing Toolkit — review_paragraph_logic, проблем не виявлено.

## B03 — Pronouns: COD, COI and demonstratives

Переписано:
- `pronouns-cod.md`
- `pronouns-coi.md`

Додано:
- `pronouns-demonstrative.md`

Фокус B03:
- чітке розмежування COD, COI, `y`, `en` та наголошених займенників;
- дієслівне керування замість механічного правила «`à` → `lui/leur`»;
- позиція клитичних займенників у простих, складених та інфінітивних конструкціях;
- окреме правило узгодження participe passé з попереднім COD у конструкціях з `avoir`;
- розмежування `ce/cet/cette/ces` як визначників і `celui/celle/ceux/celles` як займенників;
- `ce qui / ce que / ce dont` та зв’язок із синтаксичною функцією;
- контрастивні пояснення для українськомовного учня.

Важливе виправлення попередньої редакції: твердження «дієслово не узгоджується з COD» замінено на точне правило про **participe passé з avoir**, коли попередній COD є прямим додатком відповідного дієслова.

Методологічний QA B03:
- Academic Writing Toolkit — review_paragraph_logic: 2 концептуальні фрагменти, issue_count = 0 в обох випадках.


## B04 — Clitic pronoun order + imperative second pass

Перевірено й уточнено:
- `pronoun-order.md`
- `imperatif.md`

Фокус:
- розмежування звичайної препозиції клитиків та окремого порядку в ствердному impératif;
- схема звичайної позиції: `me/te/se/nous/vous → le/la/les → lui/leur → y → en`;
- окрема схема ствердного impératif: `le/la/les → moi/toi/lui/nous/vous/leur → y → en`;
- повернення займенників перед дієсловом у заперечному impératif;
- `me/te → moi/toi` після дієслова;
- форми `vas-y`, `parles-en`, `manges-en` та пояснення появи кінцевого `-s`;
- зв’язок позиції займенника з тим дієсловом, до якого він синтаксично належить;
- додаткові приклади подвійних займенників та типові помилки.

Методологічний QA B04:
- Academic Writing Toolkit — review_paragraph_logic: 2 концептуальні фрагменти, issue_count = 0 в обох випадках.

Git commits:
- pronoun-order.md: `5e73865e409bcfbbea46eab6f19fe7dbff2894f1`
- imperatif.md: `1b6bf01c5bc8a1413d213e74150eaf6213399406`

## B05 — Relative pronouns: deep second pass

Переписано `content/fr/relative-pronouns.md`.

Фокус:
- побудова вибору через синтаксичну функцію антецедента, а не через буквальний український переклад;
- чітке розмежування `qui` (підмет) та `que` (COD);
- `dont` як залежність від простого `de` + окреме вживання в конструкціях кількості;
- `où` для місця та часу;
- повна парадигма `lequel / laquelle / lesquels / lesquelles`;
- `auquel / à laquelle / auxquels / auxquelles` та `duquel / de laquelle / desquels / desquelles`;
- складені прийменники `près de`, `à côté de`, `auprès de`, `à propos de` та їхнє розмежування з `dont`;
- `ce qui / ce que / ce dont` через синтаксичну функцію;
- алгоритм вибору та український контраст;
- типові помилки `que/qui`, `que/dont`, `que/où`, `dont/lequel`;
- додано міні-тест із відповідями.

Методологічний QA B05:
- Academic Writing Toolkit — review_paragraph_logic на концептуальному фрагменті: виявлено 1 структурне зауваження `short-paragraph` для ізольованого тестового фрагмента; це зауваження стосувалося довжини абзацу в інструменті, а не граматичної помилки. Основний текст інтегровано в послідовні секції з прикладами, таблицями та алгоритмом.

Git commit:
- `relative-pronouns.md`: `e704eda00d6f02916e81b90e4c8e3609436f89a2`


## B06 — Conditional system: si-clauses + conditionnel présent

Додано:
- `content/fr/si-clauses.md`
- `content/fr/conditionnel-present.md`

Фокус B06:
- `si + présent` як відкрита / реальна умова з різними типами наслідку;
- `si + présent → futur`, `présent` та `impératif`;
- `si + présent → futur antérieur` для завершення до майбутньої межі;
- `si + imparfait → conditionnel présent`;
- `si + plus-que-parfait → conditionnel passé`;
- змішані умови: минула причина → теперішній результат та теперішня характеристика → минулий результат;
- заборона механічного `futur` / `conditionnel` після умовного `si`;
- розмежування умовного `si` («якщо») та `si` у непрямому питанні («чи»);
- часову перспективу замість спрощеної схеми «тип 1 / тип 2 / тип 3»;
- conditionnel présent як гіпотетичний наслідок, ввічливість, бажання, пораду, futur dans le passé та контекстне дистанціювання інформації;
- утворення conditionnel від основи futur simple + закінчень imparfait;
- нерегулярні основи, мінімальні пари з futur та контраст з conditionnel passé / imparfait;
- український контраст через `би / б`, але без механічного перекладу.

Методологічний QA B06:
- Academic Writing Toolkit — `review_paragraph_logic` на обох повних документах повернув відповідно 101 та 134 попередження, усі типу `short-paragraph`.
- Це очікуваний false-positive для граматичного довідника: інструмент трактує формули, приклади, таблиці, тестові завдання та короткі правила як окремі «абзаци». У попередньому B05 було зафіксовано той самий патерн.
- Отже, `paragraph_logic` не використовується як кількісний zero-warning gate для структурованих grammar pages; його результати враховуються як редакційний сигнал для пояснювальних абзаців, а не як граматичний фактчек.
- Перед наступними блоками потрібен окремий контентний фактчек часової системи, а не штучне об'єднання коротких прикладів заради зменшення лічильника попереджень.

Git commits:
- `si-clauses.md`: `56feafc2e4a705dd921e579a6f92400d4a10f13f`
- `conditionnel-present.md`: `5367ea98d403f675ccc1f3cd86c821fb34fba2de`


## B06 path correction / repository integrity

Під час перевірки після B06 виявлено, що три нові редакції спочатку були записані у staging-шлях `content/fr/`, тоді як чинна Astro content collection репозиторію використовує `src/content/fr/`.

Виправлено:
- фінальну редакцію `relative-pronouns.md` перенесено до `src/content/fr/relative-pronouns.md`;
- фінальну редакцію `si-clauses.md` перенесено до `src/content/fr/si-clauses.md`;
- фінальну редакцію `conditionnel-present.md` перенесено до `src/content/fr/conditionnel-present.md`;
- staging-дублікати з `content/fr/` видалено.

Це важливий структурний QA-крок: контентний rewrite має змінювати фактичні файли колекції, а не залишати непідключені копії.


## B07 — Temporal system: deep cross-page rewrite

Опрацьовано часову архітектуру навколо futur, минулих часів і conditionnel.

Переписано:
- `src/content/fr/futur-simple.md`
- `src/content/fr/imparfait.md`
- `src/content/fr/plus-que-parfait.md`
- `src/content/fr/conditionnel-passe.md`
- `src/content/fr/indirect-speech.md`

Додано:
- `src/content/fr/futur-anterieur.md`

### Методологічні зміни B07

- Відмовлено від схем «один французький час = один український вид/переклад».
- Для passé composé / imparfait посилено поняття **перспективи ситуації**: подія/цілісний епізод проти фону, стану, звички або процесу.
- Для plus-que-parfait сформульовано центральне поняття **передування відносно минулої точки відліку**, а не «дуже давнього минулого».
- Для futur antérieur введено паралельну вісь: **передування відносно майбутньої точки відліку**.
- Розмежовано futur simple і futur proche без хибного правила «simple = факт, proche = намір».
- Уточнено часові підрядні конструкції: після `quand / lorsque / dès que` майбутня подія може мати futur; для передування використовується futur antérieur.
- Розмежовано умовне `si` та `si` у непрямих питаннях.
- Conditionnel passé пов'язано не лише з нереалізованою умовою, а й з модальною/журналістською дистанцією та змішаними умовами.
- У непрямій мові таблиця concordance des temps подається як **типова часово-перспективна модель**, а не механічний алгоритм.
- Підкреслено функцію **futur dans le passé**: `Il a dit qu'il viendrait` ≠ автоматичне українське «прийшов би».

### Academic Writing Toolkit QA

Повний виклик `review_paragraph_logic` на великому об'єднаному наборі тексту дав численні попередження `short-paragraph`. Це повторює B05/B06 і є методологічним false-positive для grammar reference: приклади, формули, таблиці, тестові пункти й короткі правила не повинні штучно об'єднуватися лише для проходження paragraph-length heuristic.

Для B07 цей інструмент використано як **структурний редакційний сигнал**, а не як граматичний fact-checker. Критичні твердження перевірено через внутрішній cross-page audit: futur simple ↔ futur antérieur ↔ plus-que-parfait ↔ conditionnel ↔ indirect speech.

### Виявлені й виправлені системні ризики

1. Надто жорстке «futur simple = заплановане / futur proche = намір».
2. Надто жорстке «imparfait = незавершене, passé composé = завершене».
3. Недостатньо чітке розмежування абсолютного та відносного часу.
4. Недостатнє розмежування futur antérieur та plus-que-parfait.
5. Недостатнє пояснення futur dans le passé через conditionnel.
6. Автоматизація concordance des temps без урахування актуальності та точки відліку.

### Примітка про futur antérieur

У попередній структурі окремої сторінки `futur-anterieur.md` не було. Вона створена саме в `src/content/fr/`, щоб часова система мала симетричний довідковий вузол і щоб посилання з futur simple / conditionnel працювали на реальний content collection path.

### Наступний QA-крок

Після B07 доцільно виконати окремий **cross-page consistency audit** усіх сторінок, які посилаються на часові форми, а потім перейти до temporal conjunctions (`quand, lorsque, dès que, après que, avant que, pendant que, depuis que`) та повної системи aspect/viewpoint.

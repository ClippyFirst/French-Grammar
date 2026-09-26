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


## B08 — Temporal cross-page consistency audit

Проведено окремий cross-page audit часової системи після B07.

Перевірено:
- `futur-simple.md`
- `futur-anterieur.md`
- `futur-proche.md`
- `passe-compose.md`
- `imparfait.md`
- `passe-compose-vs-imparfait.md`
- `plus-que-parfait.md`
- `conditionnel-present.md`
- `conditionnel-passe.md`
- `si-clauses.md`
- `indirect-speech.md`
- `prepositions-time.md`

### Виправлено

Переписано `prepositions-time.md`.

Усунено надмірно жорсткі твердження:
- `pendant` нібито не може вживатися з майбутнім;
- `en` нібито завжди означає тривалість завершеної дії;
- `à` нібито вживається лише з годинами;
- `depuis` нібито завжди означає ситуацію, що триває до моменту мовлення.

Сторінку перебудовано навколо часових функцій і мінімальних контрастів `en/dans`, `en/pendant`, `depuis/pendant`, `dans/depuis`.

### Додано

Створено:
- `src/content/fr/temporal-conjunctions.md`
- `docs/temporal-consistency-audit.md`

Нова сторінка систематизує `quand, lorsque, dès que, aussitôt que, pendant que, avant que, après que, depuis que`.

### Джерельна перевірка

Правило `après que + indicatif` звірено з Académie française. Для майбутнього Академія наводить модель на кшталт `après que la nuit sera tombée`; для минулого — `après que nous l'avons tous salué`.

### Academic Writing Toolkit QA B08

Перевірено два нових концептуальних фрагменти:
- `en / dans / pendant` → `issue_count = 0`;
- `quand / futur antérieur / avant que / après que` → `issue_count = 0`.

Повні grammar pages не використовуються як кількісний zero-warning gate через системні `short-paragraph` false positives для формул, прикладів, таблиць і вправ.

### Важливий результат B08

Часова система тепер має окремий вузол для **форм часу**, окремий вузол для **часових прийменників** і окремий вузол для **часових сполучників**. Це зменшує ризик, що одне локальне правило буде суперечити поясненням в іншій статті.

### Наступний крок

Провести глибокий audit `passé composé / imparfait / plus-que-parfait` як системи аспектуальної перспективи, а також перевірити `subjonctif` у часових та відносних конструкціях.


## B09 — Aspectual perspective: passé composé / imparfait / plus-que-parfait

Проведено глибокий cross-page audit минулих часів як системи **часової та аспектуальної перспективи**.

### Переписано
- `src/content/fr/passe-compose.md`
- `src/content/fr/imparfait.md`
- `src/content/fr/passe-compose-vs-imparfait.md`
- `src/content/fr/plus-que-parfait.md`

### Виправлено
- прибрано можливе прочитання «актуальний результат = умова passé composé»;
- посилено принцип, що актуальний результат є контекстуальним ефектом, а не визначенням форми;
- прибрано ризик прив'язки `dormir` / `travailler` до imparfait як до лексичної властивості;
- додано контраст `Quand je suis arrivé, il dormait` / `Quand je suis arrivé, il a dormi pendant deux heures`;
- посилено правило, що `pendant`, тривалість і часовий сполучник самі по собі не визначають passé composé або imparfait;
- закріплено `plus-que-parfait` як форму передування відносно минулої точки відліку, а не як «дуже давнє минуле».

### Academic Writing Toolkit QA
Перевірено три цільові концептуальні фрагменти через `review_paragraph_logic`:
- passé composé / imparfait / duration → **0 issues**;
- `dormait / a dormi` → **0 issues**;
- plus-que-parfait / past reference point → **0 issues**.

Як і в B05–B08, повні grammar pages не використовуються як кількісний zero-warning gate через передбачувані `short-paragraph` false positives на формулах, прикладах, таблицях і вправах.

### Документація
Додано `docs/aspectual-consistency-audit.md` з описом принципів, виявлених ризиків, виправлень і подальших QA-напрямів.

### Наступний крок
Перевірити складні аспектуальні випадки: лексичний клас дієслова, telicity, стани та події, habituality, narrative sequencing, а також взаємодію часових форм із `être/avoir`, pronominal verbs та accord du participe passé.


## B10 — Lexical aspect and narrative consistency

Проведено наступний рівень аспектуального аудиту: **lexical aspect → context → temporal viewpoint**.

### Переписано
- `src/content/fr/passe-compose.md`
- `src/content/fr/imparfait.md`
- `src/content/fr/passe-compose-vs-imparfait.md`
- `src/content/fr/plus-que-parfait.md`

### Основні уточнення
- додано окремий рівень часової та аспектуальної перспективи;
- прямо розмежовано лексичний тип дієслова, структуру конкретної ситуації та граматичну перспективу;
- показано, що `dormir`, `arriver`, `habiter` можуть мати різні часові форми залежно від контексту;
- прибрано ризик механічних правил «стан → imparfait» або «подія → passé composé»;
- посилено відмінність між telicity і граматичним часом;
- habituality та narrative sequencing подано як типові функціональні середовища, а не абсолютні тригери;
- plus-que-parfait додатково пояснено через reference point, а не «давність».

### Academic Writing Toolkit QA
Чотири цільові концептуальні фрагменти перевірено через `review_paragraph_logic`:
- passé composé + viewpoint → **0 issues**;
- imparfait + viewpoint → **0 issues**;
- lexical verb class → **0 issues**;
- plus-que-parfait + reference point → **0 issues**.

### Документація
Додано `docs/lexical-aspect-consistency-audit.md`.

### Наступний крок
B11: системний аудит складених форм і `accord du participe passé` — `avoir/être`, pronominal verbs, preceding COD, relative clauses та випадки, де синтаксична функція змінює форму participe passé.


## B11 — Accord du participe passé: syntax-first rewrite

Проведено системний аудит узгодження participe passé.

### Переписано
- `src/content/fr/accord.md`

### Додано
- `docs/participe-passe-agreement-audit.md`

### Основні виправлення
- замінено поверхневе правило «узгоджувати з найближчим іменником» на синтаксичний алгоритм;
- уточнено `avoir + COD`: узгодження залежить від COD і його позиції;
- посилено відмінність COD/COI;
- узгоджено пояснення `que / qui / dont / où / lequel` із попередніми аудитами relative pronouns;
- прибрано хибне узагальнення про `quelque chose / quelqu'un / rien / personne`;
- систематизовано `en`;
- додано точний аналіз `se` у pronominal verbs;
- додано `se rendre compte`, `se succéder`, `se parler` як приклади керування;
- додано `faire + infinitif` та сучасну модель `laisser + infinitif`;
- додано `entendre / voir + infinitif`;
- уточнено `coûter / courir / vivre` через значення та синтаксичну модель;
- додано конструкції `avoir + infinitif`, де попередній COD може належати infinitif, а не participe passé;
- виправлено вправи з вкладеними relative clauses.

### Джерельна перевірка
Нормативні твердження звірено з матеріалами Académie française щодо:
- попереднього COD з `avoir`;
- `faire + infinitif`;
- `laisser + infinitif`;
- pronominal verbs;
- `se rendre compte`;
- `se succéder`;
- `coûter / courir / vivre`;
- `entendre + infinitif`.

### Academic Writing Toolkit QA
Три цільові пояснювальні фрагменти:
- `avoir + COD` → **0 issues**;
- pronominal verbs → **0 issues**;
- `entendre + infinitif` → **0 issues**.

Повний grammar-файл не використовується як zero-warning gate: короткі правила, таблиці, приклади та вправи системно дають `short-paragraph` false positives у цьому інструменті.

### Результат
B11 переводить пояснення accord du participe passé від набору мнемонік до **синтаксичного аналізу**, що краще узгоджується з COD/COI, relative pronouns, pronominal verbs та попереднім аспектуальним аудитом.

### Наступний крок
Провести cross-page audit усіх згадок `participe passé / accord / COD / COI / pronominal verbs`, щоб перевірити, що різні сторінки не містять старих спрощених правил.


## B12 — Infinitive system: second-pass rewrite

Опрацьовано чотири взаємопов’язані сторінки:
- `src/content/fr/infinitive-after-verb.md`
- `src/content/fr/infinitive-after-adjective.md`
- `src/content/fr/infinitive-after-preposition.md`
- `src/content/fr/infinitive-past.md`

### Основний фокус

- французьке керування `V + infinitif`, `V + à + infinitif`, `V + de + infinitif`;
- розмежування валентності дієслова та семантичної функції прийменника;
- спільний і відмінний виконавець інфінітивної дії;
- контраст `infinitif` ↔ `que + особова форма`;
- `adjectif + de/à + infinitif`, зокрема конструкції `facile/difficile à`;
- безособове `il est + adjectif + de + infinitif`;
- `pour/sans/avant de/après + infinitif`;
- `après + infinitif passé` та відносна попередність;
- вибір `avoir/être` і узгодження participe passé всередині infinitif passé;
- український контраст без механічних відповідностей «український прийменник → французький прийменник».

### Важливе методологічне рішення

Інфінітив не пояснюється як «скорочене підрядне речення». У статтях окремо розведено форму, синтаксичну функцію, керування та кореференцію учасників.

### Academic Writing Toolkit QA

`review_paragraph_logic` застосовано до всіх чотирьох сторінок. Інструмент очікувано генерує багато `short-paragraph` попереджень через формули, приклади, таблиці та вправи. Це не використовується як граматичний zero-warning gate; логічні фрагменти перевірено редакційно.

### Git commits

- `infinitive-after-verb.md`: `1eb1a6b17ada7b1aeba74ac3cc8bfe85b2a47ad1`
- `infinitive-after-adjective.md`: `8ea080af97865a9ef6a62903a723bc0a265ce1e6`
- `infinitive-after-preposition.md`: `42817f15068ab8fe73714b4776c97842a7752079`
- `infinitive-past.md`: `e3047c7198be00fa1203bfd30f07718bd9d41603`

### Лічильник

Поточний branch містить **363 Markdown-статті** в `src/content/fr/`. Канонічний каталог має **740 topic ID**. Номінальна різниця — **377**, але це не є точним числом «тем, що залишилися»: один canonical topic може мати кілька статей, а одна стаття може покривати кілька topic ID. Точний remaining count потребує повного manifest mapping, який у репозиторії ще не завершений.

Цей блок: **4 статті переписано**.


## B13 — Canonical coverage expansion: FR-719–FR-740

Ціль B13 — не просто збільшити кількість Markdown-файлів, а закрити останній доданий canonical block **FR-719–FR-740** без штучного дроблення тем.

### Проведено аудит перед написанням

Перевірено чинну гілку `content/reference-articles-2026-09-25`, canonical taxonomy та вже наявні сторінки. Виявлено, що значна частина нових IDs уже мала адекватне покриття:

- FR-719 — `verbal-periphrases.md`;
- FR-723 — `laisser-infinitive.md`;
- FR-724 — `infinitive-control.md`;
- FR-725 — `defective-verbs.md`;
- FR-728 — `interrogative-adverbs.md`;
- FR-729 — `exclamatives.md`;
- FR-731 — `avoir-beau.md`;
- FR-732 — `inclusive-writing.md`;
- FR-733 — `phrase-enonce.md`;
- FR-736 — `deixis.md`;
- FR-737–FR-738 — `address-interjections.md`;
- FR-739 — `prosody.md`.

Тому нові статті створено лише там, де canonical topic ще не мав окремого достатнього вузла або де для coverage graph потрібна була явна сторінка.

### Додано 8 нових статей

1. `src/content/fr/movement-infinitive.md` — **FR-720**  
   Дієслова руху + infinitif: futur proche проти повнозначного руху, мета, venir/partir/sortir/entrer, займенники та часовий аналіз.

2. `src/content/fr/perception-infinitive.md` — **FR-721**  
   Voir/entendre/écouter + infinitif, учасник інфінітивної дії, контраст із `que + forme finie`, займенники та зв'язок з accord du participe passé.

3. `src/content/fr/faire-infinitive.md` — **FR-722**  
   Каузативна конструкція `faire + infinitif`: каузатор, виконавець дії, невиражений agent, clitiques, часи та особливості `fait` перед infinitif.

4. `src/content/fr/possession-body-clothes.md` — **FR-726 + FR-727**  
   Спільний довідковий вузол для частин тіла та одягу: означений артикль, присвійність, pronominal verbs, контекстуальна референція та український контраст.

5. `src/content/fr/nominal-utterances.md` — **FR-734**  
   Бездієслівні, номінальні та еліптичні висловлення; фрагменти діалогу, відповіді, окличні моделі, усний контекст.

6. `src/content/fr/extraction.md` — **FR-735**  
   Extraction як надбудова над питаннями, relatives, cleft, довгими залежностями та іншими конструкціями; чітке розмежування extraction, inversion і dislocation.

7. `src/content/fr/inversion.md` — **FR-730**  
   Інверсія підмета поза вузьким правилом «це лише питання»: interrogatives, narrative inversion, postverbal subjects, `t euphonique`, register.

8. `src/content/fr/spoken-disfluency.md` — **FR-740**  
   Вагання, повтори, self-repair, reformulation, interruption, fillers і просодія в сучасному усному мовленні.

### Методичний принцип

Для canonical coverage використано правило самого taxonomy: topic може бути покритий окремою повноцінною статтею або явною секцією в іншій canonical article, якщо окрема сторінка не додає навчальної цінності.

Особливо важливо, що **FR-726 + FR-727** об'єднано в одну статтю: обидві теми мають спільну граматичну вісь possession/determination, а штучне розділення погіршило б навігацію.

### Academic Writing Toolkit QA

Усі 8 нових сторінок перевірено через `review_paragraph_logic`.

Інструмент генерує численні `short-paragraph` warnings для прикладів, формул, таблиць, тестових пунктів і коротких нормативних правил. Це вже встановлений false-positive pattern для структурованого grammar reference і не використовується як граматичний zero-warning gate.

Концептуальну логіку сторінок перевірено редакційно: особлива увага до розмежування control / perception / causative infinitives, participant roles, extraction / inversion / dislocation та spoken-vs-written register.

### Coverage milestone

Після B13 canonical block **FR-719–FR-740 має явне покриття**:

- FR-719 — наявний;
- FR-720 — додано;
- FR-721 — додано;
- FR-722 — додано;
- FR-723 — наявний;
- FR-724 — наявний;
- FR-725 — наявний;
- FR-726–FR-727 — додано;
- FR-728 — наявний;
- FR-729 — наявний;
- FR-730 — додано;
- FR-731 — наявний;
- FR-732 — наявний;
- FR-733 — наявний;
- FR-734 — додано;
- FR-735 — додано;
- FR-736 — наявний;
- FR-737–FR-738 — наявний спільний вузол;
- FR-739 — наявний;
- FR-740 — додано.

### Git commits

- `6c463348d9c25c9bd6e7001edba1c7f4a7b80001` — movement-infinitive
- `edb3719a17aa9cab87e900376aff2d55a2e6ff91` — perception-infinitive
- `08ae2c12e6084e5706f7efcabc954224ba5adc00` — faire-infinitive
- `5632da23f802b2e92f6fa187f2111104720f611c` — possession-body-clothes
- `677c9466715c6fef0f4f96d6407ebca404aa2053` — nominal-utterances
- `0ce69f722cb504d91ff1ca1219e9a842f12d2b09` — extraction
- `4274b37939e1f61660f47a19f6a2f5a735e2e9de` — inversion
- `56e2e7ec7277c9b8df759dc7d537beed46bebb80` — spoken-disfluency

### Лічильник

Було на початку B13: **363 Markdown-статті**.

Додано: **8 нових Markdown-статей**.

Після B13: **371 Markdown-стаття** у `src/content/fr/`.

Canonical scope: **740 topic IDs**.

Номінальна арифметична різниця `740 - 371 = 369` не є точним remaining count, оскільки repository допускає багато-to-one і one-to-many mapping між topic IDs та статтями. Для справжнього remaining count потрібен повний machine-readable manifest coverage, а не порівняння кількості файлів.

**Окремий milestone:** останній canonical block **FR-719–FR-740 закрито coverage-рішеннями**.


## B14 — Advanced syntax coverage deepening: FR-679–FR-688

Після закриття FR-719–FR-740 проведено наступний coverage pass по блоку розширених конструкцій **FR-679–FR-695**. Ціль — не штучно збільшити кількість файлів, а зробити вже наявне покриття достатньо глибоким для універсального довідника.

### Переписано / поглиблено

- `src/content/fr/reciprocal-constructions.md` — **FR-679, FR-681**
  - розведено reciprocal ↔ reflexive;
  - додано аналіз COD/COI через валентність дієслова;
  - показано взаємність без `se`;
  - пов'язано з accord du participe passé.

- `src/content/fr/reflexive-causatives.md` — **FR-680**
  - розведено каузативний та внутрішній предикати;
  - пояснено роль `se` у внутрішній конструкції;
  - додано contrast causative ↔ passive;
  - уточнено clitic analysis.

- `src/content/fr/coordination-unlike-categories.md` — **FR-682**
  - перенесено фокус із «однакова частина мови» на constituent/function;
  - розведено coordination ↔ ellipsis ↔ simple adjacency;
  - додано зв'язок із valency.

- `src/content/fr/multiple-negation.md` — **FR-683**
  - систематизовано кілька негативних операторів;
  - уточнено scope;
  - розведено `ne ... que` та звичайне заперечення;
  - уточнено взаємодію з clitics.

- `src/content/fr/multiple-embedding.md` — **FR-685**
  - показано кілька рівнів complétive/relative;
  - розведено синтаксичну вкладеність і часову/модальну інтерпретацію;
  - додано алгоритм структурного читання довгих речень.

- `src/content/fr/nested-relative-clauses.md` — **FR-686**
  - систематизовано antecedent + function для кожного relative marker;
  - додано nested relative у complétive;
  - посилено accord через вкладені структури;
  - окремо враховано читабельність глибокої вкладеності.

- `src/content/fr/nested-complement-clauses.md` — **FR-687**
  - розведено рівні залежності `que`;
  - уточнено tense/mood у вкладених complétives;
  - додано reported speech і дейктичні центри.

- `src/content/fr/long-distance-dependencies.md` — **FR-688**
  - показано далекі relative dependencies;
  - додано відновлення базової структури;
  - пов'язано dependency ↔ agreement ↔ antecedent.

### Academic Writing Toolkit QA

Усі 8 переписаних сторінок перевірено через `review_paragraph_logic`.

**Результат: 0 issues** за результатом інструмента для кожної з 8 сторінок.

Це кращий результат, ніж у попередніх великих grammar batches: структура сторінок була свідомо перебудована так, щоб пояснювальні абзаци не перетворювалися на послідовність надто коротких фрагментів.

### Методичний результат

Блок FR-679–FR-688 тепер утворює пов'язану систему:

`reciprocal/reflexive → causative → coordination → negation → embedding → nested relatives/complements → long-distance dependencies`.

Це важливо для canonical coverage: ці теми не є ізольованими довідковими картками, а формують один граф складного синтаксичного аналізу.

### Лічильник

На початку B14: **371 Markdown-стаття**.

Створено нових файлів: **0**.

Переписано / поглиблено: **8 статей**.

Поточна кількість Markdown-файлів: **371**.

Canonical scope: **740 topic IDs**.

Як і раніше, `740 - 371 = 369` **не є точним remaining count**, оскільки canonical topic і Markdown-файл мають не один-до-одного відповідність. Для справжнього лічильника «скільки canonical topics залишилось» потрібен machine-readable coverage manifest.

### Наступний крок

Продовжити coverage audit у попередніх блоках canonical taxonomy, але спочатку перевіряти існуюче покриття й якість сторінки. Нову статтю створювати лише тоді, коли topic справді не має достатнього вузла; інакше canonical ID слід закріплювати за наявною статтею або секцією.


## B15 — Advanced syntax / scope coverage: FR-689–FR-695

Після B14 продовжено coverage pass по наступному canonical block **FR-689–FR-695**. Ціль — не збільшувати page count штучно, а довести до повноцінного reference-рівня теми узгодження через вставлені групи, attachment ambiguity та scope.

### Переписано / поглиблено

- `src/content/fr/agreement-intervening-phrases.md` — **FR-689**
  - контролер узгодження визначається структурно, а не за найближчим іменником;
  - додано складні іменні групи, relative clauses та кілька незалежних зон узгодження;
  - уточнено зв'язок із participe passé та попереднім COD;
  - додано практичний алгоритм структурного аналізу.

- `src/content/fr/ambiguous-attachment.md` — **FR-690**
  - розмежовано linear proximity, syntactic attachment та semantic interpretation;
  - показано PP attachment, relative-clause attachment і роль verb valency;
  - додано критерій відмінності між реальною неоднозначністю та теоретично можливим, але неприродним читанням;
  - розширено способи зняття неоднозначності в письмі.

- `src/content/fr/grammatical-ambiguity.md` — **FR-691**
  - розмежовано форму, структуру та інтерпретацію;
  - додано structural/syntactic/semantic/interpre­tive dimensions;
  - уточнено роль контексту, просодії та пунктуації;
  - додано алгоритм діагностики реальної неоднозначності.

- `src/content/fr/structural-ambiguity.md` — **FR-692**
  - перетворено короткий stub на повний reference article;
  - додано attachment, constituent boundaries, relatives, coordination та embedding;
  - введено чітку відмінність «складне» ≠ «неоднозначне»;
  - додано алгоритм відновлення структури.

- `src/content/fr/negation-scope.md` — **FR-693**
  - систематизовано scope заперечення;
  - розведено заперечення, частотність, квантори, `ne...que` та модальність;
  - додано контраст `Il peut ne pas venir` ↔ `Il ne peut pas venir`;
  - уточнено відмінність scope від синтаксичної функції.

- `src/content/fr/quantifier-scope.md` — **FR-694**
  - розширено interaction між `chaque`, `tous`, `un`, `aucun` та предикатом;
  - додано distributive readings і взаємодію кванторів;
  - систематизовано квантор + заперечення;
  - додано український контраст і практичний алгоритм.

- `src/content/fr/scope-interpretation.md` — **FR-695**
  - об'єднано в одну методику синтаксис, scope та інтерпретацію;
  - додано взаємодію заперечення, квантифікації, модальності та вкладених речень;
  - уточнено scope ambiguity;
  - додано практичну перевірку з модальним `pouvoir`.

### Усунено дублювання canonical mapping

До B15 існував додатковий файл `src/content/fr/scope-negation-quantifiers.md`, який одночасно заявляв **FR-693 + FR-694 + FR-695**, хоча для кожного з цих topic IDs уже існували окремі canonical nodes.

Щоб coverage graph відповідав принципу **один canonical topic → один основний reference node**, файл `scope-negation-quantifiers.md` видалено. Його матеріал не був унікальним і був розподілений між трьома окремими сторінками.

### Academic Writing Toolkit QA

Усі 7 переписаних сторінок перевірено через `review_paragraph_logic`.

Результати:
- FR-689 — 69 попереджень;
- FR-690 — 67;
- FR-691 — 63;
- FR-692 — 69;
- FR-693 — 70;
- FR-694 — 82;
- FR-695 — 89.

У **всіх випадках єдиний тип попередження — `short-paragraph`**. Інших логічних типів зауважень інструмент не повернув.

Це відповідає вже встановленому в B05–B14 патерну: grammar reference містить приклади, формули, таблиці, короткі правила та вправи, які цей heuristic розглядає як окремі короткі абзаци. Тому кількість `short-paragraph` не трактується як граматична помилка і не виправляється штучним злиттям прикладів.

### Structural / content QA

- canonical IDs FR-689–FR-695 залишено унікальними;
- FR-693/694/695 більше не мають паралельного combined canonical node;
- frontmatter узгоджено з чинною `src/content.config.ts`;
- у нових текстах не додано CEFR-міток до пояснювального контенту;
- внутрішні посилання побудовано навколо canonical graph: agreement → dependencies/relatives; ambiguity → attachment/structure/scope; scope → negation/quantifiers/embedding;
- після видалення combined node проведено пошук репозиторію за `scope-negation-quantifiers`; активних посилань на нього не виявлено.

### Git commits

- `c45b94299c8b9332c7d5ff066ecae0305656f609` — FR-689
- `6f8846d9ae0f039fb2d973c2b0972d2277970f8c` — FR-690
- `00be9ce914b09c3b7e1321ba6fcfa401a42e4c1a` — FR-691
- `fabc98213421576a94d6f5983b37f1d176ef152f` — FR-692
- `23cd468beb9fc61825c7a2e0e876e55fabf7febc` — FR-693
- `164fc5dc8a3031954285992db25f00160c6602d6` — FR-694
- `5d0e39e859bb4bad44114ac4502df50723e4d1c5` — FR-695
- `ec6e4bb4078761893afa4455cb52165390c162c8` — видалення redundant combined scope node

### Лічильник

На початку B15: **371 Markdown-стаття**.

Переписано / поглиблено: **7 статей**.

Створено нових файлів: **0**.

Видалено дубльований combined node: **1 файл**.

Після B15: **371 Markdown-стаття** у `src/content/fr/`.

Canonical scope: **740 topic IDs**.

Як і раніше, кількість Markdown-файлів не використовується як псевдоточний remaining count. Після усунення дубльованого mapping точний canonical coverage треба визначати через machine-readable audit, а не через `740 - 371`.

### Coverage milestone

**FR-689–FR-695 тепер мають окремі, повноцінні canonical reference nodes.**

Блок утворює логічний ланцюг:

`agreement through intervening phrases → attachment → grammatical ambiguity → structural ambiguity → negation scope → quantifier scope → general scope/interpretation`.

Наступний pass має продовжити системну перевірку coverage/granularity/graph integrity, а не створення нових topic IDs.


## B16 — 2026-09-26 — contrastive layer FR-696–FR-718

- **Scope:** системно поглиблено українсько-французький контрастивний шар FR-696–FR-718.
- **Принцип:** ці 23 canonical IDs не розмножувалися штучно в 23 окремі нові сторінки; використано наявні тематичні вузли як основні контрастивні reference articles.
- **Оновлено:** 23 existing articles; **нових Markdown-файлів: 0**.
- **Canonical mapping:** FR-696 gender; FR-697 article/zero article; FR-699 null subject; FR-700 word order; FR-701 COD/COI; FR-702 clitics; FR-703 y/en; FR-704 prepositions/cases; FR-705 tense/aspect; FR-706 passé composé/imparfait; FR-707 conditionnel; FR-708 subjonctif; FR-709 impératif; FR-710 relatives; FR-711 negation; FR-712 interrogatives; FR-713 participe passé agreement; FR-714 valency; FR-715 impersonal constructions; FR-716 passive; FR-717 information structure; FR-718 oral syntax.
- **Quality direction:** кожну статтю розширено від короткої примітки до структурованого довідника: швидка відповідь, контраст форм/функцій, приклади FR→UK, типові помилки, алгоритм, мінітест і навігація.
- **Academic Writing Toolkit:** виконано paragraph-logic QA на вибірковій першій шістці B16. Усі знайдені евристичні findings мають єдиний тип `short-paragraph`; це очікувано для прикладів, таблиць, формул і коротких тестових пунктів. Інших типів логічних проблем у повернутому QA не виявлено.
- **Progress:** на старті B16 — **371 Markdown article files**; після B16 — **371**. Це **23 canonical topics deepened**, не +23 files.
- **Canonical scope:** **740 topic IDs**. `740 - 371` не використовується як «залишок тем», оскільки каталог прямо допускає mapping кількох topic IDs в одну статтю або секцію.
- **Git commits:** 23 file-level commits, including FR-706 commit `70c851544bcb5096ef1911113e5b6fe4b9ca9751`.


## B17 — Regional and Francophone variation: FR-654–FR-666

Проведено глибоке поглиблення регіонального та франкофонного блоку. Початковий аудит показав, що 13 сторінок FR-654–FR-666 були дуже короткими reference stubs: вони правильно називали теми, але не давали достатньої системи для lookup, learning і navigation.

### Переписано / поглиблено

- `standard-french-france.md` — **FR-654**
- `quebec-french.md` — **FR-655**
- `belgian-french.md` — **FR-656**
- `swiss-french.md` — **FR-657**
- `african-french.md` — **FR-658**
- `regional-numerals.md` — **FR-659**
- `regional-prepositions.md` — **FR-660**
- `regional-pronouns.md` — **FR-661**
- `regional-syntax.md` — **FR-662**
- `regional-oral-forms.md` — **FR-663**
- `standard-regional-nonstandard.md` — **FR-664**
- `norm-vs-variation.md` — **FR-665**
- `variation-vs-error.md` — **FR-666**

### Що саме виправлено

- розведено **географію, регістр, канал мовлення, частотність і нормативний статус**;
- прибрано модель «незнайоме = помилка»;
- прибрано модель «регіональне = нестандартне»;
- для FR-659 розгорнуто *soixante-dix / septante*, *quatre-vingts / huitante*, *quatre-vingt-dix / nonante*;
- для FR-655–FR-658 додано спільне французьке ядро та внутрішню варіантність замість опису кожного різновиду як монолітної системи;
- для FR-660–FR-662 додано структурний алгоритм: форма/лексема → функція → регістр → географія → статус;
- для FR-663 чітко розведено регіональну усність і загальнофранцузькі усні явища;
- для FR-665–FR-666 додано діагностичні алгоритми для відмежування варіанта, норми, non-standard та помилки;
- посилено український контраст без вигаданих «типових помилок українців».

### Методичний результат

Цей блок тепер працює як пов'язана система:

**конкретний різновид → тип варіантності → статус форми → практичний вибір для активного мовлення → рецептивне розпізнавання.**

Особливо важливо, що активний навчальний стандарт і рецептивний діапазон тепер розведені: учень може мати стабільну продуктивну модель і водночас розуміти регіональні та усні варіанти.

### Academic Writing Toolkit QA

Перевірено репрезентативні концептуальні вступи FR-654, FR-658 і FR-666 через `review_paragraph_logic`.

Інструмент повернув лише `short-paragraph` для кожного ізольовано переданого вступного абзацу; логічних/структурних проблем іншого типу не виявлено. Це очікуваний heuristic warning для коротких самодостатніх абзаців, а не доказ проблеми повних статей.

### Лічильник

На початку B17: **371 Markdown-стаття**.

Нових Markdown-файлів: **0**.

Поглиблено: **13 існуючих статей**.

Після B17: **371 Markdown-стаття**.

Canonical scope: **740 topic IDs**.

Як і в попередніх блоках, `740 - 371` не є точним remaining count: canonical topics і Markdown-файли мають багато-to-one / one-to-many mapping. Точний remaining count потребує повного machine-readable coverage manifest.

### Наступний крок

Перейти до наступного найслабшого раннього canonical block і продовжувати не page-count, а **depth + coverage + graph consistency** аудит.


## B18 — Spoken French and register: FR-639–FR-653

Проведено глибоке поглиблення наступного слабкого блоку після FR-654–FR-666. Аудит показав, що більшість сторінок FR-639–FR-653 були короткими reference stubs. Натомість FR-651 вже мав достатньо розгорнутий вузол `oral-syntax.md` (canonical mapping FR-718) і не був штучно дубльований.

### Переписано / поглиблено

- `standard-spoken-french.md` — **FR-639**
- `neutral-register.md` — **FR-640**
- `formal-register.md` — **FR-641**
- `informal-register.md` — **FR-642**
- `literary-register.md` — **FR-643**
- `ne-dropping.md` — **FR-644**
- `oral-reductions.md` — **FR-645**
- `colloquial-questions.md` — **FR-646**
- `colloquial-pronoun-order.md` — **FR-647**
- `on-spoken.md` — **FR-648**
- `subject-dislocation.md` — **FR-649**
- `fillers.md` — **FR-650**
- `written-spoken-contrast.md` — **FR-652**
- `grammatical-variation.md` — **FR-653**

### Не дубльовано

- **FR-651** залишено на наявному `oral-syntax.md` / canonical FR-718 вузлі, оскільки окремий FR-651 page не давав би самостійної цінності без штучного дроблення.

### Методичний результат

Блок перебудовано навколо кількох незалежних осей:

**норма ↔ регістр ↔ канал ↔ регіон ↔ дискурсивна функція.**

Особливу увагу приділено тому, щоб:
- не ототожнювати усне з неправильним;
- не ототожнювати формальне з письмовим;
- не трактувати випадіння `ne` як «зникнення заперечення»;
- не трактувати усні скорочення як орфографічну норму;
- не описувати `on` як простий синонім `nous`;
- не називати дислокацію «подвійним підметом»;
- розрізняти fillers, дискурсивні частки та власне члени речення;
- описувати варіантність через її розподіл, а не через бінарне «правильно/неправильно».

### Контрастивний шар

Для україномовного учня додано системні пояснення щодо відмінностей між українською та французькою в запереченні, питаннях, `on/nous`, клитичному порядку, дислокації та усно-письмовій варіантності. Уникнуто неперевірених списків «типових помилок українців».

### Academic Writing Toolkit QA

Перевірено через `review_paragraph_logic` репрезентативні повні сторінки:
- FR-639 — 33 findings;
- FR-644 — 39 findings;
- FR-646 — 37 findings;
- FR-649 — 29 findings;
- FR-650 — 23 findings;
- FR-653 — 36 findings.

У всіх шести перевірених сторінках єдиний тип finding — `short-paragraph`. Інших логічних/структурних типів проблем інструмент не повернув. Як і в попередніх batches, ці findings значною мірою припадають на приклади, формули, короткі правила та тестові пункти, тому вони не трактуються як граматичні помилки й не усуваються штучним об'єднанням прикладів.

### Structural QA

- canonical mappings FR-639–FR-650 та FR-652–FR-653 збережено;
- FR-651 не розмножено штучно через уже наявний достатній oral-syntax node;
- у FR-648 виправлено назву джерела `Grande Grammaire du français`;
- внутрішні посилання спрямовано на сусідні canonical nodes блоку;
- нових Markdown-файлів не створено.

### Git commits

- FR-639: `c08090a75a46b49a9cfa1f6c2f7195e38cf85cf9`
- FR-640: `3fca0137528876a7633864e401c9061223ca1f48`
- FR-641: `fdf273d3b9ec044c7837af487d5d99782e85f6f3`
- FR-642: `7a5db7c073847e0c1ec90b50ac8ed116b77b0378`
- FR-643: `2ec44524b9d9365317fc2a37dd88ac4fc902e3f1`
- FR-644: `29ce1cbfa6d47c53b74e6f8961cd8e0bc0891cc2`
- FR-645: `4d0e151940966325105247074f00020de2a9a845`
- FR-646: `edf1547a6f7dc88497e52cd1bdb7170e33b2f0f1`
- FR-647: `b50dd7aa45632da6c55fb97f73c21b0657547af5`
- FR-648: `89b7e7fc336e4e71ed577d7d5ea4231204e6aac9`
- FR-649: `a8bd807209979c2310afbe63ed19e406afbeaee6`
- FR-650: `e3cee1033211f6db108ebc2ad185cec88ae0b279`
- FR-652: `c6ac6ceb1f41c82abd9e6a7427d25b151a3584c1`
- FR-653: `32ad5db1bb1577f14d6272d44cbced76d0b41d33`

### Лічильник

На початку B18: **371 Markdown-стаття**.

Нових Markdown-файлів: **0**.

Поглиблено: **14 існуючих статей**.

Після B18: **371 Markdown-стаття**.

Canonical scope: **740 topic IDs**.

Як і раніше, `740 - 371` не є точним remaining count: canonical topics і Markdown-файли мають many-to-one / one-to-many mapping. Точний remaining count можливий лише після повного machine-readable coverage audit.

### Наступний крок

Продовжити ранній coverage/depth pass: перевіряти найкоротші canonical nodes, але не створювати сторінки там, де topic уже адекватно покритий наявною canonical article або секцією.


## B19 — 2026-09-26 — Information structure and discourse: FR-624–FR-637 (selected weak nodes)

Проведено черговий depth/coverage pass після B18. Аудит коротких canonical nodes показав, що частина блоку інформаційної структури й дискурсу все ще залишалася на рівні коротких reference stubs. Замість механічного створення нових сторінок поглиблено наявні canonical nodes.

### Переписано / поглиблено

- `cleft-constructions.md` — **FR-624**
- `cest-qui-que.md` — **FR-625**
- `ce-qui-cest.md` — **FR-626**
- `dislocation.md` — **FR-627**
- `cataphoric-reference.md` — **FR-632**
- `ellipsis.md` — **FR-634**
- `discourse-connectors.md` — **FR-636**
- `discourse-particles.md` — **FR-637**

### Що саме поглиблено

- для FR-624–FR-626 розведено **cleft-конструкцію, інформаційне виділення, синтаксичну роль X та контраст**;
- для FR-625 окремо закріплено діагностику `qui` / `que` через функцію виділеного компонента, а не через семантичний тип імені;
- для FR-626 систематизовано `ce qui` / `ce que` та зв'язок між синтаксисом і тематико-фокусною організацією;
- для FR-627 розведено ліву/праву дизлокацію, кореферентний займенник, тему, контраст і топікалізацію;
- для FR-632 чітко розведено **катафору, анафору та кореференцію** і додано діагностику через попередній/наступний контекст;
- для FR-634 розширено еліпсис у діалозі та координації й критерій відновлюваності;
- для FR-636 розведено **дискурсивний конектор** і синтаксичний сполучник, а також логічне відношення, позицію та регістр;
- для FR-637 розведено дискурсивні частки, конектори, пропозиційний зміст і дискурсивну функцію; окремо показано контекстну багатофункціональність `alors`, `bon`, `enfin`.

### Контрастивний шар

Український контраст побудовано не як список «типових помилок», а як діагностичні відмінності: українська частіше може передавати інформаційне виділення порядком слів та інтонацією, тоді як французька має спеціалізовані cleft/dislocation-моделі; українська також допускає еліптичні відповіді та катафоричні структури, тому їх не слід штучно трактувати як французьку аномалію.

### Canonical graph

Блок збережено як пов'язану систему:

`focus → cleft → c'est ... qui/que → ce qui/ce que ... c'est → dislocation → reference → ellipsis → discourse connectors/particles`.

Не створювалися штучні дублікати для вже наявних information-structure/reference nodes.

### Academic Writing Toolkit QA

Усі 8 переписаних сторінок перевірено через `review_paragraph_logic` після оновлення:

- FR-624 / `cleft-constructions.md` — **42 findings**;
- FR-625 / `cest-qui-que.md` — **37 findings**;
- FR-626 / `ce-qui-cest.md` — **39 findings**;
- FR-627 / `dislocation.md` — **43 findings**;
- FR-632 / `cataphoric-reference.md` — **37 findings**;
- FR-634 / `ellipsis.md` — **38 findings**;
- FR-636 / `discourse-connectors.md` — **36 findings**;
- FR-637 / `discourse-particles.md` — **46 findings**.

У **всіх 8 випадках єдиний тип finding — `short-paragraph`**. Інших логічних типів інструмент не повернув. Ці heuristic warnings відповідають структурі reference-статей із прикладами, формулами, таблицями та короткими тестовими пунктами й не є самі по собі доказом граматичної помилки.

### Лічильник

На початку B19: **371 Markdown-стаття**.

Нових Markdown-файлів: **0**.

Поглиблено: **8 існуючих статей**.

Після B19: **371 Markdown-стаття**.

Canonical scope: **740 topic IDs**.

Як і раніше, `740 - 371` не використовується як точний remaining count: canonical IDs і Markdown-файли мають many-to-one / one-to-many mapping.

### Наступний крок

Продовжити depth audit наступного слабкого canonical block, перевіряючи короткі вузли не лише за розміром, а й за самостійністю coverage, дублюванням та зв'язками canonical graph.


## B20 — Information structure: theme, focus and topicalisation

Опрацьовано наступний слабкий, але концептуально пов’язаний вузол після B19: FR-621–FR-623 та FR-628.

Переписано й поглиблено:
- `src/content/fr/theme-rheme.md` — FR-621
- `src/content/fr/focus.md` — FR-622
- `src/content/fr/contrastive-focus.md` — FR-623
- `src/content/fr/topicalization.md` — FR-628

### Що виправлено та поглиблено

- чітко розмежовано інформаційні категорії **тема / рема / фокус / дане / нове** без зведення їх одна до одної;
- підкреслено, що тему й фокус не можна визначати лише за позицією слова або граматичною роллю;
- додано контекстні діагностики через питання *Qui ? / Qu’est-ce que ? / Quand ?*;
- розмежовано нейтральний фокус і контрастивний фокус;
- показано явні та неявні альтернативи, корекцію й контраст без штучного правила «контраст = pas X»;
- для cleft-конструкцій послідовно використано синтаксичний критерій **qui/que**, а не людськість виділеного компонента;
- топікалізацію розглянуто як інформаційну функцію, а дизлокацію — як конкретнішу синтаксико-дискурсивну реалізацію;
- розмежовано об’єктну тематизацію з кореферентним клитиком та рамкові початкові компоненти;
- посилено контраст із українською: порядок слів, відмінкове маркування, просодія, *саме* та тематичні конструкції;
- додано алгоритми діагностики, типові помилки й мінітести;
- узгоджено навігацію між FR-621 → FR-622 → FR-623 → FR-624–FR-626 та FR-628, не створюючи дубльованих сторінок.

### Academic Writing Toolkit QA

Повний `review_paragraph_logic` виконано для всіх чотирьох переписаних статей.

Інструмент повернув попередження типу `short-paragraph`, що очікувано для grammar reference: приклади, формули, таблиці, тестові пункти та короткі діагностичні правила розглядаються як окремі абзаци. Інших типів логічних зауважень у повернутих результатах не було.

Як і в B18–B19, ці результати не трактуються як граматичний fact-check: короткі приклади є навмисною частиною довідникової структури.

### Лічильник

- статей Markdown до B20: **371**
- нових Markdown-файлів: **0**
- поглиблено: **4**
- статей Markdown після B20: **371**
- canonical scope: **740 topic IDs**
- `740 - 371` не є точним лічильником залишку, оскільки canonical IDs можуть мапитися на спільні або розширені статті.

### Наступний крок

Продовжувати depth-аудит слабких canonical nodes, а не просто рухатися за числовим порядком. Для кожного кандидата перевіряти розмір і зміст статті, незалежність покриття, дублювання та зв’язок із уже поглибленими вузлами.


## B21 — Relative pronouns: deepening FR-495–FR-501 weak nodes

Проведено наступний depth/coverage audit після B20. Серед найкоротших ще не поглиблених вузлів виявлено компактний, але фундаментальний кластер відносних займенників. Замість створення нових дубльованих сторінок поглиблено шість уже наявних canonical nodes.

### Переписано / поглиблено

- `relative-qui.md` — **FR-495**
- `relative-que.md` — **FR-496**
- `relative-dont.md` — **FR-497**
- `relative-ou.md` — **FR-498**
- `relative-lequel.md` — **FR-499**
- `ce-qui-ce-que-ce-dont.md` — **FR-501**

### Що саме поглиблено

- FR-495: діагностика *qui* через підметову функцію, контраст із *que/dont/où*, особові й предметні антецеденти, прийменникові конструкції та український контраст;
- FR-496: *que* як COD, відновлення вихідного речення, контраст із *qui/dont/lequel*, а також зв'язок із узгодженням *participe passé* з *avoir*;
- FR-497: *dont* як реалізація залежності з **de** після дієслів, прикметників та іменників, відмежування від *que* і прийменникових *lequel*, застереження проти дублювання *de*;
- FR-498: *où* для місця й часу, контраст із *qui/que/lequel*, часові конструкції з *que*, а також окремо зафіксовано сучасну нормативну рекомендацію проти дублювання місцевого компонента в конструкції на кшталт *C'est dans cet hôpital où il travaille*;
- FR-499: повну парадигму *lequel/laquelle/lesquels/lesquelles*, злиття з *à/de*, відмінність *dont* від *duquel*, вибір *qui/lequel* після прийменника та український відмінковий контраст;
- FR-501: системну діагностику *ce qui / ce que / ce dont*, контраст із самостійним *qui*, зв'язок із *c'est...* та інформаційною структурою без змішування синтаксичної й дискурсивної функцій.

### Джерельний cross-check

Для точкової перевірки відносних конструкцій звірено актуальні матеріали Académie française та довідковий опис системи *qui/que/dont/où/lequel*. Особливо перевірено:
- узгодження форм *lequel* за родом і числом;
- розмежування *dont* та конструкцій із уже вираженим *de*;
- *où* у часових relatives та окремі часові вирази з *que*;
- розподіл *qui / que / dont / où / lequel* за синтаксичною функцією.

### Academic Writing Toolkit QA

Повний `review_paragraph_logic` виконано для всіх шести переписаних сторінок.

Результати:
- FR-495 / `relative-qui.md` — **68 findings**
- FR-496 / `relative-que.md` — **67 findings**
- FR-497 / `relative-dont.md` — лише **short-paragraph** findings
- FR-498 / `relative-ou.md` — **72 findings**
- FR-499 / `relative-lequel.md` — **22 findings**
- FR-501 / `ce-qui-ce-que-ce-dont.md` — **33 findings**

У перевірених результатах findings належать до одного heuristic type — `short-paragraph`. Інших логічних типів зауважень інструмент не повернув. Як і в B18–B20, це очікуваний сигнал для grammar-reference сторінок: окремі приклади, формули, таблиці, мінітести й короткі правила навмисно є самостійними блоками. Їх не об'єднано штучно лише для зменшення heuristic count.

### Repository integrity

Після B21 фактичний listing `src/content/fr/` на поточній гілці містить **370 Markdown-файлів**. Попередні записи B16–B20 помилково продовжували рахувати **371** після видалення redundant `scope-negation-quantifiers.md` у B15. Цей запис виправляє лічильник: **370 — актуальна кількість Markdown-файлів**.

Нових Markdown-файлів у B21: **0**.

Отже:
- до B21: **370**
- нових: **0**
- поглиблено: **6**
- після B21: **370**

Canonical scope: **740 topic IDs**.

Як і раніше, `740 - 370` **не є точним remaining count**: canonical IDs можуть мапитися many-to-one / one-to-many на Markdown-файли. Точний залишок потребує machine-readable coverage manifest.

### Git commits B21

- FR-495: `3b99839072bae64c9a518ae76e57af1439190141`
- FR-496: `03d111037820aee25240179b35d67a0b83a6f02b`
- FR-497: `31aa49e9bc571873efb9366fc9991083955bac19`
- FR-498: `bd13ae397bc4c5a4ab865093710a18e852608eb5`
- FR-499 + FR-501: `d89c17b0dbc54eacff549a9ba40b34ca10da31b5`

### Наступний крок

Продовжувати depth-аудит за фактичною слабкістю сторінок, але після relative-pronoun cluster уникати штучного дроблення. Наступні кандидати мають перевірятися разом із canonical graph та вже поглибленими сторінками, щоб одна тема не була розмазана по дубльованих reference stubs.

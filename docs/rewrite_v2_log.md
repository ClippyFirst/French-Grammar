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

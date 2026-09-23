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

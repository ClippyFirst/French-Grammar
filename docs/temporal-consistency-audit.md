# B08 — Temporal cross-page consistency audit

## Scope

Перевірено часовий вузол репозиторію на гілці `rewrite/ukrainian-grammar-v2`:

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

Окремо додано `temporal-conjunctions.md).

## Виявлені системні проблеми

### 1. Часові прийменники містили надмірно жорсткі правила

Стара редакція `prepositions-time.md` містила твердження:

- `pendant` нібито не вживається з майбутнім часом;
- `en` описувався надто широко як «тривалість завершеної дії»;
- `à` подавався як прийменник лише для годинника;
- `depuis` зводився до дії, яка обов'язково триває досі.

Це створювало суперечність із системою B07, де часові форми визначаються перспективою та точкою відліку, а не автоматичними словами-тригерами.

### 2. Виправлено

`prepositions-time.md` переписано через часові функції:

- `en` — час, потрібний для виконання/досягнення результату;
- `dans` — позиція майбутньої події відносно точки відліку;
- `pendant` — часовий інтервал;
- `depuis` — початкова точка періоду;
- `jusqu'à` — кінцева межа;
- `avant/après` — відношення до часової точки або події.

Особливо виправлено приклад:

`Je travaillerai pendant deux ans.`

Він граматично можливий і не потребує додаткового `à partir de demain`.

### 3. Додано окремий вузол temporal conjunctions

Створено `temporal-conjunctions.md`, який систематизує:

- `quand`
- `lorsque`
- `dès que`
- `aussitôt que`
- `pendant que`
- `avant que`
- `après que`
- `depuis que`

Ключовий принцип: сполучник не визначає один-єдиний час. Вибір часу залежить від часової перспективи.

## Особливо важливі контрасти

### Quand / lorsque

`Quand tu arriveras, nous commencerons.`

Майбутній futur після часової конструкції є нормальним французьким рішенням.

Для завершення до другої майбутньої ситуації:

`Quand tu auras fini, nous partirons.`

### Avant que / après que

`Avant que tu partes, préviens-moi.`

→ `avant que + subjonctif`.

`Après que tu auras fini, nous partirons.`

→ `après que + indicatif`.

Це правило перевірено за матеріалами Académie française. Академія прямо протиставляє `avant que` як конструкцію з notion d'éventualité та `après que`, яке вводить факт, що розглядається як здійснений, і вимагає indicatif. У її прикладі для майбутнього вжито `Je rentrerai après que la nuit sera tombée`. citeturn0search0turn0search1

### Pendant que

Не можна робити правило:

> `pendant que` → imparfait.

Правильніше:

> `pendant que` створює часову рамку/відношення одночасності; конкретний час залежить від часової перспективи.

### Si

Чітко розведено:

- `Si tu viens, nous partirons.` — умовне `si`;
- `Je ne sais pas s'il viendra.` — `si` = «чи».

Це дозволяє пояснити, чому futur можливий після `si` у непрямому питанні, але не в стандартній умовній конструкції.

## Academic Writing Toolkit

Перевірено два нових концептуальних фрагменти:

1. система `en / dans / pendant`;
2. система `quand / futur antérieur / avant que / après que`.

Результат:

- фрагмент 1: `issue_count = 0`;
- фрагмент 2: `issue_count = 0`.

Як і в B05–B07, повні grammar pages не використовуються як кількісний zero-warning gate: приклади, таблиці, формули та вправи природно породжують `short-paragraph` сигнали.

## Джерельна перевірка

Основне нормативне твердження щодо `après que + indicatif` звірено з Académie française:

- `après que` → indicatif;
- приклад майбутнього: `Je rentrerai après que la nuit sera tombée`;
- приклад минулого: `Il est parti après que nous l'avons tous salué`. citeturn0search1

## Залишкові питання

Цей аудит не намагається охопити всі рідкісні літературні часи, зокрема passé antérieur, futur antérieur surcomposé та інші складні форми. Вони можуть бути додані окремим блоком advanced/literary French, щоб не перевантажувати базову систему.

Наступний великий крок: повний аудит аспектуальності та контрастів `passé composé / imparfait / plus-que-parfait`, а також систематичний аудит `subjonctif` у часових і відносних конструкціях.

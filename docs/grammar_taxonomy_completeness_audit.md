# Canonical taxonomy — completeness audit

Дата: 2026-09-25

## Висновок

Канонічний каталог у docs/grammar_taxonomy_canonical.md достатній як scope benchmark для початку системного переписування.

Він не є механічним переліком усіх можливих мікроправил французької. Мікроправила повинні входити до відповідних canonical topics, інакше каталог перетвориться на енциклопедичний список без навчальної гранулярності.

## Перевірені великі системи

### Номінальна система
- іменник: рід, число, власні назви, складні іменники, масовість;
- детермінативи: definite, indefinite, partitive, zero, possessive, demonstrative, interrogative, indefinite, quantifying;
- прикметники: форма, узгодження, позиція, значення позиції, comparison;
- займенники: subject, tonic, COD/COI, clitics, reflexive, demonstrative, possessive, indefinite, interrogative, relative, y/en.

### Вербальна система
- conjugation classes;
- auxiliaries;
- irregular verbs;
- infinitive, participles, gérondif;
- transitivity and valency;
- present, past and future indicative;
- conditional;
- subjunctive;
- imperative;
- tense/aspect relations;
- agreement;
- passive;
- causative;
- impersonal constructions;
- reported speech;
- modal meanings.

### Синтаксис
- simple clause;
- word order;
- subject/predicate/complements;
- coordination;
- complementation;
- adverbial subordination;
- relative clauses;
- infinitival and participial clauses;
- questions;
- negation;
- exclamatives;
- information structure;
- ellipsis/dislocation/presentatives;
- embedding and structural ambiguity.

### Usage and variation
- written standard;
- spoken standard;
- formal/neutral/informal/literary register;
- contemporary spoken phenomena;
- France/Québec/Belgium/Switzerland/African Francophonie;
- standard vs regional/non-standard variation;
- orthography and Nouvelle Orthographe.

### Practical reference systems
- numbers;
- dates;
- time;
- duration;
- age;
- money;
- measurements;
- addresses and number formats.

## Cross-check against external reference grammars

The taxonomy was checked against current reference-grammar structures. A 2025 edition of French Grammar and Usage explicitly organizes coverage around nouns, determiners, pronouns, adjectives, adverbs, numbers/measurements/time/quantifiers, verb forms/constructions, agreement, tense, subjunctive/modal verbs/exclamatives/imperatives, infinitive, prepositions, questions, relatives, negation, conjunctions/linking constructions and orthography. This maps cleanly onto the canonical taxonomy.

Advanced French Grammar separately identifies pronunciation/spelling/registers/punctuation, present and other tenses, subjunctive, conditional/hypothesis, imperative, infinitive, participles, passive, impersonal verbs, pronominal verbs, modal verbs, determiners, possessives, demonstratives, prepositions, interrogatives and inversion. These areas are also represented.

The major structural gap in the old 367-item matrix was not a missing single tense or pronoun, but insufficient separation of:
- syntax and information structure;
- infinitival/participial constructions;
- valency and verb constructions;
- modal meanings;
- spoken grammar;
- register/variation;
- reference-only advanced constructions;
- explicit Ukrainian contrastive coverage.

The new canonical catalog resolves these at the taxonomy level.

## Important methodological decision

A universal learner reference should distinguish:

1. **core grammar** — structures every serious learner may need;
2. **advanced/reference grammar** — literary, rare, historical or highly specialized constructions;
3. **usage/variation** — what changes by register, medium or region;
4. **contrastive Ukrainian layer** — where the French system needs a Ukrainian-oriented explanation.

These must not be mixed into one undifferentiated list.

## What remains before rewriting

The taxonomy is now the scope benchmark. The remaining work is implementation rather than further brainstorming of topics:

1. map all existing Markdown pages to canonical IDs;
2. identify duplicate pages and merge targets;
3. create grammar-manifest.mjs;
4. assign level/status/register/scope;
5. create prerequisite/contrast/next edges;
6. audit every planned topic for article coverage;
7. only then begin systematic rewriting.

A future source audit may add a genuinely missing system-level topic, but individual examples, exceptions and lexical patterns should normally be absorbed into an existing topic rather than expanding the taxonomy indefinitely.

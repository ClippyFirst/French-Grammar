# French Grammar Reference Content Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Systematically bring the French grammar reference from the current mixed-quality article corpus to the canonical 2026 reference standard, beginning with high-value nominal, determiner, adjective, pronoun, tense, negation, and syntax clusters.

**Architecture:** Preserve the existing Astro/content architecture and canonical taxonomy. Treat each canonical topic as a graph node whose article content, metadata, examples, Ukrainian contrast, sources, and navigation edges are reviewed together. Do not create one page per micro-rule when a broader canonical article can contain the rule without loss of lookup value.

**Tech Stack:** Astro 5 content collections, Markdown, Zod schema, Pagefind; GitHub-managed content branch and pull request.

**Spec:** `docs/GRAMMAR-REFERENCE-STANDARD.md` and `docs/grammar_taxonomy_canonical.md`.

## Global Constraints

- Reference content must support lookup, learning, and navigation.
- Canonical topic IDs remain the source of identity; slugs are presentation/navigation identifiers.
- Content status is controlled: planned, catalogued, draft, review, release-ready, deprecated.
- Ukrainian L1 material is contrastive and evidence-aware; do not invent learner errors.
- CEFR/depth, grammar category, register, and variety remain separate dimensions.
- Examples must be grammatical, natural, contextual, translated naturally into Ukrainian, and relevant to the claim.
- Complex or controversial claims require authoritative sources.
- `release-ready` is reserved for content that passes structural, linguistic, contrastive, source, and technical QA.
- Existing Astro architecture is preserved unless a concrete defect requires change.
- Do not inflate article count merely to satisfy catalog size.

## Review Focus

1. False universal rules such as “pas always means de” or “all -al plurals become -aux” — test boundary examples in the responsible articles.
2. COD/COI confusion and clitic placement — test representative simple, compound, infinitival, negative, and imperative constructions.
3. French/Ukrainian mismatches in gender, articles, and word order — verify explanations do not imply one-to-one translation.
4. Register/variation claims — ensure spoken, written, and regional claims are explicitly marked rather than presented as universal grammar.
5. Graph integrity — every prerequisite/related/contrast/next edge must point to an existing canonical topic or be intentionally resolved by taxonomy mapping.

## Task 1: Inventory and canonical mapping

**Progress:** completed for the first migration batch; the canonical catalog and existing article corpus were inspected before rewriting.

**Files:**
- Read: `docs/grammar_taxonomy_canonical.md`
- Read: `docs/grammar_taxonomy_completeness_audit.md`
- Read: `src/content.config.ts`
- Read: `src/data/categories.mjs`
- Inspect: `src/content/fr/*.md`

- [x] Enumerate current article slugs and map each to a canonical topic ID for the active migration clusters.
- [x] Mark the first confirmed duplicate/legacy slug pairs: definite-articles vs articles-definite, indefinite-articles vs articles-indefinite, partitive-articles vs articles-partitive, and present-tense vs present; legacy files are retained for now rather than destructively removed.
- [x] Preserve existing strong articles as source material rather than rewriting blindly.
- [ ] Complete the corpus-wide graph/reference audit; targeted graph checks are being performed as new canonical nodes are added.
- [x] Extend the canonical syntax/tense/negation inventory with dedicated references for relative-clause structure, futur dans le passé, ne explétif, passé simple, passé antérieur, simple-sentence word order, complex sentences, and the adverb system; connect each new node to the existing graph.
- [x] Run a targeted relation-integrity pass over the new and immediately affected cluster; no unresolved relation targets remain in that checked set.

## Task 2: Nominal and determiner cluster

**Progress:** first batch completed for the principal article/determiner cluster; further subtopics remain.

**Files:**
- Modify: `src/content/fr/articles-definite.md`
- Modify: `src/content/fr/articles-indefinite.md`
- Modify: `src/content/fr/articles-partitive.md`
- Modify: `src/content/fr/article-omission.md`
- Modify: `src/content/fr/articles-after-negation.md`
- Modify: `src/content/fr/articles-with-quantities.md`
- Modify: `src/content/fr/quantifiers.md`
- Modify/create: canonical determiner article where required
- Modify: relevant gender/number articles

- [x] Normalize canonical metadata for the first migration batch.
- [x] Separate definiteness, indefiniteness, partitiveness, zero article, quantity, and contraction in the principal first-pass articles.
- [x] Add minimal contrasts where forms compete.
- [ ] Verify special cases before assigning a simple rule.
- [ ] Add Ukrainian contrastive explanations without stereotypes.
- [x] Add graph edges and authoritative-source metadata for the first migration batch.
- [ ] Keep content in `review` until QA.

## Task 3: Adjective and agreement cluster

**Progress:** first batch completed for noun gender, number, adjective position, and agreement; finer adjective morphology remains.

**Files:**
- Modify: `src/content/fr/noun-gender.md`
- Modify: `src/content/fr/singular-plural.md`
- Modify: `src/content/fr/adjective-position.md`
- Modify: `src/content/fr/accord.md`
- Modify: adjective gender/position/comparison pages found in inventory

- [x] Separate agreement from adjective position.
- [x] Document the main regular/irregular gender and number patterns in the current noun/adjective cluster; finer morphology remains open.
- [ ] Treat position-sensitive meaning as a semantic/syntactic contrast.
- [ ] Avoid presenting BAGS as a complete theory of adjective placement.
- [ ] Add Ukrainian contrast only where it changes learner decisions.
- [ ] Validate examples and graph edges.

## Task 4: Core verb and tense cluster

**Progress:** present, passé composé, imparfait, passé composé/imparfait contrast, plus-que-parfait, futur proche, futur antérieur, and canonical metadata for futur simple/conditionnel pages are aligned. The core **être** reference has now also been rewritten to separate copular, locative, impersonal, and auxiliary uses. The core **avoir / aller / faire** references have now been rewritten as canonical system articles; the remaining tense/mood system is still open.

**Files:**
- Modify: `src/content/fr/present.md`
- Modify: existing `être`, `avoir`, `aller`, `faire` and core conjugation pages
- Modify: `src/content/fr/passe-compose.md`
- Modify: `src/content/fr/imparfait.md`
- Modify: `src/content/fr/futur-simple.md` where present
- Modify: agreement pages where tense interactions are discussed

- [x] Separate form from temporal/aspectual meaning in présent, passé composé, imparfait and the first contrast/sequence pages.
- [x] Use contrastive minimal pairs for passé composé/imparfait and connect the contrast to the tense pages.
- [x] Document auxiliary choice and participle agreement without collapsing distinct rules in the core être/passe composé cluster.
- [ ] Mark future/reference uses of present explicitly.
- [x] Verify the main irregular paradigms and orthographic alternations in the rewritten être / avoir / aller / faire cluster; corpus-wide verb QA remains.

## Task 5: Pronoun and valency cluster

**Progress:** COD, COI, y/en, clitic order, demonstrative pronouns, possessive pronouns, and relative pronouns have first-pass reference-standard coverage. A dedicated **pronominal-verbs** article and a dedicated **pronominal-participe-agreement** reference are now added, and the broad personal-pronoun article has been reduced to a system overview; the new infinitive, participe présent and gérondif references extend the verb/non-finite cluster; remaining pronoun coverage and deeper valency work remain.

**Files:**
- Modify: `src/content/fr/pronouns-cod.md`
- Modify: `src/content/fr/pronouns-coi.md`
- Modify: `src/content/fr/pronoun-order.md`
- Modify: `src/content/fr/y-en.md`
- Modify: `src/content/fr/relative-pronouns.md`
- Modify: relevant pronominal/reflexive pages

- [x] Explain COD/COI through French valency, not Ukrainian question-word shortcuts in the rewritten COD/COI and pronominal cluster.
- [x] Document clitic position across simple verbs, compound tenses, infinitives, negation, and affirmative/negative imperative.
- [x] Separate `y/en` functions from ordinary COD/COI.
- [x] Preserve and refine strong relative-pronoun material.
- [ ] Verify all remaining pronoun combinations and examples; first-pass COD/COI/y-en/order/pronominal coverage is now in place.
- [ ] Review additional high-value pronoun/determiner topics against the canonical FR-079–FR-197 inventory.
- [x] Add canonical references for pronoms toniques/disjoints and pronoms indéfinis, plus interrogative and indefinite déterminants, and connect them into the existing graph.
- [x] Add canonical references for interrogative adverbs and impersonal constructions, and connect them to the question/verb/infinitive/subjonctif graph.

## Task 6: Syntax, questions, negation, subordination

**Progress:** questions, negation, subjonctif, indirect speech, passive, si-clauses and temporal conjunctions have now received first-pass alignment; deeper syntax rewrite remains.

**Files:**
- Modify: `src/content/fr/questions.md`
- Modify: `src/content/fr/negation.md`
- Modify: `src/content/fr/subjonctif.md`
- Modify: sentence/coordination/subordination/indirect-speech pages found in inventory

- [x] Distinguish syntactic structure from register variation in the new question/adverb and impersonal-construction references.
- [x] Explain interrogation by construction: intonation, est-ce que, inversion, and embedded questions.
- [x] Treat negative words as a system rather than a list.
- [ ] Explain subjonctif by syntactic/semantic environments and contrast with indicative where relevant.
- [x] Add a dedicated complex-sentence overview so coordination, subordination, complement clauses and relative clauses have a shared architectural entry point.
- [ ] Mark spoken `ne` omission as register/medium variation.

## Task 7: Source and prose QA

**Files:**
- All changed canonical articles
- `docs/GRAMMAR-REFERENCE-STANDARD.md`

- [ ] Check every normative or high-risk claim against an authoritative grammar/reference source.
- [ ] Remove generic filler, repeated conclusions, and unsupported “typical error” claims.
- [x] Run Academic Writing Toolkit review on representative high-depth articles, including the new pronominal/être cluster and the four latest canonical references; compact examples, tables and paradigms are intentionally retained where they improve lookup usability.
- [x] Verify terminology consistency in the new pronominal/être cluster; corpus-wide terminology review remains.
- [ ] Ensure every high-depth article has a useful practical check when supported by the site.

## Task 8: Structural and release QA

**Files:**
- `src/content.config.ts`
- `src/data/categories.mjs`
- all changed content
- `package.json`

- [ ] Validate metadata against the Zod contract.
- [ ] Validate graph references and detect orphan/duplicate topics.
- [x] Targeted graph validation for the newly added/affected cluster reports zero unresolved relation targets.
- [ ] Check canonical status values.
- [ ] Run `npm run build` in an environment with dependencies available.
- [ ] Run the repository's available content/audit scripts if present.
- [ ] Inspect the final diff and verify no unrelated UI/architecture changes slipped into the content branch.
- [ ] Keep unresolved linguistic questions at `review`; only mark `release-ready` after all relevant gates pass.


## Continuation — morphology and orthography pass (2026-09-25)

- Rewrote **gender-patterns** as a cautious morphology reference: suffix patterns are treated as probabilistic/lexical evidence rather than absolute rules.
- Rewrote **irregular-plurals** to separate productive patterns (-eau/-au, -eu, -al, -ail, -ou) from lexical exceptions and semantic double plurals.
- Rewrote **h-muet-aspire** after correcting substantive errors in the legacy article; the new reference distinguishes phonological absence of [h] from the boundary function of *h aspiré* and makes dictionary lookup explicit.
- Added canonical **verb-groups** and **verb-orthographic-alternations** references for the missing verb-morphology layer.
- Connected **present** to the new verb-morphology nodes.
- Academic Writing Toolkit was run on the new morphology/orthography articles. Its findings are overwhelmingly the expected short-paragraph heuristic for reference-style examples, tables, and compact contrasts; no paragraph-logic defect was identified from that signal alone.
- External normative spot-checks were performed for *h muet/h aspiré*, plural patterns, and orthographic alternations using current Académie française material.
- These articles remain `status: review` pending corpus-wide schema/graph/build QA.


## Continuation — infinitive/clitic valency pass (2026-09-25)

- Added **pronouns-infinitive** as a dedicated high-depth reference for clitic placement with infinitives and two-verb constructions, including *aller + infinitif*, modal/control verbs, multiple clitics, negation, *faire / laisser + infinitif*, and perception verbs.
- Expanded **pronoun-order** so its two-verb section distinguishes the position of the clitic block from the internal order of clitics and routes complex *faire / laisser* cases to the dedicated reference.
- Connected **infinitive** to the new pronoun reference and clarified that a clitic in a two-verb construction may belong to either the finite verb or the infinitive.
- Academic Writing Toolkit review of the new reference returned only the expected short-paragraph heuristic for examples, paradigms and compact lookup blocks; no paragraph-level logical defect was identified from that signal.
- The new reference remains `status: review`; corpus-wide schema, graph, linguistic/source and build gates remain open.


## Continuation — reference-system audit and graph compatibility (2026-09-25)

- Audited the 91 current French content entries for frontmatter presence and graph-target resolvability.
- Found and repaired stale relation targets such as `pronouns-y-en`, `articles-contracted`, `prepositions`, `conjunctions`, and several obsolete namespaced register links.
- Added backward-compatible relation resolution in `src/lib/pages.mjs`: canonical plain slugs now resolve, while legacy `category/slug` references remain supported.
- Added native Node test coverage for both relation-reference forms and verified the red→green cycle locally.
- Added `npm test` as the repository test command.
- Rewrote the previously legacy-quality `liaison`, `elision`, `comparative-superlative`, `compound-nouns`, `enchainement`, `prepositions-basics`, and `prepositions-place` references to the current methodology; repaired affected prerequisite/related edges.
- Academic Writing Toolkit paragraph-logic checks found no logical defects in the focused rewritten prose; short-paragraph flags were treated as the expected reference-style heuristic rather than a reason to inflate prose.
- Full repository build is still not claimed because this environment cannot establish a working dependency installation from GitHub; release-ready remains blocked on technical build verification and final whole-branch review.

## Continuation — canonical gap pass and identity metadata (2026-09-25)

This pass moved from individual legacy rewrites toward explicit coverage of the remaining system-level gaps identified in the FR-719–FR-740 extension.

- Added **verbal-periphrases.md** for FR-719/FR-720, with explicit separation of genuine/functional verbal periphrases from the broader class of V + infinitive constructions.
- Added **avoir-beau.md** for FR-731, treating *avoir beau + infinitif* as a concessive construction rather than a literal use of *avoir* + adjective.
- Added **possession-body-parts-clothes.md** for FR-726/FR-727, with the definite-article pattern, contrastive possessive use, and interaction with pronominal verbs and participle agreement.
- Added **exclamatives.md** for FR-439/FR-440/FR-729, including *quel*, *comme*, *que*, inversion, intonation and punctuation.
- Added **phrase-enonce.md** for FR-733/FR-734, separating *phrase*, *énoncé* and *énonciation* and adding an oral-language boundary layer.
- Added **deixis.md** for FR-736, covering person, space, time and textual deixis.
- Added **address-interjections.md** for FR-737/FR-738, separating address terms, interjections and discourse particles from ordinary sentence constituents.
- Added **prosody.md** for FR-739, treating prosody as a grammatical/discourse resource rather than merely pronunciation.
- Added optional `canonical_ids` metadata to the content contract. New gap-pass articles explicitly declare the canonical IDs they cover; multi-topic references may map several tightly coupled IDs to one article.
- Strengthened `relatedFor` so an unnamespaced slug resolves only when unique; ambiguous plain slugs are rejected instead of silently selecting the first match. Added a regression test for this case.
- Academic Writing Toolkit paragraph-logic review of the new references found no substantive logical defects; the only findings were the known short-paragraph heuristic on compact reference-style prose.
- External source checks were used for the new high-risk claims, especially exclamatives, possession with body parts, verbal periphrases and the phrase/énoncé/discourse layer.
- All new material remains `status: review`.

The remaining release gate is still the corpus-wide mapping of all FR-001–FR-740 topics to canonical articles/sections, not further uncontrolled topic expansion.


## Correction — canonical taxonomy boundary (2026-09-25)

A QA pass found that the canonical taxonomy currently ends at **FR-718**. The earlier gap-pass notes referred to a provisional **FR-719–FR-740 extension**, but those IDs were not actually present in `docs/grammar_taxonomy_canonical.md`. Treating them as canonical would create false coverage.

The new gap-pass articles have therefore been corrected to use only IDs that currently exist in the canonical catalog where the mapping is exact or defensible. Unsupported provisional IDs were removed rather than being silently accepted. Two genuinely new system-level references — `phrase-enonce.md` and `deixis.md` — currently remain explicitly unmapped; they are now visible gaps for the next taxonomy decision rather than fake coverage.

The canonical coverage audit tooling added in this continuation will distinguish:
- catalogued and explicitly covered IDs;
- missing canonical IDs;
- invalid/provisional IDs;
- duplicate mappings;
- files without explicit canonical identity.

This makes the remaining migration measurable without inventing taxonomy coverage.


## Continuation — executable canonical coverage gate (2026-09-25)

The coverage model is now executable rather than only documentary.

- `scripts/lib/canonical-coverage.mjs` parses the canonical catalog and article frontmatter and reports coverage, missing IDs, invalid IDs, duplicate mappings, and files without explicit identity.
- `scripts/audit-canonical-coverage.mjs` is the repository CLI entry point.
- `npm run audit:canonical` exposes the audit locally.
- `test/canonical-coverage.test.mjs` was written before the implementation and covers both multiline and inline `canonical_ids`, plus missing/invalid/duplicate cases.
- Because the current execution environment cannot clone/install the repository dependencies, this turn does **not** claim a successful local test or build run. The implementation has instead been checked against the repository files through GitHub and the test cases were kept deliberately dependency-free.

The explicit mappings introduced in the latest gap pass now point only to IDs that actually exist in the FR-001–FR-718 catalog. The two new system-level references without an exact existing topic identity remain unmapped by design until the taxonomy itself is reviewed.

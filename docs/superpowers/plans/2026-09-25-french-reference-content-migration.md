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

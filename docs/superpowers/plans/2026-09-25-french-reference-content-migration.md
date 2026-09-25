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
- [ ] Mark duplicate, partial, broad-system, and missing topics.
- [ ] Preserve existing strong articles as source material rather than rewriting blindly.
- [ ] Identify graph references that do not correspond to actual slugs/topic IDs.

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
- [ ] Separate definiteness, indefiniteness, partitiveness, zero article, quantity, and contraction.
- [ ] Add minimal contrasts where forms compete.
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

- [ ] Separate agreement from adjective position.
- [ ] Document regular and irregular gender/number patterns.
- [ ] Treat position-sensitive meaning as a semantic/syntactic contrast.
- [ ] Avoid presenting BAGS as a complete theory of adjective placement.
- [ ] Add Ukrainian contrast only where it changes learner decisions.
- [ ] Validate examples and graph edges.

## Task 4: Core verb and tense cluster

**Progress:** present, passé composé and imparfait rewritten; remaining tense/mood system is still open.

**Files:**
- Modify: `src/content/fr/present.md`
- Modify: existing `être`, `avoir`, `aller`, `faire` and core conjugation pages
- Modify: `src/content/fr/passe-compose.md`
- Modify: `src/content/fr/imparfait.md`
- Modify: `src/content/fr/futur-simple.md` where present
- Modify: agreement pages where tense interactions are discussed

- [x] Separate form from temporal/aspectual meaning in présent, passé composé, imparfait and the first contrast/sequence pages.
- [x] Use contrastive minimal pairs for passé composé/imparfait and connect the contrast to the tense pages.
- [ ] Document auxiliary choice and participle agreement without collapsing distinct rules.
- [ ] Mark future/reference uses of present explicitly.
- [ ] Verify irregular paradigms and orthographic alternations.

## Task 5: Pronoun and valency cluster

**Progress:** COD, COI and y/en first-pass reference rewrites completed; clitic-order and reflexive systems remain.

**Files:**
- Modify: `src/content/fr/pronouns-cod.md`
- Modify: `src/content/fr/pronouns-coi.md`
- Modify: `src/content/fr/pronoun-order.md`
- Modify: `src/content/fr/y-en.md`
- Modify: `src/content/fr/relative-pronouns.md`
- Modify: relevant pronominal/reflexive pages

- [ ] Explain COD/COI through French valency, not Ukrainian question-word shortcuts.
- [x] Document clitic position across simple verbs, compound tenses, infinitives, negation, and affirmative/negative imperative.
- [ ] Separate `y/en` functions from ordinary COD/COI.
- [ ] Preserve and refine strong relative-pronoun material.
- [ ] Verify all remaining pronoun combinations and examples; first-pass COD/COI/y-en/order coverage is now in place.

## Task 6: Syntax, questions, negation, subordination

**Progress:** questions, negation and subjonctif metadata/content alignment started; deeper syntax rewrite remains.

**Files:**
- Modify: `src/content/fr/questions.md`
- Modify: `src/content/fr/negation.md`
- Modify: `src/content/fr/subjonctif.md`
- Modify: sentence/coordination/subordination/indirect-speech pages found in inventory

- [ ] Distinguish syntactic structure from register variation.
- [ ] Explain interrogation by construction: intonation, est-ce que, inversion, and embedded questions.
- [ ] Treat negative words as a system rather than a list.
- [ ] Explain subjonctif by syntactic/semantic environments and contrast with indicative where relevant.
- [ ] Mark spoken `ne` omission as register/medium variation.

## Task 7: Source and prose QA

**Files:**
- All changed canonical articles
- `docs/GRAMMAR-REFERENCE-STANDARD.md`

- [ ] Check every normative or high-risk claim against an authoritative grammar/reference source.
- [ ] Remove generic filler, repeated conclusions, and unsupported “typical error” claims.
- [x] Run Academic Writing Toolkit review on representative high-depth articles; short reference blocks were retained where they improve lookup usability rather than artificially merged.
- [ ] Verify terminology consistency in Ukrainian and French.
- [ ] Ensure every high-depth article has a useful practical check when supported by the site.

## Task 8: Structural and release QA

**Files:**
- `src/content.config.ts`
- `src/data/categories.mjs`
- all changed content
- `package.json`

- [ ] Validate metadata against the Zod contract.
- [ ] Validate graph references and detect orphan/duplicate topics.
- [ ] Check canonical status values.
- [ ] Run `npm run build` in an environment with dependencies available.
- [ ] Run the repository's available content/audit scripts if present.
- [ ] Inspect the final diff and verify no unrelated UI/architecture changes slipped into the content branch.
- [ ] Keep unresolved linguistic questions at `review`; only mark `release-ready` after all relevant gates pass.

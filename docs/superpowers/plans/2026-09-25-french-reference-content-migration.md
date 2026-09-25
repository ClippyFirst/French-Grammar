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

## Progress through 2026-09-25

The migration has completed substantial first-pass work across nominal/determiner, adjective/agreement, core tense, pronoun/valency, non-finite, syntax, morphology/orthography, and advanced reference clusters. Current content remains in `review` pending whole-corpus QA.

## Continuation — advanced syntax and ambiguity reference pass (2026-09-25)

Added thirteen canonical/system-level references to cover previously unserved advanced-syntax topics in the **currently visible FR-679–FR-695 portion of the taxonomy**:

- `reciprocal-constructions.md` → FR-679, FR-681: reciprocal constructions and mutual interpretation.
- `reflexive-causatives.md` → FR-680: pronominal/reflexive causative structures with `faire + infinitif`.
- `coordination-unlike-categories.md` → FR-682: coordination of unlike formal categories when they share a syntactic/semantic role.
- `multiple-negation.md` → FR-683: interaction of multiple negative elements and distinction from simple cancellation.
- `multiple-questions.md` → FR-684: multiple interrogative elements and nested questions.
- `multiple-embedding.md` → FR-685: multi-level clausal embedding.
- `nested-relative-clauses.md` → FR-686: nested relative clauses and antecedent/function tracking.
- `nested-complement-clauses.md` → FR-687: nested complement clauses and dependency levels.
- `long-distance-dependencies.md` → FR-688: long-distance syntactic dependencies.
- `agreement-intervening-phrases.md` → FR-689: agreement across intervening groups.
- `ambiguous-attachment.md` → FR-690: ambiguous syntactic attachment.
- `grammatical-ambiguity.md` → FR-691, FR-692: grammatical and structural ambiguity.
- `scope-negation-quantifiers.md` → FR-693, FR-694, FR-695: scope of negation, quantifiers, and interpretation.

These articles deliberately remain system-level rather than being decomposed into artificial micro-pages. Each includes explicit canonical identity, graph relations, Ukrainian contrast where useful, examples, diagnostics, and `status: review`.

Academic Writing Toolkit paragraph review was run on representative excerpts from the new causative, agreement, and attachment material. It found no substantive logic defects; short-paragraph heuristics appeared only where compact reference prose was intentionally used.

The next work item is not uncontrolled article proliferation: continue filling the highest-value unmapped canonical topics, while keeping the canonical catalog itself as the source of truth and validating every new relation against the actual corpus.

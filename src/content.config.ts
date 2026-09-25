// Canonical content contract for the French grammar reference.
// The field semantics are aligned with docs/GRAMMAR-REFERENCE-STANDARD.md.
// Legacy uppercase status values are accepted at ingestion and normalized to
// the shared lowercase release vocabulary.

import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const status = z.preprocess(
  (value) => {
    if (typeof value !== 'string') return value;
    const legacy = {
      DRAFT: 'draft',
      PARTIAL: 'catalogued',
      REVIEW: 'review',
      DONE: 'release-ready',
      REFERENCE: 'release-ready',
    };
    return legacy[value] ?? value;
  },
  z.enum(['planned', 'catalogued', 'draft', 'review', 'release-ready', 'deprecated']).default('draft'),
);

const fr = defineCollection({
  type: 'content',
  schema: z.object({
    title_uk: z.string(),
    title_fr: z.string(),
    description_uk: z.string(),
    category: z.string(),
    order: z.number().default(100),

    // Canonical graph relations.
    prerequisites: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    contrast: z.array(z.string()).default([]),
    next: z.array(z.string()).default([]),
    variant: z.array(z.string()).default([]),
    part_of: z.string().optional(),

    // Discovery.
    aliases: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),

    // Learning metadata. CEFR is navigation metadata, not content status.
    level: z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'REFERENCE']).optional(),
    depth: z.enum(['short', 'medium', 'high']).default('medium'),

    // Language/register metadata.
    register: z.enum([
      'neutral',
      'formal',
      'informal',
      'spoken',
      'written',
      'literary',
      'regional',
    ]).optional(),
    variety: z.array(z.enum(['FR', 'QC', 'BE', 'CH', 'AFR', 'other'])).default([]),

    // Editorial/release metadata.
    status,
    contrastive_uk: z.enum(['high', 'medium', 'low', 'none']).default('none'),
    sources: z.array(z.string()).default([]),
    reviewed_at: z.string().optional(),

    // Presentation.
    formula: z.boolean().default(false),
    toc: z.boolean().default(true),
    featured: z.boolean().default(false),
  }),
});

export const collections = { fr };

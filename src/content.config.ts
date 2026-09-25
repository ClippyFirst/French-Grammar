// Content collection config for the "fr" (French grammar reference) collection.
// Pedagogical metadata follows docs/learning_architecture.md.
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const fr = defineCollection({
  type: 'content',
  schema: z.object({
    title_uk: z.string(),
    title_fr: z.string(),
    description_uk: z.string(),
    category: z.string(),
    order: z.number().default(100),

    // Learning graph
    prerequisites: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    contrast: z.array(z.string()).default([]),
    next: z.array(z.string()).default([]),

    // Discovery and editorial metadata
    tags: z.array(z.string()).default([]),
    level: z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'REFERENCE']).optional(),
    register: z.enum(['neutral', 'formal', 'informal', 'spoken', 'written', 'literary', 'regional']).optional(),
    status: z.enum(['DRAFT', 'PARTIAL', 'REVIEW', 'DONE', 'REFERENCE']).default('DRAFT'),
    contrastive_uk: z.enum(['high', 'medium', 'low', 'none']).default('none'),

    // Presentation
    formula: z.boolean().default(false),
    toc: z.boolean().default(true),
    featured: z.boolean().default(false),
  }),
});

export const collections = { fr };

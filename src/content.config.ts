import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Зміст французької граматики.
 * Кожен файл — одна сторінка граматики.
 * `id` файла == slug (ім'я файла без розширення).
 */
const fr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/fr' }),
  schema: z.object({
    // Український заголовок (ядро — для H1/SEO)
    title_uk: z.string(),
    // Французький термин (паралельный заголовок)
    title_fr: z.string(),
    // Короткий опис для home, категоріальних сторінок и поиску
    description_uk: z.string(),
    // Категорія (ключ із src/data/categories.mjs)
    category: z.string(),
    // Порядок у категорії
    order: z.number().default(100),
    // Пов'язані теми: массив slug'ов у форматі "категорія/slug"
    related: z.array(z.string()).default([]),
    // Теги для поиску (синонімы, українські/французькі термінol)
    tags: z.array(z.string()).default([]),
    // Показувати формулу-карточку Ствердження|Заперечення|Питання
    formula: z.boolean().default(false),
    // Показувати TOC
    toc: z.boolean().default(true),
    // Видантову категорію сторінки (виняток, кернл темы)
    featured: z.boolean().default(false),
  }),
});

export const collections = { fr };
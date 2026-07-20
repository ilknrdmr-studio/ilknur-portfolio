import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    client: z.string().optional(),
    year: z.string().optional(),
    category: z.string().optional(),
    summary: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional()
  })
});

export const collections = { projects, pages };

import { defineCollection, z } from 'astro:content';

const levels = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    level: z.string(),
    type: z.enum(['video', 'pdf']),
    pdfCategory: z.enum(['cours', 'series', 'devoirs']).optional(),
    order: z.number(),
    videoId: z.string().optional(),
    pdf: z.string().optional(),
    duration: z.string().optional(),
    notes: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { levels, lessons };

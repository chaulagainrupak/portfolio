import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/logs', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      // minimal frontmatter you actually type in Obsidian
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      description: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      heroImage: image(),
      
      slug: z.string().optional(), // only if you want custom slug

      // system/computed fields — do NOT type manually
      title: z.string().optional(),         // pulled automatically from H1
      outgoingLinks: z.array(z.string()).optional(),
      backlinks: z.array(z.string()).optional(),
      related: z.array(z.string()).optional(),
    }),
});

export const collections = { blog };
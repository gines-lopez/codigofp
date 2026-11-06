import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { BLOG_CATEGORIES } from './consts';

const categorySlugs = BLOG_CATEGORIES.map((c) => c.slug) as [string, ...string[]];

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// One of the four pillars (BLOG_CATEGORIES in src/consts.ts).
			category: z.enum(categorySlugs).default('programacion-didactica'),
			// Drafts are only visible in `astro dev`; they are never published.
			draft: z.boolean().default(false),
		}),
});

// Pillar guides ("páginas madre"), published at the site root: /<file name>/. Their clusters are
// blog posts (/blog/<slug>/), linked with <ClusterLink>, which shows plain text until the post exists.
const guias = defineCollection({
	loader: glob({ base: './src/content/guias', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		keyword: z.string().optional(),
		keywords: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog, guias };

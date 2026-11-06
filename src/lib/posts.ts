import { getCollection } from 'astro:content';

// Drafts (`draft: true` in frontmatter) are visible in `astro dev` so they can be
// previewed, but are never built: no page, no blog listing, no RSS, no sitemap.
export function getPosts() {
	return getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
}

// Same rule for the pillar guides published at the site root.
export function getGuides() {
	return getCollection('guias', ({ data }) => import.meta.env.DEV || !data.draft);
}

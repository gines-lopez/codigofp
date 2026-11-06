import { type CollectionEntry, getCollection } from 'astro:content';
import { BLOG_CATEGORIES } from '../consts';

// Drafts (`draft: true` in frontmatter) are visible in `astro dev` so they can be
// previewed, but are never built: no page, no blog listing, no RSS, no sitemap.
export function getPosts() {
	return getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
}

// Same rule for the pillar guides published at the site root.
export function getGuides() {
	return getCollection('guias', ({ data }) => import.meta.env.DEV || !data.draft);
}

// Newest first.
export function byDate<T extends { data: { pubDate: Date } }>(entries: T[]) {
	return [...entries].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// Minutes at 200 words per minute, counting the Markdown/MDX body without code, tags or imports.
export function readingTime(body = '') {
	const text = body
		.replace(/^import .*$/gm, '')
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/[#>*_`[\]()|-]/g, ' ');
	const words = text.split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 200));
}

export function categoryOf(post: CollectionEntry<'blog'>) {
	return BLOG_CATEGORIES.find((c) => c.slug === post.data.category) ?? BLOG_CATEGORIES[0];
}

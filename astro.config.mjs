// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// Pages kept out of the sitemap (they also set noindex via BaseHead).
const SITEMAP_EXCLUDE = ['/landing/', '/landing-meta/', '/landing-meta-libreta/', '/aviso-legal/', '/politica-privacidad/'];

// https://astro.build/config
export default defineConfig({
	site: 'https://codigofp.com',
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => !SITEMAP_EXCLUDE.includes(new URL(page).pathname),
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-inter',
			weights: [400, 700, 800],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Quicksand',
			cssVariable: '--font-quicksand',
			weights: [700],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['sans-serif'],
		},
		{
			// Handwritten notes; only loaded by /landing-meta-libreta.
			provider: fontProviders.google(),
			name: 'Kalam',
			cssVariable: '--font-kalam',
			weights: [400],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['cursive'],
		},
	],
});

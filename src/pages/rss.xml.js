import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { byDate, categoryOf, getPosts } from '../lib/posts';

export async function GET(context) {
	const posts = await getPosts();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: byDate(posts).map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			categories: [categoryOf(post).name],
			link: `/blog/${post.id}/`,
		})),
	});
}

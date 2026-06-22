import { error } from '@sveltejs/kit';
import { getPost, posts } from '$lib/data/posts';
import type { PageLoad } from './$types';

export const prerender = true;

export function entries() {
	return posts.map((post) => ({ slug: post.slug }));
}

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) error(404, 'Post not found');
	return { post };
};

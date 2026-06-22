export type Post = {
	slug: string;
	title: string;
	date: string;
	summary: string;
	content: string;
};

export const posts: Post[] = [
	{
		slug: 'hello-world',
		title: 'Hello, World',
		date: '2026-06-22',
		summary: 'The first post on this site. A place to write about what you are learning and building.',
		content: `Welcome to your new site.

This is a simple starting point. Replace this with your own writing — notes on projects, things you have learned, or anything you want to share.

Keep it short, keep it yours.`
	},
	{
		slug: 'building-this-site',
		title: 'Building This Site',
		date: '2026-06-22',
		summary: 'A quick note on why SvelteKit and a static deploy make sense for a personal site.',
		content: `This site is built with SvelteKit and deployed as static HTML.

That means it is fast, cheap to host, and easy to maintain. Add a new blog post by editing a file, push to git, and redeploy.

Simple tools for a simple site.`
	}
];

export function getPost(slug: string): Post | undefined {
	return posts.find((p) => p.slug === slug);
}

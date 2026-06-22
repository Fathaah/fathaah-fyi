<script lang="ts">
	import PageNav from '$lib/components/PageNav.svelte';
	import { posts } from '$lib/data/posts';
</script>

<svelte:head>
	<title>Blog — Fathaah</title>
</svelte:head>

<div class="page-shell">
	<PageNav />

	<div class="frame">
		<div class="frame-body">
		<h1>Blog</h1>
		<p class="intro">Notes on ML, product, and building.</p>

		<ul class="list">
			{#each posts as post (post.slug)}
				<li>
					<a href="/blog/{post.slug}" class="post">
						<time datetime={post.date}>{post.date}</time>
						<h2>{post.title}</h2>
						<p>{post.summary}</p>
					</a>
				</li>
			{/each}
		</ul>
		</div>
	</div>
</div>

<style>
	h1 {
		font-size: clamp(2rem, 5vw, 2.75rem);
		color: var(--burgundy-dark);
		margin-bottom: 0.5rem;
	}

	.intro {
		color: var(--text-muted);
		margin-bottom: 2rem;
		font-size: 0.95rem;
	}

	.list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.post {
		display: block;
		padding: 1.25rem 0;
		border-bottom: 1px solid var(--border-subtle);
		color: var(--text);
	}

	.post:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.post:hover h2 {
		color: var(--rose);
	}

	time {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--burgundy);
	}

	h2 {
		font-size: 1.05rem;
		margin: 0.3rem 0;
		color: var(--burgundy-dark);
		transition: color 0.15s;
	}

	.post p {
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.65;
	}
</style>

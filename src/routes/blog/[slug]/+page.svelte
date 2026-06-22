<script lang="ts">
	import PageNav from '$lib/components/PageNav.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.post.title} — Fathaah</title>
</svelte:head>

<div class="page-shell">
	<PageNav />

	<div class="frame">
		<article class="frame-body">
		<a href="/blog" class="back">&larr; Blog</a>
		<header>
			<time datetime={data.post.date}>{data.post.date}</time>
			<h1>{data.post.title}</h1>
		</header>
		<div class="body">
			{#each data.post.content.split('\n\n') as paragraph, i (i)}
				<p>{paragraph}</p>
			{/each}
		</div>
		</article>
	</div>
</div>

<style>
	.back {
		display: inline-block;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		margin-bottom: 2rem;
		color: var(--burgundy);
	}

	header {
		margin-bottom: 2rem;
		padding-bottom: 1.25rem;
		border-bottom: 1px solid var(--border-subtle);
	}

	time {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--burgundy);
	}

	h1 {
		font-size: clamp(1.75rem, 4vw, 2.25rem);
		margin-top: 0.35rem;
		color: var(--burgundy-dark);
	}

	.body p {
		margin-bottom: 1rem;
		color: var(--text-muted);
		line-height: 1.75;
		font-size: 0.95rem;
	}
</style>

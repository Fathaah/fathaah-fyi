<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import { formatProjectDate } from '$lib/data/projects';

	let { project }: { project: Project } = $props();
</script>

<article class="card">
	{#if project.url}
		<a
			class="thumbnail-wrap"
			href={project.url}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`Open ${project.title}`}
		>
			<img
				class="thumbnail"
				src={project.thumbnail}
				alt=""
				loading="lazy"
				decoding="async"
			/>
		</a>
	{:else}
		<div class="thumbnail-wrap">
			<img
				class="thumbnail"
				src={project.thumbnail}
				alt=""
				loading="lazy"
				decoding="async"
			/>
		</div>
	{/if}

	<div class="body">
		<div class="meta">
			<time datetime={project.date}>{formatProjectDate(project.date)}</time>
		</div>

		{#if project.url}
			<a href={project.url} target="_blank" rel="noopener noreferrer" class="title-link">
				<h2>{project.title}</h2>
			</a>
		{:else}
			<h2>{project.title}</h2>
		{/if}

		<p>{project.description}</p>

		<div class="tags">
			{#each project.tags as tag (tag)}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</div>
</article>

<style>
	.card {
		display: grid;
		grid-template-columns: minmax(7rem, 9.5rem) 1fr;
		gap: 1.25rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--border-subtle);
	}

	.thumbnail-wrap {
		display: block;
		align-self: start;
		border-radius: 0.35rem;
		overflow: hidden;
		background: var(--gradient-card);
		border: 1px solid var(--border-subtle);
		aspect-ratio: 4 / 3;
	}

	a.thumbnail-wrap:hover {
		opacity: 0.92;
	}

	.thumbnail {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.body {
		min-width: 0;
	}

	.meta time {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--burgundy);
	}

	h2 {
		font-size: 1.05rem;
		color: var(--burgundy-dark);
		margin: 0.35rem 0 0.5rem;
		transition: color 0.15s;
	}

	.title-link:hover h2 {
		color: var(--rose);
	}

	p {
		margin: 0 0 0.75rem;
		color: var(--text-muted);
		font-size: 0.92rem;
		line-height: 1.7;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.tag {
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		padding: 0.2rem 0.55rem;
		background: var(--tag-bg);
		color: var(--burgundy);
		border: 1px solid var(--tag-border);
	}

	@media (max-width: 540px) {
		.card {
			grid-template-columns: 1fr;
		}

		.thumbnail-wrap {
			max-width: 12rem;
		}
	}
</style>

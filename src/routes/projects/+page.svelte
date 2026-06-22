<script lang="ts">
	import PageNav from '$lib/components/PageNav.svelte';
	import { projects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>Projects — Fathaah</title>
</svelte:head>

<div class="page-shell">
	<PageNav />

	<div class="frame">
		<div class="frame-body">
		<h1>Projects</h1>
		<p class="intro">Work across ML, product engineering, and startups.</p>

		{#if projects.length > 0}
			<ul class="list">
				{#each projects as project (project.title)}
					<li class="item">
						<div class="header">
							{#if project.url}
								<a href={project.url} target="_blank" rel="noopener noreferrer">
									<h2>{project.title}</h2>
								</a>
							{:else}
								<h2>{project.title}</h2>
							{/if}
						</div>
						<p>{project.description}</p>
						<div class="tags">
							{#each project.tags as tag (tag)}
								<span class="tag">{tag}</span>
							{/each}
						</div>
					</li>
				{/each}
			</ul>
		{:else}
			<p class="placeholder">Nothing here yet. Check back soon.</p>
		{/if}
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

	.placeholder {
		color: var(--text-muted);
		font-size: 0.95rem;
		line-height: 1.65;
	}

	.list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.item {
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--border-subtle);
	}

	.item:last-child {
		padding-bottom: 0;
		border-bottom: none;
	}

	.header h2 {
		font-size: 1.05rem;
		color: var(--rose);
	}

	.item p {
		margin: 0.5rem 0 0.75rem;
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
</style>

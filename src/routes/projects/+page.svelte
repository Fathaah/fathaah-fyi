<script lang="ts">
	import PageNav from '$lib/components/PageNav.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
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
			<p class="intro">Work across ML, computer vision, game development, and product engineering.</p>

			{#if projects.length > 0}
				<div class="grid">
					{#each projects as project (project.id)}
						<ProjectCard {project} />
					{/each}
				</div>
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

	.grid {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.grid :global(.card:last-child) {
		padding-bottom: 0;
		border-bottom: none;
	}
</style>

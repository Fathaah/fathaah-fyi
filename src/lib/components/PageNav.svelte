<script lang="ts">
	import { page } from '$app/state';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	const links = [
		{ href: '/', label: 'Bio' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/blog', label: 'Blog' }
	];
</script>

<nav aria-label="Main">
	<div class="links">
		{#each links as link (link.href)}
			<a
				href={link.href}
				class:active={page.url.pathname === link.href ||
					(link.href !== '/' && page.url.pathname.startsWith(link.href))}
			>
				{link.label}
			</a>
		{/each}
	</div>
	<ThemeToggle />
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		padding: 0 0.25rem;
	}

	.links {
		display: flex;
		justify-content: space-between;
		flex: 1;
		align-items: center;
	}

	a {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--burgundy-dark);
	}

	a:hover,
	a.active {
		color: var(--rose);
		opacity: 1;
	}

	@media (max-width: 480px) {
		.links {
			gap: 0.5rem;
		}

		a {
			font-size: 0.65rem;
			letter-spacing: 0.12em;
		}
	}
</style>

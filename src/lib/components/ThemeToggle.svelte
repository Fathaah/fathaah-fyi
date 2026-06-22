<script lang="ts">
	import { getTheme, toggleTheme } from '$lib/theme.svelte';

	const label = $derived(getTheme() === 'dark' ? 'Light mode' : 'Night mode');
</script>

<button type="button" class="toggle" onclick={toggleTheme} aria-label={label} title={label}>
	<span class="icon" aria-hidden="true">{getTheme() === 'dark' ? '☀' : '☾'}</span>
</button>

<style>
	.toggle {
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		padding: 0;
		border: 1px solid var(--border);
		border-radius: 999px;
		background: var(--surface);
		color: var(--text);
		cursor: pointer;
		transition:
			background 0.15s,
			border-color 0.15s,
			color 0.15s;
	}

	.toggle:hover {
		color: var(--rose);
		border-color: var(--rose);
	}

	.icon {
		font-size: 0.95rem;
		line-height: 1;
	}
</style>

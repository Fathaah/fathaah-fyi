<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { initTheme } from '$lib/theme.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		initTheme();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>fathaah</title>
	<meta
		name="description"
		content="Product engineer and machine learning specialist based in Gothenburg, Sweden."
	/>
</svelte:head>

{@render children()}

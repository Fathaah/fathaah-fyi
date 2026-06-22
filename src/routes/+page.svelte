<script lang="ts">
	import PageNav from '$lib/components/PageNav.svelte';
	import portrait from '$lib/assets/portrait.webp';

	const socials = [
		{ href: 'mailto:abdulfta12@gmail.com', label: 'Email' },
		{ href: 'https://www.linkedin.com/in/abdul-fathaah-s-614567137/', label: 'LinkedIn' },
		{
			href: 'https://scholar.google.com/citations?user=hEk9kEoAAAAJ&hl=en',
			label: 'Scholar'
		}
	];
</script>

<svelte:head>
	<title>Fathaah</title>
</svelte:head>

<div class="page-shell">
	<PageNav />

	<div class="frame">
		<div class="content">
			<div class="intro">
				<h1>I am<br />Fathaah.</h1>
				<p>
					I'm a product engineer focused on machine learning and computer vision, based in
					Gothenburg, Sweden. I build generative AI systems, synthetic data platforms, and
					full-stack products—from founding ML work at early-stage startups to shipping tools
					used at scale.
				</p>
			</div>

			<div class="social">
				<span class="handle">@fathaah</span>
				<div class="links">
					{#each socials as link (link.href)}
						<a
							href={link.href}
							target={link.href.startsWith('mailto:') ? undefined : '_blank'}
							rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
						>
							{link.label}
						</a>
					{/each}
				</div>
			</div>
		</div>

		<div class="portrait">
			<img src={portrait} alt="Fathaah" fetchpriority="high" decoding="async" />
		</div>
	</div>
</div>

<style>
	.frame {
		display: grid;
		grid-template-columns: 1.15fr 1fr;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: clamp(2rem, 5vw, 3.5rem);
	}

	.intro {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	h1 {
		font-size: clamp(3.25rem, 9vw, 5.75rem);
		font-weight: 700;
		color: var(--burgundy-dark);
		line-height: 0.95;
	}

	p {
		font-size: clamp(0.95rem, 1.8vw, 1.05rem);
		font-weight: 400;
		color: var(--text-muted);
		max-width: 34ch;
		line-height: 1.75;
	}

	.social {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.handle {
		font-size: 0.85rem;
		font-weight: 700;
		color: var(--burgundy-dark);
	}

	.links {
		display: flex;
		gap: 1.25rem;
	}

	.links a {
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--burgundy-dark);
		border-bottom: 1px solid transparent;
	}

	.links a:hover {
		border-bottom-color: var(--rose);
	}

	.portrait {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: clamp(1.5rem, 4vw, 3rem);
	}

	.portrait img {
		display: block;
		width: auto;
		height: auto;
		max-width: clamp(14rem, 38vw, 22rem);
		max-height: clamp(16rem, 72vh, 36rem);
		object-fit: contain;
		object-position: center center;
	}

	@media (max-width: 768px) {
		.frame {
			grid-template-columns: 1fr;
		}

		.portrait {
			order: -1;
			padding: 1.5rem;
		}

		.portrait img {
			max-width: min(72vw, 18rem);
			max-height: min(42vh, 22rem);
		}

		.content {
			gap: 2rem;
			padding: 1.75rem 1.25rem 2rem;
		}

		p {
			max-width: none;
		}
	}

	@media (max-width: 480px) {
		h1 {
			font-size: clamp(2.5rem, 12vw, 3.5rem);
		}

		.portrait img {
			max-width: min(68vw, 16rem);
			max-height: min(38vh, 20rem);
		}

		.content {
			padding: 1.5rem 1rem 1.75rem;
		}

		.links {
			flex-wrap: wrap;
			gap: 0.75rem 1rem;
		}
	}
</style>

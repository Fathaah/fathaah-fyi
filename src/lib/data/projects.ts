export type Project = {
	title: string;
	description: string;
	url?: string;
	tags: string[];
};

export const projects: Project[] = [
	{
		title: 'Repli5',
		description:
			'Leading product and engineering for an on-demand synthetic vision dataset platform — diffusion pipelines, LoRAs, and automated data generation for detection and segmentation.',
		url: 'https://www.repli5.com/platform',
		tags: ['diffusion', 'computer vision', 'python']
	},
	{
		title: 'Katalist AI',
		description:
			'Founding ML engineer at a Stockholm startup turning scripts into pictorial stories. Quadrupled daily image output, cut GPU inference costs by 80%, and built the ML infrastructure behind revenue growth.',
		url: 'https://www.katalist.ai/',
		tags: ['stable diffusion', 'comfyui', 'llm']
	},
	{
		title: 'Udaan',
		description:
			'Product engineer on India\'s fastest unicorn — built full-stack systems handling 80,000+ daily buyer-sales validations and led a customer support platform across an 8,000-person salesforce.',
		url: 'https://www.udaan.com/',
		tags: ['kotlin', 'full-stack', 'scale']
	},
	{
		title: 'Freelance ML',
		description:
			'Generative AI consulting for naughtysociety.ai, mindplex.tech, and pixelperfect AI — product photography MVPs, brand agency workflows, and production-grade UI/UX for AI tools.',
		tags: ['generative ai', 'sveltekit', 'python']
	}
];

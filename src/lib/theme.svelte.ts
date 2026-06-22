import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

function getPreferredTheme(): Theme {
	if (!browser) return 'light';

	const stored = localStorage.getItem('theme');
	if (stored === 'light' || stored === 'dark') return stored;

	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
	if (!browser) return;
	document.documentElement.dataset.theme = theme;
}

let theme = $state<Theme>('light');

export function initTheme() {
	theme = getPreferredTheme();
	applyTheme(theme);
}

export function getTheme() {
	return theme;
}

export function setTheme(next: Theme) {
	theme = next;
	if (browser) {
		localStorage.setItem('theme', next);
		applyTheme(next);
	}
}

export function toggleTheme() {
	setTheme(theme === 'light' ? 'dark' : 'light');
}

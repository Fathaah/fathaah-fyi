import projectsData from './projects.json';

export type Project = {
	id: string;
	title: string;
	/** ISO date (`YYYY`, `YYYY-MM`, or `YYYY-MM-DD`) for sorting and display */
	date: string;
	description: string;
	thumbnail: string;
	url?: string;
	tags: string[];
};

const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
] as const;

/** Human-readable label from an ISO-ish date string. */
export function formatProjectDate(date: string): string {
	if (/^\d{4}$/.test(date)) return date;

	const [year, month] = date.split('-');
	if (!year || !month) return date;

	const monthIndex = Number(month) - 1;
	if (monthIndex < 0 || monthIndex > 11) return date;

	return `${MONTHS[monthIndex]} ${year}`;
}

export const projects: Project[] = projectsData.projects;

export function getProject(id: string): Project | undefined {
	return projects.find((project) => project.id === id);
}

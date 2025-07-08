// GitHub API utility functions
export interface GitHubUser {
	login: string;
	name: string;
	avatar_url: string;
	bio: string;
	company: string;
	location: string;
	public_repos: number;
	followers: number;
	following: number;
	created_at: string;
}

export interface GitHubRepo {
	name: string;
	description: string;
	language: string;
	stargazers_count: number;
	forks_count: number;
	html_url: string;
	created_at: string;
	updated_at: string;
}

export interface GitHubOrg {
	login: string;
	name: string;
	description: string;
	avatar_url: string;
	html_url: string;
	public_repos: number;
	created_at: string;
}

export interface GitHubOrgRepo {
	name: string;
	description: string;
	language: string;
	stargazers_count: number;
	forks_count: number;
	html_url: string;
	created_at: string;
	updated_at: string;
	topics: string[];
}

export interface ContributionDay {
	date: string;
	contributionCount: number;
	color: string;
}

export interface ContributionWeek {
	contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
	totalContributions: number;
	weeks: ContributionWeek[];
}

const GITHUB_API_BASE = 'https://api.github.com';

export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
	const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
	if (!response.ok) {
		throw new Error(`Failed to fetch user: ${response.statusText}`);
	}
	return response.json();
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
	const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=100`);
	if (!response.ok) {
		throw new Error(`Failed to fetch repos: ${response.statusText}`);
	}
	return response.json();
}

export async function fetchGitHubOrg(orgName: string): Promise<GitHubOrg> {
	const response = await fetch(`${GITHUB_API_BASE}/orgs/${orgName}`);
	if (!response.ok) {
		throw new Error(`Failed to fetch organization: ${response.statusText}`);
	}
	return response.json();
}

export async function fetchGitHubOrgRepos(orgName: string): Promise<GitHubOrgRepo[]> {
	const response = await fetch(`${GITHUB_API_BASE}/orgs/${orgName}/repos?sort=updated&per_page=100`);
	if (!response.ok) {
		throw new Error(`Failed to fetch organization repos: ${response.statusText}`);
	}
	return response.json();
}

export async function fetchUserOrgs(username: string): Promise<GitHubOrg[]> {
	const response = await fetch(`${GITHUB_API_BASE}/users/${username}/orgs`);
	if (!response.ok) {
		throw new Error(`Failed to fetch user organizations: ${response.statusText}`);
	}
	return response.json();
}

// GitHub GraphQL API for contribution data
export async function fetchContributionData(username: string): Promise<ContributionCalendar> {
	const query = `
		query($username: String!) {
			user(login: $username) {
				contributionsCollection {
					contributionCalendar {
						totalContributions
						weeks {
							contributionDays {
								date
								contributionCount
								color
							}
						}
					}
				}
			}
		}
	`;

	// Note: This would require a GitHub token for GraphQL API
	// For now, we'll return mock data or use alternative approaches
	return {
		totalContributions: 1030,
		weeks: []
	};
}

// Generate GitHub stats card URL (using github-readme-stats)
export function getGitHubStatsUrl(username: string, theme: string = 'default'): string {
	return `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&count_private=true`;
}

// Generate GitHub top languages URL
export function getTopLanguagesUrl(username: string, theme: string = 'default'): string {
	return `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}`;
}

// Generate GitHub streak stats URL
export function getStreakStatsUrl(username: string, theme: string = 'default'): string {
	return `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}`;
}

// Generate GitHub activity graph URL
export function getActivityGraphUrl(username: string, theme: string = 'github'): string {
	return `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=${theme}`;
}

// Generate GitHub profile trophy URL
export function getTrophyUrl(username: string, theme: string = 'tokyonight'): string {
	return `https://github-profile-trophy.vercel.app/?username=${username}&theme=${theme}&row=2&column=4&margin-w=15&margin-h=15&no-bg=true`;
}

// Alternative modern trophy themes
export function getModernTrophyUrl(username: string, style: 'gradient' | 'minimal' | 'neon' | 'glass' = 'gradient'): string {
	const themes = {
		gradient: 'radical',
		minimal: 'algolia', 
		neon: 'matrix',
		glass: 'discord'
	};
	
	const theme = themes[style];
	return `https://github-profile-trophy.vercel.app/?username=${username}&theme=${theme}&row=2&column=4&margin-w=20&margin-h=20&no-bg=true&no-frame=true`;
}

// Generate GitHub profile summary card (alternative to trophies)
export function getProfileSummaryUrl(username: string, theme: string = 'tokyonight'): string {
	return `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&count_private=true&include_all_commits=true&hide_border=true`;
}

// Generate GitHub contribution snake animation
export function getContributionSnakeUrl(username: string, theme: string = 'dark'): string {
	return `https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake-${theme}.svg`;
}

// Calculate years since account creation
export function getYearsSince(dateString: string): number {
	const createdDate = new Date(dateString);
	const now = new Date();
	return Math.floor((now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24 * 365));
}

// Format large numbers
export function formatNumber(num: number): string {
	if (num >= 1000000) {
		return (num / 1000000).toFixed(1) + 'M';
	}
	if (num >= 1000) {
		return (num / 1000).toFixed(1) + 'K';
	}
	return num.toString();
}

<script lang="ts">
	import { onMount } from 'svelte';
	import { 
		fetchGitHubOrg, 
		fetchGitHubOrgRepos, 
		fetchUserOrgs,
		type GitHubOrg, 
		type GitHubOrgRepo 
	} from '../github';

	export let username: string = 'Aqirito';
	export let orgName: string = 'kinabalu-makers';
	
	let mounted = false;
	let organization: GitHubOrg | null = null;
	let orgRepos: GitHubOrgRepo[] = [];
	let userOrgs: GitHubOrg[] = [];
	let loading = true;
	let error = '';

	onMount(async () => {
		mounted = true;
		try {
			// Fetch organization data
			organization = await fetchGitHubOrg(orgName);
			
			// Fetch organization repositories
			orgRepos = await fetchGitHubOrgRepos(orgName);
			
			// Fetch user's organizations
			userOrgs = await fetchUserOrgs(username);
		} catch (err) {
			error = 'Failed to load organization data';
			console.error(err);
		} finally {
			loading = false;
		}
	});

	// Filter repositories that might have user contributions
	$: contributedRepos = orgRepos.filter(repo => 
		repo.language && repo.stargazers_count >= 0
	).slice(0, 6); // Show top 6 repos

	// Calculate total stats
	$: totalStars = orgRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
	$: totalForks = orgRepos.reduce((sum, repo) => sum + repo.forks_count, 0);
	$: languages = [...new Set(orgRepos.map(repo => repo.language).filter(Boolean))];
</script>

<div class="org-contributions" class:fade-in-up={mounted}>
	<div class="org-header">
		<h2>Organization Contributions</h2>
		<p>My contributions to organizations and collaborative projects</p>
	</div>

	{#if loading}
		<div class="loading-state">
			<div class="spinner"></div>
			<p>Loading organization data...</p>
		</div>
	{:else if error}
		<div class="error-state">
			<p>⚠️ {error}</p>
		</div>
	{:else}
		<!-- Organization Profile -->
		{#if organization}
			<div class="org-profile">
				<div class="org-info">
					<img src={organization.avatar_url} alt="{organization.name} logo" class="org-avatar" />
					<div class="org-details">
						<h3>{organization.name || organization.login}</h3>
						<p class="org-description">{organization.description || 'No description available'}</p>
						<div class="org-stats">
							<span class="stat">📚 {organization.public_repos} repositories</span>
							<span class="stat">⭐ {totalStars} total stars</span>
							<span class="stat">🍴 {totalForks} total forks</span>
						</div>
						<a href={organization.html_url} target="_blank" rel="noopener" class="org-link">
							🔗 Visit Organization
						</a>
					</div>
				</div>
			</div>
		{/if}

		<!-- Organization Repositories -->
		{#if contributedRepos.length > 0}
			<div class="org-repos">
				<h3>Public Repositories</h3>
				<div class="repos-grid">
					{#each contributedRepos as repo}
						<div class="repo-card">
							<div class="repo-header">
								<h4>
									<a href={repo.html_url} target="_blank" rel="noopener">
										{repo.name}
									</a>
								</h4>
								<div class="repo-stats">
									<span class="stat">⭐ {repo.stargazers_count}</span>
									<span class="stat">🍴 {repo.forks_count}</span>
								</div>
							</div>
							<p class="repo-description">
								{repo.description || 'No description available'}
							</p>
							<div class="repo-footer">
								{#if repo.language}
									<span class="language-tag">{repo.language}</span>
								{/if}
								{#if repo.topics && repo.topics.length > 0}
									<div class="topics">
										{#each repo.topics.slice(0, 3) as topic}
											<span class="topic-tag">{topic}</span>
										{/each}
									</div>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Organization Impact -->
		<div class="org-impact">
			<h3>Contribution Impact</h3>
			<div class="impact-grid">
				<div class="impact-card">
					<div class="impact-icon">🏢</div>
					<h4>Professional Role</h4>
					<p>
						As a System Analyst at Kinabalu Makers, I contribute to various projects 
						involving IoT solutions, edge computing, and system architecture design.
					</p>
				</div>

				<div class="impact-card">
					<div class="impact-icon">🔧</div>
					<h4>Technical Contributions</h4>
					<p>
						Contributing to {orgRepos.length} repositories with focus on 
						{languages.slice(0, 3).join(', ')} and other technologies.
					</p>
				</div>

				<div class="impact-card">
					<div class="impact-icon">🌟</div>
					<h4>Community Impact</h4>
					<p>
						Helping build the tech ecosystem in Sabah through collaborative 
						development and knowledge sharing within the organization.
					</p>
				</div>
			</div>
		</div>

		<!-- All Organizations -->
		{#if userOrgs.length > 0}
			<div class="all-orgs">
				<h3>All Organizations</h3>
				<div class="orgs-list">
					{#each userOrgs as org}
						<a href={org.html_url} target="_blank" rel="noopener" class="org-item">
							<img src={org.avatar_url} alt="{org.name} logo" class="org-mini-avatar" />
							<span>{org.name || org.login}</span>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	{/if}
</div>

<style>
	.org-contributions {
		margin: 2rem 0;
	}

	.org-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.org-header h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.org-header p {
		font-size: 1.125rem;
		color: var(--text-secondary);
	}

	.loading-state,
	.error-state {
		text-align: center;
		padding: 3rem;
		color: var(--text-secondary);
	}

	.spinner {
		width: 40px;
		height: 40px;
		border: 4px solid var(--border);
		border-top: 4px solid var(--primary-color);
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin: 0 auto 1rem;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	.org-profile {
		background: var(--bg-surface);
		border-radius: 1rem;
		padding: 2rem;
		margin-bottom: 3rem;
		border: 1px solid var(--border);
	}

	.org-info {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.org-avatar {
		width: 100px;
		height: 100px;
		border-radius: 1rem;
		border: 3px solid var(--primary-color);
		object-fit: cover;
	}

	.org-details h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.org-description {
		color: var(--text-secondary);
		margin-bottom: 1rem;
		line-height: 1.5;
	}

	.org-stats {
		display: flex;
		gap: 1.5rem;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}

	.stat {
		font-size: 0.875rem;
		color: var(--text-secondary);
		font-weight: 500;
	}

	.org-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--primary-color);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.3s ease;
	}

	.org-link:hover {
		color: var(--secondary-color);
	}

	.org-repos {
		margin-bottom: 3rem;
	}

	.org-repos h3 {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 1.5rem;
	}

	.repos-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.repo-card {
		background: var(--bg-card);
		border-radius: 1rem;
		padding: 1.5rem;
		border: 1px solid var(--border);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.repo-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
	}

	.repo-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
	}

	.repo-header h4 {
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0;
	}

	.repo-header a {
		color: var(--text-primary);
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.repo-header a:hover {
		color: var(--primary-color);
	}

	.repo-stats {
		display: flex;
		gap: 0.75rem;
		font-size: 0.875rem;
	}

	.repo-description {
		color: var(--text-secondary);
		line-height: 1.5;
		margin-bottom: 1rem;
		font-size: 0.875rem;
	}

	.repo-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.language-tag {
		background: var(--primary-color);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 1rem;
		font-size: 0.75rem;
		font-weight: 500;
	}

	.topics {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.topic-tag {
		background: var(--bg-surface);
		color: var(--text-secondary);
		padding: 0.25rem 0.5rem;
		border-radius: 0.5rem;
		font-size: 0.75rem;
		border: 1px solid var(--border);
	}

	.org-impact {
		margin-bottom: 3rem;
	}

	.org-impact h3 {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.impact-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.impact-card {
		text-align: center;
		padding: 2rem;
		background: var(--bg-card);
		border-radius: 1rem;
		border: 1px solid var(--border);
	}

	.impact-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.impact-card h4 {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.impact-card p {
		color: var(--text-secondary);
		line-height: 1.6;
		font-size: 0.875rem;
	}

	.all-orgs {
		text-align: center;
	}

	.all-orgs h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.orgs-list {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.org-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: var(--bg-surface);
		border-radius: 0.5rem;
		text-decoration: none;
		color: var(--text-primary);
		border: 1px solid var(--border);
		transition: all 0.3s ease;
	}

	.org-item:hover {
		background: var(--primary-color);
		color: white;
		transform: translateY(-2px);
	}

	.org-mini-avatar {
		width: 24px;
		height: 24px;
		border-radius: 0.25rem;
		object-fit: cover;
	}

	@media (max-width: 768px) {
		.org-info {
			flex-direction: column;
			text-align: center;
		}

		.org-avatar {
			width: 80px;
			height: 80px;
		}

		.repos-grid {
			grid-template-columns: 1fr;
		}

		.impact-grid {
			grid-template-columns: 1fr;
		}

		.org-stats {
			justify-content: center;
		}

		.repo-header {
			flex-direction: column;
			gap: 0.5rem;
		}

		.repo-footer {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>

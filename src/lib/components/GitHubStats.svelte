<script lang="ts">
	import { onMount } from 'svelte';
	import { 
		getGitHubStatsUrl, 
		getTopLanguagesUrl, 
		getStreakStatsUrl, 
		getActivityGraphUrl,
		getTrophyUrl,
		getModernTrophyUrl,
		getProfileSummaryUrl,
		fetchGitHubUser,
		type GitHubUser
	} from '../github';

	export let username: string = 'Aqirito';
	export let theme: string = 'default';
	
	let mounted = false;
	let user: GitHubUser | null = null;
	let loading = true;
	let error = '';

	onMount(async () => {
		mounted = true;
		try {
			user = await fetchGitHubUser(username);
		} catch (err) {
			error = 'Failed to load GitHub data';
			console.error(err);
		} finally {
			loading = false;
		}
	});

	let badgeStyle: 'default' | 'gradient' | 'minimal' | 'neon' | 'glass' = 'neon';

	$: statsUrl = getGitHubStatsUrl(username, theme);
	$: languagesUrl = getTopLanguagesUrl(username, theme);
	$: streakUrl = getStreakStatsUrl(username, theme);
	$: activityUrl = getActivityGraphUrl(username, theme);
	$: trophyUrl = badgeStyle === 'default' ? getTrophyUrl(username, theme) : getModernTrophyUrl(username, badgeStyle);
</script>

<div class="github-stats" class:fade-in-up={mounted}>
	<div class="stats-header">
		<h2>GitHub Statistics & Achievements</h2>
		<p>Real-time data from my GitHub profile showcasing contributions, languages, and achievements</p>
	</div>

	{#if loading}
		<div class="loading-state">
			<div class="spinner"></div>
			<p>Loading GitHub data...</p>
		</div>
	{:else if error}
		<div class="error-state">
			<p>⚠️ {error}</p>
		</div>
	{:else}
		<!-- GitHub Profile Summary -->
		{#if user}
			<div class="profile-summary">
				<div class="profile-info">
					<img src={user.avatar_url} alt="{user.name} avatar" class="avatar" />
					<div class="info">
						<h3>{user.name || user.login}</h3>
						<p class="bio">{user.bio || 'No bio available'}</p>
						<div class="stats-quick">
							<span class="stat">📍 {user.location || 'Location not set'}</span>
							<span class="stat">🏢 {user.company || 'Company not set'}</span>
						</div>
						<div class="follow-stats">
							<span class="stat">👥 {user.followers} followers</span>
							<span class="stat">👤 {user.following} following</span>
							<span class="stat">📚 {user.public_repos} repositories</span>
						</div>
					</div>
				</div>
			</div>
		{/if}

		<!-- GitHub Stats Cards -->
		<div class="stats-grid">
			<!-- <div class="stat-card">
				<h3>Overall Statistics</h3>
				<img 
					src={statsUrl} 
					alt="GitHub Stats" 
					loading="lazy"
					on:error={(e) => e.target.style.display = 'none'}
				/>
			</div> -->

			<div class="stat-card">
				<h3>Most Used Languages</h3>
				<img 
					src={languagesUrl} 
					alt="Top Languages" 
					loading="lazy"
					on:error={(e) => {
						const target = e.target as HTMLImageElement;
						if (target) target.style.display = 'none';
					}}
				/>
			</div>
			<!-- GitHub Streak -->
			<div class="stat-card">
				<h3>Contribution Streak</h3>
				<img 
					src={streakUrl} 
					alt="GitHub Streak" 
					loading="lazy"
					on:error={(e) => {
						const target = e.target as HTMLImageElement;
						if (target) target.style.display = 'none';
					}}
				/>
			</div>
		</div>

		<!-- GitHub Trophies -->
		<div class="trophy-section">
			<div class="trophy-header">
				<h3>GitHub Achievements</h3>
				<div class="badge-style-selector">
					<label for="badge-style">Badge Style:</label>
					<select id="badge-style" bind:value={badgeStyle}>
						<option value="neon">Neon (Default)</option>
						<option value="default">Tokyo Night</option>
						<option value="gradient">Gradient</option>
						<option value="minimal">Minimal</option>
						<option value="glass">Glass</option>
					</select>
				</div>
			</div>
			<img 
				src={trophyUrl} 
				alt="GitHub Trophies" 
				loading="lazy"
				on:error={(e) => {
					const target = e.target as HTMLImageElement;
					if (target) target.style.display = 'none';
				}}
			/>
		</div>

		<!-- Activity Graph -->
		<div class="activity-section">
			<h3>Contribution Activity</h3>
			<img 
				src={activityUrl} 
				alt="GitHub Activity Graph" 
				loading="lazy"
				on:error={(e) => {
					const target = e.target as HTMLImageElement;
					if (target) target.style.display = 'none';
				}}
			/>
		</div>

		<!-- GitHub Profile Link -->
		<div class="profile-link">
			<a 
				href="https://github.com/{username}" 
				target="_blank" 
				rel="noopener noreferrer"
				class="btn btn-outline"
			>
				🔗 View Full GitHub Profile
			</a>
		</div>
	{/if}
</div>

<style>
	.github-stats {
		margin: 2rem 0;
	}

	.stats-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.stats-header h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.stats-header p {
		font-size: 1.125rem;
		color: var(--text-secondary);
		max-width: 600px;
		margin: 0 auto;
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

	.profile-summary {
		background: var(--surface);
		border-radius: 1rem;
		padding: 2rem;
		margin-bottom: 3rem;
		border: 1px solid var(--border);
	}

	.profile-info {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.avatar {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		border: 4px solid var(--primary-color);
		object-fit: cover;
	}

	.info h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.bio {
		color: var(--text-secondary);
		margin-bottom: 1rem;
		line-height: 1.5;
	}

	.stats-quick,
	.follow-stats {
		display: flex;
		gap: 1.5rem;
		flex-wrap: wrap;
		margin-bottom: 0.5rem;
	}

	.stat {
		font-size: 0.875rem;
		color: var(--text-secondary);
		font-weight: 500;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.stat-card {
		background: var(--bg-card);
		border-radius: 1rem;
		padding: 1.5rem;
		border: 1px solid var(--border);
		text-align: center;
	}

	.stat-card h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.stat-card img {
		max-width: 100%;
		height: auto;
		border-radius: 0.5rem;
	}

	.trophy-section,
	.activity-section {
		background: var(--bg-card);
		border-radius: 1rem;
		padding: 2rem;
		margin-bottom: 2rem;
		border: 1px solid var(--border);
		text-align: center;
	}

	.trophy-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.trophy-section h3,
	.activity-section h3 {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
	}

	.badge-style-selector {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
	}

	.badge-style-selector label {
		color: var(--text-secondary);
		font-weight: 500;
	}

	.badge-style-selector select {
		padding: 0.5rem;
		border-radius: 0.375rem;
		border: 1px solid var(--border);
		background: var(--surface);
		color: var(--text-primary);
		font-size: 0.875rem;
		cursor: pointer;
		transition: border-color 0.2s ease;
	}

	.badge-style-selector select:focus {
		outline: none;
		border-color: var(--primary-color);
		box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.1);
	}

	.badge-style-selector select:hover {
		border-color: var(--primary-color);
	}

	.trophy-section img,
	.activity-section img {
		max-width: 100%;
		height: auto;
		border-radius: 0.5rem;
	}

	.profile-link {
		text-align: center;
		margin-top: 2rem;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		border-radius: 0.5rem;
		font-weight: 500;
		text-decoration: none;
		transition: all 0.3s ease;
		border: 2px solid var(--primary-color);
		background: transparent;
		color: var(--primary-color);
	}

	.btn:hover {
		background: var(--primary-color);
		color: white;
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.profile-info {
			flex-direction: column;
			text-align: center;
		}

		.avatar {
			width: 100px;
			height: 100px;
		}

		.stats-grid {
			grid-template-columns: 1fr;
		}

		.stats-quick,
		.follow-stats {
			justify-content: center;
		}

		.stats-header h2 {
			font-size: 2rem;
		}
	}
</style>

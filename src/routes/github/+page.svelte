<script lang="ts">
	import { onMount } from 'svelte';
	import GitHubStats from '$lib/components/GitHubStats.svelte';
	import OrganizationContributions from '$lib/components/OrganizationContributions.svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>GitHub Stats & Achievements - Tachibana Aqirito</title>
	<meta name="description" content="View Tachibana Aqirito's GitHub statistics, achievements, contribution history, and coding activity in real-time." />
</svelte:head>

<section class="section">
	<div class="container">
		<!-- <div class="page-header" class:fade-in-up={mounted}>
			<h1>GitHub Statistics & Achievements</h1>
			<p class="lead">
				Real-time insights into my coding journey, contributions, and achievements on GitHub
			</p>
		</div> -->

		<!-- GitHub Stats Component -->
		<GitHubStats username="Aqirito" theme="default" />

		<!-- Organization Contributions -->
		<OrganizationContributions username="Aqirito" orgName="kinabalu-makers" />

		<!-- Additional Insights -->
		<div class="insights-section" class:fade-in-up={mounted}>
			<div class="insights-grid">
				<div class="insight-card card">
					<div class="insight-icon">🎯</div>
					<h3>Coding Philosophy</h3>
					<p>
						I believe in consistent, meaningful contributions. My GitHub activity reflects 
						my passion for AI development, IoT solutions, and continuous learning in 
						emerging technologies.
					</p>
				</div>

				<div class="insight-card card">
					<div class="insight-icon">🏢</div>
					<h3>Organization Work</h3>
					<p>
						As a System Analyst at Kinabalu Makers, I contribute to organizational 
						repositories focusing on IoT solutions, edge computing, and system 
						architecture projects.
					</p>
				</div>

				<div class="insight-card card">
					<div class="insight-icon">📈</div>
					<h3>Growth Mindset</h3>
					<p>
						With over 1,030 contributions in the past year across personal and 
						organizational projects, I'm committed to continuous improvement and 
						collaborative development.
					</p>
				</div>
			</div>
		</div>

		<!-- Call to Action -->
		<div class="cta-section" class:fade-in-up={mounted}>
			<div class="cta-card">
				<h2>Let's Collaborate on GitHub</h2>
				<p>
					Interested in contributing to my projects or collaborating on new ideas? 
					Check out my personal repositories and Kinabalu Makers organization projects. 
					Feel free to open issues, submit PRs, or start discussions about AI, IoT, 
					or any interesting tech topics.
				</p>
				<div class="cta-actions">
					<a href="https://github.com/Aqirito" target="_blank" rel="noopener" class="btn">
						🔗 Visit My GitHub
					</a>
					<a href="https://kinabalumakers.dev" target="_blank" rel="noopener" class="btn btn-outline">
						🏢 Kinabalu Makers
					</a>
					<a href="/contact" class="btn btn-outline">
						💬 Get In Touch
					</a>
				</div>
				</div>
			</div>
		</div>
	</section>

<style>
	.page-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.page-header h1 {
		font-size: 3rem;
		font-weight: 800;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.lead {
		font-size: 1.25rem;
		color: var(--text-secondary);
		max-width: 700px;
		margin: 0 auto;
		line-height: 1.6;
	}

	.insights-section {
		margin: 4rem 0;
	}

	.insights-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.insight-card {
		text-align: center;
		padding: 2rem;
	}

	.insight-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.insight-card h3 {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.insight-card p {
		color: var(--text-secondary);
		line-height: 1.6;
	}

	.cta-section {
		margin-top: 4rem;
	}

	.cta-card {
		text-align: center;
		background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
		color: white;
		padding: 3rem 2rem;
	}

	.cta-card h2 {
		color: white;
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.cta-card p {
		font-size: 1.125rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		opacity: 0.95;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.cta-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
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
		border: 2px solid white;
		background: white;
		color: var(--primary-color);
	}

	.btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
	}

	.btn-outline {
		background: transparent;
		color: white;
	}

	.btn-outline:hover {
		background: white;
		color: var(--primary-color);
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2.5rem;
		}

		.insights-grid {
			grid-template-columns: 1fr;
		}

		.cta-actions {
			flex-direction: column;
			align-items: center;
		}

		.cta-card {
			padding: 2rem 1rem;
		}
	}
</style>


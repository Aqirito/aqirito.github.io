<script lang="ts">
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Tachibana Aqirito - System Analyst & Edge Computing Specialist</title>
	<meta name="description" content="Personal website of Tachibana Aqirito, System Analyst at Kinabalu Makers specializing in Edge Computing, AI development, and IoT solutions." />
</svelte:head>

<!-- Hero Section -->
<section class="hero-section">
	<div class="container">
		<div class="hero-content" class:fade-in-up={mounted}>
			<h1 class="hero-title">Tachibana Aqirito</h1>
			<p class="hero-subtitle">
				System Analyst at Kinabalu Makers | System Analyst & Edge Computing Specialist
			</p>
			<p class="hero-description">
				Passionate about AI, Software Development, and Edge Computing technologies in Sabah, Malaysia
			</p>
			<div class="hero-actions">
				<a href="/about" class="btn">Learn More About Me</a>
				<a href="/github" class="btn btn-outline">View GitHub Stats</a>
			</div>
		</div>
	</div>
</section>

<!-- Quick Overview -->
<section class="section">
	<div class="container">
		<div class="grid grid-3">
			<div class="card" class:fade-in-up={mounted}>
				<div class="card-icon">🤖</div>
				<h3>AI Development</h3>
				<p>Creating intelligent systems and chatbots like A.L.I.C.E and WaifuGPT, developing REST APIs for AI companions and complex AI-driven applications.</p>
			</div>
			<div class="card" class:fade-in-up={mounted}>
				<div class="card-icon">⚡</div>
				<h3>Edge Computing</h3>
				<p>Specializing in edge computing solutions and IoT integrations, working with sensors and embedded systems for real-time data processing.</p>
			</div>
			<div class="card" class:fade-in-up={mounted}>
				<div class="card-icon">📊</div>
				<h3>System Analysis</h3>
				<p>Analyzing complex systems and developing efficient solutions at Kinabalu Makers, focusing on scalable and maintainable architectures.</p>
			</div>
		</div>
	</div>
</section>

<!-- Featured Work -->
<section class="section" style="background: var(--surface);">
	<div class="container">
		<h2 class="section-title">Featured Projects & Work</h2>
		<div class="grid grid-2">
			<div class="card" class:fade-in-up={mounted}>
				<h3>Reservation System</h3>
				<p>A web-based reservation system, allowing users to book tickets and manage their visits to parks.</p>
				<div class="skills-grid">
					<span class="tech-tag">Python</span>
					<span class="tech-tag">Nodejs</span>
					<span class="tech-tag">Google Cloud</span>
					<span class="tech-tag">Docker</span>
					<span class="tech-tag">Kubernetes</span>
				</div>
			</div>
			<div class="card" class:fade-in-up={mounted}>
				<h3>EPD AQUAMS IoT</h3>
				<p>Air Quality Monitoring System in Schools - A project focused on monitoring and improving air quality in educational institutions.</p>
				<div class="skills-grid">
					<span class="tech-tag">Python</span>
					<span class="tech-tag">IoT</span>
					<span class="tech-tag">Data Analysis</span>
					<span class="tech-tag">Cloud Computing</span>
					<span class="tech-tag">Data Visualization</span>
					<span class="tech-tag">Real-time Monitoring</span>
					<span class="tech-tag">Environmental Awareness</span>
				</div>
			</div>
			<div class="card" class:fade-in-up={mounted}>
				<h3>e-Kan</h3>
				<p>e-Kan - A comprehensive e-commerce platform designed for seamless online transactions and user engagement.</p>
				<div class="skills-grid">
					<span class="tech-tag">Python</span>
					<span class="tech-tag">Node.js</span>
					<span class="tech-tag">PostgreSQL</span>
					<span class="tech-tag">Docker</span>
					<span class="tech-tag">Kubernetes</span>
				</div>
			</div>
			<div class="card" class:fade-in-up={mounted}>
				<h3>IoT & Edge Computing</h3>
				<p>Working on edge computing solutions and IoT integrations at Kinabalu Makers, including sensor data processing and embedded systems development.</p>
				<div class="skills-grid">
					<span class="skill-tag">Edge Computing</span>
					<span class="skill-tag">IoT Sensors</span>
					<span class="skill-tag">System Analysis</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- GitHub Stats Preview -->
<section class="section" style="background: var(--surface);">
	<div class="container">
		<h2 class="section-title">GitHub Activity</h2>
		<div class="github-preview">
			<div class="stats-preview">
				<div class="stat-item">
					<div class="stat-number">1,030+</div>
					<div class="stat-label">Contributions</div>
				</div>
				<div class="stat-item">
					<div class="stat-number">30+</div>
					<div class="stat-label">Repositories</div>
				</div>
				<div class="stat-item">
					<div class="stat-number">13+</div>
					<div class="stat-label">Followers</div>
				</div>
				<div class="stat-item">
					<div class="stat-number">6+</div>
					<div class="stat-label">Languages</div>
				</div>
			</div>
			<div class="github-preview-content">
				<h3>Real-time GitHub Statistics</h3>
				<p>
					Track my coding journey with live GitHub statistics, contribution graphs, 
					achievement badges, and language usage analytics. See my commitment to 
					continuous learning, open-source contribution, and organizational collaboration 
					with Kinabalu Makers.
				</p>
				<a href="/github" class="btn">View Detailed Stats</a>
			</div>
		</div>
	</div>
</section>

<!-- Website Credits -->
<section class="section">
	<div class="container">
		<div class="credits-content">
			<h2>🤖 Built with AI Assistance</h2>
			<p>This website was 80% created by <strong>Claude</strong> (AI coding assistant) and <strong>Manus</strong> (human guidance), showcasing the power of AI-human collaboration in modern web development.</p>
			<div class="credits-tags">
				<span class="credit-tag">Claude AI</span>
				<span class="credit-tag">Human-AI Collaboration</span>
				<span class="credit-tag">SvelteKit</span>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="section">
	<div class="container">
		<div class="cta-content">
			<h2>Let's Connect & Collaborate</h2>
			<p>Interested in AI development, edge computing, or IoT solutions? I'd love to discuss innovative projects and share knowledge about emerging technologies.</p>
			<div class="cta-actions">
				<a href="/contact" class="btn">Get In Touch</a>
				<a href="/github" class="btn btn-outline">View GitHub Stats</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-content {
		max-width: 800px;
		margin: 0 auto;
	}

	.hero-description {
		font-size: 1.125rem;
		margin-bottom: 2rem;
		opacity: 0.9;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn-outline {
		background: transparent;
		border: 2px solid white;
		color: white;
	}

	.btn-outline:hover {
		background: white;
		color: var(--primary-color);
	}

	.card-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.section-title {
		text-align: center;
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 3rem;
		color: var(--text-primary);
	}

	.cta-content {
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
	}

	.cta-content h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: var(--text-primary);
	}

	.cta-content p {
		font-size: 1.125rem;
		color: var(--text-secondary);
		margin-bottom: 2rem;
	}

	.cta-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.credits-content {
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
	}

	.credits-content h2 {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: var(--text-primary);
	}

	.credits-content p {
		font-size: 1.125rem;
		color: var(--text-secondary);
		margin-bottom: 1.5rem;
	}

	.credits-tags {
		display: flex;
		gap: 0.75rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.credit-tag {
		background: var(--primary-color);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.875rem;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.hero-actions,
		.cta-actions {
			flex-direction: column;
			align-items: center;
		}

		.section-title,
		.cta-content h2 {
			font-size: 2rem;
		}

		.credits-content h2 {
			font-size: 1.75rem;
		}

		.credits-tags {
			flex-direction: column;
			align-items: center;
		}
	}
</style>

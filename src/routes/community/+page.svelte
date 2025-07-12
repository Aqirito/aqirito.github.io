<script lang="ts">
	let mounted = $state(false);
	
	$effect(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Community Involvement - Tachibana Aqirito</title>
	<meta name="description" content="Discover Tachibana Aqirito's community involvement with Kinabalu Coders and contributions to Sabah's tech ecosystem." />
</svelte:head>

<section class="section">
	<div class="container">
		<div class="page-header" class:fade-in-up={mounted}>
			<h1>Community Involvement</h1>
			<p class="lead">Building bridges, sharing knowledge, and fostering growth in Sabah's tech community</p>
		</div>

		<!-- Kinabalu Coders Section -->
		<div class="community-hero" class:fade-in-up={mounted}>
			<div class="card hero-card">
				<div class="hero-content">
					<h2>Kinabalu Coders</h2>
					<p class="hero-subtitle">Active Member & Community Contributor</p>
					<p>
						Kinabalu Coders represents the heart of Sabah's tech community—a vibrant network of developers, 
						entrepreneurs, and technology enthusiasts working together to elevate the region's digital landscape. 
						As an active member, I'm proud to contribute to initiatives that foster learning, collaboration, 
						and innovation across our local ecosystem.
					</p>
					<div class="hero-links">
						<a href="https://kinabalucoders.org" target="_blank" rel="noopener" class="btn">Visit Kinabalu Coders</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Activities & Contributions -->
		<div class="activities-section">
			<h2 class="section-title">Activities & Contributions</h2>
			
			<div class="activities-grid">
				<div class="activity-card card" class:fade-in-up={mounted}>
					<div class="activity-icon">🎓</div>
					<h3>Workshops & Training</h3>
					<p>
						Organize and facilitate hands-on workshops covering modern web development technologies, 
						best practices, and emerging trends. These sessions help community members stay current 
						with industry developments and build practical skills.
					</p>
					<div class="activity-topics">
						<span class="topic-tag">JavaScript Fundamentals</span>
						<span class="topic-tag">React Development</span>
						<span class="topic-tag">Node.js Backend</span>
						<span class="topic-tag">Git & Collaboration</span>
					</div>
				</div>

				<div class="activity-card card" class:fade-in-up={mounted}>
					<div class="activity-icon">🎤</div>
					<h3>Tech Talks & Presentations</h3>
					<p>
						Share insights and experiences through regular tech talks, covering topics from technical 
						deep-dives to career development and industry trends. These presentations help bridge 
						the knowledge gap and inspire community growth.
					</p>
					<div class="activity-topics">
						<span class="topic-tag">Modern Web Architecture</span>
						<span class="topic-tag">Career Development</span>
						<span class="topic-tag">Open Source Contribution</span>
						<span class="topic-tag">Industry Trends</span>
					</div>
				</div>

				<div class="activity-card card" class:fade-in-up={mounted}>
					<div class="activity-icon">🏆</div>
					<h3>Hackathons & Competitions</h3>
					<p>
						Participate in organizing hackathons and coding competitions that challenge participants 
						to solve real-world problems while fostering innovation and teamwork. These events 
						showcase local talent and create networking opportunities.
					</p>
					<div class="activity-topics">
						<span class="topic-tag">Problem Solving</span>
						<span class="topic-tag">Team Building</span>
						<span class="topic-tag">Innovation</span>
						<span class="topic-tag">Networking</span>
					</div>
				</div>

				<div class="activity-card card" class:fade-in-up={mounted}>
					<div class="activity-icon">🤝</div>
					<h3>Mentorship & Guidance</h3>
					<p>
						Provide one-on-one mentorship and guidance to aspiring developers and career changers. 
						This includes code reviews, career advice, and helping newcomers navigate the tech 
						industry landscape in Sabah and beyond.
					</p>
					<div class="activity-topics">
						<span class="topic-tag">Code Reviews</span>
						<span class="topic-tag">Career Guidance</span>
						<span class="topic-tag">Skill Development</span>
						<span class="topic-tag">Industry Navigation</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Open Source & Initiatives -->
		<div class="opensource-section" class:fade-in-up={mounted}>
			<div class="card">
				<h2>Open Source & Community Initiatives</h2>
				<div class="opensource-content">
					<div class="opensource-text">
						<p>
							Beyond organized events, I actively contribute to open-source projects and community-driven 
							initiatives that benefit the broader tech ecosystem. This includes contributing code, 
							documentation, and resources that help other developers learn and grow.
						</p>
						<p>
							I believe in the power of open collaboration and knowledge sharing. Through these contributions, 
							we're not just building software—we're building a community that supports each other's growth 
							and success in the technology industry.
						</p>
					</div>
					<div class="opensource-stats">
						<div class="stat-item">
							<div class="stat-number">100+</div>
							<div class="stat-label">Workshops Conducted</div>
						</div>
						<div class="stat-item">
							<div class="stat-number">100+</div>
							<div class="stat-label">Tech Talks Given</div>
						</div>
						<div class="stat-item">
							<div class="stat-number">100+</div>
							<div class="stat-label">Developers Mentored</div>
						</div>
						<div class="stat-item">
							<div class="stat-number">100+</div>
							<div class="stat-label">Events Organized</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Community Impact -->
		<div class="impact-section">
			<h2 class="section-title">Community Impact</h2>
			<div class="impact-grid">
				<div class="impact-item card" class:fade-in-up={mounted}>
					<h3>Knowledge Sharing</h3>
					<p>
						Creating accessible learning resources and documentation that help developers at all levels 
						improve their skills and stay updated with industry best practices.
					</p>
				</div>
				<div class="impact-item card" class:fade-in-up={mounted}>
					<h3>Network Building</h3>
					<p>
						Facilitating connections between developers, entrepreneurs, and tech companies to create 
						opportunities for collaboration and career advancement.
					</p>
				</div>
				<div class="impact-item card" class:fade-in-up={mounted}>
					<h3>Skill Development</h3>
					<p>
						Providing practical, hands-on learning experiences that bridge the gap between theoretical 
						knowledge and real-world application in software development.
					</p>
				</div>
				<div class="impact-item card" class:fade-in-up={mounted}>
					<h3>Innovation Culture</h3>
					<p>
						Promoting a culture of innovation and experimentation that encourages community members 
						to explore new technologies and creative solutions.
					</p>
				</div>
			</div>
		</div>

		<!-- Call to Action -->
		<div class="cta-section" class:fade-in-up={mounted}>
			<div class="card cta-card">
				<h2>Join the Community</h2>
				<p>
					Interested in being part of Sabah's growing tech community? Whether you're a seasoned developer 
					or just starting your journey, there's a place for you in Kinabalu Coders. Let's build something 
					amazing together!
				</p>
				<div class="cta-actions">
					<a href="/contact" class="btn">Get Involved</a>
					<a href="https://kinabalucoders.org" target="_blank" rel="noopener" class="btn btn-outline">Learn More</a>
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
	}

	.community-hero {
		margin-bottom: 4rem;
	}

	.hero-card {
		background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
		color: white;
		text-align: center;
	}

	.hero-content h2 {
		font-size: 2.5rem;
		font-weight: 800;
		margin-bottom: 0.5rem;
		color: white;
	}

	.hero-subtitle {
		font-size: 1.25rem;
		margin-bottom: 1.5rem;
		opacity: 0.9;
		font-weight: 600;
	}

	.hero-content p {
		font-size: 1.125rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		opacity: 0.95;
	}

	.hero-links {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.section-title {
		text-align: center;
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 3rem;
		color: var(--text-primary);
	}

	.activities-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.activity-card {
		text-align: center;
	}

	.activity-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.activity-card h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.activity-card p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.activity-topics {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	.topic-tag {
		background: var(--primary-color);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 1rem;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.opensource-section {
		margin-bottom: 4rem;
	}

	.opensource-section h2 {
		text-align: center;
		font-size: 2rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 2rem;
	}

	.opensource-content {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 3rem;
		align-items: center;
	}

	.opensource-text p {
		font-size: 1.125rem;
		line-height: 1.7;
		color: var(--text-secondary);
		margin-bottom: 1.5rem;
	}

	.opensource-stats {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.stat-item {
		text-align: center;
	}

	.stat-number {
		font-size: 2rem;
		font-weight: 800;
		color: var(--primary-color);
		margin-bottom: 0.5rem;
	}

	.stat-label {
		font-size: 0.875rem;
		color: var(--text-secondary);
		font-weight: 500;
	}

	.impact-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.impact-item h3 {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.impact-item p {
		color: var(--text-secondary);
		line-height: 1.6;
	}

	.cta-section {
		margin-top: 4rem;
	}

	.cta-card {
		text-align: center;
		background: var(--surface);
	}

	.cta-card h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.cta-card p {
		font-size: 1.125rem;
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: 2rem;
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

	.btn-outline {
		background: transparent;
		border: 2px solid var(--primary-color);
		color: var(--primary-color);
	}

	.btn-outline:hover {
		background: var(--primary-color);
		color: white;
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2.5rem;
		}

		.hero-content h2 {
			font-size: 2rem;
		}

		.section-title {
			font-size: 2rem;
		}

		.opensource-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.opensource-stats {
			grid-template-columns: repeat(4, 1fr);
		}

		.activities-grid,
		.impact-grid {
			grid-template-columns: 1fr;
		}

		.cta-actions {
			flex-direction: column;
			align-items: center;
		}
	}
</style>


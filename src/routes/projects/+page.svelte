<script lang="ts">
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});

	const projects = [
		{
			id: 1,
			title: "EPD Aquams Electronics",
			category: "App Development",
			description: "Professional project at Kinabalu Makers involving Air Quality Monitoring System in Schools.",
			technologies: ["Python", "Electronics", "IoT", "Google Cloud", "Docker"],
			features: [
        "Real-time air quality monitoring",
        "Data visualization",
        "Integration with school systems",
        "Alerts and notifications",
        "Scalable architecture",
        "Data analytics",
        "Remote access",
        "Multi-device support"
			],
			status: "Production",
			company: "Kinabalu Makers",
			stars: 0,
			forks: 0
		},
		{
			id: 2,
			title: "E-COCOA",
			category: "App Development",
			description: "Kinabalu Era Takzim’s project with LKM e-cocoa",
			technologies: ["Python", "Nodejs", "ASP.NET", "Micrsoft Azure", "Docker"],
			features: [
				"REST API integration",
				"Project management",
				"Collaboration tools"
			],
			status: "Production",
			company: "Kinabalu Era Takzim",
			stars: 0,
			forks: 0
		},
		{
			id: 3,
			title: "Platform e-Kan",
			category: "App Development",
			description: "KO-NELAYAN’s e-commerce platform",
			technologies: ["Python", "Nodejs", "Google Cloud", "PostgreSQL", "Docker", "Kubernetes"],
			features: [
				"e-commerce functionality",
				"User management",
				"Payment integration",
        "Product catalog",
        "POSLAJU integration",
        "Order tracking",
        "Inventory management",
        "Android app integration",
			],
			status: "Production",
			company: "KO-NELAYAN",
			stars: 0,
			forks: 0
		},
		{
			id: 4,
			title: "MPT Smart Server Room Monitoring",
			category: "IoT & Sensors",
			description: "IoT and computer vision monitoring of server room in MPT",
			technologies: ["AI", "IoT", "Computer Vision", "Google Cloud", "Docker"],
			features: [
				"Real-time monitoring",
				"Alert system",
				"Data visualization"
			],
			status: "Production",
			company: "MPT",
			stars: 0,
			forks: 0
		},
		{
			id: 5,
			title: "LoveKK",
			category: "App Development",
			description: "A web application for promoting DBKK’s campaigns and events",
			technologies: ["Python", "Nodejs", "PostgreSQL", "Docker"],
			features: [
				"Campaign promotion",
				"User engagement",
				"Social media integration",
        "Gamification features",
        "Event management",
        "Community feedback"
			],
			status: "Archived",
			company: "DBKK",
			stars: 0,
			forks: 0
		},
		{
			id: 6,
			title: "Reservation System",
			category: "App Development",
			description: "A web-based reservation system, allowing users to book tickets and manage their visits to parks.",
			technologies: ["Python", "Nodejs", "Google Cloud", "Docker", "Kubernetes"],
			features: [
				"Online booking",
				"Ticket management",
				"Visitor tracking"
			],
			status: "Production",
			company: "Teraz Global",
			stars: 0,
			forks: 0
		},
		{
			id: 7,
			title: "A.L.I.C.E",
			category: "AI Development",
			description: "Artificial Labile Intelligence Cybernated Existence - A REST API of A.I companion for creating more complex intelligent systems with natural language processing capabilities.",
			technologies: ["Python", "REST API", "AI/ML", "Natural Language Processing"],
			features: [
				"AI companion REST API",
				"Natural language processing",
				"Complex system integration",
				"Scalable architecture",
				"Real-time responses"
			],
			status: "Production",
			company: "Personal Project",
			stars: 9,
			forks: 1
		},
		{
			id: 8,
			title: "WaifuGPT",
			category: "AI Development",
			description: "A ChatGPT-like AI chatbot with personality that can talk to you with real life-like human characteristics. Features engaging conversations with a unique twist.",
			technologies: ["Python", "AI/ML", "Chatbot", "Natural Language"],
			features: [
				"Human-like personality",
				"Engaging conversations",
				"ChatGPT-like interface",
				"Personality customization",
				"Interactive responses"
			],
			status: "Archived",
			company: "Personal Project",
			stars: 1,
			forks: 0
		},
		{
			id: 9,
			title: "Resin Timer App",
			category: "App Development",
			description: "An Android application that reminds users when their resin is fully replenished. Perfect for gamers who need to track resource regeneration timers.",
			technologies: ["TypeScript", "Android", "Mobile App", "Notifications"],
			features: [
				"Resin tracking system",
				"Push notifications",
				"Timer management",
				"User-friendly interface",
				"Resource optimization"
			],
			status: "Production",
			company: "Personal Project",
			stars: 1,
			forks: 0
		},
		{
			id: 10,
			title: "GHAWN-RED",
			category: "IoT & Automation",
			description: "Google Home Assistant With Node-RED integration that allows automation control of your PC and other smart devices through voice commands.",
			technologies: ["Python", "Node-RED", "Google Assistant", "IoT", "Voice Control"],
			features: [
				"Voice PC control",
				"Google Assistant integration",
				"Node-RED automation",
				"Smart device control",
				"Custom voice commands"
			],
			status: "Production",
			company: "Personal Project",
			stars: 0,
			forks: 0
		},
		{
			id: 11,
			title: "DFRobot MultiGasSensor",
			category: "IoT & Sensors",
			description: "Micropython integration for DFRobot MultigasSensor Library, enabling easy sensor data collection and processing for IoT applications.",
			technologies: ["Python", "MicroPython", "IoT Sensors", "Hardware Integration"],
			features: [
				"Multi-gas detection",
				"MicroPython support",
				"Sensor data processing",
				"Hardware integration",
				"Real-time monitoring"
			],
			status: "Production",
			company: "Fork/Contribution from DFRobot",
			stars: 0,
			forks: 0
		}
	];

	let selectedCategory = "All";
	let filteredProjects = projects;

	function filterProjects(category: string) {
		selectedCategory = category;
		if (category === "All") {
			filteredProjects = projects;
		} else {
			filteredProjects = projects.filter(project => project.category === category);
		}
	}

	const categories = ["All", "AI Development", "App Development", "IoT & Automation", "IoT & Sensors"];
</script>

<svelte:head>
	<title>Projects & Portfolio - Tachibana Aqirito</title>
	<meta name="description" content="Explore Tachibana Aqirito's portfolio of AI development projects, IoT solutions, mobile applications, and professional work at Kinabalu Makers." />
</svelte:head>

<section class="section">
	<div class="container">
		<div class="page-header" class:fade-in-up={mounted}>
			<h1>Projects & Portfolio</h1>
			<p class="lead">A showcase of AI development, IoT solutions, app development, and professional projects</p>
		</div>

		<!-- Project Filters -->
		<div class="filters" class:fade-in-up={mounted}>
			{#each categories as category}
				<button 
					class="filter-btn" 
					class:active={selectedCategory === category}
					on:click={() => filterProjects(category)}
				>
					{category}
				</button>
			{/each}
		</div>

		<!-- Projects Grid -->
		<div class="projects-grid">
			{#each filteredProjects as project (project.id)}
				<div class="project-card card" class:fade-in-up={mounted}>
					<div class="project-header">
						<div class="project-meta">
							<span class="project-category category-{project.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}">{project.category}</span>
							<span class="project-status status-{project.status.toLowerCase().replace(' ', '-')}">{project.status}</span>
						</div>
						<h3>{project.title}</h3>
						<p class="project-company">{project.company}</p>
						{#if project.stars !== undefined}
							<div class="github-stats">
								<span class="stat">⭐ {project.stars}</span>
								<span class="stat">🍴 {project.forks}</span>
							</div>
						{/if}
					</div>

					<div class="project-content">
						<p class="project-description">{project.description}</p>

						<div class="project-technologies">
							<h4>Technologies Used</h4>
							<div class="tech-tags">
								{#each project.technologies as tech}
									<span class="tech-tag">{tech}</span>
								{/each}
							</div>
						</div>

						<div class="project-features">
							<h4>Key Features</h4>
							<ul class="features-list">
								{#each project.features as feature}
									<li>{feature}</li>
								{/each}
							</ul>
						</div>
					</div>

					<div class="project-actions">
						{#if project.status === "Production"}
							<button class="btn btn-sm">View Project</button>
						{:else if project.status === "Archived"}
							<button class="btn btn-sm btn-outline">Archived</button>
						{:else}
							<button class="btn btn-sm btn-outline">In Development</button>
						{/if}
						<button class="btn btn-sm btn-outline">View Code</button>
					</div>
				</div>
			{/each}
		</div>

		<!-- Project Stats -->
		<div class="stats-section" class:fade-in-up={mounted}>
			<div class="card stats-card">
				<h2>Project Statistics</h2>
				<div class="stats-grid">
					<div class="stat-item">
						<div class="stat-number">6+</div>
						<div class="stat-label">Projects Completed</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">1,030+</div>
						<div class="stat-label">GitHub Contributions</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">30+</div>
						<div class="stat-label">Repositories</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">13+</div>
						<div class="stat-label">GitHub Followers</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Skills Showcase -->
		<div class="skills-showcase" class:fade-in-up={mounted}>
			<h2 class="section-title">Technical Expertise</h2>
			<div class="skills-categories">
				<div class="skill-category card">
					<h3>AI & Machine Learning</h3>
					<div class="skill-items">
						<div class="skill-item">
							<span class="skill-name">Python AI/ML</span>
							<div class="skill-bar">
								<div class="skill-progress" style="width: 92%"></div>
							</div>
						</div>
						<div class="skill-item">
							<span class="skill-name">Natural Language Processing</span>
							<div class="skill-bar">
								<div class="skill-progress" style="width: 88%"></div>
							</div>
						</div>
						<div class="skill-item">
							<span class="skill-name">Chatbot Development</span>
							<div class="skill-bar">
								<div class="skill-progress" style="width: 90%"></div>
							</div>
						</div>
					</div>
				</div>

				<div class="skill-category card">
					<h3>IoT & Edge Computing</h3>
					<div class="skill-items">
						<div class="skill-item">
							<span class="skill-name">IoT Sensors</span>
							<div class="skill-bar">
								<div class="skill-progress" style="width: 85%"></div>
							</div>
						</div>
						<div class="skill-item">
							<span class="skill-name">MicroPython</span>
							<div class="skill-bar">
								<div class="skill-progress" style="width: 82%"></div>
							</div>
						</div>
						<div class="skill-item">
							<span class="skill-name">Edge Computing</span>
							<div class="skill-bar">
								<div class="skill-progress" style="width: 87%"></div>
							</div>
						</div>
					</div>
				</div>

				<div class="skill-category card">
					<h3>Development & Systems</h3>
					<div class="skill-items">
						<div class="skill-item">
							<span class="skill-name">Python Development</span>
							<div class="skill-bar">
								<div class="skill-progress" style="width: 95%"></div>
							</div>
						</div>
						<div class="skill-item">
							<span class="skill-name">TypeScript</span>
							<div class="skill-bar">
								<div class="skill-progress" style="width: 80%"></div>
							</div>
						</div>
						<div class="skill-item">
							<span class="skill-name">System Analysis</span>
							<div class="skill-bar">
								<div class="skill-progress" style="width: 90%"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Call to Action -->
		<div class="cta-section" class:fade-in-up={mounted}>
			<div class="card cta-card">
				<h2>Interested in Collaboration?</h2>
				<p>
					I'm always open to discussing AI projects, IoT solutions, or innovative ideas that push 
					the boundaries of technology. Whether it's developing intelligent systems or exploring 
					edge computing applications, let's create something amazing together.
				</p>
				<div class="cta-actions">
					<a href="/contact" class="btn">Start a Conversation</a>
					<a href="https://github.com/Aqirito" target="_blank" rel="noopener" class="btn btn-outline">View GitHub</a>
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

	.filters {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 3rem;
		flex-wrap: wrap;
	}

	.filter-btn {
		padding: 0.5rem 1.5rem;
		border: 2px solid var(--border);
		background: white;
		color: var(--text-secondary);
		border-radius: 2rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
		font-size: 0.875rem;
	}

	.filter-btn:hover,
	.filter-btn.active {
		border-color: var(--primary-color);
		background: var(--primary-color);
		color: white;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.project-card {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.project-header {
		margin-bottom: 1.5rem;
	}

	.project-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.project-category,
	.project-status {
		padding: 0.25rem 0.75rem;
		border-radius: 1rem;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.category-ai-development {
		background: #dbeafe;
		color: #1e40af;
	}

	.category-iot---automation,
	.category-iot---sensors {
		background: #fef3c7;
		color: #92400e;
	}

	.category-app-development {
		background: #f3e8ff;
		color: #7c3aed;
	}

	.status-production {
		background: #dcfce7;
		color: #166534;
	}

	.status-archived {
		background: #fee2e2;
		color: #dc2626;
	}

	.status-in-development {
		background: #fef3c7;
		color: #92400e;
	}

	.project-header h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.project-company {
		color: var(--text-secondary);
		font-weight: 500;
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
	}

	.github-stats {
		display: flex;
		gap: 1rem;
		font-size: 0.875rem;
		color: var(--text-secondary);
	}

	.stat {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.project-content {
		flex: 1;
		margin-bottom: 1.5rem;
	}

	.project-description {
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.project-technologies,
	.project-features {
		margin-bottom: 1.5rem;
	}

	.project-technologies h4,
	.project-features h4 {
		font-size: 1rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0.75rem;
	}

	.tech-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.features-list {
		list-style: none;
		padding: 0;
	}

	.features-list li {
		position: relative;
		padding-left: 1.5rem;
		margin-bottom: 0.5rem;
		color: var(--text-secondary);
		font-size: 0.875rem;
	}

	.features-list li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--primary-color);
		font-weight: bold;
	}

	.project-actions {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.btn-sm {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
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

	.stats-section {
		margin-bottom: 4rem;
	}

	.stats-card {
		text-align: center;
		background: var(--surface);
	}

	.stats-card h2 {
		font-size: 2rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 2rem;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 2rem;
	}

	.stat-item {
		text-align: center;
	}

	.stat-number {
		font-size: 2.5rem;
		font-weight: 800;
		color: var(--primary-color);
		margin-bottom: 0.5rem;
	}

	.stat-label {
		color: var(--text-secondary);
		font-weight: 500;
	}

	.skills-showcase {
		margin-bottom: 4rem;
	}

	.section-title {
		text-align: center;
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 3rem;
		color: var(--text-primary);
	}

	.skills-categories {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.skill-category h3 {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.skill-item {
		margin-bottom: 1rem;
	}

	.skill-name {
		display: block;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.skill-bar {
		height: 8px;
		background: var(--border);
		border-radius: 4px;
		overflow: hidden;
	}

	.skill-progress {
		height: 100%;
		background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
		border-radius: 4px;
		transition: width 1s ease-in-out;
	}

	.cta-section {
		margin-top: 4rem;
	}

	.cta-card {
		text-align: center;
		background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
		color: white;
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

	.cta-actions .btn-outline {
		border-color: white;
		color: white;
	}

	.cta-actions .btn-outline:hover {
		background: white;
		color: var(--primary-color);
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2.5rem;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}

		.skills-categories {
			grid-template-columns: 1fr;
		}

		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.cta-actions {
			flex-direction: column;
			align-items: center;
		}

		.filters {
			gap: 0.5rem;
		}

		.filter-btn {
			font-size: 0.75rem;
			padding: 0.4rem 1rem;
		}
	}
</style>

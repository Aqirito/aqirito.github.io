<script lang="ts">
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Professional Experience - Tachibana Aqirito</title>
	<meta name="description" content="Explore Tachibana Aqirito's professional experience at Kinabalu Makers and previous roles in technology and software development." />
</svelte:head>

<section class="section">
	<div class="container">
		<div class="page-header" class:fade-in-up={mounted}>
			<h1>Professional Experience</h1>
			<p class="lead">A journey through technology, innovation, and professional growth</p>
		</div>

		<div class="experience-timeline">
			<!-- Current Role -->
			<div class="timeline-item current" class:fade-in-up={mounted}>
				<div class="timeline-marker"></div>
				<div class="timeline-content">
					<div class="card experience-card">
						<div class="experience-header">
							<h2>Technology Professional</h2>
							<div class="company">Kinabalu Makers</div>
							<div class="period">2023 - Present</div>
						</div>
						
						<div class="experience-details">
							<h3>Key Responsibilities</h3>
							<ul>
								<li>Lead development of innovative software solutions using modern web technologies</li>
								<li>Collaborate with cross-functional teams to deliver high-quality products</li>
								<li>Architect and implement scalable frontend and backend systems</li>
								<li>Mentor junior developers and contribute to technical decision-making</li>
								<li>Drive adoption of best practices in code quality and development workflows</li>
							</ul>

							<h3>Technologies & Tools</h3>
							<div class="tech-stack">
								<span class="tech-tag">Edge Computing</span>
								<span class="tech-tag">Frontend Development</span>
								<span class="tech-tag">Backend Development</span>
								<span class="tech-tag">IoT Solutions</span>
								<span class="tech-tag">AI Development</span>
								<span class="tech-tag">Cloud Computing</span>
								<span class="tech-tag">Kubernetes</span>
								<span class="tech-tag">Docker</span>
							</div>

							<h3>Notable Projects</h3>
							<div class="projects-grid">
								<div class="project-item">
									<h4>Real-Time Data Processing System</h4>
									<p>Developed a system for processing and analyzing real-time data from IoT sensors, enhancing decision-making capabilities.</p>
								</div>
								<div class="project-item">
									<h4>Enterprise Web Platform</h4>
									<p>Developed a comprehensive web platform serving thousands of users with real-time data processing and interactive dashboards.</p>
								</div>
								<div class="project-item">
									<h4>Mobile-First Application</h4>
									<p>Built responsive web application with offline capabilities and progressive web app features for enhanced user experience.</p>
								</div>
								<div class="project-item">
									<h4>API Integration System</h4>
									<p>Designed and implemented robust API integration layer connecting multiple third-party services with internal systems.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Previous Experience -->
			<div class="timeline-item" class:fade-in-up={mounted}>
				<div class="timeline-marker"></div>
				<div class="timeline-content">
					<div class="card experience-card">
						<div class="experience-header">
							<h2>Software Developer</h2>
							<div class="company">Kinabalu Makers</div>
							<div class="period">2020 - 2023</div>
						</div>
						
						<div class="experience-details">
							<h3>Key Achievements</h3>
							<ul>
								<li>Contributed to development of customer-facing web applications</li>
								<li>Implemented automated testing strategies improving code reliability</li>
								<li>Participated in agile development processes and sprint planning</li>
								<li>Collaborated with design teams to create intuitive user interfaces</li>
							</ul>

							<h3>Skills Developed</h3>
							<div class="skills-grid">
								<span class="skill-tag">Frontend Development</span>
								<span class="skill-tag">Backend APIs</span>
								<span class="skill-tag">Database Design</span>
								<span class="skill-tag">Testing & QA</span>
								<span class="skill-tag">Agile Methodology</span>
								<span class="skill-tag">Team Collaboration</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Education/Early Career -->
			<div class="timeline-item" class:fade-in-up={mounted}>
				<div class="timeline-marker"></div>
				<div class="timeline-content">
					<div class="card experience-card">
						<div class="experience-header">
							<h2>Technology Education & Early Career</h2>
							<div class="company">Politeknik Kota Kinabalu</div>
							<div class="period">2017 - 2019</div>
						</div>
						<div class="experience-details">
							<h3>Foundation Building</h3>
							<ul>
								<li>Completed comprehensive studies in Mechatronics Engineering</li>
								<li>Built foundational projects in Robotics, IoT systems and automation</li>
								<li>Participated in coding bootcamps and online learning platforms</li>
								<li>Represented Politeknik Kota Kinabalu in Autonomous drone category</li>
								<li>Elected to be Competitor for 24th FIRA World Cup 2019 in Changwon, South Korea</li>
								<li>Awarded fastest Obstacle challenge on Air Drone Category in FIRA World Cup Changwon, South Korea 2019</li>
								<li>Member of Robotics Club Politeknik Kota Kinabalu</li>
							</ul>

							<h3>Core Competencies Acquired</h3>
							<div class="skills-grid">
								<span class="skill-tag">Programming Fundamentals</span>
								<span class="skill-tag">Robotics</span>
								<span class="skill-tag">Problem Solving</span>
								<span class="skill-tag">Software Architecture</span>
								<span class="skill-tag">Version Control</span>
								<span class="skill-tag">Project Management</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Skills Summary -->
		<div class="skills-summary" class:fade-in-up={mounted}>
			<div class="card">
				<h2>Technical Skills & Expertise</h2>
				<div class="skills-categories">
					<div class="skill-category">
						<h3>Frontend Development</h3>
						<div class="skills-list">
							<span class="tech-tag">Cross-Platform Applications</span>
							<span class="tech-tag">Enterprise System</span>
							<span class="tech-tag">Responsive Design</span>
						</div>
					</div>
					<div class="skill-category">
						<h3>Backend Development</h3>
						<div class="skills-list">
							<span class="tech-tag">API Development</span>
							<span class="tech-tag">Microservices</span>
							<span class="tech-tag">Database Design</span>
							<span class="tech-tag">Data Integrity</span>
							<span class="tech-tag">3rd Party Integrations</span>
						</div>
					</div>
					<div class="skill-category">
						<h3>Tools & Platforms</h3>
						<div class="skills-list">
							<span class="tech-tag">Git & GitHub</span>
							<span class="tech-tag">Docker</span>
							<span class="tech-tag">Cloud Services</span>
							<span class="tech-tag">CI/CD Pipelines</span>
							<span class="tech-tag">Testing Frameworks</span>
							<span class="tech-tag">Agile/Scrum</span>
						</div>
					</div>
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
		max-width: 600px;
		margin: 0 auto;
	}

	.experience-timeline {
		position: relative;
		max-width: 800px;
		margin: 0 auto 4rem auto;
	}

	.experience-timeline::before {
		content: '';
		position: absolute;
		left: 30px;
		top: 0;
		bottom: 0;
		width: 2px;
		background: var(--border);
	}

	.timeline-item {
		position: relative;
		margin-bottom: 3rem;
		padding-left: 80px;
	}

	.timeline-marker {
		position: absolute;
		left: 20px;
		top: 20px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: var(--primary-color);
		border: 4px solid white;
		box-shadow: 0 0 0 2px var(--primary-color);
	}

	.timeline-item.current .timeline-marker {
		background: var(--accent-color);
		box-shadow: 0 0 0 2px var(--accent-color);
	}

	.experience-card {
		margin-bottom: 0;
	}

	.experience-header {
		border-bottom: 1px solid var(--border);
		padding-bottom: 1rem;
		margin-bottom: 1.5rem;
	}

	.experience-header h2 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.company {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--primary-color);
		margin-bottom: 0.25rem;
	}

	.period {
		font-size: 0.875rem;
		color: var(--text-secondary);
		font-weight: 500;
	}

	.experience-details h3 {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 1.5rem 0 1rem 0;
	}

	.experience-details h3:first-child {
		margin-top: 0;
	}

	.experience-details ul {
		list-style: none;
		padding: 0;
		margin-bottom: 1.5rem;
	}

	.experience-details li {
		position: relative;
		padding-left: 1.5rem;
		margin-bottom: 0.5rem;
		color: var(--text-secondary);
		line-height: 1.6;
	}

	.experience-details li::before {
		content: '▸';
		position: absolute;
		left: 0;
		color: var(--primary-color);
		font-weight: bold;
	}

	.tech-stack,
	.skills-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.projects-grid {
		display: grid;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.project-item {
		padding: 1rem;
		background: var(--surface);
		border-radius: 0.5rem;
		border: 1px solid var(--border);
	}

	.project-item h4 {
		font-size: 1rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.project-item p {
		font-size: 0.875rem;
		color: var(--text-secondary);
		line-height: 1.5;
		margin: 0;
	}

	.skills-summary {
		margin-top: 4rem;
	}

	.skills-summary h2 {
		text-align: center;
		font-size: 2rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 2rem;
	}

	.skills-categories {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.skill-category h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 1rem;
		text-align: center;
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2.5rem;
		}

		.experience-timeline::before {
			left: 15px;
		}

		.timeline-marker {
			left: 5px;
		}

		.timeline-item {
			padding-left: 50px;
		}

		.skills-categories {
			grid-template-columns: 1fr;
		}
	}
</style>


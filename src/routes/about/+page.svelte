<script lang="ts">
	import { onMount } from 'svelte';
	
	let mounted = $state(false);
	
	$effect(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>About - Tachibana Aqirito</title>
	<meta name="description" content="Learn more about Tachibana Aqirito's journey as a System Analyst, AI developer, and edge computing specialist at Kinabalu Makers in Sabah, Malaysia." />
</svelte:head>

<section class="section">
	<div class="container">
		<div class="about-header" class:fade-in-up={mounted}>
			<h1>About Me</h1>
			<p class="lead">System Analyst and Edge Computing Specialist passionate about AI development, IoT solutions, and intelligent systems</p>
		</div>

		<div class="about-content">
			<div class="about-grid">
				<div class="about-text" class:fade-in-up={mounted}>
					<h2>Professional Journey</h2>
					<p>
						As a System Analyst at Kinabalu Makers Sdn. Bhd in Kota Kinabalu, Sabah, I specialize in developing 
						intelligent systems and edge computing solutions. My work focuses on creating AI-driven applications, 
						analyzing complex systems, and implementing IoT solutions that bridge the gap between traditional 
						computing and emerging edge technologies.
					</p>
					
					<p>
						My expertise spans across artificial intelligence development, where I've created projects like 
						A.L.I.C.E (Artificial Labile Intelligence Cybernated Existence) - a REST API for AI companions, 
						and WaifuGPT - an AI chatbot with personality. These projects demonstrate my passion for creating 
						intelligent systems that can interact naturally with users.
					</p>

					<h2>Technical Interests</h2>
					<p>
						Beyond my professional responsibilities, I'm deeply interested in the intersection of AI and edge computing. 
						I enjoy working with IoT sensors, developing mobile applications like my resin-timer-app for Android, 
						and exploring voice assistant technologies through projects like GHAWN-RED (Google Home Assistant With Node-RED).
					</p>

					<p>
						When I'm not coding, you'll find me watching anime, gaming, or listening to ASMR - interests that often 
						inspire creative elements in my technical projects. This blend of technical expertise and creative interests 
						helps me approach problems from unique angles and develop more engaging user experiences.
					</p>
				</div>

					<div class="about-sidebar" class:fade-in-up={mounted}>
						<div class="card">
							<h3>Core Values</h3>
							<ul class="values-list">
								<li>🤖 AI-driven innovation</li>
								<li>⚡ Edge computing efficiency</li>
								<li>📚 Continuous learning</li>
								<li>🎯 System optimization</li>
								<li>💡 Creative problem-solving</li>
							</ul>
						</div>

						<div class="card">
							<h3>Interests & Focus Areas</h3>
							<div class="interests">
								<span class="interest-tag">AI Development</span>
								<span class="interest-tag">Edge Computing</span>
								<span class="interest-tag">IoT Solutions</span>
								<span class="interest-tag">System Analysis</span>
								<span class="interest-tag">Mobile Apps</span>
								<span class="interest-tag">Voice Assistants</span>
								<span class="interest-tag">Anime & Gaming</span>
							</div>
						</div>
					</div>
			</div>

			<div class="mission-section" class:fade-in-up={mounted}>
				<div class="card mission-card">
					<h2>Mission & Vision</h2>
					<p>
						My mission is to push the boundaries of what's possible with AI and edge computing technologies. 
						I believe that intelligent systems should be accessible, efficient, and capable of operating 
						at the edge where data is generated, reducing latency and improving user experiences.
					</p>
					<p>
						Through my work at Kinabalu Makers and personal projects, I strive to create innovative solutions 
						that demonstrate the potential of AI-driven applications. Whether it's developing chatbots with 
						personality, creating mobile apps for specific use cases, or integrating IoT sensors with 
						intelligent processing, I'm passionate about building technology that makes a real difference.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.about-header h1 {
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

	.about-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 3rem;
		margin-bottom: 3rem;
	}

	.about-text h2 {
		font-size: 1.75rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 2rem 0 1rem 0;
	}

	.about-text h2:first-child {
		margin-top: 0;
	}

	.about-text p {
		font-size: 1.125rem;
		line-height: 1.7;
		color: var(--text-secondary);
		margin-bottom: 1.5rem;
	}

	.about-sidebar {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.values-list {
		list-style: none;
		padding: 0;
	}

	.values-list li {
		padding: 0.5rem 0;
		font-size: 1.125rem;
		color: var(--text-secondary);
	}

	.interests {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.interest-tag {
		background: var(--primary-color);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 1.5rem;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.mission-section {
		margin-top: 3rem;
	}

	.mission-card {
		background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
		color: white;
		text-align: center;
	}

	.mission-card h2 {
		color: white;
		margin-bottom: 1.5rem;
	}

	.mission-card p {
		font-size: 1.125rem;
		line-height: 1.7;
		opacity: 0.95;
		margin-bottom: 1rem;
	}

	.mission-card p:last-child {
		margin-bottom: 0;
	}

	@media (max-width: 768px) {
		.about-header h1 {
			font-size: 2.5rem;
		}

		.about-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.about-text h2 {
			font-size: 1.5rem;
		}

		.about-text p {
			font-size: 1rem;
		}
	}
</style>


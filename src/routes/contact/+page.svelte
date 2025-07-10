<script lang="ts">
	import { onMount } from 'svelte';
	
	let mounted = false;
	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};
	let isSubmitting = false;
	let submitMessage = '';
	
	onMount(() => {
		mounted = true;
	});

	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;
		
		// Simulate form submission
		setTimeout(() => {
			isSubmitting = false;
			submitMessage = 'Thank you for your message! I\'ll get back to you soon.';
			formData = { name: '', email: '', subject: '', message: '' };
		}, 1500);
	}
</script>

<svelte:head>
	<title>Contact - Tachibana Aqirito</title>
	<meta name="description" content="Get in touch with Tachibana Aqirito for collaboration opportunities, community involvement, or professional inquiries." />
</svelte:head>

<section class="section">
	<div class="container">
		<div class="page-header" class:fade-in-up={mounted}>
			<h1>Get In Touch</h1>
			<p class="lead">Let's connect and explore opportunities for collaboration, community involvement, or professional partnerships</p>
		</div>

		<div class="contact-content">
			<!-- Contact Information -->
			<div class="contact-info" class:fade-in-up={mounted}>
				<div class="card info-card">
					<h2>Let's Connect</h2>
					<p>
						I'm always excited to discuss edge computing solutions, IoT integrations, 
						or innovative technology ideas. Whether you're interested in collaboration, have questions about 
						my projects, or want to explore new possibilities in intelligent systems, I'd love to hear from you.
					</p>

					<div class="contact-methods">
						<div class="contact-method">
							<div class="method-icon">📧</div>
							<div class="method-content">
								<h3>Email</h3>
								<p>aqil.rahmat@kinabalumakers.dev</p>
								<span class="method-note">Best for project inquiries</span>
							</div>
						</div>

						<div class="contact-method">
							<div class="method-icon">💻</div>
							<div class="method-content">
								<h3>GitHub</h3>
								<p>github.com/Aqirito</p>
								<span class="method-note">Code collaboration & projects</span>
							</div>
						</div>

						<div class="contact-method">
							<div class="method-icon">🏢</div>
							<div class="method-content">
								<h3>Professional</h3>
								<p>Kinabalu Makers Sdn. Bhd</p>
								<span class="method-note">Kota Kinabalu, Sabah, Malaysia</span>
							</div>
						</div>

						<div class="contact-method">
							<div class="method-icon">🤖</div>
							<div class="method-content">
								<h3>Specialization</h3>
								<p>Software Development, System Analyst & Edge Computing</p>
								<span class="method-note">System Analysis & IoT Solutions</span>
							</div>
						</div>
					</div>

					<div class="community-links">
						<h3>Community Connections</h3>
						<div class="community-buttons">
							<a href="https://kinabalumakers.dev" target="_blank" rel="noopener" class="community-btn">
								<span class="btn-icon">🏢</span>
								Kinabalu Makers
							</a>
							<a href="https://kinabalucoders.org" target="_blank" rel="noopener" class="community-btn">
								<span class="btn-icon">👥</span>
								Kinabalu Coders
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="contact-form-section" class:fade-in-up={mounted}>
				<div class="card form-card">
					<h2>Send a Message</h2>
					<p>Have a specific question or proposal? Use the form below and I'll get back to you as soon as possible.</p>

					{#if submitMessage}
						<div class="success-message">
							{submitMessage}
						</div>
					{:else}
						<form on:submit={handleSubmit} class="contact-form">
							<div class="form-group">
								<label for="name">Full Name</label>
								<input 
									type="text" 
									id="name" 
									bind:value={formData.name}
									required 
									placeholder="Your full name"
								/>
							</div>

							<div class="form-group">
								<label for="email">Email Address</label>
								<input 
									type="email" 
									id="email" 
									bind:value={formData.email}
									required 
									placeholder="your.email@example.com"
								/>
							</div>

							<div class="form-group">
								<label for="subject">Subject</label>
								<select id="subject" bind:value={formData.subject} required>
									<option value="">Select a subject</option>
									<option value="collaboration">Professional Collaboration</option>
									<option value="community">Community Involvement</option>
									<option value="mentorship">Mentorship Inquiry</option>
									<option value="speaking">Speaking Opportunity</option>
									<option value="project">Project Discussion</option>
									<option value="other">Other</option>
								</select>
							</div>

							<div class="form-group">
								<label for="message">Message</label>
								<textarea 
									id="message" 
									bind:value={formData.message}
									required 
									rows="6"
									placeholder="Tell me about your project, idea, or how we can work together..."
								></textarea>
							</div>

							<button type="submit" class="btn btn-submit" disabled={isSubmitting}>
								{#if isSubmitting}
									Sending...
								{:else}
									Send Message
								{/if}
							</button>
						</form>
					{/if}
				</div>
			</div>
		</div>

		<!-- Collaboration Areas -->
		<div class="collaboration-section" class:fade-in-up={mounted}>
			<h2 class="section-title">Areas of Interest</h2>
			<div class="collaboration-grid">
				<div class="collaboration-item card">
					<div class="collab-icon">🤖</div>
					<h3>AI Development</h3>
					<p>Chatbot development, natural language processing, AI companions, and intelligent system design for various applications.</p>
				</div>

				<div class="collaboration-item card">
					<div class="collab-icon">⚡</div>
					<h3>Edge Computing</h3>
					<p>Edge computing solutions, real-time data processing, IoT integrations, and distributed computing architectures.</p>
				</div>

				<div class="collaboration-item card">
					<div class="collab-icon">📱</div>
					<h3>Mobile Applications</h3>
					<p>Android app development, TypeScript applications, mobile-first solutions, and cross-platform development.</p>
				</div>

				<div class="collaboration-item card">
					<div class="collab-icon">🔧</div>
					<h3>IoT & Sensors</h3>
					<p>IoT sensor integration, MicroPython development, hardware interfacing, and environmental monitoring systems.</p>
				</div>

				<div class="collaboration-item card">
					<div class="collab-icon">🎮</div>
					<h3>Gaming & Entertainment</h3>
					<p>Game-related applications, timer apps, entertainment technology, and interactive user experiences.</p>
				</div>

				<div class="collaboration-item card">
					<div class="collab-icon">📊</div>
					<h3>System Analysis</h3>
					<p>System architecture design, performance optimization, data analysis, and scalable solution development.</p>
				</div>
			</div>
		</div>

		<!-- Response Time -->
		<div class="response-info" class:fade-in-up={mounted}>
			<div class="card response-card">
				<h3>Response Time</h3>
				<p>
					I typically respond to messages within 24-48 hours during weekdays. For urgent matters, 
					please mention it in your subject line. I appreciate your patience and look forward to 
					connecting with you!
				</p>
				<div class="response-stats">
					<div class="response-stat">
						<span class="stat-number">&lt; 24h</span>
						<span class="stat-label">Average Response Time</span>
					</div>
					<div class="response-stat">
						<span class="stat-number">100%</span>
						<span class="stat-label">Response Rate</span>
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
		max-width: 700px;
		margin: 0 auto;
	}

	.contact-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-bottom: 4rem;
	}

	.info-card h2,
	.form-card h2 {
		font-size: 1.75rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.info-card p,
	.form-card p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 2rem;
	}

	.contact-methods {
		margin-bottom: 2rem;
	}

	.contact-method {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 1.5rem;
		padding: 1rem;
		background: var(--surface);
		border-radius: 0.5rem;
		border: 1px solid var(--border);
	}

	.method-icon {
		font-size: 1.5rem;
		flex-shrink: 0;
	}

	.method-content h3 {
		font-size: 1rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0.25rem;
	}

	.method-content p {
		color: var(--primary-color);
		font-weight: 500;
		margin-bottom: 0.25rem;
	}

	.method-note {
		font-size: 0.875rem;
		color: var(--text-secondary);
	}

	.community-links {
		border-top: 1px solid var(--border);
		padding-top: 2rem;
	}

	.community-links h3 {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.community-buttons {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.community-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background: var(--primary-color);
		color: white;
		text-decoration: none;
		border-radius: 0.5rem;
		font-weight: 500;
		transition: all 0.3s ease;
	}

	.community-btn:hover {
		background: var(--secondary-color);
		transform: translateY(-2px);
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
	}

	.form-group label {
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.form-group input,
	.form-group select,
	.form-group textarea {
		padding: 0.75rem;
		border: 2px solid var(--border);
		border-radius: 0.5rem;
		font-size: 1rem;
		transition: border-color 0.3s ease;
	}

	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--primary-color);
	}

	.form-group textarea {
		resize: vertical;
		min-height: 120px;
	}

	.btn-submit {
		align-self: flex-start;
		min-width: 150px;
	}

	.btn-submit:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.success-message {
		background: #dcfce7;
		color: #166534;
		padding: 1rem;
		border-radius: 0.5rem;
		border: 1px solid #bbf7d0;
		text-align: center;
		font-weight: 500;
	}

	.section-title {
		text-align: center;
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 3rem;
		color: var(--text-primary);
	}

	.collaboration-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.collaboration-item {
		text-align: center;
	}

	.collab-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.collaboration-item h3 {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.collaboration-item p {
		color: var(--text-secondary);
		line-height: 1.6;
	}

	.response-info {
		margin-top: 4rem;
	}

	.response-card {
		text-align: center;
		background: var(--surface);
	}

	.response-card h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.response-card p {
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 2rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.response-stats {
		display: flex;
		justify-content: center;
		gap: 3rem;
	}

	.response-stat {
		text-align: center;
	}

	.stat-number {
		display: block;
		font-size: 2rem;
		font-weight: 800;
		color: var(--primary-color);
		margin-bottom: 0.5rem;
	}

	.stat-label {
		color: var(--text-secondary);
		font-weight: 500;
		font-size: 0.875rem;
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2.5rem;
		}

		.contact-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.community-buttons {
			flex-direction: column;
		}

		.collaboration-grid {
			grid-template-columns: 1fr;
		}

		.response-stats {
			flex-direction: column;
			gap: 1.5rem;
		}

		.section-title {
			font-size: 2rem;
		}
	}
</style>


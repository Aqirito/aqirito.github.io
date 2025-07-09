<script lang="ts">
	import '../app.css';
	
	let mobileMenuOpen = false;
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="navbar">
	<div class="nav-container">
		<a href="/" class="nav-logo" on:click={closeMobileMenu}>Tachibana Aqirito</a>
		
		<!-- Mobile menu button -->
		<button 
			class="mobile-menu-btn" 
			class:active={mobileMenuOpen}
			on:click={toggleMobileMenu}
			aria-label="Toggle mobile menu"
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
		
		<!-- Navigation menu -->
		<div class="nav-menu" class:mobile-open={mobileMenuOpen}>
			<a href="/" class="nav-link" on:click={closeMobileMenu}>Home</a>
			<a href="/about" class="nav-link" on:click={closeMobileMenu}>About</a>
			<a href="/experience" class="nav-link" on:click={closeMobileMenu}>Experience</a>
			<a href="/community" class="nav-link" on:click={closeMobileMenu}>Community</a>
			<a href="/projects" class="nav-link" on:click={closeMobileMenu}>Projects</a>
			<a href="/github" class="nav-link" on:click={closeMobileMenu}>GitHub</a>
			<a href="/contact" class="nav-link" on:click={closeMobileMenu}>Contact</a>
		</div>
		
		<!-- Mobile menu overlay -->
		{#if mobileMenuOpen}
			<div 
				class="mobile-overlay" 
				on:click={closeMobileMenu}
				on:keydown={(e) => e.key === 'Escape' && closeMobileMenu()}
				role="button"
				tabindex="0"
				aria-label="Close mobile menu"
			></div>
		{/if}
	</div>
</nav>

<main>
	<slot />
</main>

<footer class="footer">
	<div class="footer-container">
		<div class="footer-content">
			<div class="footer-section">
				<h4 class="footer-title">Tachibana Aqirito</h4>
				<p class="footer-description">
					Proudly contributing to the Sabah tech ecosystem through innovation and community building.
				</p>
			</div>
			
			<div class="footer-section">
				<h4 class="footer-title">Quick Links</h4>
				<div class="footer-links">
					<a href="/about" class="footer-link">About</a>
					<a href="/experience" class="footer-link">Experience</a>
					<a href="/projects" class="footer-link">Projects</a>
					<a href="/contact" class="footer-link">Contact</a>
				</div>
			</div>
			
			<div class="footer-section">
				<h4 class="footer-title">Community</h4>
				<div class="footer-links">
					<a href="https://kinabalumakers.com" target="_blank" rel="noopener" class="footer-link">
						Kinabalu Makers
					</a>
					<a href="https://kinabalucoders.com" target="_blank" rel="noopener" class="footer-link">
						Kinabalu Coders
					</a>
				</div>
			</div>
			
			<div class="footer-section">
				<h4 class="footer-title">Connect</h4>
				<div class="footer-links">
					<a href="/github" class="footer-link">GitHub</a>
					<a href="/contact" class="footer-link">Get in Touch</a>
				</div>
			</div>
		</div>
		
		<div class="footer-bottom">
			<p>&copy; 2025 Tachibana Aqirito. All rights reserved.</p>
		</div>
	</div>
</footer>

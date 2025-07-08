<script lang="ts">
	import '../app.css';
</script>

<nav class="navbar">
	<div class="nav-container">
		<a href="/" class="nav-logo">Tachibana Aqirito</a>
		<div class="nav-menu">
			<a href="/" class="nav-link">Home</a>
			<a href="/about" class="nav-link">About</a>
			<a href="/experience" class="nav-link">Experience</a>
			<a href="/community" class="nav-link">Community</a>
			<a href="/projects" class="nav-link">Projects</a>
			<a href="/github" class="nav-link">GitHub</a>
			<a href="/contact" class="nav-link">Contact</a>
		</div>
	</div>
</nav>

<main>
	<slot />
</main>

<footer class="footer">
	<div class="footer-container">
		<p>&copy; 2025 Tachibana Aqirito. Proudly contributing to the Sabah tech ecosystem.</p>
		<div class="footer-links">
			<a href="https://kinabalumakers.com" target="_blank" rel="noopener">Kinabalu Makers</a>
			<a href="https://kinabalucoders.com" target="_blank" rel="noopener">Kinabalu Coders</a>
		</div>
	</div>
</footer>


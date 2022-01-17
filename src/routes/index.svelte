<script context="module" lang="ts">
  import About from '$lib/about/About.svelte';
  import Facts from '$lib/facts/Facts.svelte';
  import Skills from '$lib/skills/Skills.svelte';
  import Resume from '$lib/resume/Resume.svelte';
  import Portfolio from '$lib/portfolio/Portfolio.svelte';
  import Services from '$lib/services/Services.svelte';
  import Testimonials from '$lib/testimonials/Testimonials.svelte';
  import Contact from '$lib/contact/Contact.svelte';
</script>

<!-- ======= Hero Section ======= -->
<section id="hero" class="d-flex flex-column justify-content-center align-items-center">
  <div class="hero-container" data-aos="fade-in">
    <h1>Aqil Rahmat</h1>
    <p>I'm <span class="typed" data-typed-items="Software Developer, Casual Gamer, Anime Lover"></span></p>
  </div>
</section>
<!-- End Hero -->

<main id="main">
  <About/>
  <Facts/>
  <Skills/>
  <Resume/>
  <!-- <Portfolio/> -->
  <!-- <Services/> -->
  <!-- <Testimonials/> -->
  <!-- <Contact/> -->
</main>

<a href="#hero" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
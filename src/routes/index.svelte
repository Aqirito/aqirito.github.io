<script context="module" lang="ts">
  import About from '$lib/about/About.svelte';
  import Facts from '$lib/facts/Facts.svelte';
</script>


<!-- ======= Hero Section ======= -->
<section id="hero" class="d-flex flex-column justify-content-center align-items-center">
  <div class="hero-container" data-aos="fade-in">
    <h1>Alex Smith</h1>
    <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
  </div>
</section>
<!-- End Hero -->


<main id="main">
  <About/>
  <Facts/>
</main>
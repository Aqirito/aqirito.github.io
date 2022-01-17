<script lang="ts">
  import '/static/assets/css/style.css';
  import Header from '$lib/header/Header.svelte';
  import Footer from '$lib/footer/Footer.svelte';
</script>

<Header></Header>
<main>
  <slot></slot>
</main>
<!-- <Footer></Footer> -->
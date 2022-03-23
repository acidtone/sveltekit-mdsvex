<script>
  import Header from '$lib/components/Header.svelte'
  import '$lib/styles/main.css'
</script>
<svelte:head>
	<!-- elements go here -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism.min.css">
</svelte:head>

<Header />

<main>
  <slot />
</main>

<footer>&copy; 2022 Tony</footer>
<main>
  <h1>Hello {name}!</h1>
  <p class="text-2xl">
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>

<script>
  export let name;
</script>

<style type="text/scss">
  main {
    margin: 0 auto;
    max-width: 240px;
    padding: 1em;
    text-align: center;
  }

  h1 {
    color: #ff3e00;
    font-size: 4em;
    font-weight: 100;
    text-transform: uppercase;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

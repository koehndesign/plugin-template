<script>
	export let name;

	function toggleName() {
	  if (name === 'world') {
		name = 'svelte'
	  } else {
		name = 'world'
	  }
	}
  </script>

  <main>
	<h1>Hello {name}!</h1>
	<button on:click={toggleName}>Toggle name</button>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  </main>

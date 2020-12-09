<script>
	export let user, name;

	if (!user.id) {
		name = "guest";
	} else {
		name = user.name;
	}
	function toggleName() {
		if (name === user.name) {
			name = ", welcome to the svelte";
		} else {
			name = user.name;
		}
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	{#if user.caps.administrator}
		<button class="container" on:click={toggleName}>Toggle name</button>
	{/if}
	<p>
		Visit the
		<a href="https://svelte.dev/tutorial">Svelte tutorial</a>
		to learn how to build Svelte apps.
	</p>
</main>

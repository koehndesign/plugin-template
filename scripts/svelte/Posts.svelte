<script>
	import { onMount } from "svelte";
	import Post from "./Post.svelte";
	import wpAPI from "../utilities/wpAPI";

	let posts = [];

	onMount(async () => {
		posts = await wpAPI.getPost();
	});

	async function refreshPosts() {
		posts = await wpAPI.getPost();
	}
</script>

<button on:click={refreshPosts}>Refresh</button>
{#if posts}
	{#each posts as post}
		<ul>
			<li>
				<Post {post} />
			</li>
		</ul>
	{/each}
{:else}
	<p class="loading">loading...</p>
{/if}

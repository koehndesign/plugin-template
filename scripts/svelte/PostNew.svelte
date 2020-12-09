<script>
	import wpAPI from "../utilities/wpAPI";
	let title, content;
	function submitPost() {
		let data = {
			status: 'publish',
			title: title,
			content: content,
		};
		wpAPI.setPost(data);
	}
</script>

<h3>Publish a new WordPress post from the frontend.</h3>
<p>You must be logged in to succeed!</p>

<label for="title">Title</label>
<input id="title" bind:value={title}>

<label for="content">Content</label>
<textarea id="content" bind:value={content} cols="30" rows="10"></textarea>

<button type="submit" on:click={submitPost}>Submit</button>

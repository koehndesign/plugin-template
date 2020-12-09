<script>
	export let post;
</script>

<article>
	<h4>{post.title.rendered}</h4>
	{@html post.content.rendered}
</article>

import App from '../svelte/App.svelte';

const app = new App({
	target: document.querySelector('#svelte-app'),
	props: {
    // user: user,
	}
});

window.app = app;

export default app;

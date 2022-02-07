import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			enabled: true
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;

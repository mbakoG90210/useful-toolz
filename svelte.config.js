import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	],
	prerender: {
		crawl: true,
		enabled: true,
		force: true,
		createIndexFiles: true,
		entries: ['*']
	}
};

export default config;

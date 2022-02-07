<script context="module">
	import tools from "./_tools.json";
	import SEO from "svelte-seo";

	let seo = {
		title: "Useful Toolz • Home of utility tools which you might use everyday",
		description: "Useful Toolz is a website which contains utility tools which you might just use everyday. The website can work both online and offline and you can install it as an app if you want",
		keywords: "Offline tools, online tools, utility tools, useful tools, web development tools, app tools,  web app",
		canonical: "https://www.useful-toolz.vercel.app"	
	}
</script>

<SEO
title = {seo.title}
description={seo.description}
keywords={seo.keywords}
canonical={seo.canonical}

openGraph={{
	title: `${seo.title}`,
	description: `${seo.description}`,
	url: `${seo.canonical}`,
	type: 'website',

}}

twitter={{
	card: "summary",
	site: `@kudadam_`,
	description: `${seo.description}`,
	

}}
/>

<main class="max-w-2xl mx-auto mt-20">
	<ul class="mx-2 md:mx-0">
		{#each tools as tool }
			<li>
				<a href="/{tool.name.toLowerCase().replace(/\s+/g,"-")}" class=" py-4 p-2 hover:bg-gray-200 block border rounded mb-2 text-xl font-semibold text-blue-700">{tool.name}
					<p class="text-sm font-normal text-gray-700">{tool.description}</p>
				</a>
			</li>
		{/each}
	</ul>
</main>

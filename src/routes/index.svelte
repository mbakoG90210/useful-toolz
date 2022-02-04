<script context="module">
	import tools from "./_tools.json";
</script>


<main class="max-w-2xl mx-auto mt-20">
	<ul class="mx-2 md:mx-0">
		{#each tools as tool }
			<li>
				<a href="/{tool.name.toLowerCase().replace(" ","-")}" class=" py-4 p-2 hover:bg-gray-200 block border rounded mb-2 text-xl font-semibold text-blue-700">{tool.name}
					<p class="text-sm font-normal text-gray-700">{tool.description}</p>
				</a>
			</li>
		{/each}
	</ul>
</main>

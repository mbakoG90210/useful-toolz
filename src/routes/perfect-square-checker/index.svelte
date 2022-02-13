<script context="module">
	import tools from "/src/routes/_tools.json";
	export async function load({ url }) {
		let name = url.pathname.slice(1);
		let tool = tools.filter(tool=> tool.name.replace(/\s+/g,"-").toLowerCase() ===name)[0];
		return {
			props: {
				tool
			}
		}
	}
</script>

<script type="text/javascript">
	import Header from "$lib/Components/Header";
	export let tool;
	let results;
	let number;

	const isPerfectSquare = ()=>{
		if (Math.sqrt(number) ** 2 === number)
			results = true;
		else
			results = false;
	}
	
</script>
<Header {tool}/>
<div class="max-w-sm mx-auto">
	<div>
		<label for="number">Number</label>
		<input type="number" id="number" bind:value={number	}>
	</div>
	<input class="mt-4" readonly placeholder="Results appear here" bind:value={results}>
	<button class="mt-4" on:click={isPerfectSquare}>Check</button>
</div>
<script context="module">
	import tools from "/src/routes/_tools.json";
	export async function load({ url }) {
		let name = url.pathname.slice(1);
		let tool = tools.filter(tool=> tool.name.replace(/\s+/g,"-")(" ","-").toLowerCase() ===name)[0];
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

	let number;
	$: number = 0;
</script>

<Header {tool}/>
	<div class="text-center text-3xl">
		<div class="w-20 mx-auto border">
			<button class="rounded-none"  on:click={() => number++}>+</button>
			<div class="text-center p-2 py-3" contenteditable>{number}</div>
			<button class="rounded-none" on:click={() => number--}>-</button>
		</div>
	</div>

<style type="text/css">
	button {
		@apply w-full bg-green-500 p-4;
	}
</style>

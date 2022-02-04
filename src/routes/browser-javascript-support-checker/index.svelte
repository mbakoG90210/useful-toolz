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
	import { onMount } from 'svelte';
	import Header from "$lib/Components/Header";
	export let tool;

	onMount(() => {
		document.querySelector("#body").innerHTML = `<h2 class='text-green-500 my-2 text-4xl'>Congratulations</h2>
            <p class='text-lg'>Your web browser has JavaScript enabled</p>`
	});
</script>

<Header {tool}/>
	<div id="body" class="text-center">
		<noscript>
			<h2 class="text-red-600">Sorry, JavaScript is disabled in your browser.</h2>
		</noscript>
	</div>
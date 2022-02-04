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

	let value = 37;
	let result;

	const convert = ()=>{
		result = parseFloat(value) - 273.15; 
	}

	convert();

</script>

<Header {tool}/>

<div class="max-w-sm mx-auto">
	<div class="mb-5">
		<label for="celsius">Enter temperature in Kelvin</label>
		<input type="text" id="celsius" bind:value on:change="{convert}" on:input={convert} min=0>
	</div>
	<div>
		<label for="fahrenheit">Temperature in Celsius</label>
		<input readonly type="text" id="fahrenheit" bind:value="{result}">
	</div>
</div>
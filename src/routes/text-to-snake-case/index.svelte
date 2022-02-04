<script context="module">
	import tools from "/src/routes/_tools.json";
	export async function load({ url }) {
		let name = url.pathname.slice(1);
		let tool = tools.filter(tool=> tool.name.replaceAll(" ","-").toLowerCase() ===name)[0];
		return {
			props: {
				tool
			}
		}
	}
</script>

<script type="text/javascript">

	import Header from "$lib/Components/Header";
	import  snakeCase from 'just-snake-case';

	export let tool;
	let data = {
		text: '',
		results: ''
	};

	const toSnakeCase = () => {
		data.results = snakeCase(data.text);
	};
</script>

<Header {tool}/>

<div class="max-w-xl mx-auto">
	<div>
		<label for="text">Enter your text here</label>
		<textarea type="text" id="text" rows="5" bind:value={data.text} on:input={toSnakeCase} />
	</div>
	<div class="mt-6">
		<label for="results">Results appear here</label>
		<textarea type="text" id="results" rows="5" bind:value={data.results} />
	</div>
</div>
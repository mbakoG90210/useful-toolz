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
	import camelcase from 'just-camel-case';
	import Header from "$lib/Components/Header";

	export let tool;
	let data = {
		text: '',
		results: ''
	};

	const toCamelCase = () => {
		data.results = camelcase(data.text);
	};
</script>

<Header {tool}/>

<div class="max-w-xl mx-auto">
	<div>
		<label for="text">Enter your text here</label>
		<textarea type="text" id="text" bind:value={data.text} on:input={toCamelCase} rows="5" />
	</div>
	<div class="mt-6">
		<label for="results">Results appear here</label>
		<textarea type="text" id="results" bind:value={data.results} rows="5" />
	</div>
</div>
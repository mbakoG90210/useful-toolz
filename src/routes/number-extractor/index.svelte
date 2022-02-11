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
	let data;
	$: data = {
		results: ''
	};
	let not_number_regex = /\D+/g;

	const get_numbers = (text) => {
		data.results = text.replace(not_number_regex, ' ');
	};
</script>

<Header {tool}/>
<div class="max-w-xl mx-auto">
	<div>
		<label for="textarea" class="ml-4">Enter your text here</label>
		<textarea
			class="border w-full border-gray-300 rounded p-2 bg-white"
			id="textarea"
			on:input={get_numbers}
			on:input={(e) => {
				get_numbers(e.target.value);
			}}
		/>
	</div>
	<div class="mt-8">
		<label for="results">Results appear here</label>
		<textarea id="results" class="border-gray-300 border p-2 w-full bg-white"
			>{data.results}</textarea
		>
	</div>
</div>

<style type="text/css">
	#textarea,
	#results {
		max-height: 250px;
		overflow-y: scroll;
		height: 100px;
	}
</style>

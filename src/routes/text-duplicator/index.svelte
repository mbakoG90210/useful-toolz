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
	export let tool;

	let data = {
		times: 1,
		text: ''
	};

	const duplicate = () => {
		data.text = data.text.repeat(data.times);
	};
</script>

<Header {tool}/>

<div class="max-w-xl mx-auto">
	<div>
		<label for="text">Enter your text here</label>
		<textarea id="text" class="w-full" rows="10" bind:value={data.text} />
	</div>
	<div>
		<label for="times">Times</label>
		<input id="times" type="number" name="" bind:value={data.times} />
		<button class="!my-3" on:click={duplicate}>Duplicate</button>
	</div>
</div>
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
	import regular_escape from 'regex-escape';
	export let tool;

	let text, escaped;
	$: text = '';
	$: escaped = '';

	const escape_regex = () => {
		escaped = regular_escape(text);
	};
</script>

<Header {tool}/>

<div class="max-w-sm mx-auto">
	<div>
		<label for="input">Enter your regular Expression</label>
		<textarea id="input" bind:value={text} on:input={escape_regex}></textarea>
	</div>

	<div class="my-8">
		<label for="">Escaped regex appears here</label>
		<textarea name="" bind:value={escaped}></textarea>
	</div>
</div>
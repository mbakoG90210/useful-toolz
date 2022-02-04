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
	let error = '';
	let number = 0;
	let valid = false;
	const handleForm = () => {
		valid = true;
		if (number === null) {
			error = 'Number value is empty or invalid';
			valid = false;
		}
		if (valid) {
			let is_even = number % 2 == 0 ? true : false;
			is_even
				? document.querySelector('#results').value ='Number is an even number'
				: document.querySelector('#results').value = 'Number is an odd number';
		}
	};
</script>
<Header {tool}/>
<div class="max-w-sm mx-auto">
	<div>
		<div class="flex flex-wrap gap-x-6">
			<label for="number">Enter number</label>
			<input
				type="number"
				on:input={() => (error = '')}
				bind:value={number}
				id="number"
				required
				placeholder="Enter number"
			/>
			<span class="text-red-500 text-sm">{error}</span>
		</div>
		<button class="!my-2" on:click={handleForm}>Check</button>
	</div>
	<div id="results_div" class="mt-3">
		<label for="results">Results appear here</label>
		<input type="text" name="results" id="results" readonly />
	</div>
</div>
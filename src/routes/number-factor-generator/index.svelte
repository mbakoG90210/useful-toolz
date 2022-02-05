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
	let number = 2;
	let results = '';
	let valid = true;
	let error = '';
	async function get_factors(number) {
		//Function responsible for generating factors
		if (number == null) {
			error = `Number value is empty or invalid`;
			valid = false;
		}
		if (!valid) return;
		let array = [];
		if (number % 2 == 0) {
			for (let i = 0; i <= number / 2; i++) {
				if (number % i == 0) array.push(i);
			}
			array.push(parseInt(number));
			return array;
		} else if (number % 3 == 0) {
			for (let i = 0; i <= number / 3; i++) {
				if (number % i == 0) array.push(i);
			}
			array.push(parseInt(number));
			return array;
		} else {
			for (let i = 0; i <= number; i++) {
				if (number % i == 0) array.push(i);
			}
			return array;
		}
	}

	const generate = () => {
		get_factors(number).then((res) => {
			results = res;
		});
	};
</script>

<Header {tool}/>
<div class="max-w-sm mx-auto">
	<div>
		<label for="number">Enter the number</label>
		<input bind:value={number} type="number" id="number" on:input={() => (error = '')} />
		<span class="text-red-500 text-sm">{error}</span>
	</div>
	<button class="!my-3" on:click={generate}>Generate</button>
	<div>
		<p class="block font-semibold">Factors</p>
		<span class="m-3 max-w-sm text-lg break-word">{results}</span>
	</div>
</div>
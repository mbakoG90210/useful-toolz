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
	import Header from "$lib/Components/Header/index.js";
	import Palindrome from './_index.js';
	
	export let tool;	

	let data = {
		text: '',
		caseSensitive: false,
		ignoreWhitespace: false
	};
	let explanation = '';
	let results = "";

	const isPalindrome = ()=>{
		let palindrome = new Palindrome(data.text,data.caseSensitive, data.ignoreWhitespace);
		if (palindrome.palindrome){
			results = "Text is palindrome"
		}
		else {
			results = "Text is not palindrome"
		}

		if (data.text.length > 3) {
			explanation = palindrome.explanation
		}
	}
</script>

<Header {tool}/>

<div class="max-w-xl mx-auto">
	<form on:submit|preventDefault>
		<div>
		<label for="word">Enter a word or phrase</label>
		<textarea class="my-1" required id="word" placeholder="Enter word or phrase" bind:value={data.text}></textarea>
	</div>

	<div class="mt-2">
		<label for="case_sensitive">Case Sensitive</label>
		<input
			type="checkbox"
			name="case_sensitive"
			id="case_sensitive"
			bind:checked={data.caseSensitive}
		/>
	</div>
	<div>
		<label for="ignore_whitespaces">Ignore whitespaces</label>
		<input
			type="checkbox"
			name="ignore_whitespaces"
			id="ignore_whitespaces"
			bind:checked={data.ignoreWhitespace}
		/>
	</div>
		<button type="submit" class="block !my-2" on:click={isPalindrome}>Check</button>
	</form>

	<div>
		<span>Answer will show here</span>
		<input readonly bind:value={results} type="text" name="results_input" id="results_input" class="form-control" />
	</div>
	<div id="explanation_div">
		<h2>Explanation</h2>
		<p>{@html explanation}</p>
	</div>
</div>

<style type="text/postcss">
	:global(pre){
		white-space: pre-line;
	}
</style>
<script>
	import { tools } from "/src/stores/store.js";
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";
	let hidden = true;

	const hideModal = ()=>{
		hidden = !hidden;
	}

	onMount(()=>{
		document.addEventListener("mouseup",e=>{
			if (e.target.closest("#tools-list") == null)
				hidden = true;
		})
	})
</script>

<div class="fixed right-0 m-3 bottom-0" id="tools-list">
	{#if !hidden}
	   <ul transition:fade class="overflow-y-scroll border rounded bg-white fancy-scrollbar max-h-[300px]">
	       {#each $tools as tool (tool.id)}
	       <li><a class="py-2	 border-b-[0.1px] px-2 hover:bg-gray-200 active:bg-gray-300 text-base block" href="/{tool.name.replace(/\s+/gm,"-").toLowerCase()}">{tool.name}</a></li>
	       {/each} 	
	   </ul> 
	{/if}

	<button class=" rounded-full p-3 float-right mt-3" on:click={hideModal}>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
</svg>
	</button>
</div>
import { writable } from "svelte/store";
import tools_list from "/src/routes/_tools.json";
let counter = 1; //This variable helps up to give id to the tools
/*
The tools constant contains a list of all the tools inside the application
It takes it data from the 'src/routes/_tools.json' file
*/

let tools_list_id = tools_list.map(tool=>{
	//At this point, we need to give each tool an id
	tool.id = counter;
	counter++;
	return tool;
})
export const tools = writable(tools_list_id);
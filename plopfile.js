import kebabcase from "just-kebab-case";
import fs from "fs";


export default function (plop) {
  /* welcome messag that will display in CLI */
  plop.setWelcomeMessage(
    "Welcome to Useful Toolz command line interface"
  );

  /* name and description of our template */
  plop.setGenerator("generate new tool", {
    description: "Template for creating a new tool",

    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name of the tool:"
      },
      {
        type: "input",
        name: "description",
        message: "Write a short description about the tool (about 10 words):",
        validate: (description) => {
          if (description.split(" ").length > 13)
            return "Description should be less than 13 words";
          else if (description.trim().split(" ").length < 2)
            return "Description should be more than 2 words"
          return true;
        }
      }
      /* inquirer prompts */
      /* questions we want to ask in CLI and save questions for*/
    ],

    actions: [
      {
        type: "add",
        path: `src/routes/{{kebabCase name}}/index.svelte`,
        templateFile: "plop-templates/new-tool.hbs"
      },
      async (meta) => {
        let data = JSON.parse(fs.readFileSync("src/routes/_tools.json", "utf8")); 
        data = [...data, {
          name: meta.name,
          description: meta.description,
          created: new Date().toDateString(),
          updated: null
        }];
        fs.writeFileSync("src/routes/_tools.json",JSON.stringify(data));
        return "Metadata successfully added"
      }
    ],
  })
}
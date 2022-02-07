<script>
    import SEO from "svelte-seo";
    export let tool;
</script>

<div class="text-center mb-6">
    <h2 class="text-3xl text-blue-700 font-semibold">{tool.name}</h2>
    <p class="text-gray-700 italic mt-2">{tool.description}</p>
</div>

<SEO
title = "{tool.name} • Many Toolz"
description="{tool.description}"
keywords="{tool.keywords ? tool.keywords.toString() : ""}"
canonical="https://wwww.useful-toolz.vercel.app/{tool.name.replace(/\s+/gm,"-").toLowerCase()}"

openGraph={{
    title: `${tool.name}`,
    description: `${tool.description}`,
    url: `https://www.useful-toolz.vercel.app/${tool.name.replace(/\s+/gm,"-").toLowerCase()}`,
    type: "website"
    }}

twitter={{
    card: "summary_large_image",
    site: "@kudadam_",
    title: `${tool.name} • Useful Toolz`,
    description: `${tool.description}`

}}

/>
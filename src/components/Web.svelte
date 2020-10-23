<script>
    export let index;
    import NextButton from "./NextButton.svelte";
    import { fly } from "svelte/transition";
    import WebExample from "./WebExample.svelte";

    const examples = [
        {
            id: 0, 
            name:"Recipe Box", 
            description:"Web application designed for creating and saving recipes to cook along to.",
            tech:"Express, Firebase, MongoDB, React, Bootstrap 5", 
            sourceUrl:"https://project-3-recipe-box.herokuapp.com/", 
            github:"Recipe-Journal", 
            image:"screenshot-recipebox.png",
            codingTeam: [{name:"Jacob Kyle", git:"jkthomps21"}, {name:"Gene Shaver", git:"gshaver82"}, {name:"Chue Yang", git:"chueny"}]
        },
        {
            id: 1, 
            name:"Mixtape", 
            description:"Mixtape is a social media music sharing website designed for desktop and mobile",
            tech:"Express, MySQL, Handlebars.js, Passport, jQuery, Bootstrap", 
            sourceUrl:"https://github.com/PeterBaker644/Mixtape/", 
            github:"Mixtape", 
            image:"screenshot-mixtape.png",
            codingTeam: [{name:"Gene Shaver", git:"gshaver82"}, {name:"Vanida Somchaleunsouk", git:"vsomsouk"},{name:"Simeon Ogunyemi", git:"Simdog"}]
        },
        {
            id: 2, 
            name:"Task Manager", 
            description:"An example task manager application using MVC framework.",
            tech:"Express, MySQL, jQuery, Bootstrap", 
            sourceUrl:"https://boiling-journey-57320.herokuapp.com/", 
            github:"Task-Manager", 
            image:"screenshot-tasks.png"
        },
        {
            id: 3, 
            name:"Weather Dashboard", 
            description:"A mobile responsive location-based web application for searching the weather in a given city",
            tech:"jQuery, Bootstrap", 
            sourceUrl:"https://peterbaker644.github.io/Weather-Application/", 
            github:"Weather-Application", 
            image:"screenshot-weather.png"
        }, 
        {
            id: 4, 
            name:"Table Generator", 
            description:"An application designed to dynamically generate, sort, and filter tables using json data.",
            tech:"React", 
            sourceUrl:"https://peterbaker644.github.io/Dynamic-Table-Generator/", 
            github:"Dynamic-Table-Generator", 
            image:"screenshot-table.png"
        }, 
        {
            id: 5, 
            name:"CLI Content Management System", 
            description:"A sample employee commandline content management system",
            tech:"Node, MySQL", 
            sourceUrl:"https://github.com/PeterBaker644/Employee-Manager/", 
            github:"Employee-Manager", 
            image:"screenshot-manager.png"
        },
        {
            id: 6, 
            name:"Quiz Application", 
            description:"One of my first projects, a simple quiz about javascript",
            tech:"Javascript, CSS", 
            sourceUrl:"https://peterbaker644.github.io/Quiz-Application/", 
            github:"Quiz-Application", 
            image:"screenshot-quiz.png"
        }
    ]
</script>

<style>
    section {
        text-align: center;
    }
    .title {
        padding: 2em 0em;
        border-bottom: solid 1em var(--color);
        margin: 0em 2em 3em;
    }
</style>

<section
    class="container"
    in:fly={{ y: 100, duration: 250, delay: 250 }}
    out:fly={{ y: -100, duration: 250 }}>
    <div class="title">
        <h1>Examples of my development work</h1>
        <p>While the following examples are highlights of my work, more projects can be found on my <a href="https://github.com/PeterBaker644/" target="_blank">github</a>.</p>
    </div>
    <div class="examples">
        {#each examples as example}
            <WebExample {...example}/>
        {/each}
    </div>
    <NextButton {index} />
</section>

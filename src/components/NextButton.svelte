<script>
    export let index;
    import { fly } from "svelte/transition";
    import { pages } from "./stores";
    let nextPage = index === ($pages.length - 1) ? $pages[0].name : $pages[index + 1].name;

    let position = "fixed";
    // let position = index === 2 || index === 1 ? "fixed" : null;
    // let color = getComputedStyle(document.body).getPropertyValue('--background')

    function setPage() {
        let array = [...$pages];
        $pages.forEach((entry, i) => {
            if (entry.name === nextPage) {
                array[i] = {...entry, visible:true};
            } else {
                array[i] = {...entry, visible:false};
            }
        })
        console.log("Array = ", array);
        pages.set(array);
    }
</script>

<button in:fly={{y:200, delay:600}} class={position} on:click={setPage}>
    <svg width="6em" height="6em" viewBox="-12 -12 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
    </svg>
</button>

<style>
    button {
        display: inline-flex;
        align-items: center;
        background-color: var(--background);
        color: var(--color);
        opacity: 0.4;
        justify-content: center;
        margin: 1em;
        padding: 0;
        line-height: 1em;
        border: none;
        border-radius: 100%;
        animation: bounce 0.5s ease-out infinite alternate forwards;
        cursor: pointer;
        transition: 0.3s ease 0.1s;
        z-index: 3;
    }
    button:hover {
        color: var(--color);
        background-color: inherit;
        opacity: 0.8;
        transition: 0.5s ease 0.1s;
    }
    .fixed {
        position: fixed;
        bottom: 0.2rem;
        color: var(--color);
        opacity: 0.6;
        margin-left: -3em;
    }
    @keyframes bounce {
        0%   { transform: translateY(0px); }  
        100%  { transform: translateY(-5px); }
    }
    @media (min-width: 1200px) {
        .fixed {
            bottom: 1.5rem;
        }
    } 
    @media (min-width: 600px) {
        .fixed {
            bottom: 1rem;
        }
    } 
</style>
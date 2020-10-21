<script>
    export let index;
    import { pages } from "./stores";
    let nextPage = index === ($pages.length - 1) ? $pages[0].name : $pages[index + 1].name;

    let position = null;

    if (index === 2) {
        position = "fixed";
    } 

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

<button class={position} on:click={setPage}>
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
    </svg>
</button>

<style>
button {
    display:inline-flex;
    align-items:center;
    background-color: inherit;
    color: var(--mdgray);
    justify-content: center;
    margin: 1em;
    padding: 0;
    line-height: 1em;
    border: none;
    border-radius: 3em;
    animation: bounce 0.5s ease-out infinite alternate forwards;
    cursor: pointer;
    transition: 0.3s ease 0.1s;
}
button:hover {
    color: var(--color);
    background-color: inherit;
    opacity: 1;
    transition: 0.5s ease 0.1s;
    /* animation-play-state: paused; */
}
button:focus {
    border: 20px solid lightgray;
}
svg{
    background-color: inherit;
}
.fixed {
    position: fixed;
    bottom: 2em;
    color: white;
    opacity: 0.6;
    padding: 2.5em;
    margin-left: -3.5em;
}

@keyframes bounce {
    0%   { transform: translateY(0px); }  
    100%  { transform: translateY(-5px); }
} 
</style>
<script>
    export let name, color;
    import { pages } from "./stores";

    function setPage() {
        let array = [...$pages];
        $pages.forEach((entry, index) => {
            if (entry.name === name) {
                array[index] = {...entry, visible:true};
            } else {
                array[index] = {...entry, visible:false};
            }
        })
        console.log("Array = ", array);
        pages.set(array);
    }
</script>

<button class={color} on:click={setPage}>
    {name}
</button>

<style>
button {
    margin: 0;
    width: 5em;
    height: 4em;
    border: none;
    border-radius: 0;
    background-color: white;
    cursor: pointer;
}
.red:hover {
    background-color: #E54B4B;
    color: white;
}
.yellow:hover {
    background-color: #FFFF63;
}
.blue:hover {
    background-color: #2144C5;
    color: white;
}
.black:hover {
    background-color: black;
    color: white;
}
</style>
<script>
    // export let id, name, dateTaken, description, project, venue, openingDate, src;
    import { fade } from "svelte/transition";
    export let id, name, src;

    function random(limit) {
        return Math.floor(Math.random() * limit) + 1;
    }
</script>

<style>
    .item {
        overflow: hidden;
        display: grid;
        grid-template-columns: 1;
        grid-template-rows: 1;
        /* animation: imagefadein 2s; */
        outline: solid 1rem black;
    }

    img {
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* opacity: 0.2; */
        transition: 500ms;
    }

    .item-overlay {
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        position: relative;
        display: grid;
        justify-items: center;
        align-items: center;
        transition: 0.2s;
        transform: translateY(100%);
    }
 
    button:hover, .item:hover .item-overlay {
        transform: translateY(0);
        cursor: pointer;
    }

    .a {
        background: #e54b4b80;
    }
    .b {
        background: #ffff6380;
    }
    .c {
        background: #2144c580;
    }

    button {
        background: none;
        border: 2px solid white;
        color: white;
        font: var(--font-thin);
        text-transform: uppercase;
        background: rgba(0, 0, 0, 0.5);
        padding: 0.3rem;
    }
</style>

<div on:click class="item h{random(4)} v{random(4)}">
    <img
        id={id}
        transition:fade={{ duration: 400, delay: 0 }}
        class=""
        {src}
        alt={name} />
    <div class="{String.fromCharCode(96 + random(3))} item-overlay">
        <button>View</button>
    </div>
</div>

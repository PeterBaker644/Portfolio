<script>
    // export let id, name, dateTaken, description, project, venue, openingDate, src; 
    export let name, src; 
    function random(limit) {
        return (Math.floor(Math.random() * limit) + 1)
    }

</script>

<div class="item h{random(4)} v{random(4)} preload"> 
    <img class="" {src} alt={name}>
    <div class="{String.fromCharCode(96 + random(3))} item-overlay">
        <button>View</button>
    </div>
</div>

<style>
    .item {
        overflow: hidden;
        display: grid;
        grid-template-columns: 1;
        grid-template-rows: 1;
        animation: imagefadein 2s;
        outline: solid 1rem black;
    }
    
    img {
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* opacity: 0.2; */
        transition: 1000ms;
    }

</style>
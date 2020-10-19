<script>
    import Header from "./components/Header.svelte";
    import { pages } from "./components/stores.js";
</script>

<style>
</style>

<Header />
<main>
    {#each $pages as { name, component, visible }}
        {#if visible}
            <svelte:component this={component} />
            <button on:click={(event) => console.log(event.currentTarget)} value={name}>THis is a button</button>
        {/if}
    {/each}
</main>

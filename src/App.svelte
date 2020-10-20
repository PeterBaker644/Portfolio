<script>
    import Header from "./components/Header.svelte";
    import { pages } from "./components/stores.js";
</script>

<style>
</style>

<Header />
<main>
    {#each $pages as { component, visible }, index}
        {#if visible}
            <svelte:component {index} this={component}/>
        {/if}
    {/each}
</main>

<script>
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import { pages } from "./components/stores.js";
</script>

<style>
    main {
        padding-top: 7em;
    }
</style>

<Header />
<main>
    {#each $pages as { component, visible }, index}
        {#if visible}
            <svelte:component {index} this={component}/>
        {/if}
    {/each}
</main>
<Footer />
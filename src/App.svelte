<script>
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import { pages } from "./components/stores.js";
</script>

<style>
    main {
        padding: 8rem 0rem;
    }
    @media (min-width: 510px) {
    main {
        padding: 5rem 0rem;
    }
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
{#if $pages[3].visible !== true}
    <Footer />
{/if}
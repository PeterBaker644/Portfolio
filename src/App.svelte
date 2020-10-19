<script>
	import Header from './components/Header.svelte';
	import { pages } from './components/stores.js';
</script>

<style>
</style>

<Header/>
{#each $pages as {component, visible}}
    {#if visible}
        <svelte:component this={component}/>
    {/if}
{/each}
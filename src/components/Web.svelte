<script>
    export let index;
    import NextButton from "./NextButton.svelte";
    import { fly } from "svelte/transition";
</script>

<style>
    section {
        text-align: center;
    }
</style>

<section
    class="container"
    in:fly={{ y: 100, duration: 250, delay: 250 }}
    out:fly={{ y: -100, duration: 250 }}>
    <h1>Examples of my development work</h1>
    <p>
        You're not restricted to using Rollup — there are also integrations for
        , and others, or you can use the (Update from 2019: with Svelte 3 the
        CLI was deprecated and we now use in our template. Feel free to use
        whatever tool you like!) or the directly. If you make a project template
        using one of these tools, please share it with the , or via on Twitter!
    </p>
    <NextButton {index} />
</section>

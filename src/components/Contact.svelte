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
    <h1>Contact Me!</h1>
    <p>Here are some links:</p>
    <NextButton {index} />
</section>

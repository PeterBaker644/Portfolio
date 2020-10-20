<script>
    export let index;
    import NextButton from "./NextButton.svelte";
    import { fly } from "svelte/transition";
    import GalleryImage from "./GalleryImage.svelte;"

    function random(limit) {
        return Math.floor(Math.random() * limit) + 1;
    }
</script>

<style>
    section {
        text-align: center;
    }
    .gallery {
        /* background: black; */
        display: grid;
        grid-template-columns: repeat(auto-fill, 100px);
        grid-auto-rows: 100px;
        /* grid-auto-flow: dense; */
        gap: 1rem;
        padding: 1rem;
        justify-content: center;
    }
</style>

<section
    class="container"
    in:fly={{ y: 100, duration: 250, delay: 250 }}
    out:fly={{ y: -100, duration: 250 }}>
    <div class="overlay">
        <div class="inner-overlay">
            <button class="close">x Close</button>
            <img />
        </div>
    </div>
    <div class="gallery" />

    <NextButton {index} />
</section>

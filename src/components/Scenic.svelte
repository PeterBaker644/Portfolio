<script>
    export let index;
    import { beforeUpdate, afterUpdate } from "svelte";
    import { fly } from "svelte/transition";
    import { list } from "./list";
    import NextButton from "./NextButton.svelte";
    import GalleryImage from "./GalleryImage.svelte";

    let open = false;

    function handleClick(event) {
        console.log(event.currentTarget);
        const src = event.currentTarget.querySelector("img").src;
        console.log(src);
        open = src;
    }

    afterUpdate(() => {
        const overlay = document.querySelector(".overlay");
        const overlayImage = overlay.querySelector("img");
        const items = [...document.querySelectorAll("img")];

        console.log(overlayImage);

        const options = {
            // Consider a higher value.
            rootMargin: "-80px 10%",
            threshold: 0.75,
        };

        const callback = (items) => {
            items.forEach((item) => {
                const { target } = item;
                if (item.intersectionRatio >= 0.75) {
                    target.classList.add("visible");
                    target.classList.remove("faded");
                } else {
                    target.classList.add("faded");
                    target.classList.remove("visible");
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        items.forEach((item, index) => {
            observer.observe(item);
        });
    });
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
    .close {
        background: none;
        color: black;
        border: 0;
    }
    .overlay {
        position: fixed;
        background: rgba(0, 0, 0, 0.7);
        display: grid;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s ease;
        z-index: 2;
    }
    .overlay.open {
        visibility: visible;
        opacity: 1;
        align-items: center;
        justify-content: center;
    }
    .overlay .inner-overlay {
        background: white;
        width: 700px;
        padding: 20px;
    }
    .overlay img {
        width: 100%;
    }
</style>

<section
    class="container"
    in:fly={{ y: 100, duration: 250, delay: 250 }}
    out:fly={{ y: -100, duration: 250 }}>
    <div class="overlay {open ? "open" : ""}">
        <div class="inner-overlay">
            <button on:click={() => open = null}>x Close</button>
            <img src={open || ""} alt="scenic close-up"/>
        </div>
    </div>
    <div class="gallery">
        {#each list as item}
            <GalleryImage
                on:click={handleClick}
                name={item.name}
                src={item.src} />
        {/each}
    </div>

    <NextButton {index} />
</section>

<script>
    export let index;
    import NextButton from "./NextButton.svelte";
    import { fly } from "svelte/transition";
</script>

<style>
    section {
        text-align: center;
    }
    a {
        color:var(--ltblue);
    }
</style>

<section
    class="container"
    in:fly={{ y: 100, duration: 250, delay: 250 }}
    out:fly={{ y: -100, duration: 250 }}>
    <h1>Contact Me!</h1>
    <p>
        Feel free to contact me with questions or for more information at any time.
    </p>
    <p>
        You can find a copy of my web development resume with all of my contact information <a href="assets/Peter-Baker-Resume.pdf">here.</a>
    </p>
    <p>
        You can reach me by email <a href="mailto:baker644@umn.edu">here.</a>
    </p>
    <NextButton {index} />
</section>

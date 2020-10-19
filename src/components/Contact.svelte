<script>
    import { fly } from "svelte/transition";
</script>

<section class="container"in:fly={{ y: 100, duration:250, delay: 250 }}
out:fly={{ y: -100, duration: 250 }}>
    <h1> Contact Me! </h1>
    <p> Here are some links: </p>
</section>
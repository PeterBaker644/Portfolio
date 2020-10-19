<script>
    import { fly } from "svelte/transition";
</script>

<section class="container"in:fly={{ y: 100, duration:250, delay: 250 }}
out:fly={{ y: -100, duration: 250 }}>
    <h1> Examples of my scenic work </h1>
</section>
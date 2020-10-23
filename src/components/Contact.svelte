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
    .contact h1, .contact p {
        margin: 0;
    }
    .contact {
        display: grid;
        place-content: center;
        grid-template-columns: repeat(3, 20vw);
        grid-template-rows: 20vw;
        gap: 2em;
        margin: 2em 0em;
    }
    .link {
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        text-decoration: none;
    }
    .link:hover {
        color: var(--color);
        background-color: var(--background);
        border: 1em solid black;
    }
    .red {
        background-color: var(--red);
        color: white;
    }
    .yellow {
        background-color: var(--yellow);
        color: black;
    }
    .blue {
        background-color: var(--ltblue);
        color: white;
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
    <div class="contact">
        <a href="/assets/Peter-Baker-CV.pdf" class="link red">
            <h1>Scenic CV</h1>
        </a>
        <a href="https://docs.google.com/document/d/1Qwoyjqjb6MAjGWBnHeNOeaOPtOCwa3dDyeaxEE3iYP0/edit?usp=sharing" class="link yellow">
            <h1 class="title">Web Resume</h1>
        </a>
        <a href="mailto:baker644@umn.edu" class="link blue">
            <h1>Email</h1>
        </a>
    </div>
    <!-- <p>
        You can find a copy of my web development resume with all of my contact information <a href="https://docs.google.com/document/d/1Qwoyjqjb6MAjGWBnHeNOeaOPtOCwa3dDyeaxEE3iYP0/edit?usp=sharing">here.</a>
    </p>
    <p>
        You can reach me by email <a href="mailto:baker644@umn.edu">here.</a>
    </p> -->
    <p>
        This website was coded in <a href="https://svelte.dev/" style="color:#ff3e00">Svelte</a>.
    </p>
    <NextButton {index} />
</section>

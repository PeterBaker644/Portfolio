<script>
    export let index;
    import NextButton from "./NextButton.svelte";
    import { fly } from "svelte/transition";
</script>

<style>
    section {
        text-align: center;
    }
    .contact h1, .contact p {
        margin: 0;
    }
    .contact {
        display: grid;
        place-content: center;
        grid-template-columns: repeat(2, 30vw);
        grid-auto-rows: 30vw;
        gap: 1em;
        margin: 1em 0em;
    }
    .link {
        display: flex;
        flex-direction: column;
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
        background-color: var(--blue);
        color: white;
    }
    i {
        margin: 0em 0.2em;
    }
    @media (min-width: 900px) {
        .social {
            display: none;
        }
    }
    @media (min-width: 600px) {
        .contact {
            gap: 2em;
            grid-template-columns: repeat(3, 20vw);
            grid-auto-rows: 20vw;
        }
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
        <a target="_blank" href="https://www.linkedin.com/in/peter-baker-b324a21a3/" class="link red social"><i class="fab fa-linkedin-in fa-2x"></i></a>
        <a target="_blank" href="https://github.com/PeterBaker644/" class="link yellow social"><i class="fab fa-github fa-2x"></i></a>
        <a target="_blank" href="https://www.instagram.com/sirchamomile/" class="link blue social"><i class="fab fa-instagram fa-2x"></i></a>
    </div>
    <p>
        This website was coded in <a href="https://svelte.dev/" style="color:#ff3e00">Svelte</a>.
    </p>
    <NextButton {index} />
</section>

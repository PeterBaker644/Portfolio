<script>
    export let index;
    import NextButton from "./NextButton.svelte";
    import { fly, fade } from "svelte/transition";
</script>

<style>
    section {
        text-align: center;
        /* margin: 5vh 0em; */
    }
    img {
        height: 10em;
        margin: 0.5em;
        /* border: 1em solid black;
        border-radius: 100%; */
    }
    .text {
        margin: auto;
        width: clamp(10em, 80vw, 100vw)
    }
    @media (min-width: 600px) {
        img {
            height: 15em;
            margin: 4vh 0em 3vh;
        }
    }
</style>

<section
    in:fly={{ y: 100, duration: 250, delay: 250 }}
    out:fly={{ y: -100, duration: 250 }}
    class="container">
    <img
        class="profile"
        src="assets/images/Profile-Cutout-Shadow-Cropped-Face-Circle.png"
        alt="author smiling" />
    <div class="text">
        <h2>
            Theatrical scenic artist by day and web developer by night, I’m
            dedicated to story-telling in all mediums.
        </h2>
        <p>
            With seven years of theatrical experience in professional production
            teams, I look forward to producing and adapting designs both for the
            stage and on the web with particular audiences and user communities
            in mind. I am passionate about creative problem solving and driven
            to learn more efficient approaches and technologies.
        </p>
        <p>
            Feel free to contact me with questions or for more information at
            any time.
        </p>
    </div>
    <NextButton {index} />
</section>

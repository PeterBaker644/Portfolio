<script>
    export let index;
    import NextButton from "./NextButton.svelte";
    import { fly, fade } from "svelte/transition";
</script>

<style>
    section {
        text-align: center;
    }
    img {
        height: 15em;
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
    <div>
        <p>
            Theatrical scenic artist by day and web developer by night, I’m
            dedicated to story-telling in all mediums.
        </p>
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

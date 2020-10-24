<style>
    footer {
        position: fixed;
        bottom: 0;
        color: var(--color);
        opacity: 0.5;
        z-index: 3;
        display: flex;
        justify-content: center;
        width: 100%;
    }
    a {
        color: var(--color)
    }
    .social {
        display: grid;
        grid-template-columns: 30px;
        grid-auto-rows: 30px;
        place-items: center;
        padding: 0.25em;
        background-color: white;
        position: fixed;
        left: 0;
        bottom: 5vh;
        border-radius: 1em;
    }
</style>

<footer>
    <div class="social">
        <a target="_blank" href="https://www.linkedin.com/in/peter-baker-b324a21a3/" class="red-hover"><i class="fab fa-linkedin-in"></i></a>
        <a target="_blank" href="https://github.com/PeterBaker644/" class="yellow-hover"><i class="fab fa-github"></i></a>
        <a target="_blank" href="https://www.instagram.com/sirchamomile/" class="blue-hover"><i class="fab fa-instagram"></i></a>
    </div>
    <!-- <span>Copyright &copy; 2020</span> -->
</footer>
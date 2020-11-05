<script>
    export let id, name, description, tech, sourceUrl, github, image, gif,codingTeam, role;
    const color = ["red","yellow","blue"][(id % 3)];
    const position = ["left","right"][(id % 2)];
    let hover = false;
</script>

<div 
    on:mouseenter|self="{() => hover = true}"
    on:mouseleave="{() => hover = false}"
    class="grid item-web"
>
    <div class="text">
        <h1 class={color}>{name}
            <a href="https://github.com/PeterBaker644/{github}" target="_blank" class="link {color}">
                <i class="fab fa-github"></i>
            </a>
            <a href="{sourceUrl}" target="_blank" class="link {color}">
                <i class="fas fa-link"></i>
            </a>
        </h1>
        <p class="pad">{description}</p>
        <p class="pad"><strong>Key Technologies:</strong> {tech}</p>
        {#if role}
            <p class="pad"><strong>Role:</strong> {role}</p>
        {/if}
        {#if codingTeam}
            <p><strong>Coding Team:</strong>
                {#each codingTeam as {git, name}, index}
                    <a href="https://github.com/{git}">
                        {name}{index !== codingTeam.length - 1 ? "," : ""}
                    </a>
                {/each}
            </p>
        {/if}
    </div>
    <a href="{sourceUrl}" target="_blank" class="span">
        <img class="hue-{color}" src="/assets/images/{hover ? gif ? gif : image : image}" alt="{name}">
    </a>
</div>

<style>
    p {
        margin: 0;
    }
    h1 {
        font-size: 2em;
        margin: 0rem 0rem 1rem 0rem;
    }
    .grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0;
        margin: 1em 0em;
    }
    img {
        width: 100%;
        /* object-fit: cover;
        object-position: 50% 0%; */
        margin: 2em 0em;
    }
    .span {
        grid-column: span 2;
    }
    .text {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .pad {
        padding-bottom: 0.5em;
    }
    .link {
        color:var(--mdgray);
    }
    .red {
        border-bottom: 2px solid var(--red);
    }
    .yellow {
        border-bottom: 2px solid var(--yellow);
    }
    .blue {
        border-bottom: 2px solid var(--ltblue);
    }
    a.red:hover {
		color: var(--red);
    }
    a.yellow:hover {
		color: var(--yellow);
    }
    a.blue:hover {
		color: var(--blue);
    }
    @media (min-width: 1200px) {
        .span {
            grid-column: span 3;
        }
        .grid {
            grid-template-columns: repeat(5, 1fr) !important;
        }
        .text {
            margin: 0em 5vw;
            grid-column: span 2;
        }
    }
    @media (min-width: 900px) {
        h1 {
            font-size: 1.7em;
        }
        .grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 3em;
        }

    }

    /* @media (max-width: 600px) {
        .grid {
            grid-auto-flow: row;
        }
    } */
</style>
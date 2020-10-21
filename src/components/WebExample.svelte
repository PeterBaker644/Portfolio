<script>
    export let id, name, description, tech, sourceUrl, github, image;
    const color = ["red","yellow","blue"][(id % 3)];
    const position = ["left","right"][(id % 2)];
</script>

<div class="grid item-web">
    <div class="text">
        <h1 class={color}>{name}
            <a href="https://github.com/PeterBaker644/{github}" class="github {color}">
                <i class="fab fa-github"></i>
            </a>
        </h1>
        <p>{description}</p>
        <p><strong>Key Technologies:</strong> {tech}</p>
    </div>
    <a href="{sourceUrl}" target="_blank" class="span">
        <img class="hue-{color}" src="/assets/images/{image}" alt="{name}">
    </a>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3em;
        margin: 2em;
        padding-bottom: 2em;
    }
    .span {
        grid-column: span 2;
    }
    .text {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        /* background-color: var(--color);
        color: var(--background); */
        padding: 1em;
    }
    img {
        width: 100%;
    }
    .github {
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
</style>
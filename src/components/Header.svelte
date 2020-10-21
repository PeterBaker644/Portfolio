<script>
    import NavButton from  "./NavButton.svelte"
    import { pages } from './stores.js';
</script>

<header>
	<nav>
		<div class="brand">
			<h1 class="brand-title">
				PETER BAKER
			</h1>
			<i class="brand-icon">
				<div class="red"></div> 
				<div class="yellow"></div>
                <div class="blue"></div>
                <div class="frame"></div>
			</i>
		</div>
        {#each $pages as {color, name}}
            <NavButton {color} {name}/>
        {/each}
        <div class="social">
            <a target="_blank" href="https://www.linkedin.com/in/peter-baker-b324a21a3/" class="red-hover"><i class="fab fa-linkedin-in"></i></a>
            <a target="_blank" href="https://github.com/PeterBaker644/" class="yellow-hover"><i class="fab fa-github"></i></a>
            <a target="_blank" href="https://www.instagram.com/sirchamomile/" class="blue-hover"><i class="fab fa-instagram"></i></a>
        </div>
	</nav>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1; 
        box-shadow: 0 0 0.5em 0.5em rgba(0,0,0,0.1);
    }
	.red {
		background-color: var(--red);
    }
    .yellow {
		background-color: var(--yellow);
    }
    .blue {
		background-color: var(--blue);
    }
    .red-hover:hover {
        color: var(--red);
    }
    .yellow-hover:hover {
        color: var(--yellow);
    }
    .blue-hover:hover {
        color: var(--blue);
    }
    nav {
        background: white;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1em;
        padding: 2em;
    }
    .brand {
        display: flex;
        align-items: center;
        flex: 1;
        align-self: center;
    }
    .brand-title {
        white-space: nowrap;
        font-size: 2.2em;
        margin: 0em;
    }
    .brand-icon {
        display: grid;
        margin-left: 1em;

        /* cicular brand */
        /* grid-template-columns: 13px 11px 13px;
        grid-template-rows: 45px;
        clip-path: circle(17px at center); */

        /* square brand */
        grid-template-columns: repeat(3, 9px);
        grid-template-rows: 27px;
    }
    .social a {
        padding: 0.75em;
        color: black;
    }

</style>
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
        <div class="nav-buttons">
        {#each $pages as {color, name}}
            <NavButton {color} {name}/>
        {/each}
        </div>
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
        flex-flow: wrap;
        justify-content: center;
        align-items: center;
        /* gap: 0.5em; */
        padding: 1em;
    }
    .brand {
        /* flex-grow: 2; */
        display: flex;
        align-items: center;
        align-self: center;
    }
    .brand-title {
        white-space: nowrap;
        font-size: 2.2em;
        margin: 0em;
        margin-right: 1rem;
    }
    .brand-icon {
        display: none;
        /* cicular brand */
        grid-template-columns: 13px 11px 13px;
        grid-template-rows: 45px;
        clip-path: circle(17px at center);
        /* square brand */
        /* grid-template-columns: repeat(3, 9px);
        grid-template-rows: 27px; */
    }
    .nav-buttons {
        flex-grow: 1;
        display: flex;
        justify-content: space-around;
    }
    .social {
        display: none;
    }
    .social a {
        padding: 0.75em;
        color: black;
    }
    @media (min-width: 900px) {
        .social {
            display: inherit;
        }
        .brand-icon {
            display: grid;
        }
    }
    @media (min-width: 600px) {
        nav, .nav-buttons {
            gap: 1em;
        }
        .nav-buttons {
            justify-content: flex-end; 
        }
    }

</style>
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
			</i>
		</div>
        {#each $pages as {color, name}}
            <NavButton {color} {name}/>
        {/each}
	</nav>
</header>

<style>
	.red {
		background-color: var(--red);
    }
    .yellow {
		background-color: var(--yellow);
    }
    .blue {
		background-color: var(--blue);
    }

    nav {
        background: white;
        display: flex;
        justify-content: flex-end;
        gap: 1em;
        border: 1em solid var(--background);
        padding: 1em;
    }

    .brand {
        display: flex;
        align-items: baseline;
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
        grid-template-columns: repeat(3, 9px);
        grid-template-rows: 27px;
        margin-left: 1em;
    }
</style>
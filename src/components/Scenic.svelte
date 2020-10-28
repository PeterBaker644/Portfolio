<script>
    export let index;
    import { afterUpdate } from "svelte";
    import { fly, fade } from "svelte/transition";
    import { list } from "./list";
    import NextButton from "./NextButton.svelte";
    import GalleryImage from "./GalleryImage.svelte";

    let overlaySource = null;
    let overlayInfo = false;
    let overlayID = null;
    // let randomList = shuffle(list);

    function handleClick(event) {
        const image = event.currentTarget.querySelector("img")
        overlaySource = image.src;
        let i = list.findIndex(obj => obj.id === Number(image.id));
        overlayInfo = list[i];
        overlayID = i;
    }

    function nextImage(next) {
        let id = overlayID;
        let maxIndex = list.length - 1;
        let newId = next ? ( id === maxIndex ? maxIndex : id + 1) : id > 0 ? (id - 1) : 0;
        overlayInfo = list[newId];
        overlayID = newId;
        overlaySource = overlayInfo.src;
    }

    function displayDate(string) {
        let date = new Date(string);
        const months = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];
        let day = date.getDate();
        function ord(n) {return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '')};
        let month = date.getMonth();
        let year = date.getFullYear();
        return `${months[month]} ${ord(day)}, ${year}`; 
    }

    function shuffle(original) {
        let array = [...original];
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return (array)
    }

    afterUpdate(() => {
        const items = [...document.querySelectorAll("img")];

        const options = {
            rootMargin: "-150px 0px -50px 0px",
            threshold: 0.75,
        };

        const callback = (items) => {
            items.forEach((item) => {
                const { target } = item;
                if (item.intersectionRatio >= 0.75) {
                    target.classList.add("visible");
                    target.classList.remove("faded");
                } else {
                    target.classList.add("faded");
                    target.classList.remove("visible");
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        items.forEach((item, index) => {
            observer.observe(item);
        });
    });
</script>

<style>
    section {
        text-align: center;
    }
    figure {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        max-height: 80vh;
    }
    figcaption {
        justify-content: space-between;
    }
    p {
        margin: 1em 0 0 0;
    }
    figcaption p {
        margin: 0;
    }
    h1 {
        margin: 0;
    }
    .inner-overlay button {
        display:flex;
        background-color: inherit;
        border: none;
        padding: 0.3em; 
    }
    .inner-overlay button:hover {
        cursor: pointer;
    }
    .close {
        position: absolute;
        top: 12px;
        right: 12px;
        background-color: transparent !important;
        color: var(--background);
    }
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, 70px);
        grid-auto-rows: 70px;
        grid-auto-flow: dense;
        gap: 0.8rem;
        padding: 1em 0;
        justify-content: center;
    }
    .buttonFrame {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }
    .overlay {
        position: fixed;
        background: rgba(0, 0, 0, 0.7);
        display: grid;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        align-items: center;
        justify-content: center;
    }
    .overlay .inner-overlay {
        background: var(--background);
        color: var(--color);
        margin: 0em;
    }
    .inner-overlay img {
        width: 100%;
        max-height: 100%;
        height: 20em;
        /* max-height: 100%; */
        object-fit: cover;
    }
    .gap {
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .pageButton {
        display: none;
        background-color: transparent;
        color: var(--ltgray);
        opacity: 0.4;
        border: none;
        align-self: stretch;
        flex-grow: 1;
        margin: 1em 0em;
    }
    .pageButton:hover {
        opacity: 0.8;
        cursor: pointer;
    }
    .title {
        padding: 1em 0em;
        border-bottom: solid 1em var(--color);
        margin: 0em;
    }
    .left:hover {
        animation: bounce-right 0.3s ease-out infinite alternate forwards;
    }
    .right:hover {
        animation: bounce-left 0.3s ease-out infinite alternate backwards;
    }
    @keyframes bounce-left {
        0%   { transform: translateX(5px); }  
        100%  { transform: translateX(-5px); }
    } 
    @keyframes bounce-right {
        0%   { transform: translateX(-5px); }  
        100%  { transform: translateX(5px); }
    }
    @media (min-width: 2000px) {
        .gallery {
            grid-template-columns: repeat(auto-fill, 150px);
            grid-auto-rows: 150px;
        }
    } 
    @media (min-width: 1200px) {
        .gallery {
            grid-auto-flow: unset;
        }
    }
    @media (min-width: 750px) {
        .pageButton {
            display: block;
            justify-content: space-between;
        }
    }
    @media (min-width: 600px) {
        .overlay img {
            height: 30em;
        }
        .gallery {
            grid-template-columns: repeat(auto-fill, 100px);
            grid-auto-rows: 100px;
            gap: 1rem;
            padding: 1rem;
        }
        .overlay .inner-overlay {
            background: var(--background);
            color: var(--color);
            width: 40rem;
            padding: 20px;
            margin: 1em 0em;
        }
    }
</style>

<section
    class="container"
    in:fly={{ y: 100, duration: 250, delay: 250 }}
    out:fly={{ y: -100, duration: 250 }}>
    <div class="title">
        <h1>Examples of my scenic work</h1>
        <p>A gallery of selected scenic works from across the Twin Cites.</p>
        <p>- Scroll for more -</p>
    </div>
    
    {#if overlaySource}
        <div class="overlay" out:fade="{{duration:200}}" on:click={() => {overlaySource = null}}>
            <div class="buttonFrame">
                <button on:click|stopPropagation={()=>nextImage(false)} class="pageButton left">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
                    </svg>
                </button>
                <figure class="inner-overlay" on:click|stopPropagation in:fade="{{duration:400}}" out:fade="{{duration:200}}">
                    <button class="close" on:click={() => overlaySource = null}>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                          </svg>
                    </button>
                    <img src={overlaySource} alt="scenic close-up"/>
                    <figcaption>
                        <p class="gap">{overlayInfo.description}</p>
                        <p>{overlayInfo.project}</p>
                        <p>{overlayInfo.location || ""}</p>
                        <p>{displayDate(overlayInfo.dateTaken) || ""}</p>
                        <p class="gap">Gallery #{overlayInfo.id} </p>
                    </figcaption>
                </figure>
                <button on:click|stopPropagation={()=>nextImage(true)} class="pageButton right">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                    </svg>
                </button>
            </div>
        </div>
    {/if}
    <div class="gallery">
        {#each list as item}
            <GalleryImage
                on:click={handleClick}
                name={item.name}
                src={item.src} 
                id={item.id}/>
        {/each}
    </div>

    <NextButton {index} />
</section>

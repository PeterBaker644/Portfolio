<script>
    export let index;
    import { beforeUpdate, afterUpdate } from "svelte";
    import { fly, fade } from "svelte/transition";
    import { list } from "./list";
    import NextButton from "./NextButton.svelte";
    import GalleryImage from "./GalleryImage.svelte";

    let overlaySource = null;
    let overlayInfo = false;
    // let randomList = shuffle(list);

    function handleClick(event) {
        const image = event.currentTarget.querySelector("img")
        overlaySource = image.src;
        overlayInfo = list[image.id - 1];
        console.log(displayDate(overlayInfo.dateTaken));
    }

    function nextImage(next) {
        console.log(overlaySource);
        console.log("The ID is: ", overlayInfo.id);
        let id = overlayInfo.id;
        let newId = next ? (id + 1) : id > 1 ? (id - 1) : 1;
        console.log(newId);
        overlayInfo = list[newId - 1];
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
            rootMargin: "-80px 20%",
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
    figcaption {
        /* display: flex; */
        justify-content: space-between;
    }
    p {
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
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, 100px);
        grid-auto-rows: 100px;
        /* grid-auto-flow: dense; */
        gap: 1rem;
        padding: 1rem;
        justify-content: center;
    }
    .buttonFrame {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90vw;
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
        background: white;
        color: black;
        width: 40rem;
        padding: 20px;
        margin: 1em 0em;
    }
    .overlay img {
        width: 100%;
    }
    .gap {
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .pageButton {
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
    
</style>

<section
    class="container"
    in:fly={{ y: 100, duration: 250, delay: 250 }}
    out:fly={{ y: -100, duration: 250 }}>
    {#if overlaySource}
        <div class="overlay" out:fade="{{duration:200}}" on:click={() => {overlaySource = null}}>
            <div class="buttonFrame">
                <button on:click|stopPropagation={()=>nextImage(false)} class="pageButton left">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
                    </svg>
                </button>
                <figure class="inner-overlay" on:click|stopPropagation in:fade="{{duration:400}}" out:fade="{{duration:200}}">
                    <button on:click={() => overlaySource = null}>x Close</button>
                    <img src={overlaySource} alt="scenic close-up"/>
                    <figcaption>
                        <p class="gap">{overlayInfo.description}</p>
                        <p>{overlayInfo.project}</p>
                        <p>{overlayInfo.location || ""}</p>
                        <p>{displayDate(overlayInfo.dateTaken) || ""}</p>
                        <p class="gap">Gallery Number: {overlayInfo.id} </p>
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

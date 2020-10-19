import { writable } from 'svelte/store';
import About from './About.svelte';
import Web from './Web.svelte';
import Scenic from './Scenic.svelte';
import Contact from './Contact.svelte';

export const pages = writable([
    {name:"about", color:"red", visible:true, component: About},
    {name:"web", color:"yellow", visible:false, component: Web},
    {name:"scenic", color:"blue", visible:false, component: Scenic},
    {name:"contact", color:"black", visible:false, component: Contact}
]);
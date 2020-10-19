import { pages } from "./stores";

export default function setPage(name) {
    let array = [...pages];
    pages.forEach((entry, index) => {
        if (entry.name === name) {
            array[index] = {...entry, visible:true};
        } else {
            array[index] = {...entry, visible:false};
        }
    })
    console.log("Array = ", array);
    pages.set(array);
}
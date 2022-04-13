import * as variables from "./variables.js";
import { getData } from "./getData.js";
import { buildResults } from "./buildResults.js";
import { cleanPieces } from "./filterResults.js"; 
import { routing } from "./detail.js";
import { uiStack} from "./uiStack.js";

const searchPieces = () => {  
    uiStack.empty()
    uiStack.error()
    uiStack.loading(true)

    const figures = document.querySelectorAll("a")
    figures.forEach(figure => {
        figure.remove();
    })

    fetch(`${variables.url}${variables.input.value}`)
    .then(response => response.json())
    .then(getData)
    .then(cleanPieces)
    .then(buildResults)
    .then(routing)
    .catch(error => console.log(error))
}

export {searchPieces};
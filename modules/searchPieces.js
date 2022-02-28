import * as variables from "./variables.js";
import { getData } from "./getData.js";
import { buildResults } from "./buildResults.js";
import { cleanPieces } from "./filterResults.js"; 
import { detail } from "./detail.js";

const searchPieces = () => {  
    const figures = document.querySelectorAll("figure")
    figures.forEach(figure => {
        figure.remove();
    })

    fetch(`${variables.url}${variables.input.value}`)
    .then(response => response.json())
    .then(getData)
    .then(cleanPieces)
    .then(buildResults)
    .then(detail)
    // .catch(error => {
    //     console.log('oops');
    // })
}

export {searchPieces};
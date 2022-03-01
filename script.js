import {searchPieces} from "./modules/searchPieces.js";
import * as variables from "./modules/variables.js";
import {focusSearch} from "./modules/focusSearch.js";
import {cancelSearch} from "./modules/cancelSearch.js";
// import routie from "./routie.js";

focusSearch();
// detail();

cancelSearch();

variables.form.addEventListener('submit', event => {
    event.preventDefault();
    searchPieces();
}) 

routie('users', function() {
    console.log('lol');
})





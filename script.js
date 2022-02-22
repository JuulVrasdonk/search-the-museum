import searchPieces from "./modules/searchPieces.js";

const main = document.querySelector('main');
const searchBar = document.querySelector('input');
const hideButton = document.querySelector('form button');
const form = document.querySelector('form');

searchBar.addEventListener('focus', () => {
    main.classList.add('focussed-main');
    searchBar.classList.add('focussed-searchbar');
    hideButton.classList.add('focussed-hidebutton');
})

hideButton.addEventListener('click', () => {
    document.querySelectorAll('.item').forEach(item => {
        item.remove();
    })    
    main.classList.remove('focussed-main');
    searchBar.classList.remove('focussed-searchbar');
    searchBar.value = '';
    hideButton.classList.remove('focussed-hidebutton');

})

form.addEventListener('submit', event => {
    event.preventDefault()
    searchPieces()
}) 

// console.log(searchPieces());
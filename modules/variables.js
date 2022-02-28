const main = document.querySelector('main');
const hideButton = document.querySelector('form button');
const form = document.querySelector('form');
const input = document.querySelector('input');

const config = { 
    api: `https://www.rijksmuseum.nl/api/nl/collection?key=`,
    key: `JXVjejNU`
}

const url =`${config.api}${config.key}&q=`;


export{main, hideButton, form, input, config, url}
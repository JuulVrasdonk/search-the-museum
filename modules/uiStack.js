import * as variables from "./variables.js"

const time = Date.now()

const uiStack = {
    loading: (active) => {
        if(active) {

            let templateLoader = 
            `<div class="loader">
                <div class="loaderline"></div>
                <div class="loaderline"></div>
                <div class="loaderline"></div>
                <p>Loading</p>
            </div>`;
            variables.main.insertAdjacentHTML('beforeend', templateLoader);

        } else {
            const loader = document.querySelector('.loader');

            if (loader) {
                loader.remove()
            }
            
            console.log('finished');
        }
    },
    error: (active) => {
        if (active) {
            let templateError = 
                `<section class="error">
                    <h2>Er is iets mis gegaan...</h2>
                    <p>Probeer een andere zoek opdracht.</p>
                </section>`;

            variables.main.insertAdjacentHTML('beforeend', templateError);
        } else {
            const errorMsg = document.querySelector('.error');
            if (errorMsg) {
                errorMsg.remove();
            }
        }
        
    }
}

export {uiStack}
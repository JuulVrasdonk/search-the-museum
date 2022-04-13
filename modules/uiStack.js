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
    empty: (active) => {
        if (active) {
            let templateEmpty = 
            `<section class="empty">
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0221 14.6669C20.0221 14.4017 19.9167 14.1474 19.7292 13.9598C19.5416 13.7723 19.2873 13.6669 19.0221 13.6669L8.65206 13.6669C8.12162 13.6669 7.61292 13.4562 7.23784 13.0812C6.86277 12.7061 6.65206 12.1974 6.65206 11.6669L6.65206 3.66694L9.57206 6.58694C9.75841 6.75776 10.0025 6.85166 10.2553 6.84975C10.5081 6.84784 10.7508 6.75027 10.9345 6.57666C11.1183 6.40304 11.2295 6.16628 11.2457 5.91401C11.2619 5.66174 11.182 5.41268 11.0221 5.21694L6.36206 0.586944C6.26514 0.495668 6.15359 0.421301 6.03206 0.366944C5.7886 0.266926 5.51552 0.266926 5.27206 0.366944C5.14847 0.417509 5.03627 0.492314 4.94206 0.586944L0.312057 5.21694C0.127313 5.4032 0.023161 5.6546 0.0220563 5.91694C0.0212954 6.04855 0.04652 6.17901 0.0962846 6.30085C0.146049 6.42269 0.219376 6.5335 0.312057 6.62694C0.40502 6.72067 0.51562 6.79507 0.637479 6.84584C0.759339 6.8966 0.890044 6.92274 1.02206 6.92274C1.15407 6.92274 1.28477 6.8966 1.40663 6.84584C1.52849 6.79507 1.63909 6.72067 1.73206 6.62694L4.65206 3.70694L4.65206 11.7069C4.65206 12.7678 5.07348 13.7852 5.82363 14.5354C6.57378 15.2855 7.59119 15.7069 8.65206 15.7069L19.0221 15.7069C19.1568 15.7071 19.2902 15.6799 19.4142 15.6272C19.5382 15.5744 19.6503 15.4972 19.7437 15.4001C19.8371 15.3029 19.9099 15.1879 19.9577 15.0619C20.0056 14.9359 20.0274 14.8016 20.0221 14.6669Z" fill="white"/>
                </svg>
                <p>Zoek kunst uit het Rijksmuseum.</p>
            </section>
            `;

            variables.resultSection.insertAdjacentHTML('beforeend', templateEmpty);
        } else {
            const empty = document.querySelector('.empty');
            if(empty) {
                empty.remove();
            }
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
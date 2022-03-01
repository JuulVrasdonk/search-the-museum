import { buildResults } from "./buildResults.js";
import {searchPieces} from "./searchPieces.js";

const detail = buildResults => {

    buildResults.forEach(item => {
        const detailTemplate = `
        <section>
            <h2>${item.pieceTitle}</h2>
            <p>${item.pieceMaker}</p>
            <img src="${item.pieceImage}" alt="${item.pieceTitle}"></img>
        </section>
        `;

        const key = `/${item.figure.id}`;


        const routes = {
            [key]: detailTemplate    
        };

        const rootDiv = document.getElementById('root');

        const onNavigate = (pathname) => {
            window.history.pushState({}, 
                pathname,
                window.location.origin + pathname
            )
            rootDiv.innerHTML = routes[pathname]
        }


        window.onpopstate = () => {
            rootDiv.innerHTML = routes[window.location.pathname]
            // console.log('pop');
        }

        item.figure.addEventListener('click', event => {
            onNavigate(Object.keys(routes));
            rootDiv.innerHTML = routes[window.location.pathname];
        })
    })
}

export{detail}
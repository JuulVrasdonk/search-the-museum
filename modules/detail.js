import { buildResults } from "./buildResults.js";

const detail = buildResults => {

    buildResults.forEach(item => {
        console.log(item.pieceTitle);
    
        const detailTemplate = `<h2>${item.pieceTitle}</h2>`;

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
        }

        item.figure.addEventListener('click', event => {
            onNavigate(Object.keys(routes));
            console.log(Object.keys(routes));
            rootDiv.innerHTML = routes[window.location.pathname];
        })
    })
}

export{detail}
const detail = () => {
    const allResults = document.querySelectorAll('figure');

    allResults.forEach(figure => {

        const detailTemplate = `<h1>About</h1>`

        const key = `/${figure.id}`;

        const routes = {
            [key]: detailTemplate    
        };

        console.log(Object.keys(routes));



        const rootDiv = document.getElementById('root');
        rootDiv.innerHTML = routes[window.location.pathname];



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

        
        figure.addEventListener('click', event => {
            onNavigate(Object.keys(routes));
        })

            })
}

export{detail}
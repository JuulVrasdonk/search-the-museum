const routing = newData => {


    const sections = document.querySelectorAll('section');
    const section = document.querySelector(`section[data-route="detail"]`);
    const ul = document.createElement("ul");
    section.appendChild(ul)

    routie({
        'artwork/:id': (id) => {
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
            let filterOnID = newData.filter(item => item.id === id);
            filterOnID.forEach(item => {
                const figures = `
                <a href="#artwork/${newData.id}">
                    <figure>
                        <img src="${newData.pieceImage}" loading="lazy" alt="${newData.pieceTitle}" class="item">
                        <figcaption>${newData.pieceTitle} door: ${newData.pieceMaker}</figcaption>
                    </figure>
                </a>`;
            
                const li = document.createElement('li');
                li.innerHTML = figures;
                ul.appendChild(li);
            })
            updateUI("detail");
        },
        " ": () => {
            updateUI("normal");
        }
    });

    function updateUI(route) {
        sections.forEach((item) => {
            item.classList.add("disabled");
        });
        let activeSection = document.querySelector(`[data-route=${route}]`);
        activeSection.classList.remove("disabled");
    }

    return newData
}

export {
    routing
}
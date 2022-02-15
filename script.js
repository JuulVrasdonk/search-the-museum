function searchPieces() {
    const config = { 
        api: `https://www.rijksmuseum.nl/api/nl/collection?key=`,
        key: `JXVjejNU`
    }

    const images = document.querySelectorAll('img');
    const input = document.querySelector('input');
    const term = input.value;

    images.forEach(image => {
        image.remove();
    })

    const url =`${config.api}${config.key}&q=${term}`

    fetch(`${url}`)
    .then(response => response.json())
    .then(data => {
        const artObjects = data.artObjects

        let pieces = artObjects.map(object => {
            const singleURL = object.webImage.url;
            const title = object.title;
            return {singleURL, title};
        })

        pieces.forEach(piece => {
            const img = document.createElement("img");
            img.src = piece.singleURL;
            img.setAttribute("loading", "lazy");
            img.setAttribute("alt", piece.title);
            const src = document.querySelector("body");
            src.appendChild(img);
        });
    });
}




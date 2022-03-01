import * as variables  from "./variables.js";

const buildResults = cleanResults => {
    const buildItem = cleanResults.map(piece => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figCaption = document.createElement("figcaption");

        img.src = piece.singleURL;
        img.setAttribute("loading", "lazy");
        img.setAttribute("alt", piece.title);
        img.classList.add('item');

        // Snij de zin af bij 40 karakters en voeg '...' toe aan het einde.
        figCaption.textContent = piece.title.length > 40 ? piece.title.substring(0, 40 - 3) + "..." : piece.title;

        figure.appendChild(img);
        figure.appendChild(figCaption);
        figure.setAttribute("id", piece.id)
        variables.resultSection.appendChild(figure);


        const pieceTitle = piece.title;
        const pieceMaker = piece.maker;
        const pieceImage = piece.singleURL;
        return {pieceTitle, figure, pieceMaker, pieceImage}
    });
    return buildItem
}

export {buildResults}
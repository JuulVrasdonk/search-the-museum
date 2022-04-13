import * as variables  from "./variables.js";
import { uiStack} from "./uiStack.js";

const buildResults = cleanResults => {
    const buildItem = cleanResults.map(piece => {

        // Snij de zin af bij 40 karakters en voeg '...' toe aan het einde.
        const figCaption = document.querySelectorAll("figcaption")
        figCaption.forEach(() => {
            figCaption.textContent = piece.title.length > 40 ? piece.title.substring(0, 40 - 3) + "..." : piece.title;
        })


        const itemTemplate = `
            <a href="#artwork/${piece.id}">
                <figure>
                    <img src="${piece.singleURL}" loading="lazy" alt="${piece.title}" class="item">
                    <figcaption>${piece.title}</figcaption>
                </figure>
            </a>`;
        

        variables.resultSection.insertAdjacentHTML('beforeend', itemTemplate);

        uiStack.loading()

        const pieceTitle = piece.title;
        const pieceMaker = piece.maker;
        const pieceImage = piece.singleURL;
        const id = piece.id;
        return {pieceTitle, itemTemplate, pieceMaker, pieceImage, id}
    });
    return buildItem
}
export {buildResults}
import { uiStack} from "./uiStack.js";


const getData = data => {

        const artObjects = data.artObjects;
        if (artObjects.length > 0) {
            let pieces = artObjects.map(object => {
                // console.log(object);
                const singleURL = object.webImage.url + 600;
                const title = object.title;
                const id = object.id;
                const maker = object.principalOrFirstMaker
                return {singleURL, title, id, maker};
            })
            return pieces;
        } else {
            uiStack.loading()
            uiStack.error(true)
        }
}

export {getData}
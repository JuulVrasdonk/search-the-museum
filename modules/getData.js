const getData = data => {
    const artObjects = data.artObjects;
    let pieces = artObjects.map(object => {
        // console.log(object);
        const singleURL = object.webImage.url + 600;
        const title = object.title;
        const id = object.id;
        return {singleURL, title, id};
    })

    return pieces;

}

export {getData}
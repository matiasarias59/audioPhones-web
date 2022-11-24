import {getItemsJson, generateCatalogue, filtrarItems, createItemsCards, apiKey, range, url, navBar} from "../main.js"

navBar();  

const catalogue = [];
const itemList = document.getElementById("itemList");
const itemList2 = document.getElementById("itemList2");

const filter1= (item) => {
    return item["marca"]=="BASEUS"
}

const filter2= (item) => {
    return item["marca"]=="SATECHI"
}

const generatePage =async (asyncFunc, url) =>{
    const items = await asyncFunc (url)
    generateCatalogue(items, catalogue);
    const lista1 = await filtrarItems(catalogue, filter1);
    const lista2 = await filtrarItems(catalogue, filter2);
 

    createItemsCards(lista1, itemList);
    createItemsCards(lista2, itemList2);

    

}

generatePage(getItemsJson, url+range+apiKey)



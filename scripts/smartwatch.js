import {getItemsJson, generateCatalogue, filtrarItems, createItemsCards, apiKey, range, url, navBar, alertDolar} from "../main.js"

navBar(); 

const catalogue = [];
const itemList = document.getElementById("itemList");

const filter= (item) => {
    return item["familia"]=="SMARTWATCH"
}


const generatePage =async (asyncFunc, url) =>{
    const items = await asyncFunc (url)
    generateCatalogue(items, catalogue);
    const lista = await filtrarItems(catalogue, filter);
 

    createItemsCards(lista, itemList);
    

}

generatePage(getItemsJson, url+range+apiKey);

alertDolar();
import {getItemsJson, generateCatalogue, filtrarItems, createItemsCards, apiKey, range, url, navBar, alertDolar} from "../main.js"

navBar(); 

const catalogue = [];
const itemList = document.getElementById("itemList");
const itemList2 = document.getElementById("itemList2");

const filter= (item) => {
    return item["subFamilia"]=="SMART TV"
}

const filter2= (item) => {
    return item["subFamilia"]=="ACCESORIO TV" || item["subFamilia"]=="SOPORTE SMART TV"
}



const generatePage =async (asyncFunc, url) =>{
    const items = await asyncFunc (url)
    generateCatalogue(items, catalogue);
    const lista = await filtrarItems(catalogue, filter);
    const lista2 = await filtrarItems(catalogue, filter2);
 

    createItemsCards(lista, itemList);
    createItemsCards(lista2, itemList2);
    

}

generatePage(getItemsJson, url+range+apiKey);

alertDolar();
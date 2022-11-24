import {getItemsJson, generateCatalogue, filtrarItems, createItemsCards, apiKey, range, url, navBar} from "../main.js"

navBar(); 

const catalogue = [];
const itemList = document.getElementById("itemList");
const itemList2 = document.getElementById("itemList2");
const itemList3 = document.getElementById("itemList3");

const filter= (item) => {
    return item["familia"]=="AUDIO PORTATIL"
}

const filter2= (item) => {
    return item["familia"]=="AURICULARES"
}

const filter3= (item) => {
    return (item["familia"]=="AUDIO VIDEO" && (item["subFamilia"]=="BAFLES" || item["subFamilia"]=="CONVERSOR" ||item["subFamilia"]=="SOUNDBAR"
        ||item["subFamilia"]=="SONOS" ||item["subFamilia"]=="AMPLIFICADOR" ||item["subFamilia"]=="NET AUDIO PLAYER" ||item["subFamilia"]=="SINTOAMPLIFICADOR"
        ||item["subFamilia"]=="SUBWOOFER" ||item["subFamilia"]=="PARLANTES INSTALACION" ||item["subFamilia"]=="PRO POE"))
}



const generatePage =async (asyncFunc, url) =>{
    const items = await asyncFunc (url)
    generateCatalogue(items, catalogue);
    const lista = await filtrarItems(catalogue, filter);
    const lista2 = await filtrarItems(catalogue, filter2);
    const lista3 = await filtrarItems(catalogue, filter3);
 

    createItemsCards(lista, itemList);
    createItemsCards(lista2, itemList2);
    createItemsCards(lista3, itemList3);
    

}

generatePage(getItemsJson, url+range+apiKey)



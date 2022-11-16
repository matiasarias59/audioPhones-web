import {getItemsJson, generateCatalogue, filtrarItems, createItemsCards, apiKey, range, url} from "../main.js"
const catalogue = [];
const itemList = document.getElementById("itemList");

const filterFunc= (item) => {
    return (item["marca"]=="SAMSUNG" && item["subFamilia"]=="NUEVO" )
}




const generatePage =async (asyncFunc, url) =>{
    const items = await asyncFunc (url)
    generateCatalogue(items, catalogue);
    const arrSamsung = await filtrarItems(catalogue, filterFunc);
 

    createItemsCards(arrSamsung, itemList);
    

}

generatePage(getItemsJson, url+range+apiKey)



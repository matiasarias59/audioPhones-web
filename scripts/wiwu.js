import {getItemsJson, generateCatalogue, filtrarItems, createItemsCards, apiKey, range, url} from "../main.js"
const catalogue = [];
const itemList = document.getElementById("itemList");

const filterFunc= (item) => {
    return item["marca"]=="WIWU"
}




const generatePage =async (asyncFunc, url) =>{
    const items = await asyncFunc (url)
    generateCatalogue(items, catalogue);
    const arrWiwu = await filtrarItems(catalogue, filterFunc);
 

    createItemsCards(arrWiwu, itemList);
    

}

generatePage(getItemsJson, url+range+apiKey)



import {getItemsJson, generateCatalogue, filtrarItems, createItemsCards, apiKey, range, url} from "../main.js"
const catalogue = [];
const itemList = document.getElementById("itemList");
const itemList2 = document.getElementById("itemList2");
const itemList3 = document.getElementById("itemList3");
const itemList4 = document.getElementById("itemList4");

const filterFuncNew = (item) => {
    return (item["marca"]=="APPLE" && (item["subFamilia"]=="NUEVO" ||"CPO" ))
}

const filterFuncActive = (item) => {
    return (item["marca"]=="APPLE" && item["subFamilia"]=="ACTIVO")
}

const filterFuncSwap = (item) => {
    return (item["marca"]=="APPLE" && item["subFamilia"]=="SWAP")
}

const filterFuncUsed = (item) => {
    return (item["marca"]=="APPLE" && item["subFamilia"]=="USADO")
}


const generatePage =async (asyncFunc, url) =>{
    const items = await asyncFunc (url)
    generateCatalogue(items, catalogue);
    const newIphones = await filtrarItems(catalogue, filterFuncNew);
    const activeIphones = await filtrarItems(catalogue, filterFuncActive);
    const swapIphones = await filtrarItems(catalogue, filterFuncSwap);
    const usedIphones = await filtrarItems(catalogue, filterFuncUsed);

    createItemsCards(newIphones, itemList);
    createItemsCards(activeIphones, itemList2);
    createItemsCards(swapIphones, itemList3);
    createItemsCards(usedIphones, itemList4);

}

generatePage(getItemsJson, url+range+apiKey)



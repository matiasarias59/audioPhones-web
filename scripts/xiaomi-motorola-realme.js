import {getItemsJson, generateCatalogue, filtrarItems, createItemsCards, apiKey, range, url, navBar, alertDolar} from "../main.js"

navBar(); 

const catalogue = [];
const itemList = document.getElementById("itemList");
const itemList2 = document.getElementById("itemList2");
const itemList3 = document.getElementById("itemList3");

const filterFuncXiaomi= (item) => {
    return (item["marca"]=="XIAOMI" && item["subFamilia"]=="NUEVO" )
}

const filterFuncRealme= (item) => {
    return (item["marca"]=="REALME" && item["subFamilia"]=="NUEVO" )
}

const filterFuncMoto= (item) => {
    return ((item["marca"]=="MOTOROLA" || item["marca"]=="ENERGIZER" )&& item["subFamilia"]=="NUEVO" )
}



const generatePage =async (asyncFunc, url) =>{
    const items = await asyncFunc (url)
    generateCatalogue(items, catalogue);
    const arrXiaomi = await filtrarItems(catalogue, filterFuncXiaomi);
    const arrRelame = await filtrarItems(catalogue, filterFuncRealme);
    const arrMoto = await filtrarItems(catalogue, filterFuncMoto);

    createItemsCards(arrXiaomi, itemList);
    createItemsCards(arrRelame, itemList2);
    createItemsCards(arrMoto, itemList3);
}

generatePage(getItemsJson, url+range+apiKey);


alertDolar();
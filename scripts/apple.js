import {getItemsJson, generateCatalogue, filtrarItems, createItemsCards, apiKey, range, url, navBar, alertDolar} from "../main.js";
navBar(); 



const catalogue = [];
const itemList = document.getElementById("itemList");
const itemList2 = document.getElementById("itemList2");
const itemList3 = document.getElementById("itemList3");
const itemList4 = document.getElementById("itemList4");
const itemList5 = document.getElementById("itemList5");
const itemList6 = document.getElementById("itemList6");
const itemList7 = document.getElementById("itemList7");
const itemList8 = document.getElementById("itemList8");

const filter1= (item) => {
    return (item["marca"]=="APPLE" && item["subFamilia"]=="ACCESORIOS" )
}

const filter2= (item) => {
    return (item["marca"]=="APPLE" && item["subFamilia"]=="AURICULARES" )
}

const filter3= (item) => {
    return (item["marca"]=="APPLE" && item["subFamilia"]=="IPAD" )
}

const filter4= (item) => {
    return (item["marca"]=="APPLE" && item["subFamilia"]=="IMAC" )
}

const filter5= (item) => {
    return (item["marca"]=="APPLE" && item["subFamilia"]=="MAC" )
}

const filter6= (item) => {
    return (item["marca"]=="APPLE" && (item["subFamilia"]=="MAC MINI" || item["subFamilia"]=="MAC STUDIO") )
}

const filter7= (item) => {
    return (item["marca"]=="APPLE" && item["subFamilia"]=="WATCH" )
}

const filter8= (item) => {
    return (item["marca"]=="APPLE" && item["subFamilia"]=="ACCESORIOS AAA" )
}

const generatePage =async (asyncFunc, url) =>{
    const items = await asyncFunc (url)
    generateCatalogue(items, catalogue);
    const list1 = await filtrarItems(catalogue, filter1);
    const list2 = await filtrarItems(catalogue, filter2);
    const list3 = await filtrarItems(catalogue, filter3);
    const list4 = await filtrarItems(catalogue, filter4);
    const list5 = await filtrarItems(catalogue, filter5);
    const list6 = await filtrarItems(catalogue, filter6);
    const list7 = await filtrarItems(catalogue, filter7);
    const list8 = await filtrarItems(catalogue, filter8);
 

    createItemsCards(list1, itemList);
    createItemsCards(list2, itemList2);
    createItemsCards(list3, itemList3);
    createItemsCards(list4, itemList4);
    createItemsCards(list5, itemList5);
    createItemsCards(list6, itemList6);
    createItemsCards(list7, itemList7);
    createItemsCards(list8, itemList8);
    

}

generatePage(getItemsJson, url+range+apiKey);

alertDolar();

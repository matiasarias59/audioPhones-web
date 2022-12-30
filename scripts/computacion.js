import {getItemsJson, generateCatalogue, filtrarItems, createItemsCards, apiKey, range, url, navBar, alertDolar} from "../main.js"

navBar(); 

const catalogue = [];
const itemList = document.getElementById("itemList");
const itemList2 = document.getElementById("itemList2");
const itemList3 = document.getElementById("itemList3");
const itemList4 = document.getElementById("itemList4");
const itemList5 = document.getElementById("itemList5");
const itemList6 = document.getElementById("itemList6");


const filter1= (item) => {
    return item["subFamilia"]=="NOTEBOOK"
}

const filter2= (item) => {
    return (item["subFamilia"]=="PC" || item["subFamilia"]=="ALL IN ONE")
}

const filter3= (item) => {
    return item["subFamilia"]=="MONITOR"
}

const filter4= (item) => {
    return item["subFamilia"]=="TABLET"
}

const filter5= (item) => {
    return (item["familia"]=="COMPUTACION" && (item["subFamilia"]=="MOUSE" || item["subFamilia"]=="MICROPROCESADOR" || item["subFamilia"]=="MEMORIA RAM" || item["subFamilia"]=="PLACA DE VIDEO" || item["subFamilia"]=="FUNDAS Y ACCE."))
}

const filter6= (item) => {
    return item["subFamilia"]=="GAMER"
}


const generatePage =async (asyncFunc, url) =>{
    const items = await asyncFunc (url)
    generateCatalogue(items, catalogue);
    const lista1 = await filtrarItems(catalogue, filter1);
    const lista2 = await filtrarItems(catalogue, filter2);
    const lista3 = await filtrarItems(catalogue, filter3);
    const lista4 = await filtrarItems(catalogue, filter4);
    const lista5 = await filtrarItems(catalogue, filter5);
    const lista6 = await filtrarItems(catalogue, filter6);
 

    createItemsCards(lista1, itemList);
    createItemsCards(lista2, itemList2);
    createItemsCards(lista3, itemList3);
    createItemsCards(lista4, itemList4);
    createItemsCards(lista5, itemList5);
    createItemsCards(lista6, itemList6);
    

}

generatePage(getItemsJson, url+range+apiKey);


alertDolar();




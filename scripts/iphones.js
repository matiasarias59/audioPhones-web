const apiKey = "?key=AIzaSyBz6fhNgPKZmf3Kye1WUmTe-4PSS0WrJbI";
const range = "DB!A3:U705";
const url = "https://sheets.googleapis.com/v4/spreadsheets/1HLcMR4l8bOGMbD2F25m0mk5NFXkmmRxTjTqwdDkbNIc/values/";
const catalogue = [];
const itemList = document.getElementById("itemList");


const getItemsJson = async (url) => {
    const res = await fetch (url);
    const data = await res.json();
    const items = data.values;
    
    for (let i= 1; i< items.length; i++){
        const itemTemplate = {};
        const keys = items[0];
        for (const key of keys) {
            itemTemplate[key] = items[i][keys.indexOf(key)];
        }
        if (itemTemplate.publicar == 'TRUE' && itemTemplate.cantidad > 0){
            catalogue.push(itemTemplate);
        }
    }
    console.log(catalogue);
    traerItems(catalogue);
}
getItemsJson(url+range+apiKey);

const filterFunc = (item) => {
    return (item["marca"]=="APPLE" && item["familia"]=="CELULARES")
}

const traerItems = (items) => {
    const itemsFiltrado = items.filter((item)=>{return (item["marca"]=="APPLE" && item["familia"]=="CELULARES")});
    console.log(itemsFiltrado)
    for (const item of itemsFiltrado) {
        createItemCard(item, itemList); 
    }
}

const createItemCard = (item, list) =>{
    const itemForList = document.createElement('div')
        itemForList.innerHTML=`
        <h3 class="item_tittle">${item.marca} ${item.modelo}</h3>
        <img class="item_img" src=${item.urlPic} alt="Foto Producto">
        <p class="item_desc">${item.descripcion}</p>
        <p class="item_cod">${item.codModelo}</p>
        <p class="item_color">Color: ${item.color}</p>
        <p class="item_price">${item.mayorDol}</p>
        <p class="item_stock">Stock: ${item.cantidad}</p>`;
        itemForList.classList.add("item_card")
        list.appendChild(itemForList); 


}
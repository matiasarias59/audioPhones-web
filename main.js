const getDataBtn = document.getElementById("getDataBtn");
const url = "https://sheets.googleapis.com/v4/spreadsheets/1HLcMR4l8bOGMbD2F25m0mk5NFXkmmRxTjTqwdDkbNIc/values/DB!A3:U705?key=AIzaSyBz6fhNgPKZmf3Kye1WUmTe-4PSS0WrJbI";
const catalogue = [];
const iphone = [];
//const itemTable = document.getElementById("itemTable");
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
        catalogue.push(itemTemplate);
    }
    console.log(catalogue);
    traerItems();
}
getItemsJson(url);


/* getDataBtn.addEventListener("click",()=>{traerItems()}); */

const filtrarItems = (item) => {

    return (item['marca'] == 'XIAOMI');
}

const traerItems = () => {
    const items = catalogue.filter(filtrarItems);
    /* itemTable.innerHTML =`<thead>
    <th>Marca</th>
    <th>Modelo</th>
    <th>Descripcion</th>
    <th>Codigo Modelo</th>
    <th>Color</th>
    <th>Cantidad</th>
    <th>Precio</th>
</thead>`; */
    for (const item of items) {
        const itemForList = document.createElement('div')
        itemForList.innerHTML=`
            <h3 class="item_tittle">${item.marca} ${item.modelo}</h3>
            <img class="item_img" src=${item.urlPic} alt="Foto Producto">
            <p class="item_desc">${item.descripcion}</p>
            <p class="item_cod">${item.codModelo}</p>
            <p class="item_color">${item.color}</p>
            <p class="item_price">${item.mayorDol}</p>
            <p class="item_stock">${item.cantidad}</p>`;
            itemForList.classList.add("item_card")
            itemList.appendChild(itemForList);
        
    }
    
    //console.log(iphone);
}



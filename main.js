
export const apiKey = "?key=AIzaSyCNjdPDGXC6zms7YbYknyLuSIbqbJKXgKA";
export const range = "data!A1:R";
export const url = "https://sheets.googleapis.com/v4/spreadsheets/1t2igaddsZ8cPNsmsucG4Gyhtv3OIQkTDSKuxoybacCw/values/";

const urlDrive = "http://drive.google.com/uc?export=view&id="


export const getItemsJson = async (url) => {
    const res = await fetch (url);
    const data = await res.json();
    const items = data.values;
    return (items) 
}

export const generateCatalogue = (fromArr, toArr) => {
    for (let i = 1; i < fromArr.length; i++) {
        const itemTemplate = {};
        const keys = fromArr[0];
        for (const key of keys) {
            itemTemplate[key] = fromArr[i][keys.indexOf(key)];
        }
        if (itemTemplate.publicar == 'TRUE' && itemTemplate.cantidad > 0) {
            toArr.push(itemTemplate);
        }
    }
}

const determinePrice = (item) => {
    if (item.consultarPrecio == "TRUE") {
        return "Consultar";
    }else{
        return (item.tipoCambio == "OFICIAL"? (`$ ${item.mayorPes}`) : (`USD ${item.mayorDol}`)) 
    }
}

export const itemsToList = (item, list) => {
    const itemForList = document.createElement('div')
    const price = determinePrice(item);
    itemForList.innerHTML = `
        <h3 class="item_tittle">${item.marca} ${item.modelo}</h3>
        <img class="item_img" src= ${urlDrive+item.urlPic} alt="Foto Producto">
        <p class="item_desc">${item.descripcion}</p>
        <p class="item_cod">${item.codModelo}</p>
        <p class="item_color">Color: ${item.color}</p>
        <p class="item_price">${price}</p>
        <p class="item_stock">Stock: ${item.cantidad}</p>`;
    itemForList.classList.add("item_card")
    list.appendChild(itemForList);


}

export const createItemsCards = (items, itemList) => {
    for (const item of items) {
        itemsToList(item, itemList);
    }
}

export const filtrarItems = (items, func) => {
    const itemsFiltrado = items.filter(item => func(item));
    //console.log(itemsFiltrado)
    return (itemsFiltrado);
}

/* const getBrandList = (arr) => {
        const brandList = [];
        for (const item of arr) {
        !brandList.includes(item.marca)&& brandList.push(item.marca);   
        }
        //console.log(brandList);
        return brandList;
}
    
const getCategoriesList = (arr) => {
    const categoriesList = [];
    for (const item of arr) {
    !categoriesList.includes(item.familia)&& categoriesList.push(item.familia);
    }
    //console.log(categoriesList);
    return categoriesList;
}     */

/* const getMenuItemList = (arr, key) =>{
    const list = [];
    for (const item of arr){
        !list.includes(item[key]) && list.push(item[key]);
    }
    console.log(list)
    return list;
}

const generateMenuList = (container, key) => {
    const list = getMenuItemList(catalogue, key);
    for (const value of list) {
        const itemList = document.createElement("li");
        itemList.innerHTML = `
        <div>
            <input type="checkbox" value="${value}"  class="${key}" id="${value}">
            <label for="${value}}">${value}</label>
        </div>`;
        container.appendChild(itemList);
    }

} */

/* const filterParams = () => {
    //const list = document.getElementsByClassName("filter_checkbox");
    const list = document.querySelectorAll("#nav_list input[type=checkbox]")
    const arrList = [...list];
    const checkedList = [];
    const params = {marca : [], familia : [], subFamilia : []};

    for (const box of arrList){
        box.checked && checkedList.push(box);
    }

    for (const key of checkedList){
        params[key.className].push(key.id) 
    }
    
    
   // console.log(params)

   // && params.familia.includes(item.familia) && params.subFamilia.includes(item.subFamilia));
    
} */



/* getDataBtn.addEventListener("click",()=>{traerIphones()});
getDataBtn2.addEventListener("click",()=>{traerSamsung()});
//---------------------------------------------------------
const traerIphones = () => {
    itemList.innerHTML = "";
    const items = catalogue.filter((item)=>{
        return (item.marca == 'APPLE' && item.familia == 'CELULARES');
    });
    for (const item of items) {
        createItemCard(item, itemList);
    }
}




const traerSamsung = () => {
    itemList.innerHTML = "";
    const items = catalogue.filter((item)=>{
        return (item.marca == 'SAMSUNG' && item.familia == 'CELULARES');
    });
    for (const item of items) {
        createItemCard(item, itemList);
    }
} */

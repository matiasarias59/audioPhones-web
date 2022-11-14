const getDataBtn = document.getElementById("getDataBtn");
const getDataBtn2 = document.getElementById("getDataBtn2");
const apiKey = "?key=AIzaSyBz6fhNgPKZmf3Kye1WUmTe-4PSS0WrJbI";
const range = "DB!A3:U705";
const url = "https://sheets.googleapis.com/v4/spreadsheets/1HLcMR4l8bOGMbD2F25m0mk5NFXkmmRxTjTqwdDkbNIc/values/";
const catalogue = [];
const itemList = document.getElementById("itemList");

const iphone = [];
const brand_list = document.getElementById("brand_list");
const categories_list = document.getElementById("categories_list");
const subFamily_list = document.getElementById("subFamily_list");


//---------------------------------------------------

/* const criteriosFiltro = {
    iphones: item.marca == 'APPLE' && item.familia == 'CELULARES' ,
    celulares_samsung: item.marca == 'SAMSUNG' && item.familia == 'CELULARES' ,
    xiaomi_realme_motorola: "",
    apple: "",
    wiwu:"",
    satechi_baseus: "",

}
 */

//---------------------------------------------------

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

    //getBrandList(catalogue);
    //getCategoriesList(catalogue);

    //getMenuItemList(catalogue, "marca");
    //getMenuItemList(catalogue, "familia");
  
    /* generateMenuList(brand_list, "marca");
    generateMenuList(categories_list, "familia");
    generateMenuList(subFamily_list, "subFamilia"); */

}
getItemsJson(url+range+apiKey);




/* const filtrarItems = (item) => {
    return (item['marca'] == 'XIAOMI');
}
 */

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


const traerItems = (items) => {
    //const items = catalogue.filter(filtrarItems);
    for (const item of items) {
        createItemCard(item, itemList); 
    }
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
    
const getMenuItemList = (arr, key) =>{
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

}

const filterParams = () => {
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
    
}

getDataBtn.addEventListener("click",()=>{traerIphones()});
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
}

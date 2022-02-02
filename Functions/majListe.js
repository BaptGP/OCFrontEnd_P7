import { IngSelection } from "./SelectionIngredients.js";
import { AppSelection } from "./SelectionAppareils.js";
import { UstSelection } from "./SelectionUstensiles.js";

export function majListeIng(data) {
    const ingredientsList = document.getElementById("ingredient_list");
    ingredientsList.innerHTML = "";
    let arrayIng = []
    data.forEach((item) => {
        item.ingredients.forEach(ing => {
            if(!arrayIng.includes(ing.ingredient)){
                arrayIng.push(ing.ingredient)
            }
        }) 
    })
    arrayIng.sort()
    arrayIng.forEach(ing => {
        const ingredientOne = document.createElement("li");
        ingredientOne.setAttribute("class", "ingredient_list-deroulant");
        ingredientOne.innerHTML = ing;

        ingredientsList.append(ingredientOne);
    })
    IngSelection(data)
}


export function majListeApp(data) {
    const appareilsList = document.getElementById("appareils_list");
    appareilsList.innerHTML = "";
    let arrayApp = []
    data.forEach((item) => {
        if(!arrayApp.includes(item.appliance)){
            arrayApp.push(item.appliance)
        }
    })
    arrayApp.sort()
    arrayApp.forEach(app => {
        const appareilOne = document.createElement("li");
        appareilOne.setAttribute("class", "appareil_list-deroulant");
        appareilOne.innerHTML = app;

        appareilsList.append(appareilOne);
    })
    AppSelection(data);
}


export function majListeUst(data) {
    const ustensilesList = document.getElementById("ustensiles_list");
    ustensilesList.innerHTML = "";
    let arrayUst = []
    data.forEach((item) => {
        item.ustensils.forEach(ust => {
            if(!arrayUst.includes(ust)){
                arrayUst.push(ust)
            }
        }) 
    })
    arrayUst.sort()
    arrayUst.forEach(ust => {
        const ustensileOne = document.createElement("li");
        ustensileOne.setAttribute("class", "ustensile_list-deroulant");
        ustensileOne.innerHTML = ust;

        ustensilesList.append(ustensileOne);
    })
    UstSelection(data);
}


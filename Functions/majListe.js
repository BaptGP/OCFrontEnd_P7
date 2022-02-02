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


export function majListeApp() {

}


export function majListeUst() {

}


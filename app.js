import { IngSelection } from "./Functions/SelectionIngredients.js";
import { AppSelection } from "./Functions/SelectionAppareils.js";
import { UstSelection } from "./Functions/SelectionUstensiles.js";
import { contentMain } from "./Functions/Content.js";
import {majListeIng} from "./Functions/majListe.js"

/* Recup JSON */
function readTextFile(file, callback) {
  const rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status === 200) {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

readTextFile("./json/recettes.json", function (text) {
  sessionStorage.clear();
  const data = JSON.parse(text);
  let content = data;
  const main = document.getElementById("main");
  main.innerHTML = "";
  let filterMain = null;
  let arrayIng = [];
  let arrayApp = [];
  let arrayUst = [];

  content.forEach((element) => {
    //Button Ingredients

    element.ingredients.forEach((ingredient) => {
      arrayIng.push(ingredient.ingredient);
    });
    arrayIng.sort();

    arrayApp.push(element.appliance);
    arrayApp.sort();

    element.ustensils.forEach((ust) => {
      arrayUst.push(ust);
    });
    arrayUst.sort();
  });

  //Search keyboard Ingredient
  const ingredientsList = document.getElementById("ingredient_list");
  const searchIng = document.getElementById("ingredient-q");
  searchIng.addEventListener("keyup", (e) => {
    ingredientsList.innerHTML = "";
    if (e.target.value.length >= 3) {
      Array.from(
        new Set(
          arrayIng.filter((i) =>
            i.toLowerCase().includes(e.target.value.toLowerCase())
          )
        )
      ).forEach((ingredient) => {
        const ingredientOne = document.createElement("li");
        ingredientOne.setAttribute("class", "ingredient_list-deroulant");
        ingredientOne.innerHTML = ingredient;

        ingredientsList.append(ingredientOne);
      });
      IngSelection(content);
    } else {
      Array.from(new Set(arrayIng)).forEach((ingredient) => {
        const ingredientOne = document.createElement("li");
        ingredientOne.setAttribute("class", "ingredient_list-deroulant");
        ingredientOne.innerHTML = ingredient;

        ingredientsList.append(ingredientOne);
      });
      const ingredientButton = document.querySelector(".ingredient_button");
      ingredientButton.addEventListener("click", () => {
        ingredientsList.style.display = "flex";
      });
    }
    IngSelection(content);
  });
  Array.from(new Set(arrayIng)).forEach((ingredient) => {
    const ingredientOne = document.createElement("li");
    ingredientOne.setAttribute("class", "ingredient_list-deroulant");
    ingredientOne.innerHTML = ingredient;

    ingredientsList.append(ingredientOne);
  });
  const ingredientButton = document.querySelector(".ingredient_button");
  ingredientButton.addEventListener("click", () => {
    ingredientsList.style.display = "flex";
  });

  IngSelection(content);

  //Search keyboard Appareils
  const appareilsList = document.getElementById("appareils_list");
  const searchApp = document.getElementById("appareils-q");
  searchApp.addEventListener("keyup", (e) => {
    appareilsList.innerHTML = "";
    if (e.target.value.length >= 3) {
      Array.from(
        new Set(
          arrayApp.filter((i) =>
            i.toLowerCase().includes(e.target.value.toLowerCase())
          )
        )
      ).forEach((appareil) => {
        const appareilOne = document.createElement("li");
        appareilOne.setAttribute("class", "appareil_list-deroulant");
        appareilOne.innerHTML = appareil;

        appareilsList.append(appareilOne);
      });
      AppSelection(content);
    } else {
      Array.from(new Set(arrayApp)).forEach((appareil) => {
        const appareilOne = document.createElement("li");
        appareilOne.setAttribute("class", "appareil_list-deroulant");
        appareilOne.innerHTML = appareil;

        appareilsList.append(appareilOne);
      });
      const appareilButton = document.querySelector(".appareils_button");
      appareilButton.addEventListener("click", () => {
        appareilsList.style.display = "flex";
      });
    }
    AppSelection(content);
  });
  Array.from(new Set(arrayApp)).forEach((appareil) => {
    const appareilOne = document.createElement("li");
    appareilOne.setAttribute("class", "appareil_list-deroulant");
    appareilOne.innerHTML = appareil;

    appareilsList.append(appareilOne);
  });
  const appareilButton = document.querySelector(".appareils_button");
  appareilButton.addEventListener("click", () => {
    appareilsList.style.display = "flex";
  });

  AppSelection(content);

  //Search keyboard Ustensiles
  const ustensilesList = document.getElementById("ustensiles_list");
  const searchUst = document.getElementById("ustensiles-q");
  searchUst.addEventListener("keyup", (e) => {
    ustensilesList.innerHTML = "";
    if (e.target.value.length >= 3) {
      Array.from(
        new Set(
          arrayUst.filter((i) =>
            i.toLowerCase().includes(e.target.value.toLowerCase())
          )
        )
      ).forEach((ustensile) => {
        const ustensileOne = document.createElement("li");
        ustensileOne.setAttribute("class", "ustensile_list-deroulant");
        ustensileOne.innerHTML = ustensile;

        ustensilesList.append(ustensileOne);
      });
      UstSelection(content);
    } else {
      Array.from(new Set(arrayUst)).forEach((ustensile) => {
        const ustensileOne = document.createElement("li");
        ustensileOne.setAttribute("class", "ustensile_list-deroulant");
        ustensileOne.innerHTML = ustensile;

        ustensilesList.append(ustensileOne);
      });
      const ustensileButton = document.querySelector(".ustensiles_button");
      ustensileButton.addEventListener("click", () => {
        ustensilesList.style.display = "flex";
      });
    }
    UstSelection(content);
  });
  Array.from(new Set(arrayUst)).forEach((ustensile) => {
    const ustensileOne = document.createElement("li");
    ustensileOne.setAttribute("class", "ustensile_list-deroulant");
    ustensileOne.innerHTML = ustensile;

    ustensilesList.append(ustensileOne);
  });
  const ustensileButton = document.querySelector(".ustensiles_button");
  ustensileButton.addEventListener("click", () => {
    ustensilesList.style.display = "flex";
  });

  UstSelection(content);

  const searchGen = document.getElementById("search-q");
  searchGen.addEventListener("keyup", (e) => {
    let searchRecette = [];
    if (e.target.value.length >= 3) {
      for (let i = 0; i < content.length; i++) {
        if (
          content[i].name
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) &&
          !searchRecette.includes(content[i])
        ) {
          searchRecette.push(content[i]);
        } else if (
          content[i].description
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) &&
          !searchRecette.includes(content[i])
        ) {
          searchRecette.push(content[i]);
        }else{

          for (let ing; ing < content[i].ingredients; i++) {
            if (
              ing.ingredient
                .toLowerCase()
                .includes(e.target.value.toLowerCase()) &&
              !searchRecette.includes(content[i])
            ) {
              searchRecette.push(content[i]);
            }else{
              contentMain("empty")
            }
          }
        }
      }
      contentMain(searchRecette);
      majListeIng(searchRecette);
    } else {
      contentMain(content);
      majListeIng(content);
    }
    
    // majListeApp(searchRecette);
    // majListeUst(searchRecette);
  });
});

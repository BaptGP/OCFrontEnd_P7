import { contentMain } from "./Content.js";
import { addFilter } from "./Filter.js"

//Selection Filtre
export function IngSelection(content) {
  const ingredientsList = document.getElementById("ingredient_list");
  const selectionFiltre = document.getElementById("selection_filtre");
  document.querySelectorAll(".ingredient_list-deroulant").forEach((filtre) => {
    filtre.onclick = function () {
      const filtreSpan = document.createElement("span");
      filtreSpan.setAttribute("class", `selection_filtre-ingredient`);
      filtreSpan.setAttribute("id", `${filtre.innerHTML.toLowerCase()}`);

      const titleFiltre = document.createElement('h3')
      titleFiltre.innerHTML = filtre.innerHTML
      const suprFiltre = document.createElement('i')
      suprFiltre.setAttribute('class', 'fas fa-times')

      filtreSpan.append(titleFiltre)
      filtreSpan.append(suprFiltre)

      selectionFiltre.append(filtreSpan);
      ingredientsList.style.display = "none";

      //Push ingrédients dans un sessionStorage
      if (sessionStorage.getItem("ing")) {
        let allFilter = JSON.parse(sessionStorage.getItem("ing"));
        allFilter.push(filtre.innerHTML.toLowerCase());
        sessionStorage.setItem("ing", JSON.stringify(allFilter));
      } else {
        let filter = [];
        filter.push(filtre.innerHTML.toLowerCase());
        sessionStorage.setItem("ing", JSON.stringify(filter));
      }

      addFilter(content);

      document
        .querySelectorAll(".selection_filtre-ingredient")
        .forEach((filter) => {
          filter.addEventListener("click", () => {
            let elem = document.getElementById(
              `${filter.getAttribute('id').toLowerCase()}`
            );
            elem.parentNode.removeChild(elem);
            let arrayFilter = [];
            document
              .querySelectorAll(".selection_filtre-ingredient")
              .forEach((e) => {
                arrayFilter.push(e.innerHTML);
              });
            sessionStorage.setItem("ing", JSON.stringify(arrayFilter));
            addFilter(content);
          });
        });
    };
  });

  contentMain(content);
}




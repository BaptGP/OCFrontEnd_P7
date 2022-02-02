import { contentMain } from "./Content.js";
import { addFilter } from "./Filter.js"

//Selection Filtre
export function UstSelection(content) {
  const ustensilesList = document.getElementById("ustensiles_list");
  const selectionFiltre = document.getElementById("selection_filtre");
  document.querySelectorAll(".ustensile_list-deroulant").forEach((filtre) => {
    filtre.onclick = function () {
      const filtreSpan = document.createElement("span");
      filtreSpan.setAttribute("class", `selection_filtre-ustensile`);
      filtreSpan.setAttribute("id", `${filtre.innerHTML.toLowerCase()}`);

      const titleFiltre = document.createElement('h3')
      titleFiltre.innerHTML = filtre.innerHTML
      const suprFiltre = document.createElement('i')
      suprFiltre.setAttribute('class', 'fas fa-times')

      filtreSpan.append(titleFiltre)
      filtreSpan.append(suprFiltre)

      selectionFiltre.append(filtreSpan);
      ustensilesList.style.display = "none";

      //Push ingrédients dans un sessionStorage
      if (sessionStorage.getItem("ust")) {
        let allFilter = JSON.parse(sessionStorage.getItem("ust"));
        allFilter.push(filtre.innerHTML.toLowerCase());
        sessionStorage.setItem("ust", JSON.stringify(allFilter));
      } else {
        let filter = [];
        filter.push(filtre.innerHTML.toLowerCase());
        sessionStorage.setItem("ust", JSON.stringify(filter));
      }

      addFilter(content);

      document
        .querySelectorAll(".selection_filtre-ustensile")
        .forEach((filter) => {
          filter.addEventListener("click", () => {
            let elem = document.getElementById(
              `${filter.getAttribute('id').toLowerCase()}`
            );
            elem.parentNode.removeChild(elem);
            let arrayFilter = [];
            document
              .querySelectorAll(".selection_filtre-ustensile")
              .forEach((e) => {
                arrayFilter.push(e.innerHTML);
              });
            sessionStorage.setItem("ust", JSON.stringify(arrayFilter));
            addFilter(content);
          });
        });
    };
  });

  contentMain(content);
}
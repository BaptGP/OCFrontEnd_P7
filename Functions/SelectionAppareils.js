import { contentMain } from "./Content.js";
import { addFilter } from "./Filter.js"

//Selection Filtre
export function AppSelection(content) {
  const appareilsList = document.getElementById("appareils_list");
  const selectionFiltre = document.getElementById("selection_filtre");
  document.querySelectorAll(".appareil_list-deroulant").forEach((filtre) => {
    filtre.onclick = function () {
      const filtreSpan = document.createElement("div");
      filtreSpan.setAttribute("class", `selection_filtre-appareil`);
      filtreSpan.setAttribute("id", `${filtre.innerHTML.toLowerCase()}`);
      const titleFiltre = document.createElement('h3')
      titleFiltre.innerHTML = filtre.innerHTML
      const suprFiltre = document.createElement('i')
      suprFiltre.setAttribute('class', 'fas fa-times')

      filtreSpan.append(titleFiltre)
      filtreSpan.append(suprFiltre)

      selectionFiltre.append(filtreSpan);
      appareilsList.style.display = "none";

      //Push ingrédients dans un sessionStorage 
      if (sessionStorage.getItem("app")) {
        let allFilter = JSON.parse(sessionStorage.getItem("app"));
        allFilter.push(filtre.innerHTML.toLowerCase());
        sessionStorage.setItem("app", JSON.stringify(allFilter));
      } else {
        let filter = [];
        filter.push(filtre.innerHTML.toLowerCase());
        sessionStorage.setItem("app", JSON.stringify(filter));
      }

      addFilter(content);

      document
        .querySelectorAll(".selection_filtre-appareil")
        .forEach((filter) => {
          console.log(filter)
          filter.addEventListener("click", () => {
            let elem = document.getElementById(
              `${filter.getAttribute('id').toLowerCase()}`
            );
            elem.parentNode.removeChild(elem);
            let arrayFilter = [];
            document
              .querySelectorAll(".selection_filtre-appareil")
              .forEach((e) => {
                arrayFilter.push(e.innerHTML);
              });
            sessionStorage.setItem("app", JSON.stringify(arrayFilter));
            addFilter(content);
          });
        });
    };
  });

  contentMain(content);
}


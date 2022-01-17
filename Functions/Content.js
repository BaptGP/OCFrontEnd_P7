export function contentMain(data) {
    const main = document.getElementById("main");
    main.innerHTML = "";
    data.forEach((element) => {
      const recettes = document.createElement("div");
      recettes.setAttribute("class", "recettes");
  
      const recettesContent = document.createElement("div");
      recettesContent.setAttribute("class", "recettes_content");
  
      const recettesDescription = document.createElement("div");
      recettesDescription.setAttribute("class", "recettes_content-text");
  
      const titleContent = document.createElement("div");
      titleContent.setAttribute("class", "recettes_content-title");
  
      const title = document.createElement("h1");
      title.innerHTML = element.name;
  
      const timeContent = document.createElement("div");
      timeContent.setAttribute("class", "recettes_content_time");
  
      const iconTime = document.createElement("i");
      iconTime.setAttribute("class", "far fa-clock");
  
      const time = document.createElement("span");
      time.innerHTML = element.time + "min";
  
      const textContent = document.createElement("div");
      textContent.setAttribute("class", "recettes_content-description");
  
      const ingredientDiv = document.createElement("div");
      ingredientDiv.setAttribute("class", "ingredients-div");
      element.ingredients.forEach((element) => {
        const ingredients = document.createElement("div");
        ingredients.setAttribute("class", "recettes_content-ingredients");
        const ingredientsTitle = document.createElement("h2");
        ingredientsTitle.innerHTML = element.ingredient + ":";
        const ingredientsDesc = document.createElement("span");
        if (element.unit) {
          ingredientsDesc.innerHTML = element.quantity + " " + element.unit;
        } else if (!element.quantity && !element.unit) {
          ingredientsDesc.innerHTML = "";
        } else {
          ingredientsDesc.innerHTML = element.quantity;
        }
        ingredients.append(ingredientsTitle);
        ingredients.append(ingredientsDesc);
        ingredientDiv.append(ingredients);
        textContent.append(ingredientDiv);
      });
  
      const description = document.createElement("span");
      description.setAttribute("class", "description");
      description.innerHTML = element.description;
      textContent.append(description);
  
      recettes.append(recettesContent);
      recettesContent.append(recettesDescription);
      titleContent.append(title);
      titleContent.append(timeContent);
      timeContent.append(iconTime);
      timeContent.append(time);
      recettesDescription.append(titleContent);
      recettesDescription.append(textContent);
      main.append(recettes);
    });
  }
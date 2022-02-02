import { contentMain } from "./Content.js";
import {majListeIng, majListeApp, majListeUst} from './majListe.js'

export function addFilter(content) {
    let allRecettes = content;
    let ingStorage = JSON.parse(sessionStorage.getItem("ing")); //Récupère sessionStroage ingrédient
    let appStorage = JSON.parse(sessionStorage.getItem("app")); //Récupère sessionStroage appareils
    let ustStorage = JSON.parse(sessionStorage.getItem("ust")); //Récupère sessionStroage ustensiles
    sessionStorage.removeItem("recettes");
  
    //Boucle à l'intérieur des recettes
    allRecettes.forEach((recette) => {
      let verif = []; //Initialisation d'un tableau verif
  
      //Boucle dans le sessionStorage filtre
      if (ingStorage) {
        ingStorage.forEach((item) => {
          verif.push(false); //Push false dans le verif
        });
      }
      if (appStorage) {
        appStorage.forEach((item) => {
          verif.push(false); //Push false dans le verif
        });
      }
      if (ustStorage) {
        ustStorage.forEach((item) => {
          verif.push(false); //Push false dans le verif
        });
      }
      let cpt = -1; //Compteur initialiser à -1 pour qu'il commence à 0
      let goodRecipes = null; //Initialisation d'une variable comptenant les recettes à afficher après filtre
  
      //Boucle dans les ingrédients d'une recette
      recette.ingredients.forEach((ing) => {
        //Boucle dans sessionStorage ingrédient
        if (ingStorage) {
          ingStorage.forEach((item) => {
            //Si l'ingrédient est égale au filtre => on incrémente le compteur est on passe le verif de celui-ci à true
            if (ing.ingredient.toLowerCase() === item.toLowerCase()) {
              cpt++;
              verif[cpt] = true;
            }
          });
        }
      });
        //Boucle dans sessionStorage appareils
        if (appStorage) {
          appStorage.forEach((item) => {
            //Si l'ingrédient est égale au filtre => on incrémente le compteur est on passe le verif de celui-ci à true
            if (recette.appliance.toLowerCase() === item.toLowerCase()) {
              cpt++;
              verif[cpt] = true;
            }
          });
        }
  
      recette.ustensils.forEach((ust) => {
        //Boucle dans sessionStorage ustensiles
        if (ustStorage) {
          ustStorage.forEach((item) => {
            //Si l'ingrédient est égale au filtre => on incrémente le compteur est on passe le verif de celui-ci à true
            if (ust.toLowerCase() === item.toLowerCase()) {
              cpt++;
              verif[cpt] = true;
            }
          });
        }
      });
  
      //Pour les recettes qui correspondent aux filtres
      if (verif.filter((v) => v == false).length == 0) {
        //Si il y a déjà un sessionStorage recettes de créé, on le récupère. Sinon on créé un array vide
        if (sessionStorage.getItem("recettes")) {
          goodRecipes = JSON.parse(sessionStorage.getItem("recettes"));
        } else {
          goodRecipes = [];
        }
        //Puis on ajoute la recette, et on affiche le content avec les recettes filtrées.
  
        goodRecipes.push(recette);
        contentMain(goodRecipes);
        sessionStorage.setItem("recettes", JSON.stringify(goodRecipes));
        majListeIng(goodRecipes);
        majListeApp(goodRecipes);
        majListeUst(goodRecipes);
      }
    });
  }
  
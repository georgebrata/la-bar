/**
 *
 * 🍍 pinia 🍍
 *      state management
 *
 */
 import { defineStore } from "pinia";

 export const useCocktailStore = defineStore({
   id: "cocktail",
   state: () => ({
     favorites: [],
   }),
   actions: {
     addToFavorites(cocktail) {
        this.favorites.push(cocktail);
        // todo: sync with localStorage
     },
     async getRandomCocktail(){
       let cocktails = await fetch('https://thecocktaildb.com/api/json/v1/1/random.php').then(res => res.json());
       console.log(cocktails.drinks[0]);
       return cocktails.drinks[0];
     },
     async getIngredientById(id) {},
     async getCocktailById(id) {
        let cocktail = await fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(res => res.json());
        console.log('cocktail: ', cocktail.drinks[0]);
        return cocktail.drinks[0];
     },
     async searchCocktailByName(name) {
        let cocktails = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`).then(res => res.json());
        console.log('cocktails: ', cocktails.drinks);
        return cocktails.drinks;
     },
 
   },
   getter: {},
 });
 
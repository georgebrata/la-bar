<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img :src="vm.cocktail?.strDrinkThumb" alt="Cocktail image" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        {{vm.cocktail?.strDrink}}
        <!-- <div class="badge badge-primary">{{cocktail.strCategory}}</div> -->
        <div class="badge badge-primary">{{vm.cocktail?.strAlcoholic}}</div>
        <!-- <div class="badge badge-dark">{{cocktail.strGlass}}</div> -->
      </h2>
      <p class="text-sm text-left">{{vm.cocktail?.strInstructions}}</p>
      <div class="card-actions justify-start">
        <div class="badge badge-outline">{{vm.cocktail?.strIngredient1}}</div>
        <div class="badge badge-outline">{{vm.cocktail?.strIngredient2}}</div>
        <div class="badge badge-outline">{{vm.cocktail?.strIngredient3}}</div>
        <div class="badge badge-outline">{{vm.cocktail?.strIngredient4}}</div>
        <div class="badge badge-outline">{{vm.cocktail?.strIngredient5}}</div>
        <div class="badge badge-outline">{{vm.cocktail?.strIngredient6}}</div>
        <div class="badge badge-outline">{{vm.cocktail?.strIngredient7}}</div>
        <div class="badge badge-outline">{{vm.cocktail?.strIngredient8}}</div>
        <div class="badge badge-outline">{{vm.cocktail?.strIngredient9}}</div>
      </div>
    </div>
  </div>
<!-- <div class="home flex justify-start flex-col items-center">
      <div class="bg-base-300 rounded-xl bg-opacity-50 w-96">
        <figure><img :src="vm.cocktail?.strDrinkThumb" alt="Thumbnail drink" /></figure>

        <div
          class="mx-auto max-w-screen-md text-3xl text-center mb-10 justify-center"
        >
          <h2 class="text-2xl">{{vm.cocktail?.strDrink}}</h2>
          <h1>{{vm.cocktail?.strCategory}}</h1>
        </div>
        <div class="px-4">
          <p>
            {{vm.cocktail?.strInstructions}}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <button class="btn btn-secondary" @click="addToFavorites">
            add to favorites
          </button>
          <RouterLink class="btn btn-primary mt-4" to="/search"
            >Back to search</RouterLink
          >
        </div>
      </div>
    </div> -->
  </template>
  
  <script setup>
  import { onMounted, reactive } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import { useCocktailStore } from "../stores/cocktail";
  import { usePageStore } from "../stores/page";
  const cocktailStore = useCocktailStore();
  const route = useRoute();
  const router = useRouter();

  let vm = reactive({
    cocktail: null
  });

  const addToFavorites = () => {
    cocktailStore.addToFavorites(vm.cocktail);
    // todo: add success / error notifications
  }

  onMounted(async () => {
    vm.cocktail = await cocktailStore.getCocktailById(route.params.id);
  })
  </script>
  
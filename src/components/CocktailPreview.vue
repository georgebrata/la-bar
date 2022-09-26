<template>
<router-link :to="`/cocktail/${cocktail.idDrink}`">
  <div class="card w-96 bg-base-100 shadow-xl image-full">
    <figure><img :src="cocktail.strDrinkThumb" alt="Cocktail image" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        {{cocktail.strDrink}}
        <!-- <div class="badge badge-primary">{{cocktail.strCategory}}</div> -->
        <div class="badge badge-primary">{{cocktail.strAlcoholic}}</div>
        <!-- <div class="badge badge-dark">{{cocktail.strGlass}}</div> -->
      </h2>
      <p class="text-sm text-left">{{cocktail.strInstructions}}</p>
      <div class="card-actions justify-end">
        <IngredientPill :ingredient="cocktail.strIngredient1"></IngredientPill>
        <IngredientPill :ingredient="cocktail.strIngredient2"></IngredientPill>
        <IngredientPill :ingredient="cocktail.strIngredient3"></IngredientPill>
        <IngredientPill :ingredient="cocktail.strIngredient4"></IngredientPill>
        <IngredientPill :ingredient="cocktail.strIngredient5"></IngredientPill>
        <IngredientPill :ingredient="cocktail.strIngredient6"></IngredientPill>
        <IngredientPill :ingredient="cocktail.strIngredient7"></IngredientPill>
        <IngredientPill :ingredient="cocktail.strIngredient8"></IngredientPill>
        <IngredientPill :ingredient="cocktail.strIngredient9"></IngredientPill>      
      </div>
    </div>
  </div>
</router-link>
</template>
<script setup>
    import AppLogo from "./AppLogo.vue";

    import { usePageStore } from "../stores/page";
import IngredientPill from "./IngredientPill.vue";
    const props = defineProps({
        cocktail: {
            type: Object,
            default: () => ({}),
        },
    })
    const pageStore = usePageStore();

</script>
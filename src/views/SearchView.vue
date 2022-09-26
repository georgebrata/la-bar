<template>
    <div
      class="mx-auto text-3xl text-center mb-20 flex flex-col gap-4 p-8"
    >
      <!-- <h1>{{ pageStore.pageTitle }}</h1> -->
      <input
        v-model="query"
        placeholder="Search recipe, ingredient, etc ..."
        class="input input-bordered"
        v-autofocus
        @keydown="onSubmit"
      />
      <div v-if="cocktails.length === 0 && query !== ''" class="text-md text-light">
        No results ...
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-4">
        <div v-for="c in cocktails">
            <CocktailPreview :cocktail="c"></CocktailPreview>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive} from 'vue';
  import { vAutofocus } from "../directives/vAutofocus";
  import { useCocktailStore } from "@/stores/cocktail";
  import CocktailPreview from "@/components/CocktailPreview.vue";

  const cocktailStore = useCocktailStore();

  let query = ref('');
  let cocktails = reactive([]);
  let ingredients = reactive([]);

  async function getRandomCocktail() {
    let cocktail = await cocktailStore.getRandomCocktail();
    cocktails.push(cocktail)
  }

  async function onSubmit() {
    let cocktailsResults = await cocktailStore.searchCocktailByName(query.value);
    cocktails.length = 0;
    if(cocktailsResults) {
        cocktailsResults.forEach(c => cocktails.push(c));
    }
}
</script>
  
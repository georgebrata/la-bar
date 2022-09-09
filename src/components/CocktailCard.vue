<template>
<div class="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg ml-6 mr-6 my-4">
  <span
    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div class="justify-between sm:flex">
    <div>
      <h5 class="text-xl font-bold text-slate-900">
        {{cocktail.strDrink}}
        <span v-if="cocktail.strAlcoholic === 'Alcoholic'" class="ml-2 my-1 py-1 px-4 shadow-md no-underline rounded-full bg-red-700 text-white font-sans font-semibold text-sm">{{cocktail.strAlcoholic}}</span>
        <span v-else class="ml-2 my-1 py-1 px-4 shadow-md no-underline rounded-full bg-green-700 text-white font-sans font-semibold text-sm">{{cocktail.strAlcoholic}}</span>
      </h5>
      <p v-if="cocktail.strGlass" class="mt-1 text-xs font-medium text-slate-600">{{cocktail.strGlass}}</p>
    </div>

    <div class="flex-shrink-0 hidden ml-3 sm:block" v-if="cocktail.strDrinkThumb">
      <img
        class="object-cover w-16 h-16 rounded-lg shadow-sm"
        :src="cocktail.strDrinkThumb"
        alt=""
      />
    </div>
  </div>

  <div class="mt-4 sm:pr-8">


    <div class="flex flex-row">
      <div class="basis-3/4">
        <p class="text-sm text-slate-500">
          {{cocktail.strInstructions}}
        </p>
      </div>
      <div class="basis-1/4">

      </div>
    </div>
  </div>

  <p class="flex flex-row my-4">
  
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2 text-slate-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
        <span class="text-xs text-slate-500">
        {{cocktail.strIngredient1 ? cocktail.strIngredient1 : ''}}
        {{cocktail.strIngredient2 ? ', ' + cocktail.strIngredient2 : ''}}
        {{cocktail.strIngredient3 ? ', ' + cocktail.strIngredient3 : ''}}
        {{cocktail.strIngredient4 ? ', ' + cocktail.strIngredient4 : ''}}
        {{cocktail.strIngredient5 ? ', ' + cocktail.strIngredient5 : ''}}
        {{cocktail.strIngredient6 ? ', ' + cocktail.strIngredient6 : ''}}
        {{cocktail.strIngredient7 ? ', ' + cocktail.strIngredient7 : ''}}
        {{cocktail.strIngredient8 ? ', ' + cocktail.strIngredient8 : ''}}
        {{cocktail.strIngredient9 ? ', ' + cocktail.strIngredient9 : ''}}
        {{cocktail.strIngredient10 ? ', ' + cocktail.strIngredient10 : ''}}
        {{cocktail.strIngredient11 ? ' and more ...' : ''}}
        </span>
  </p>
</div>
</template>

<script setup>
import {defineProps} from 'vue';

defineProps({
   cocktail: {
    type: Object,
    default: () => {}
  },
})

</script>
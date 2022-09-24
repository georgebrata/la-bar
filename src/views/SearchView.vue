<template>
    <div
      class="mx-auto max-w-screen-md text-3xl text-center mb-20 flex flex-col gap-4 w-96"
    >
      <!-- <h1>{{ pageStore.pageTitle }}</h1> -->
      <input
        v-model="query"
        placeholder="Search recipe, ingredient, etc ..."
        class="input input-bordered"
        v-autofocus
        @keydown.enter="onSubmit"
      />
      <div v-for="r in results">
        {{r}}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive} from 'vue';
  import { vAutofocus } from "../directives/vAutofocus";
  import { usePageStore } from "../stores/page";
  const pageStore = usePageStore();

  let query = ref('');
  let results = reactive([]);

  function onSubmit() {
    alert(query.value)
    results.push(1)
  }
  </script>
  
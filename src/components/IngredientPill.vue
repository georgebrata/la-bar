<template>
<router-link :to="`/ingredient/${ingredient.toLowerCase()}`" v-if="ingredient">
    <div class="badge badge-outline">{{ingredient}}</div> 
</router-link>
</template>
<script setup>

const props = defineProps({
    ingredient: {
        type: String,
        default: "",
    },
})

</script>
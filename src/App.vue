<template>
  <div class="p-14">
    <router-link class="flex justify-center text-4xl text-red-800" to="/">
      La Bar 🍹
    </router-link>
    <div class="h-100 overflow-auto p-4">
      <router-view />

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
    name: 'App',
    components: {
        Footer,
        // UsersList
    }
}
</script>

<style></style>

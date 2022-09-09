<template>
  <div class="p-14">
    <router-link class="flex justify-center text-4xl text-yellow-700" to="/">
      La Bar 🍹
    </router-link>
    <router-view />
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

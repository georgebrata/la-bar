<template>
    <section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
		<div id="tabs" class="flex justify-between">
			<router-link to="/home" class="w-full focus:text-red-900 hover:text-red-900 justify-center inline-block text-center pt-2 pb-1">
				<HomeIcon></HomeIcon>
				<span class="tab tab-home block text-xs">Home</span>
			</router-link>
			<router-link to="/explore" class="w-full focus:text-red-900 hover:text-red-900 justify-center inline-block text-center pt-2 pb-1">
				<ExploreIcon></ExploreIcon>
				<span class="tab tab-explore block text-xs">Explore</span>
			</router-link>
			<router-link to="/favorites" class="w-full focus:text-red-900 hover:text-red-900 justify-center inline-block text-center pt-2 pb-1">
				<FavoritesIcon></FavoritesIcon>
				<span class="tab tab-whishlist block text-xs">Favorites</span>
			</router-link>
		</div>
	</section>
</template>

<script>
import HomeIcon from '@/components/icons/HomeIcon.vue'
import ExploreIcon from '@/components/icons/ExploreIcon.vue'
import FavoritesIcon from '@/components/icons/FavoritesIcon.vue'

export default {
    name: 'Footer',
    components: {
        HomeIcon,
		ExploreIcon,
		FavoritesIcon
    }
}
</script>

<style>
.router-link-exact-active {
	color: #881337;
}
</style>
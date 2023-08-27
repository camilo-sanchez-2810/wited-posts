<template>
	<div class="sm:px-4 md:px-10 lg:px-20">
		<div class="flex justify-center px-3">
    	<input type="text" @input="search" class="mb-4 w-full p-2 bg-slate-900 outline focus:outline-slate-500 focus:outline-2 placeholder:text-slate-400 text-slate-200 rounded-lg outline-slate-700 md:w-3/4" placeholder="Buscar por titulo">
  	</div>
		<PostCard 
			v-for="post in postsStore.posts"
			:key="post.id"
			:title="post.title"
			:body="post.body"
			:id="post.id"
			:userId="post.userId"
			/>
		<div class="mt-6 text-5xl flex justify-evenly text-green-500">
			<button @click="previousPage()">&larr;</button>
			<button @click="nextPage()">&rarr;</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { usePostsStore } from "@/stores";
import PostCard from "./PostCard.vue";
import { MAX_PAGE, MIN_PAGE } from '@/utils'
import { onMounted, ref } from "vue";

const postsStore = usePostsStore();
const page = ref<number>(MIN_PAGE);
const title = ref<string>('')

onMounted(() => {
	postsStore.setPosts(page.value, title.value)
})

function search(e): void {
	title.value = e.target.value
  postsStore.setPosts(page.value, e.target.value)
}

function nextPage(): void {
	if(postsStore.posts.length < MAX_PAGE) return
	if(page.value < MAX_PAGE) {
		page.value += 1
		postsStore.setPosts(page.value, title.value)
	}
	
}

function previousPage() : void {
	if(postsStore.posts.length < MAX_PAGE) return
	if (page.value > MIN_PAGE) {
		page.value-= 1
		postsStore.setPosts(page.value, title.value)
	}
}
</script>

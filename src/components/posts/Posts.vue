<template>
	<div class="sm:px-4 md:px-10 lg:px-20">
		<PostCard 
			v-for="post in postsStore.posts"
			:key="post.id"
			:title="post.title"
			:body="post.body"
			/>
	</div>
</template>

<script setup lang="ts">
import { usePostsStore } from "@/stores";
import PostCard from "./PostCard.vue";

const postsStore = usePostsStore();

console.log(postsStore.posts);


</script>

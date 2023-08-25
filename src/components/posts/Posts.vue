<template>
	<div class="sm:px-4 md:px-10 lg:px-20">
		<PostCard 
			v-for="post in postsStore.getLimitedPosts(0, 10)"
			:key="post.id"
			:title="post.title"
			:body="post.body"
			:id="post.id"
			/>
	</div>
</template>

<script setup lang="ts">
import { usePostsStore } from "@/stores";
import PostCard from "./PostCard.vue";
import { onMounted } from "vue";

const postsStore = usePostsStore();

onMounted(() => {
	postsStore.setPosts()
})

</script>

<template>
  <PostDetail />
  <Comments />
</template>

<script setup lang="ts">
import PostDetail from "@/components/posts/PostDetails.vue";
import Comments from '@/components/comments/Comments.vue'
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCommentsStore, usePostsStore } from "@/stores";

const postStore = usePostsStore()
const commentsStore = useCommentsStore()
const route = useRoute()

onMounted(() => {
  postStore.setOnePost(Number(route.params.id))
  commentsStore.setComments(Number(route.params.id))
})

</script>
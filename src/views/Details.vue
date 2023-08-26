<template>
  <PostDetail />
</template>

<script setup lang="ts">
import PostDetail from "@/components/posts/PostDetails.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { usePostsStore } from "@/stores";

const postStore = usePostsStore()
const route = useRoute()

onMounted(() => {
  postStore.getOnePost(Number(route.params.id))
})

</script>
<template>
  <div class="my-5 px-4 md:px-10">
    <RouterLink to="/" class="text-slate-200 text-2xl hover:text-slate-400 transition-colors duration-300">
      &larr; Al inicio
    </RouterLink>
  </div>
  <article class="px-4 sm:px-10 md:px-16 lg:px-20">
    <div class="flex mb-4 items-center gap-5">
        <img
          src="https://dummyimage.com/600x600/61d94c/ffffff&text=x"
          class="rounded-full w-10 h-10"
          alt="profile picture"
        />
        <div class="w-full">
          <div
            class="flex justify-between text-sm text-slate-500"
          >
            <p class="font-semibold">{{ userStore.getUser?.name }}</p>
            <p>24 agosto 2023</p>
          </div>
        </div>
      </div>
    <div class="sm:px-14">
      <h1 class="text-slate-100 text-2xl mb-5 font-bold">{{ postStore.getPost?.title }}</h1>
      <p class="text-slate-300">{{ postStore.getPost?.body }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { usePostsStore, useUserStore } from '@/stores';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const postStore = usePostsStore()
const userStore = useUserStore()

onMounted(() => {
  userStore.setUser(Number(postStore.getPost?.userId))
})

</script>
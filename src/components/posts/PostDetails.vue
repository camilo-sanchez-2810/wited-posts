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
            <p class="font-semibold">{{ user }}</p>
            <p>24 agosto 2023</p>
          </div>
        </div>
      </div>
    <div class="sm:px-12">
      <h1 class="text-slate-100 text-3xl mb-5 font-bold">{{ store.getPost?.title }}</h1>
      <p class="text-slate-300">{{ store.getPost?.body }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { usePostsStore } from '@/stores';
import axios from "axios";
import { USERS_ENDPOINT } from "@/utils";
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const store = usePostsStore()
const user = ref<string>()

onMounted(() => {
  axios
		.get(`${USERS_ENDPOINT}${store.getPost?.userId}`)
		.then((response) => {
			user.value = response.data.name;
		});
})

</script>
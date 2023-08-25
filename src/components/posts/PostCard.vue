<template>
  		<article class="text-slate-900 my-5 px-2 hover:bg-slate-800 transition-colors duration-200 py-5 sm:rounded-md md:px-6">
			<div class="flex mb-4 items-center gap-5">
				<img
					src="https://dummyimage.com/600x600/61d94c/ffffff&text=x"
					class="rounded-full w-10 h-10"
					alt="profile picture"
				/>
				<div class="w-full">
					<div
						class="flex justify-between text-sm text-gray-500"
					>
						<p class="font-semibold">{{ user }}</p>
						<p>24 agosto 2023</p>
					</div>
				</div>
			</div>
			<div>
				<h3
					class="text-lg text-start font-semibold text-gray-200"
					>{{ title }}</h3
				>
				<p class="mt-3 text-gray-400 text-sm">{{
					body
				}}</p>
			</div>
			<div class="flex justify-end mt-4">
				<button
					class="border border-green-500 text-gray-200 px-4 py-1 rounded-xl hover:text-slate-900 hover:bg-green-500 transition-colors duration-200 active:bg-green-700 active:border-green-700 active:text-slate-950"
					>Ver Mas</button
				>
			</div>
		</article>
    <div class="border-b border-slate-600"></div>
</template>

<script setup lang="ts">
import { IPostProps, USERS_ENDPOINT } from "@/utils"
import { onMounted, ref } from "vue";
import axios from 'axios'
const props = defineProps<IPostProps>()
const user = ref()

onMounted(() => {
  axios.get(`${USERS_ENDPOINT}${props.userId}`)
    .then((response) => {
      user.value = response.data.name
    })
})
</script>
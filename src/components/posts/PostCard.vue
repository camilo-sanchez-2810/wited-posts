<template>
  		<article class="text-slate-900 my-5 px-2 odd:bg-slate-800 py-5 sm:rounded-md md:px-6">
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
						<p class="font-semibold">Usuario X</p>
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
					class="border border-green-500 text-gray-200 px-4 py-1 rounded-xl hover:text-slate-900 hover:bg-green-500 transition-all duration-200 active:bg-green-700 active:border-green-700 active:text-slate-950"
					>Ver Mas</button
				>
			</div>
		</article>
</template>

<script setup lang="ts">
import { IPostProps } from "@/utils"
defineProps<IPostProps>()
</script>
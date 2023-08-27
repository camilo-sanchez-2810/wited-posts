<template>
	<div class="px-2 py-4 rounded-lg">
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
					<p class="font-semibold">{{ name }}</p>
					<p>24 agosto 2023</p>
				</div>
			</div>
		</div>
		<div class="">
			<p class="text-slate-300">{{ body }}</p>
		</div>
	</div>
	<div
		class="border-b border-slate-600 mt-4"
	></div>
</template>
<script setup lang="ts">
import { ICommentProp } from '@/utils';

defineProps<ICommentProp>();
</script>

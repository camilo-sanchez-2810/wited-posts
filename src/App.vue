<template>
	<main class="min-h-screen py-4 bg-slate-900">
    <header class="pb-4">
      <h1 class="text-center font-bold text-3xl text-green-700">WITED POSTS</h1>
    </header>
    <RouterView />
	</main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style scoped></style>

<template>
  <div class="mt-8 sm:px-10 md:px-16 lg:px-20">
    <h2 class="text-slate-100 px-2 sm:px-14 lg:px-20 text-2xl">Comentarios</h2>
    <div class="mt-6 sm:px-14 lg:px-20">
      <div class="mb-6" v-for="comment in commentsStore.getComments">
        <CommentsCard 
          :name="comment.name"
          :body="comment.body"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommentsStore } from '@/stores';
import CommentsCard from './CommentsCard.vue';

const commentsStore = useCommentsStore()
</script>
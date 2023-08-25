import { defineStore } from "pinia";
import { IPostState, IPost, POSTS_ENDPOINT } from "@/utils";
import axios from "axios";

export const usePostsStore = defineStore('posts', {
  state: (): IPostState => {
    return {
      posts: []
    }
  },
  actions: {
    async setPosts(): Promise<void> {
      const response = await axios.get(POSTS_ENDPOINT)
      this.posts = response.data
    },
    getLimitedPosts: function(start: number, end: number): IPost[] {
      return this.posts.slice(start, end)
    }
  },
  getters: {
    getPosts: function(state: IPostState): IPost[] {
      return state.posts
    }
  }
})
import { defineStore } from "pinia";
import axios from "axios";
import { IComment, ICommentStore, POSTS_ENDPOINT } from "@/utils";

export const useCommentsStore = defineStore("comments", {
  state: (): ICommentStore => {
    return {
      comments: []
    }
  },
  actions: {
    async setComments(postId: number): Promise<void> {
      const response = await axios.get(`${POSTS_ENDPOINT}${postId}/comments`);
      this.comments = response.data;
    }
  },
  getters: {
    getComments: (state): IComment[] => state.comments
  }
})
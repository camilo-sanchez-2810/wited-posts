import { defineStore } from "pinia";
import { IPostState } from "../../utils";

export const usePostsStore = defineStore('posts', {
  state: (): IPostState => {
    return {
      posts: [{
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu"
      },{
        userId: 1,
        id: 2,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu"
      },{
        userId: 1,
        id: 3,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu"
      }]
    }
  }
})
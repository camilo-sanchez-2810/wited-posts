import { defineStore } from "pinia";
import {
	IPostState,
	IPost,
	POSTS_ENDPOINT,
  LIMIT,
} from "@/utils";
import axios from "axios";

export const usePostsStore = defineStore(
	"posts",
	{
		state: (): IPostState => {
			return {
				posts: [],
				post: undefined,
			};
		},
		actions: {
			async setPosts (
				page: number,
        title: string
			): Promise<void> {
        const response = await axios.get(
          `${POSTS_ENDPOINT}?_page=${page}&_limit=${LIMIT}&title_like=${title}`
        )
				console.log(response.data)
				this.posts = response.data;
			},
			async setOnePost(
				id: number
			): Promise<void> {
				const response = await axios.get(
					`${POSTS_ENDPOINT}/${id}`
				);
				this.post = response.data;
			},
		},
		getters: {
			getPosts: function (
				state: IPostState
			): IPost[] {
				return state.posts;
			},
			getPost: function (
				state: IPostState
			): IPost | undefined {
				return state.post;
			},
		},
	}
);

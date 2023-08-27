import { defineStore } from "pinia";
import axios from "axios";
import { IUser, IUserState, USERS_ENDPOINT } from "@/utils";

export const useUserStore = defineStore("user", {
  state: (): IUserState => {
    return {
      user: undefined
    }
  },
  actions: {
    async setUser(userId: number): Promise<void> {
      const response = await axios.get(`${USERS_ENDPOINT}${userId}`);
      this.user = response.data;
    }
  },
  getters: {
    getUser: (state): IUser | undefined => state.user
  }
})
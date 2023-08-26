import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/Home.vue"),
	},
	{
		path: "/details/:id(\\d+)",
		name: "Details",
		component: () => import("@/views/Details.vue"),
	},
];

const router = createRouter({
  history: createWebHistory(),
	routes
});

export default router;
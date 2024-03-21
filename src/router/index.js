import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		"path": "/",
		"name": "Home",
		"component": () => import("../views/Home.vue"),
		"alias": "/home",
	},
	{
		"path": "/about",
		"name": "About",
		"component": () => import("../views/About.vue"),
	},
	{
		"path": "/editors",
		"name": "Editors",
		"component": () => import("../views/Editors.vue"),
	},
];

const router = new VueRouter({
	"mode": "history",
	"base": import.meta.env.BASE_URL,
	routes,
});

export default router;

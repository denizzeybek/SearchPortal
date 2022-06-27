import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../pages/HomeView.vue"; 

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/search-view",
    name: "searchview", 
    component: () =>
      import("../pages/SearchView.vue"),
  },
  {
    path: "/add-link",
    name: "addlink", 
    component: () =>
      import("../pages/AddLinkView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

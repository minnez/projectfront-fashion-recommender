/* eslint-disable */
import { createRouter, createWebHashHistory } from "vue-router";
import About from "../views/F-about.vue";
import Login from "../views/F-login.vue";
import Home from "../views/F-home.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

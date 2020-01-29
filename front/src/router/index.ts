import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MainPage from "../views/MainPage.vue";
import FreePaint from "../views/FreePaint.vue";
import Projects from "../views/Projects.vue";
import NewProject from "../views/NewProject.vue";
import {yarnStore} from "@/store";

Vue.use(VueRouter);

export interface routerComponent {
  $route: any;
  $router: any;
}

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/random",
    name: "random",
    component: MainPage
  },
  {
    path: "/patterns",
    name: "patterns",
    component: MainPage
  },
  {
    path: "/forms",
    name: "forms",
    component: MainPage
  },
  {
    path: "/image",
    name: "image",
    component: MainPage
  },
  {
    path: "/temperature",
    name: "temperature",
    component: MainPage
  },
  {
    path: "/freepaint",
    name: "freepaint",
    component: FreePaint
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects
  },
  {
    path: "/newproject",
    name: "newproject",
    component: NewProject
  },
  {
    path: "/load/:id",
    name: "load",
    component: MainPage
  }
  /*
  ,{
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/About.vue")
  }*/
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

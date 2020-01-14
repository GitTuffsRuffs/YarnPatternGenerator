import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import FreePaint from "../views/FreePaint.vue";
import Projects from "../views/Projects.vue";
import NewProject from "../views/NewProject.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/random",
    name: "random",
    component: Main
  },
  {
    path: "/patterns",
    name: "patterns",
    component: Main
  },
  {
    path: "/forms",
    name: "forms",
    component: Main
  },
  {
    path: "/image",
    name: "image",
    component: Main
  },
  {
    path: "/temperature",
    name: "temperature",
    component: Main
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

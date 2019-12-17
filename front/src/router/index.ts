import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Random from "../views/Random.vue";
import Patterns from "../views/Patterns.vue";
import Forms from "../views/Forms.vue";
import Image from "../views/Image.vue";
import Temperature from "../views/Temperature.vue";
import FreePaint from "../views/FreePaint.vue";
import Projects from "../views/Projects.vue";

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
        component: Random
    },
    {
        path: "/patterns",
        name: "patterns",
        component: Patterns
    },
    {
        path: "/forms",
        name: "forms",
        component: Forms
    },
    {
        path: "/image",
        name: "image",
        component: Image
    },
    {
        path: "/temperature",
        name: "temperature",
        component: Temperature
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

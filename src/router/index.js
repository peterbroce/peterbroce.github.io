import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
    {
        name: "Home",
        path: "/Home",
        component: () => import("../view/home")
    },
    {
        name: "Demo",
        path: "/Demo",
        component: () => import("../view/demo")
    }
]

const router = new Router({
    mode: "hash",
    routes
});

export default router;
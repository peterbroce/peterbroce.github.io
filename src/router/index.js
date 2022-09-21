// import Vue from "vue";
// import Router from "vue-router";

// Vue.use(Router);

import { createRouter, createWebHashHistory } from "vue-router";

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

// const router = new Router({
    //     mode: "hash",
    //     routes
    // });
    
    const router = createRouter({
        history: createWebHashHistory(),
        routes
    });

export default router;
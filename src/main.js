// import Vue from 'vue';
import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router";
createApp(App).use(router).mount("#app");

// const app = new Vue({
//     el:"#app",
//     router,
//     render: h => h(App)
// });

// export default app;
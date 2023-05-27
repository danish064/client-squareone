import { createApp } from "vue";
import { createPinia } from "pinia";
// import { createHead } from "@vueuse/head";

import App from "./App.vue";
import router from "./router";

import "./assets/css/tailwind.css";

const pinia = createPinia();
// const head = createHead();

const app = createApp(App);

app.use(router);
app.use(pinia);
// app.use(head);

app.mount("#app");

import { createApp } from "vue";
import { createPinia } from "pinia";
import "./global.css";

import App from "./App.vue";
import router from "./router";
import vClickOutside from "./utils/clickOutside";

const app = createApp(App);

app.directive("click-outside", vClickOutside);
app.use(createPinia());
app.use(router);

app.mount("#app");

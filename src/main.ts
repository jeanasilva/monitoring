import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "./assets/js/nav-pills.js";
import "./assets/scss/argon-dashboard.scss";

// export default {
//     install() {},
//   };

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
// appInstance.use(ArgonDashboard);
appInstance.mount("#app");

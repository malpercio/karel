import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import store from "./store";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { registerRendererProcess } from "@/processes/renderer/registerRendererProcess";

Vue.config.productionTip = false;
registerRendererProcess();

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

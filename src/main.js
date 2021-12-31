import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import VueScrollmagic from "vue-scrollmagic";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueScrollTo);
Vue.use(VueScrollmagic);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");

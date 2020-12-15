import Vue from "vue";
import PageTitle from "vue-page-title";
import App from "./App.vue";
import router from "./router";
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

Vue.config.productionTip = false;

Vue.use(PageTitle, {
  suffix: " - Class "
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

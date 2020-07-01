import Vue from "vue";
import PageTitle from "vue-page-title";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(PageTitle, {
  suffix: " - Class "
});

new Vue({
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import PageTitle from "vue-page-title";
import App from "./App.vue";
import router from "./router";
import VueSimpleAlert from "vue-simple-alert";
import VueSvgInlinePlugin from "vue-svg-inline-plugin";

Vue.use(VueSimpleAlert);
Vue.use(VueSvgInlinePlugin);

Vue.config.productionTip = false;

Vue.use(PageTitle, {
  suffix: " - Class "
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

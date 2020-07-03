import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "lobby",
    props: true,
    component: () => import(/* webpackChunkName: "page-meet" */ "./pages/lobby")
  },
  {
    path: "/meet/:meet",
    name: "meet",
    props: true,
    component: () =>
      import(/* webpackChunkName: "page-meet" */ "./pages/chooseMeeting")
  },
  {
    path: "/space",
    name: "space",
    component: () =>
      import(/* webpackChunkName: "page-space" */ "./pages/space")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "page-about" */ "./pages/about")
  }
];

export default new Router({
  mode: "history",
  routes
});

import Vue from "vue";
import VueRouter from "vue-router";
import Map from "@/components/Map.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Map",
    component: Map
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import VueAxios from "vue-axios";
//import ElementUI from "element-ui";
import { Input, Option, Select, Dialog } from "element-ui";

import "element-ui/lib/theme-chalk/index.css";

Vue.use(Input);
Vue.use(Option);
Vue.use(Select);
Vue.use(Dialog);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

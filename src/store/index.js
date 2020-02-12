import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import { getArticleList } from "../utils/pharmacies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pharmacies: null,
    loaded: false,
    initial: false,
    hideSplashScreen: false,
    timer: null,
    countdownTime: 60
  },
  mutations: {
    setPharmacies(state, data) {
      state.pharmacies = data;
    },
    setLoad(state, data) {
      state.loaded = data;
    },
    setInitial(state, data) {
      state.initial = data;
    },
    setHideSplashScreen(state, data) {
      state.hideSplashScreen = data;
    },
    setTimer(state, dispatch) {
      this.state.countdownTime = 60;
      state.timer = setInterval(() => {
        if (this.state.countdownTime == 0) {
          dispatch("fetchPharmacies");
          clearInterval(state.timer);
        } else {
          this.state.countdownTime -= 1;
        }
      }, 1000);
    },
    resetTimer(state) {
      clearInterval(state.timer);
    }
  },
  actions: {
    fetchPharmacies({ commit }) {
      // 拿json太慢了 直接取graphql快很多
      axios
        .get(
          "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json"
        )
        .then(res => {
          console.log(res.data);
          //來源數據有問題 所以濾掉
          let data = res.data.features.filter(store => {
            return typeof store.geometry.coordinates[0] == "number";
          });

          console.log(data);
          commit("setLoad", true);
          commit("setPharmacies", data);
          // commit("setTimer");
          commit("setInitial", true);
          setTimeout(() => {
            commit("setHideSplashScreen", true);
          }, 1000);
        });
      // getArticleList().then(res => {
      //   console.log(res.data.getMasks.payload);

      //   let data = res.data.getMasks.payload
      //     .filter(store => {
      //       return store.location !== null;
      //     })
      //     .map(store => {
      //       return {
      //         type: "Feature",
      //         geometry: {
      //           type: "Point",
      //           coordinates: [store.location.lon, store.location.lat]
      //         },
      //         properties: {
      //           id: store.code,
      //           name: store.name,
      //           address: store.address,
      //           phone: store.phone,
      //           mask_adult: store.adult_count,
      //           mask_child: store.child_count,
      //           update: store.updated_at
      //         }
      //       };
      //     });
      //   commit("setLoad", true);
      //   commit("setPharmacies", data);
      //   commit("setInitial", true);
      //   setTimeout(() => {
      //     commit("setHideSplashScreen", true);
      //     console.log("setHideSplashScreen");
      //   }, 1000);

      //   console.log(data);
      // });
    }
  },
  modules: {}
});

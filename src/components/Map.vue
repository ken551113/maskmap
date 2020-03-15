<template>
  <div style="width: 100%; height: 100%;">
    <transition name="fade">
      <SplashScreen v-show="!hideSplashScreen" />
    </transition>
    <el-dialog
      title="關於"
      :visible.sync="dialogVisible"
      :width="platform == 'mobile' ? '90%' : '30%'"
      class="dialog"
    >
      <h3>
        部分藥局採發放號碼牌方式，口罩數量以藥局實際存量為主，線上查詢之數量僅供參考，前往購買前可以先打電話確認。
      </h3>
      <h3>*手機使用前請開啟定位服務。</h3>
      <h3>
        感謝
        <a href="https://g0v.hackmd.io/@kiang/mask-info" target="blank"
          >口罩供需資訊平台</a
        >
        與
        <a href="https://github.com/kiang/pharmacies" target="blank">Kiang</a>
        提供資料
      </h3>

      <span slot="footer" class="dialog-footer ">
        <h3>
          Created by KenLee
        </h3>
        <h3>
          <a href="https://github.com/ken551113/maskmap" target="blank"
            ><i class="fa fa-github" aria-hidden="true"></i
          ></a>
          <a href="https://kenlee.com.tw/" target="blank"
            ><i class="fa fa-globe" aria-hidden="true"></i
          ></a>
        </h3>
      </span>
    </el-dialog>
    <l-map
      style="width: 100%; height: 100%;"
      :zoom="zoom"
      :center="currentPosition"
      ref="myMap"
      @dragstart="drag"
      :options="{ zoomControl: false }"
    >
      <l-control-zoom position="topright"></l-control-zoom>
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-circle-marker :lat-lng="marker" :options="userMakerOption" />
      <v-marker-cluster :options="{ disableClusteringAtZoom: 16 }">
        <l-geo-json
          v-for="geoJson in pharmacies"
          :key="geoJson.id"
          :geojson="geoJson"
          :options="geojsonMarkerOptions"
        ></l-geo-json>
      </v-marker-cluster>
    </l-map>
    <popUp
      class="popupx"
      :store="storeInfo"
      :platform="platform"
      v-if="storeInfo !== null"
    />
    <div class="sideBar" :class="showSideBar ? '' : 'hide'">
      <div class="closeBtn" @click="changeSideBar()">
        <i class="fa fa-search" aria-hidden="true" v-if="!showSideBar"></i>
        <i class="fa fa-chevron-left" aria-hidden="true" v-else></i>
      </div>
      <div class="control">
        <el-input
          class="inputKeyword"
          placeholder="輸入地址或藥局名稱"
          v-model="filterKeyword"
          clearable
        >
        </el-input>
        <div class="selectGroup">
          <el-select v-model="filterDistance">
            <el-option label="1.5km" value="1500"></el-option>
            <el-option label="2.0km" value="2000"></el-option>
            <el-option label="2.5km" value="2500"></el-option>
            <el-option label="3.0km" value="3000"></el-option>
          </el-select>
          <el-select v-model="filterMaskType">
            <el-option label="所有口罩" value="all"></el-option>
            <el-option label="成人口罩" value="adult"></el-option>
            <el-option label="兒童口罩" value="child"></el-option>
          </el-select>
        </div>
      </div>
      <div class="content" v-if="filiterStore">
        <popUp
          v-for="store in filiterStore"
          :key="
            store.properties.id +
              store.properties.distance +
              store.properties.updated
          "
          :store="store"
          :platform="platform"
          @clickPop="moveToMarker(store)"
        ></popUp>
      </div>
      <div class="sidebarInfo">
        <div class="btn" @click="dialogVisible = true">
          <i class="fa fa-info " aria-hidden="true"></i>
        </div>
        <div class="text">
          最後更新時間: {{ this.$store.state.lastUpdateTime }}
        </div>
        <div class="btn">
          <!-- <i class="fa fa-refresh " aria-hidden="true" @click="refreshData"></i> -->
        </div>
      </div>
    </div>
    <div class="position" @click="getPosition">
      <i class="fa fa-crosshairs" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
import { latLng, circleMarker } from "leaflet";
import {
  LMap,
  LTileLayer,
  LCircleMarker,
  // LMarker,
  LGeoJson,
  LControlZoom
} from "vue2-leaflet";
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
import popUp from "./popup";
import SplashScreen from "./SplashScreen";
export default {
  name: "VueLeaflet",
  components: {
    LMap,
    LTileLayer,
    // LMarker,
    LCircleMarker,
    LGeoJson,
    LControlZoom,
    popUp,
    SplashScreen,
    "v-marker-cluster": Vue2LeafletMarkerCluster
  },
  data() {
    return {
      platform: "desktop",
      zoom: 16,
      center: latLng(25.0343924, 121.565437),
      currentPosition: latLng(25.0343924, 121.565437),
      url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      attribution:
        'Created By <a href="https://kenlee.com.tw">KenLee</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',

      marker: latLng(22.604799, 120.2976256),
      storeInfo: null,
      show: false,
      showSideBar: false,
      filterKeyword: "",
      filterDistance: "1500",
      filterMaskType: "all",
      lastUpdateTime: "",
      dialogVisible: false,
      hasResult: true,
      // lastMarkerSelected: null,
      userMakerOption: {
        radius: 10,
        color: "white",
        fillColor: "#24a0cb",
        className: "pulse",
        weight: 3,
        opacity: 1,
        fillOpacity: 0.8
      },
      geojsonMarkerOptions: {
        pointToLayer: (feature, latlng) => {
          let markerColor;
          let level =
            feature.properties.mask_adult + feature.properties.mask_child;
          if (level >= 200) {
            markerColor = "#58968a";
          } else if (level >= 100 && level < 200) {
            markerColor = "#fe9166";
          } else if (level > 0) {
            markerColor = "#fb6a6b";
          } else {
            markerColor = "#7e8b99";
          }
          return circleMarker(latlng, {
            radius: 12,
            fillColor: markerColor,
            color: markerColor,
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
          });
        },
        onEachFeature: (feature, layer) => {
          layer.on({
            click: () => {
              this.storeInfo = feature;
              this.show = true;
              // if (this.lastMarkerSelected != null) {
              //   this.lastMarkerSelected.setStyle({ radius: 12 });
              // }
              this.$nextTick(() => {
                // layer.setStyle({ radius: 30 });
                // this.lastMarkerSelected = layer;

                this.$refs.myMap.mapObject.flyTo(
                  latLng(
                    feature.geometry.coordinates[1],
                    feature.geometry.coordinates[0]
                  ),
                  16
                );
              });
            }
          });
        }
      }
    };
  },
  methods: {
    drag() {
      this.show = false;
    },
    getPlatform() {
      var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
        iosPlatforms = ["iPhone", "iPad", "iPod"],
        os = null;

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = "Mac OS";
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = "iOS";
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = "Windows";
      } else if (/Android/.test(userAgent)) {
        os = "Android";
      } else if (!os && /Linux/.test(platform)) {
        os = "Linux";
      }

      if (os == "iOS" || os == "Android") {
        return "mobile";
      } else {
        this.showSideBar = true;
        return "desktop";
      }
    },
    changeSideBar() {
      if (this.showSideBar == true) {
        this.showSideBar = false;
      } else {
        this.showSideBar = true;
      }
    },
    getPosition() {
      this.$store.dispatch("fetchPharmacies");

      navigator.geolocation.getCurrentPosition(location => {
        console.log(location.coords.latitude, location.coords.longitude);
        this.center = latLng(
          location.coords.latitude,
          location.coords.longitude
        );
        this.marker = this.center;
        this.$nextTick(() => {
          this.$refs.myMap.mapObject.flyTo(this.center, 16);
        });
      });
    },
    moveToMarker(store) {
      this.storeInfo = store;
      this.show = true;
      this.$nextTick(() => {
        this.$refs.myMap.mapObject.flyTo(
          latLng(store.geometry.coordinates[1], store.geometry.coordinates[0]),
          16
        );
      });
      if (this.platform == "mobile") {
        this.showSideBar = false;
      }
    },
    refreshData() {
      let dt = new Date();
      this.lastUpdateTime =
        dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    }
  },
  computed: {
    refreshCountDown() {
      return this.$store.state.countdownTime;
    },
    isInital() {
      console.log("isInital", this.$store.state.initial);
      return this.$store.state.initial;
    },
    hideSplashScreen() {
      return this.$store.state.hideSplashScreen;
    },
    pharmacies() {
      return this.$store.state.pharmacies;
    },
    filiterStore() {
      if (
        this.currentPosition == null ||
        this.center == null ||
        this.$store.state.pharmacies == null
      )
        return;
      let filterResult = null;
      let filterDistance = this.$store.state.pharmacies.filter(store => {
        let dis = this.currentPosition.distanceTo(
          latLng(store.geometry.coordinates[1], store.geometry.coordinates[0])
        );

        let rangeStore = this.center.distanceTo(
          latLng(store.geometry.coordinates[1], store.geometry.coordinates[0])
        );
        store.properties.distance = Math.round(dis);
        store.properties.keyword =
          store.properties.address + store.properties.name;
        return rangeStore < this.filterDistance;
      });
      if (this.filterMaskType == "all") {
        filterDistance.sort((a, b) => {
          console.log("filter all");
          return a.properties.distance - b.properties.distance;
        });
      } else if (this.filterMaskType == "adult") {
        filterDistance.sort((a, b) => {
          console.log("filter adult");

          return b.properties.mask_adult - a.properties.mask_adult;
        });
      } else {
        filterDistance.sort((a, b) => {
          console.log("filter child");

          return b.properties.mask_child - a.properties.mask_child;
        });
      }

      if (this.filterKeyword !== "") {
        filterResult = filterDistance.filter(store => {
          return store.properties.keyword.includes(this.filterKeyword);
        });
      } else {
        filterResult = filterDistance;
      }

      if (filterResult.length == 0) return false;

      return filterResult;
    }
  },
  mounted() {
    this.$store.dispatch("fetchPharmacies");
    this.platform = this.getPlatform();

    this.$nextTick(() => {
      navigator.geolocation.getCurrentPosition(location => {
        // console.log(location.coords.latitude, location.coords.longitude);
        this.center = latLng(
          location.coords.latitude,
          location.coords.longitude
        );
        this.currentPosition = latLng(
          location.coords.latitude,
          location.coords.longitude
        );
        this.marker = this.currentPosition;
      });
      //this.$refs.myMap.mapObject.getCenter();
      this.$refs.myMap.mapObject.on("moveend", () => {
        //console.log("movend");
        this.center = this.$refs.myMap.mapObject.getCenter();
        //this.filiterStore();
      });
    });
  }
};
</script>

<style lang="scss" scoped>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";

.dialog {
  a {
    &:link {
      text-decoration: none;
      color: #606266;
    }
    &:visited {
      //設定已經瀏覽過的連結
      color: #606266;
    }
  }
}
.dialog-footer {
  text-align: center;
  h3 {
    color: #606266;
  }
  a {
    font-size: 24px;
    margin-left: 10px;
    margin-right: 10px;
    &:link {
      text-decoration: none;
      color: #606266;
    }
    &:visited {
      //設定已經瀏覽過的連結
      color: #606266;
    }
  }
}

.popupx {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
  box-shadow: 0px 0px 20px #888888;
}

.sideBar {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 320px;
  height: 100%;
  background-color: #f7f7f7;
  z-index: 2000;
  transition: 1s;
  .control {
    width: 100%;
    height: 150px;
    background-color: white;
    padding-top: 15px;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    .inputKeyword {
      width: 250px;
      background: #fff;
      font-size: 12px;
      // box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
      border: 0;
      outline: 0;
      // padding: 10px 16px;
      border-radius: 5px;
      display: block;
      margin-bottom: 30px;
    }
    .selectGroup {
      display: flex;
      justify-content: space-between;
      width: 250px;
    }
  }
  .content {
    width: 100%;
    height: calc(100vh - 150px);
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    &::-webkit-scrollbar {
      width: 0 !important;
    }
    .popup {
      margin-bottom: 20px;
    }
  }
  .sidebarInfo {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    background-color: white;
    border-top: 2px solid #f7f7f7;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 0px 10px;
    .btn {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: white;
      &:hover {
        background: #f7f7f7;
      }
    }
    .text {
      display: inline-block;
      min-width: 200px;
      overflow: hidden;
    }
  }
  .closeBtn {
    position: absolute;
    width: 45px;
    height: 45px;
    background-color: #e8e3e3;
    top: 50px;
    right: -45px;
    border-radius: 0px 5px 5px 0px;
    line-height: 45px;
    &:hover {
      cursor: pointer;
    }
  }
  &.hide {
    width: 0px;
  }
}
.position {
  position: absolute;
  width: 40px;
  height: 40px;
  right: 10px;
  bottom: 20px;
  border-radius: 50%;
  background-color: #fff;
  z-index: 5000;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}

.el-select {
  width: 48%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

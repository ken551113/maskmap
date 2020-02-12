<template>
  <div class="popup" @click="clickPop">
    <div class="mask_block">
      <div
        class="mask_num "
        :class="getMaskStatus(store.properties.mask_adult)"
      >
        成人 {{ store.properties.mask_adult }}
      </div>
      <div
        class="mask_num "
        :class="getMaskStatus(store.properties.mask_child)"
      >
        兒童 {{ store.properties.mask_child }}
      </div>
    </div>
    <div class="name">
      {{ store.properties.name }}<span>{{ computeDistance }}</span>
    </div>
    <div class="info address">
      <span>地址</span>{{ store.properties.address }}
    </div>
    <div class="info phone"><span>電話</span>{{ store.properties.phone }}</div>
    <div
      class="action_desktop"
      v-if="platform == 'desktop'"
      @click.stop="() => 0"
    >
      <a
        :href="navUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="navigation"
      >
        <i class="fa fa-location-arrow" aria-hidden="true"></i>
        路線</a
      >
    </div>
    <div class="action_mobile" v-else @click.stop="() => 0">
      <a :href="`tel:${phoneNum}`" class="navigation">
        <i class="fa fa-phone" aria-hidden="true"></i>
        致電</a
      >
      <a
        :href="navUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="navigation"
      >
        <i class="fa fa-location-arrow" aria-hidden="true"></i>
        路線</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  data() {
    return {
      storeData: {}
    };
  },
  props: {
    store: {
      type: Object,
      default: function() {
        return {};
      }
    },
    platform: {
      type: String,
      default: "desktop"
    }
  },
  computed: {
    navUrl() {
      return `https://www.google.com/maps?q=${this.store.geometry.coordinates[1]},${this.store.geometry.coordinates[0]}`;
    },
    phoneNum() {
      return this.store.properties.phone;
    },
    computeDistance() {
      //   console.log("computed getter");
      if (this.store.properties.distance < 1000) {
        return this.store.properties.distance + "m";
      } else {
        return this.store.properties.distance / 1000 + "km";
      }
    }
  },
  methods: {
    getMaskStatus(num) {
      if (num >= 200) {
        return "enough";
      } else if (num >= 100 && num < 200) {
        return "mid";
      } else if (num > 0 && num < 100) {
        return "low";
      } else if (num == 0) {
        return "none";
      }
    },
    clickPop() {
      console.log("click");
      this.$emit("clickPop");
    }
    // print() {
    //   console.log(this.computeDistance);
    //   console.log(this.store.properties.distance);
    // }
  }
  //   watch: {
  //     store: {
  //       immediate: true,
  //       deep: true,
  //       handler: function(userFromProps) {
  //         console.log("change");
  //         if (userFromProps) {
  //           this.storeData = {
  //             ...userFromProps
  //           };
  //         }
  //       }
  //     }
  //   }
};
</script>

<style lang="scss" scoped>
.popup {
  width: 290px;
  background-color: #fff;
  border-radius: 10px;
  padding: 12px 16px;
}
.mask_block {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
.mask_num {
  width: 120px;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  color: white;
  font-weight: bold;
  &.enough {
    background-color: #58968a;
  }
  &.mid {
    background-color: #fe9166;
  }
  &.low {
    background-color: #fb6a6b;
  }
  &.none {
    background-color: #d6d8d9;
  }
}

.name {
  text-align: left;
  font-weight: bold;
  margin-bottom: 12px;
  color: #344644;
  font-size: 20px;
  span {
    font-size: 11px;
    margin-left: 5px;
  }
}
.info {
  text-align: left;
  font-size: 14px;
  color: #566778;
  margin-bottom: 10px;
  span {
    color: #344644;
    margin-right: 10px;
  }
}

.navigation {
  font-size: 14px;
  border-radius: 5px;
  padding: 5px 0px;
  text-decoration: none;
  color: #566778;
  display: block;

  &:hover {
    background-color: rgba($color: #344644, $alpha: 0.5);
  }
}

.action_mobile {
  display: flex;
  justify-content: space-between;
  .navigation {
    width: 48%;
  }
}
</style>

(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},o={app:0},n=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("1f1a"),r("450d");var a=r("4e4b"),o=r.n(a),n=(r("6611"),r("e772")),i=r.n(n),s=(r("10cb"),r("f3ad")),c=r.n(s),l=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("2b0e")),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},p=[],d=(r("5c0b"),r("2877")),f={},h=Object(d["a"])(f,u,p,!1,null,null,null),m=h.exports,v=r("8c4f"),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{width:"100%",height:"100%"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!t.hideSplashScreen,expression:"!hideSplashScreen"}],ref:"splashScreen",staticClass:"splashScree",class:t.isInital?"hide":""},[t._m(0)]),r("l-map",{ref:"myMap",staticStyle:{width:"100%",height:"100%"},attrs:{zoom:t.zoom,center:t.currentPosition,options:{zoomControl:!1}},on:{dragstart:t.drag}},[r("l-control-zoom",{attrs:{position:"topright"}}),r("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),r("l-marker",{attrs:{"lat-lng":t.marker}}),r("v-marker-cluster",t._l(t.pharmacies,(function(e){return r("l-geo-json",{key:e.id,attrs:{geojson:e,options:t.geojsonMarkerOptions}})})),1)],1),null!==t.storeInfo?r("popUp",{staticClass:"popupx",attrs:{store:t.storeInfo,platform:t.platform}}):t._e(),r("div",{staticClass:"sideBar",class:t.showSideBar?"":"hide"},[r("div",{staticClass:"closeBtn",on:{click:function(e){return t.changeSideBar()}}},[t.showSideBar?r("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}}):r("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})]),r("div",{staticClass:"control"},[r("el-input",{staticClass:"inputKeyword",attrs:{placeholder:"輸入地址或藥局名稱",clearable:""},model:{value:t.filterKeyword,callback:function(e){t.filterKeyword=e},expression:"filterKeyword"}}),r("div",{staticClass:"selectGroup"},[r("el-select",{model:{value:t.filterDistance,callback:function(e){t.filterDistance=e},expression:"filterDistance"}},[r("el-option",{attrs:{label:"1.5km",value:"1500"}}),r("el-option",{attrs:{label:"2.0km",value:"2000"}}),r("el-option",{attrs:{label:"2.5km",value:"2500"}}),r("el-option",{attrs:{label:"3.0km",value:"3000"}})],1),r("el-select",{model:{value:t.filterMaskType,callback:function(e){t.filterMaskType=e},expression:"filterMaskType"}},[r("el-option",{attrs:{label:"所有口罩",value:"all"}}),r("el-option",{attrs:{label:"成人口罩",value:"adult"}}),r("el-option",{attrs:{label:"兒童口罩",value:"child"}})],1)],1)],1),r("div",{staticClass:"content"},t._l(t.filiterStore,(function(e){return r("popUp",{key:e.properties.id+e.properties.distance+e.properties.updated,attrs:{store:e,platform:t.platform},on:{clickPop:function(r){return t.moveToMarker(e)}}})})),1),t.filiterStore?r("div",{staticClass:"sidebarInfo",on:{click:t.refreshData}},[r("i",{staticClass:"fa fa-info",attrs:{"aria-hidden":"true"}}),t._v(" 最後更新時間: "+t._s(t.filiterStore[0].properties.updated)+" "),r("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})]):t._e()]),r("div",{staticClass:"position",on:{click:t.getPosition}},[r("i",{staticClass:"fa fa-crosshairs",attrs:{"aria-hidden":"true"}})])],1)},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gooey"},[r("span",{staticClass:"dot"}),r("div",{staticClass:"dots"},[r("span"),r("span"),r("span")])])}],k=(r("4de4"),r("caad"),r("c975"),r("b0c0"),r("2532"),r("e11e")),y=r("2699"),w=r("a40a"),_=r("4e2b"),S=r("044a"),C=r("c8b6"),O=r("ca9f"),P=r.n(O),j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"popup",on:{click:t.clickPop}},[r("div",{staticClass:"mask_block"},[r("div",{staticClass:"mask_num ",class:t.getMaskStatus(t.store.properties.mask_adult)},[t._v(" 成人 "+t._s(t.store.properties.mask_adult)+" ")]),r("div",{staticClass:"mask_num ",class:t.getMaskStatus(t.store.properties.mask_child)},[t._v(" 兒童 "+t._s(t.store.properties.mask_child)+" ")])]),r("div",{staticClass:"name"},[t._v(" "+t._s(t.store.properties.name)),r("span",[t._v(t._s(t.computeDistance))])]),r("div",{staticClass:"info address"},[r("span",[t._v("地址")]),t._v(t._s(t.store.properties.address)+" ")]),r("div",{staticClass:"info phone"},[r("span",[t._v("電話")]),t._v(t._s(t.store.properties.phone))]),"desktop"==t.platform?r("div",{staticClass:"action_desktop",on:{click:function(t){return t.stopPropagation(),function(){return 0}()}}},[r("a",{staticClass:"navigation",attrs:{href:t.navUrl,target:"_blank",rel:"noopener noreferrer"}},[r("i",{staticClass:"fa fa-location-arrow",attrs:{"aria-hidden":"true"}}),t._v(" 路線")])]):r("div",{staticClass:"action_mobile",on:{click:function(t){return t.stopPropagation(),function(){return 0}()}}},[r("a",{staticClass:"navigation",attrs:{href:"tel:"+t.phoneNum}},[r("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}}),t._v(" 致電")]),r("a",{staticClass:"navigation",attrs:{href:t.navUrl,target:"_blank",rel:"noopener noreferrer"}},[r("i",{staticClass:"fa fa-location-arrow",attrs:{"aria-hidden":"true"}}),t._v(" 路線")])])])},M=[],T=(r("99af"),{name:"popup",data:function(){return{storeData:{}}},props:{store:{type:Object,default:function(){return{}}},platform:{type:String,default:"desktop"}},computed:{navUrl:function(){return"https://www.google.com/maps?q=".concat(this.store.geometry.coordinates[1],",").concat(this.store.geometry.coordinates[0])},phoneNum:function(){return this.store.properties.phone},computeDistance:function(){return this.store.properties.distance<1e3?this.store.properties.distance+"m":this.store.properties.distance/1e3+"km"}},methods:{getMaskStatus:function(t){return t>=100?"enough":t>0&&t<100?"low":0==t?"none":void 0},clickPop:function(){this.$emit("clickPop")}}}),x=T,$=(r("5747"),Object(d["a"])(x,j,M,!1,null,"a892d0ec",null)),L=$.exports,I={name:"VueLeaflet",components:{LMap:y["a"],LTileLayer:w["a"],LMarker:_["a"],LGeoJson:S["a"],LControlZoom:C["a"],popUp:L,"v-marker-cluster":P.a},data:function(){var t=this;return{platform:"desktop",zoom:16,center:Object(k["latLng"])(25.0343924,121.565437),currentPosition:Object(k["latLng"])(25.0343924,121.565437),url:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',marker:Object(k["latLng"])(22.604799,120.2976256),storeInfo:null,show:!1,showSideBar:!1,filterKeyword:"",filterDistance:"1500",filterMaskType:"all",lastUpdateTime:"",geojsonMarkerOptions:{pointToLayer:function(t,e){var r,a=t.properties.mask_adult+t.properties.mask_child;return r=a>200?"#11787a":a<100?"#70777c":"#e67e22",Object(k["circleMarker"])(e,{radius:12,fillColor:r,color:r,weight:1,opacity:1,fillOpacity:.8})},onEachFeature:function(e,r){r.on({click:function(){t.storeInfo=e,t.show=!0,t.$nextTick((function(){t.$refs.myMap.mapObject.flyTo(Object(k["latLng"])(e.geometry.coordinates[1],e.geometry.coordinates[0]))}))}})}}}},methods:{drag:function(){this.show=!1},getPlatform:function(){var t=window.navigator.userAgent,e=window.navigator.platform,r=["Macintosh","MacIntel","MacPPC","Mac68K"],a=["Win32","Win64","Windows","WinCE"],o=["iPhone","iPad","iPod"],n=null;return-1!==r.indexOf(e)?n="Mac OS":-1!==o.indexOf(e)?n="iOS":-1!==a.indexOf(e)?n="Windows":/Android/.test(t)?n="Android":!n&&/Linux/.test(e)&&(n="Linux"),"iOS"==n||"Android"==n?"mobile":(this.showSideBar=!0,"desktop")},changeSideBar:function(){1==this.showSideBar?this.showSideBar=!1:this.showSideBar=!0},getPosition:function(){var t=this;this.$store.dispatch("fetchPharmacies"),navigator.geolocation.getCurrentPosition((function(e){t.center=Object(k["latLng"])(e.coords.latitude,e.coords.longitude),t.marker=t.center,t.$nextTick((function(){t.$refs.myMap.mapObject.panTo(t.center)}))}))},moveToMarker:function(t){var e=this;this.storeInfo=t,this.show=!0,this.$nextTick((function(){e.$refs.myMap.mapObject.flyTo(Object(k["latLng"])(t.geometry.coordinates[1],t.geometry.coordinates[0]))})),"mobile"==this.platform&&(this.showSideBar=!1)},refreshData:function(){var t=new Date;this.lastUpdateTime=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}},computed:{refreshCountDown:function(){return this.$store.state.countdownTime},isInital:function(){return this.$store.state.initial},hideSplashScreen:function(){return this.$store.state.hideSplashScreen},pharmacies:function(){return this.$store.state.pharmacies},filiterStore:function(){var t=this;if(null!=this.currentPosition&&null!=this.center&&null!=this.$store.state.pharmacies){var e=null,r=this.$store.state.pharmacies.filter((function(e){var r=t.currentPosition.distanceTo(Object(k["latLng"])(e.geometry.coordinates[1],e.geometry.coordinates[0])),a=t.center.distanceTo(Object(k["latLng"])(e.geometry.coordinates[1],e.geometry.coordinates[0]));return e.properties.distance=Math.round(r),e.properties.keyword=e.properties.address+e.properties.name,a<t.filterDistance}));return"all"==this.filterMaskType?r.sort((function(t,e){return t.properties.distance-e.properties.distance})):"adult"==this.filterMaskType?r.sort((function(t,e){return e.properties.mask_adult-t.properties.mask_adult})):r.sort((function(t,e){return e.properties.mask_child-t.properties.mask_child})),e=""!==this.filterKeyword?r.filter((function(e){return e.properties.keyword.includes(t.filterKeyword)})):r,e}}},mounted:function(){var t=this;this.$store.dispatch("fetchPharmacies"),this.platform=this.getPlatform(),this.$nextTick((function(){navigator.geolocation.getCurrentPosition((function(e){t.center=Object(k["latLng"])(e.coords.latitude,e.coords.longitude),t.currentPosition=Object(k["latLng"])(e.coords.latitude,e.coords.longitude),t.marker=t.currentPosition})),t.$refs.myMap.mapObject.on("moveend",(function(){t.center=t.$refs.myMap.mapObject.getCenter()}))}))}},D=I,B=(r("597d"),Object(d["a"])(D,g,b,!1,null,"08582e18",null)),U=B.exports;l["default"].use(v["a"]);var K=[{path:"/",name:"Map",component:U}],z=new v["a"]({mode:"history",routes:K}),E=z,A=r("2f62"),W=r("bc3a"),H=r.n(W);l["default"].use(A["a"]);var J=new A["a"].Store({state:{pharmacies:null,loaded:!1,initial:!1,hideSplashScreen:!1,timer:null,countdownTime:60},mutations:{setPharmacies:function(t,e){t.pharmacies=e},setLoad:function(t,e){t.loaded=e},setInitial:function(t,e){t.initial=e},setHideSplashScreen:function(t,e){t.hideSplashScreen=e},setTimer:function(t,e){var r=this;this.state.countdownTime=60,t.timer=setInterval((function(){0==r.state.countdownTime?(e("fetchPharmacies"),clearInterval(t.timer)):r.state.countdownTime-=1}),1e3)},resetTimer:function(t){clearInterval(t.timer)}},actions:{fetchPharmacies:function(t){var e=t.commit;H.a.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json").then((function(t){var r=t.data.features.filter((function(t){return"number"==typeof t.geometry.coordinates[0]}));e("setLoad",!0),e("setPharmacies",r),e("setInitial",!0),setTimeout((function(){e("setHideSplashScreen",!0)}),1e3)}))}},modules:{}}),N=(r("6cc5"),r("a7fe")),G=r.n(N);r("0fae");l["default"].use(c.a),l["default"].use(i.a),l["default"].use(o.a),l["default"].use(G.a,H.a),l["default"].config.productionTip=!1,delete k["Icon"].Default.prototype._getIconUrl,k["Icon"].Default.mergeOptions({iconRetinaUrl:r("584d"),iconUrl:r("6397"),shadowUrl:r("e2b9")}),new l["default"]({router:E,store:J,render:function(t){return t(m)}}).$mount("#app")},5747:function(t,e,r){"use strict";var a=r("8e34"),o=r.n(a);o.a},"597d":function(t,e,r){"use strict";var a=r("dfdd"),o=r.n(a);o.a},"5c0b":function(t,e,r){"use strict";var a=r("9c0c"),o=r.n(a);o.a},"8e34":function(t,e,r){},"9c0c":function(t,e,r){},dfdd:function(t,e,r){}});
//# sourceMappingURL=app.caed6a59.js.map
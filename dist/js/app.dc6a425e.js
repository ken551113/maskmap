(function(t){function e(e){for(var r,s,n=e[0],c=e[1],l=e[2],p=0,d=[];p<n.length;p++)s=n[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("a7cc"),a("450d");var r=a("df33"),i=a.n(r),o=(a("1f1a"),a("4e4b")),s=a.n(o),n=(a("6611"),a("e772")),c=a.n(n),l=(a("10cb"),a("f3ad")),u=a.n(l),p=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},f=[],h=(a("5c0b"),a("2877")),m={},v=Object(h["a"])(m,d,f,!1,null,null,null),g=v.exports,b=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%",height:"100%"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.hideSplashScreen,expression:"!hideSplashScreen"}],ref:"splashScreen",staticClass:"splashScree",class:t.isInital?"hide":""},[t._m(0)]),a("el-dialog",{staticClass:"dialog",attrs:{title:"關於",visible:t.dialogVisible,width:"mobile"==t.platform?"90%":"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("h3",[t._v(" 部分藥局採發放號碼牌方式，口罩數量以藥局實際存量為主，線上查詢之數量僅供參考，前往購買前可以先打電話確認。 ")]),a("h3",[t._v("*手機使用前請開啟定位服務。")]),a("h3",[t._v(" 感謝 "),a("a",{attrs:{href:"https://g0v.hackmd.io/@kiang/mask-info",target:"blank"}},[t._v("口罩供需資訊平台")]),t._v(" 與 "),a("a",{attrs:{href:"https://github.com/kiang/pharmacies",target:"blank"}},[t._v("Kiang")]),t._v(" 提供資料 ")]),a("span",{staticClass:"dialog-footer ",attrs:{slot:"footer"},slot:"footer"},[a("h3",[t._v(" Created by KenLee ")]),a("h3",[a("a",{attrs:{href:"https://github.com/ken551113/maskmap",target:"blank"}},[a("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})]),a("a",{attrs:{href:"https://kenlee.com.tw/",target:"blank"}},[a("i",{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])])])]),a("l-map",{ref:"myMap",staticStyle:{width:"100%",height:"100%"},attrs:{zoom:t.zoom,center:t.currentPosition,options:{zoomControl:!1}},on:{dragstart:t.drag}},[a("l-control-zoom",{attrs:{position:"topright"}}),a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),a("l-circle-marker",{attrs:{"lat-lng":t.marker,options:t.userMakerOption}}),a("v-marker-cluster",{attrs:{options:{disableClusteringAtZoom:16}}},t._l(t.pharmacies,(function(e){return a("l-geo-json",{key:e.id,attrs:{geojson:e,options:t.geojsonMarkerOptions}})})),1)],1),null!==t.storeInfo?a("popUp",{staticClass:"popupx",attrs:{store:t.storeInfo,platform:t.platform}}):t._e(),a("div",{staticClass:"sideBar",class:t.showSideBar?"":"hide"},[a("div",{staticClass:"closeBtn",on:{click:function(e){return t.changeSideBar()}}},[t.showSideBar?a("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}}):a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})]),a("div",{staticClass:"control"},[a("el-input",{staticClass:"inputKeyword",attrs:{placeholder:"輸入地址或藥局名稱",clearable:""},model:{value:t.filterKeyword,callback:function(e){t.filterKeyword=e},expression:"filterKeyword"}}),a("div",{staticClass:"selectGroup"},[a("el-select",{model:{value:t.filterDistance,callback:function(e){t.filterDistance=e},expression:"filterDistance"}},[a("el-option",{attrs:{label:"1.5km",value:"1500"}}),a("el-option",{attrs:{label:"2.0km",value:"2000"}}),a("el-option",{attrs:{label:"2.5km",value:"2500"}}),a("el-option",{attrs:{label:"3.0km",value:"3000"}})],1),a("el-select",{model:{value:t.filterMaskType,callback:function(e){t.filterMaskType=e},expression:"filterMaskType"}},[a("el-option",{attrs:{label:"所有口罩",value:"all"}}),a("el-option",{attrs:{label:"成人口罩",value:"adult"}}),a("el-option",{attrs:{label:"兒童口罩",value:"child"}})],1)],1)],1),t.filiterStore?a("div",{staticClass:"content"},t._l(t.filiterStore,(function(e){return a("popUp",{key:e.properties.id+e.properties.distance+e.properties.updated,attrs:{store:e,platform:t.platform},on:{clickPop:function(a){return t.moveToMarker(e)}}})})),1):t._e(),a("div",{staticClass:"sidebarInfo"},[a("div",{staticClass:"btn",on:{click:function(e){t.dialogVisible=!0}}},[a("i",{staticClass:"fa fa-info ",attrs:{"aria-hidden":"true"}})]),t._v(" 最後更新時間: "+t._s(this.$store.state.lastUpdateTime)+" "),a("div",{staticClass:"btn"})])]),a("div",{staticClass:"position",on:{click:t.getPosition}},[a("i",{staticClass:"fa fa-crosshairs",attrs:{"aria-hidden":"true"}})])],1)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gooey"},[a("span",{staticClass:"dot"}),a("div",{staticClass:"dots"},[a("span"),a("span"),a("span")])])}],w=(a("4de4"),a("caad"),a("c975"),a("b0c0"),a("2532"),a("e11e")),_=a("2699"),C=a("a40a"),S=a("ea97"),O=a("044a"),T=a("c8b6"),M=a("ca9f"),P=a.n(M),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popup",on:{click:t.clickPop}},[a("div",{staticClass:"mask_block"},[a("div",{staticClass:"mask_num ",class:t.getMaskStatus(t.store.properties.mask_adult)},[t._v(" 成人 "+t._s(t.store.properties.mask_adult)+" ")]),a("div",{staticClass:"mask_num ",class:t.getMaskStatus(t.store.properties.mask_child)},[t._v(" 兒童 "+t._s(t.store.properties.mask_child)+" ")])]),a("div",{staticClass:"name"},[t._v(" "+t._s(t.store.properties.name)),a("span",[t._v(t._s(t.computeDistance))])]),a("div",{staticClass:"info address"},[a("span",[t._v("地址")]),t._v(t._s(t.store.properties.address)+" ")]),a("div",{staticClass:"info phone"},[a("span",[t._v("電話")]),t._v(t._s(t.store.properties.phone))]),"desktop"==t.platform?a("div",{staticClass:"action_desktop",on:{click:function(t){return t.stopPropagation(),function(){return 0}()}}},[a("a",{staticClass:"navigation",attrs:{href:t.navUrl,target:"_blank",rel:"noopener noreferrer"}},[a("i",{staticClass:"fa fa-location-arrow",attrs:{"aria-hidden":"true"}}),t._v(" 路線")])]):a("div",{staticClass:"action_mobile",on:{click:function(t){return t.stopPropagation(),function(){return 0}()}}},[a("a",{staticClass:"navigation",attrs:{href:"tel:"+t.phoneNum}},[a("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}}),t._v(" 致電")]),a("a",{staticClass:"navigation",attrs:{href:t.navUrl,target:"_blank",rel:"noopener noreferrer"}},[a("i",{staticClass:"fa fa-location-arrow",attrs:{"aria-hidden":"true"}}),t._v(" 路線")])])])},L=[],x=(a("99af"),a("b680"),{name:"popup",data:function(){return{storeData:{}}},props:{store:{type:Object,default:function(){return{}}},platform:{type:String,default:"desktop"}},computed:{navUrl:function(){return"https://www.google.com/maps?q=".concat(this.store.geometry.coordinates[1],",").concat(this.store.geometry.coordinates[0])},phoneNum:function(){return this.store.properties.phone},computeDistance:function(){return this.store.properties.distance<1e3?this.store.properties.distance+" m":(this.store.properties.distance/1e3).toFixed(1)+" km"}},methods:{getMaskStatus:function(t){return t>=200?"enough":t>=100&&t<200?"mid":t>0&&t<100?"low":0==t?"none":void 0},clickPop:function(){this.$emit("clickPop")}}}),$=x,I=(a("be1f"),Object(h["a"])($,j,L,!1,null,"201b0bcc",null)),U=I.exports,B={name:"VueLeaflet",components:{LMap:_["a"],LTileLayer:C["a"],LCircleMarker:S["a"],LGeoJson:O["a"],LControlZoom:T["a"],popUp:U,"v-marker-cluster":P.a},data:function(){var t=this;return{platform:"desktop",zoom:16,center:Object(w["latLng"])(25.0343924,121.565437),currentPosition:Object(w["latLng"])(25.0343924,121.565437),url:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",attribution:'Created By <a href="https://kenlee.com.tw">KenLee</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',marker:Object(w["latLng"])(22.604799,120.2976256),storeInfo:null,show:!1,showSideBar:!1,filterKeyword:"",filterDistance:"1500",filterMaskType:"all",lastUpdateTime:"",dialogVisible:!1,hasResult:!0,userMakerOption:{radius:10,color:"white",fillColor:"#24a0cb",className:"pulse",weight:3,opacity:1,fillOpacity:.8},geojsonMarkerOptions:{pointToLayer:function(t,e){var a,r=t.properties.mask_adult+t.properties.mask_child;return a=r>=200?"#58968a":r>=100&&r<200?"#fe9166":r>0?"#fb6a6b":"#7e8b99",Object(w["circleMarker"])(e,{radius:12,fillColor:a,color:a,weight:1,opacity:1,fillOpacity:.8})},onEachFeature:function(e,a){a.on({click:function(){t.storeInfo=e,t.show=!0,t.$nextTick((function(){t.$refs.myMap.mapObject.flyTo(Object(w["latLng"])(e.geometry.coordinates[1],e.geometry.coordinates[0]),16)}))}})}}}},methods:{drag:function(){this.show=!1},getPlatform:function(){var t=window.navigator.userAgent,e=window.navigator.platform,a=["Macintosh","MacIntel","MacPPC","Mac68K"],r=["Win32","Win64","Windows","WinCE"],i=["iPhone","iPad","iPod"],o=null;return-1!==a.indexOf(e)?o="Mac OS":-1!==i.indexOf(e)?o="iOS":-1!==r.indexOf(e)?o="Windows":/Android/.test(t)?o="Android":!o&&/Linux/.test(e)&&(o="Linux"),"iOS"==o||"Android"==o?"mobile":(this.showSideBar=!0,"desktop")},changeSideBar:function(){1==this.showSideBar?this.showSideBar=!1:this.showSideBar=!0},getPosition:function(){var t=this;this.$store.dispatch("fetchPharmacies"),navigator.geolocation.getCurrentPosition((function(e){t.center=Object(w["latLng"])(e.coords.latitude,e.coords.longitude),t.marker=t.center,t.$nextTick((function(){t.$refs.myMap.mapObject.flyTo(t.center,16)}))}))},moveToMarker:function(t){var e=this;this.storeInfo=t,this.show=!0,this.$nextTick((function(){e.$refs.myMap.mapObject.flyTo(Object(w["latLng"])(t.geometry.coordinates[1],t.geometry.coordinates[0]),16)})),"mobile"==this.platform&&(this.showSideBar=!1)},refreshData:function(){var t=new Date;this.lastUpdateTime=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}},computed:{refreshCountDown:function(){return this.$store.state.countdownTime},isInital:function(){return this.$store.state.initial},hideSplashScreen:function(){return this.$store.state.hideSplashScreen},pharmacies:function(){return this.$store.state.pharmacies},filiterStore:function(){var t=this;if(null!=this.currentPosition&&null!=this.center&&null!=this.$store.state.pharmacies){var e=null,a=this.$store.state.pharmacies.filter((function(e){var a=t.currentPosition.distanceTo(Object(w["latLng"])(e.geometry.coordinates[1],e.geometry.coordinates[0])),r=t.center.distanceTo(Object(w["latLng"])(e.geometry.coordinates[1],e.geometry.coordinates[0]));return e.properties.distance=Math.round(a),e.properties.keyword=e.properties.address+e.properties.name,r<t.filterDistance}));return"all"==this.filterMaskType?a.sort((function(t,e){return t.properties.distance-e.properties.distance})):"adult"==this.filterMaskType?a.sort((function(t,e){return e.properties.mask_adult-t.properties.mask_adult})):a.sort((function(t,e){return e.properties.mask_child-t.properties.mask_child})),e=""!==this.filterKeyword?a.filter((function(e){return e.properties.keyword.includes(t.filterKeyword)})):a,0!=e.length&&e}}},mounted:function(){var t=this;this.$store.dispatch("fetchPharmacies"),this.platform=this.getPlatform(),this.$nextTick((function(){navigator.geolocation.getCurrentPosition((function(e){t.center=Object(w["latLng"])(e.coords.latitude,e.coords.longitude),t.currentPosition=Object(w["latLng"])(e.coords.latitude,e.coords.longitude),t.marker=t.currentPosition})),t.$refs.myMap.mapObject.on("moveend",(function(){t.center=t.$refs.myMap.mapObject.getCenter()}))}))}},D=B,K=(a("914c"),Object(h["a"])(D,k,y,!1,null,"7a7f48a3",null)),z=K.exports;p["default"].use(b["a"]);var A=[{path:"/",name:"Map",component:z}],E=new b["a"]({mode:"history",routes:A}),V=E,W=a("2f62"),N=a("bc3a"),H=a.n(N);p["default"].use(W["a"]);var J=new W["a"].Store({state:{pharmacies:null,loaded:!1,initial:!1,hideSplashScreen:!1,timer:null,countdownTime:60,lastUpdateTime:null},mutations:{setPharmacies:function(t,e){t.pharmacies=e},setLoad:function(t,e){t.loaded=e},setInitial:function(t,e){t.initial=e},setHideSplashScreen:function(t,e){t.hideSplashScreen=e},setTimer:function(t,e){var a=this;this.state.countdownTime=60,t.timer=setInterval((function(){0==a.state.countdownTime?(e("fetchPharmacies"),clearInterval(t.timer)):a.state.countdownTime-=1}),1e3)},resetTimer:function(t){clearInterval(t.timer)},setLastUpdateTime:function(t,e){t.lastUpdateTime=e}},actions:{fetchPharmacies:function(t){var e=t.commit;H.a.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json").then((function(t){var a=t.data.features.filter((function(t){return"number"==typeof t.geometry.coordinates[0]}));e("setLastUpdateTime",a[0].properties.updated),e("setLoad",!0),e("setPharmacies",a),e("setInitial",!0),setTimeout((function(){e("setHideSplashScreen",!0)}),1e3)}))}},modules:{}}),R=(a("6cc5"),a("a7fe")),F=a.n(R);a("0fae");p["default"].use(u.a),p["default"].use(c.a),p["default"].use(s.a),p["default"].use(i.a),p["default"].use(F.a,H.a),p["default"].config.productionTip=!1,delete w["Icon"].Default.prototype._getIconUrl,w["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")}),new p["default"]({router:V,store:J,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),i=a.n(r);i.a},"5c26":function(t,e,a){},"914c":function(t,e,a){"use strict";var r=a("5c26"),i=a.n(r);i.a},"9c0c":function(t,e,a){},be1f:function(t,e,a){"use strict";var r=a("c983"),i=a.n(r);i.a},c983:function(t,e,a){}});
//# sourceMappingURL=app.dc6a425e.js.map
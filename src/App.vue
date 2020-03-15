<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 微軟正黑體, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}
* {
  box-sizing: border-box;
}

//l-circle的css要在這邊設定
.pulse {
  transform-origin: center;
  animation: pulsate 1.5s ease-out infinite;
  transform-box: fill-box;
}

@keyframes pulsate {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(0.7, 0.7);
  }
  100% {
    transform: scale(1, 1);
  }
}

//修復element ui select 在 ios要點擊兩次才可以選取的bug
.el-scrollbar {
  > .el-scrollbar__bar {
    opacity: 1 !important;
  }
}
</style>

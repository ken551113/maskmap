module.exports = {
  devServer: {
    disableHostCheck: true
  },
  pwa: {
    name: "口罩地圖",
    themeColor: "#272727",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      name: "口罩地圖",
      short_name: "口罩地圖",
      start_url: ".",
      display: "fullscreen",
      theme_color: "#272727"
    }
  }
};

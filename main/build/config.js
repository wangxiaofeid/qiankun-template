const path = require("path");

const proxyPath = "http://10.58.17.22:8080/";

module.exports = {
  dev: {
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
      "/qimingApi": {
        target: proxyPath,
        changeOrigin: true,
        secure: false
      }
    },

    host: "0.0.0.0",
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    devtool: "eval-source-map"
  },
  build: {
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "/static-main/",
    // devtool: 'source-map',
    devtool: false
  }
};

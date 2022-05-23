const path = require("path");

const proxyPath = "http://10.58.17.22:8080/";

module.exports = {
  dev: {
    assetsSubDirectory: "static",
    assetsPublicPath: "http://0.0.0.0:8082/",
    proxyTable: {
      "/qimingApi": {
        target: proxyPath,
        changeOrigin: true,
        secure: false
      }
    },

    host: "0.0.0.0",
    port: 8082, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    devtool: "eval-source-map"
  },
  build: {
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "/static-app2/",
    // devtool: 'source-map',
    devtool: false
  }
};

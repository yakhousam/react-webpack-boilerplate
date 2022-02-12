const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.config.base");

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  devServer: {
    port: 9000,
  },
  devtool: "source-map",
});

// use merge so we can have multiple webpack configs for different environment
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    port: 9000, // set port of dev-server to 9000
  },
  devtool: "source-map", // allow client to debug easier with source code instead of built code
});

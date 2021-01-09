const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(baseConfig, {
  mode: "production",
  // Analyzer Plugin to analyze how big out built app is
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      reportFilename: "bundle_sizes.html",
    }),
  ],
  // Use CDN to treat react and react-dom as external libraries
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
});

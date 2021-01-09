const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // main entry point
  output: {
    path: path.join(__dirname, 'distribution'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      // Loaders for babel to process css file
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      }
    ],
  },
  // Plugins for webpack to produce html file output
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html' 
  })]
}
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
        options: {
          presets: [['@babel/preset-env', {
            // Use polyfill
            targets: [ 
              'last 2 versions',
              'not dead',
              'not < 2%',
              'not ie 11',
            ],
            useBuiltIns: 'entry'
          }], '@babel/preset-react'], // Presets for babel to read react app
          plugins: [
            '@babel/plugin-proposal-class-properties', // Plugins for babel to deal with class javascript
            'react-hot-loader/babel' // Plugins for react to use hot reloader
          ] 
        }
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
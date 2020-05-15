const path = require('path');

module.exports = {
  entry: {
    main: './script/index.js'
  },
  output: {
    path: path.resolve(__dirname, './script/dist'),
    // filename: '[name].js',
    filename: 'main.js',
    publicPath: '/dist'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }]
  },
  mode: 'development',
  watch: true,
  devtool: 'source-map'
};
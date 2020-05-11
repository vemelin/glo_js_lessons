const path = require('path');

module.exports = {
  entry: {
    main: './lesson28_advanced/script/index.js'
  },
  output: {
    // path: path.resolve(__dirname, 'public'),
    path: path.resolve(__dirname, './lesson28_advanced/script/dist'),
    filename: '[name].js',
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
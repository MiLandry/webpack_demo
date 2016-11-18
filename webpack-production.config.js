var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');

var stripLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: WebpackStrip.loader('console.log', 'perfLog')
  }


devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;

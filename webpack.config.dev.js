const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0', // running inside container port mapping
    port: 3030,
    historyApiFallback: true
  },
  devtool: 'source-map'
});

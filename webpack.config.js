var webpack = require('webpack');
var path = require('path');

// Webpack Config
var webpackConfig = {
  entry: {
    'polyfills': './app/polyfills.browser.ts',
    'vendor': './app/vendor.browser.ts',
    'main': './app/main.browser.ts',
  },

  output: {
    path: './public/javascripts',
  },

  watch: true,

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'vendor', 'polyfills'], minChunks: Infinity }),
  ],

  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader'] },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.((woff|woff2)(\?v=\d+\.\d+\.\d+)?|png|jpg|eot|ttf|gif)$/, loader: 'url-loader?limit=10000' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.scss$/, loader: 'style!raw!sass' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      ]
  }
};

// Our Webpack Defaults
var defaultConfig = {
  devtool: 'cheap-module-source-map',
  cache: true,
  debug: true,
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    root: [path.join(__dirname, 'client')],
    extensions: ['', '.ts', '.js', '.json']
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },

  node: {
    global: 1,
    crypto: 'empty',
    module: 0,
    Buffer: 0,
    clearImmediate: 0,
    setImmediate: 0
  },
}

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig);

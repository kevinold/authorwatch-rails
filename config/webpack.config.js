var webpack = require('webpack');
var path = require('path');

module.exports = {
  // enable source-maps
  devtool: 'source-map',

  // 'context' sets the directory where webpack looks for module files ('require' statements)
  context: path.join(__dirname, '..', '/app/webpack_javascripts'),

  // 'entry' specifies the entry point, where webpack starts reading all dependencies
  entry: {
    vendor: [ 'react', 'flux', 'immutable' ],
    app: [
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:8080/javascripts/',
      './authorwatch/app.js'
    ]
  },

  output: {
    filename: '[name]_wp_bundle.js',
    // We want to save the bundle in the Asset Pipleine directory as the other JS.
    path: path.join(__dirname, '..', '/app/assets/javascripts'),
    publicPath: 'http://localhost:8080/javascripts'
  },

  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    "jquery": "jQuery"
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor_wp_bundle.js'),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  // The 'module' and 'loaders' options tell webpack to use loaders.
  // @see http://webpack.github.io/docs/using-loaders.html
  module: {
    loaders: [
      {
        // Pattern to match only files with the '.js' or '.jsx' extension.
        // This tells the loader to only run for those files.
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
};

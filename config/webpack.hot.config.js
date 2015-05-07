var webpack = require('webpack');
var path = require('path');
var _ = require('lodash');
var baseConfig = require('./webpack.base.config');

var config = baseConfig;

config.entry.app.unshift('webpack/hot/only-dev-server');
config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/javascripts/');

config.output['publicPath'] = 'http://localhost:8080/javascripts';

config.plugins.push(new webpack.HotModuleReplacementPlugin());

config.module.loaders[0].loaders.unshift('react-hot');

module.exports = config;

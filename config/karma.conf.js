var webpack = require('webpack');
var RewireWebpackPlugin = require("rewire-webpack");

module.exports = function(config) {
  config.set({
    basePath: '..',
    frameworks: ['jasmine'],
    files: [
      'config/webpack.test.js',
      { pattern: 'app/webpack_javascripts/**/__tests__/*-test.*', included: false, served: false, watched: true }
    ],
    exclude: [
      'node_modules/**.*.js'
    ],
    preprocessors: {
      'config/webpack.test.js': process.env.SOURCE_MAPS ? ['webpack', 'sourcemap'] : ['webpack']
    },

    webpack: {
      cache: true,
      watch: true,
      devtool: process.env.SOURCE_MAPS ? 'inline-source-map' : undefined,
      // needed "stub" out these modules requried by Joi
      node: {
        net: "empty",
        fs: "empty",
        dns: "empty"
      },
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ],

        postLoaders: [ {
            test: /\.jsx?$/,
            exclude: /(__tests__|node_modules|bower_components)\//,
            loader: 'istanbul-instrumenter'
        } ]

      },
      plugins: [new RewireWebpackPlugin()]
    },

    webpackMiddleware: {
      quiet: true,
      noInfo: true
    },

    reporters: ['notify', 'mocha', 'coverage'],
    port: 9876,
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,
    autoWatch: true,
    //browsers: ['PhantomJS', 'Chrome', 'Firefox'],
    browsers: ['Firefox'],
    singleRun: false,

    mochaReporter: {
      output: 'autowatch'
    },

    junitReporter: {
      outputDir: process.env.CONTINUOUS_INTEGRATION ? './tmp/' : '/tmp/', // results will be saved as $outputDir/$browserName.xml
      outputFile: 'karma-results.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '' // suite will become the package name attribute in xml testsuite element
    },

    coverageReporter: {
      dir : process.env.CONTINUOUS_INTEGRATION ? './tmp/coverage' : '/tmp/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'cobertura', subdir: '.', file: 'cobertura-results.xml' },
        { type: 'text', subdir: '.', file: 'report.txt' },
        { type: 'text-summary' }
      ]
    },

    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-coverage',
      'karma-babel-preprocessor',
      'karma-mocha-reporter',
      'karma-junit-reporter',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-notify-reporter',
      'karma-sourcemap-loader',
      'istanbul-instrumenter-loader'
    ]
  });
};

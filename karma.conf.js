module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['mocha', 'chai', 'sinon-chai'],
    reporters: ['mocha', 'coverage'],
    // reporter options
    mochaReporter: {
      output: 'autowatch'
    },
    files: [
      'src/*test.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    preprocessors: {
      'src/test.js': ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-chai',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-istanbul-reporter',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-sinon-chai',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_ERROR,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    singleRun: false,

    // optionally, configure the reporter
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  })
}

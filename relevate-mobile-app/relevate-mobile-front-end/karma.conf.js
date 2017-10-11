// Karma configuration
// Generated on Wed Oct 04 2017 12:36:33 GMT-0500 (Central Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    
    // list of files / patterns to load in the browser
    files: [
        'www/lib/angular/angular.js',
        'www/lib/angular-animate/angular-animate.js',
        'www/lib/angular-aria/angular-aria.js',
        'www/lib/angular-messages/angular-messages.js',
        'www/lib/angular-ui-router/release/angular-ui-router.js',
        'www/lib/angular-material/angular-material.js',
        'www/lib/ngstorage/ngStorage.js',
        'www/lib/angular-material-icons/angular-material-icons.js',
        'www/lib/ngCordova/dist/ng-cordova.js',
        'www/lib/angular-socket-io/socket.js',
        'www/lib/angular-mocks/angular-mocks.js',
        'www/scripts/app.module.js',
        'www/scripts/app.controllers.js',
        'www/scripts/app.config.js',
        'www/home-view/homeView.module.js',
        'www/home-view/homeView.component.js',
        'www/trending-view/trendingView.module.js',
        'www/trending-view/trendingView.component.js',
        'www/recent-view/recentView.module.js',
        'www/recent-view/recentView.component.js',
        'www/feed-view/feedView.module.js',
        'www/feed-view/feedView.component.js',
        'www/quizzes-view/quizzesView.module.js',
        'www/quizzes-view/quizzesView.component.js',
        'www/journals-view/journalsView.module.js',
        'www/journals-view/journalsView.component.js',
        'tests/*js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

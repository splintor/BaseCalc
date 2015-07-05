module.exports = function (config) {
    config.set({
        reporters: ['coverage'],
        preprocessors: {
            'src/modules/**/*.js': ['coverage'],
        },
        files: [
            'src/modules/**/*.js'
        ],
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },
        singleRun: true,
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ]
    })
};
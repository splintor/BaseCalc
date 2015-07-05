'use strict';
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        ts: {
            build: {
                src: ["src/modules/**/*.ts"]
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.registerTask('default', ['ts:build', 'karma:unit']);
};
module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            '../dist/app.js': ['../js/main.js']
        },
       jshint: {
          files: ['../js/**/*.js'], //location of javascript files
          options: {
             predef: ["document", "console", "$"], //allows for predefined things not found in js
             esnext: true, //allows for ES6 
             globalstrict: true,
             browserify: true
           }
       },
       sass: { //setup sass compilation
          dist: {
             files: {
                '../css/style.css': '../scss/main.scss'
             }
          }
       },
       watch: { //automatically watch for changes
          javascripts: {
             files: ['../js/**/*.js'],
             tasks: ['jshint']
          },
          sass: {
             files: ['../scss/**/*.scss'],
             tasks: ['sass']
          },
          browserify: {
             files: ['../js/*.js'],
             tasks: ["browserify"]
          }
       }
    });
 
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
 };
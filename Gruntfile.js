/*
 * myCustomPlugin2
 * https://github.com/Ryan/grunt-plugin
 *
 * Copyright (c) 2014 ryanfern86goa
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
     compress: {
  main: {
    options: {
      archive: 'pack/<%= pkg.name %>.v<%= pkg.version %>.zip'
    },
    files: [
      {
       cwd: 'dev/',
       src: '**',
       dest: '../../www',    // destination folder
       expand: true 
    } 
    ]
  }
}

  });


  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('zip', ['compress']);

};

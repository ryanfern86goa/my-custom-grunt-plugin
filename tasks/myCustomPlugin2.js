/*
 * myCustomPlugin2
 * https://github.com/Ryan/grunt-plugin
 *
 * Copyright (c) 2014 ryanfern86goa
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

 grunt.registerMultiTask("myCustomPlugin2","list the function in js files", function(){

      var re = /function (\w*)? ?(\(.*\))/g;

      this.files[0].src.forEach(function(file){
          var text = grunt.file.read(file);
          var unnamedFns = 0;
          var namedFns   = 0;
          var fns        = [];
          var result;

          while( (result = re.exec(text)) !== null){

            if(result[1] === undefined){
              unnamedFns++;
            }else{
              namedFns++;
              fns.push(result[1] + result[2]);

            }
          }

          grunt.log.subhead("Function in "+ file);
          grunt.log.writeln("#"+ unnamedFns +" unnamed functions");
          grunt.log.writeln("#"+ namedFns +" named functions");
          grunt.util.recurse(fns, function(fn){
            grunt.log.ok(fn);
          })
      })
 })

};

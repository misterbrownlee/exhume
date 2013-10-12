module.exports = function(grunt) {

  // deploy path is a symlink to my local wp instance 
  // themes folder > bones
  var dirs = {
        deploy: 'output'
    };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: dirs,

    less: {
      development: {
        options: {
          paths: ["library/less"]
        },
        files: {
          "library/css/style.full.css": "library/less/style.less"
        }
      }
    },

    cssmin: {
      style: {
        files: [{
          "library/css/style.css": "library/css/style.full.css"
        }]
      }
    },

    copy: {
      css: {
        files: [{
          expand: true,
          cwd: 'library/css/',
          src: '**',
          dest: '<%=dirs.deploy%>/library/css/'
        }]
      }
    },
    
    watch: {
      files: ['library/less/*.less'],
      tasks: ['less', 'cssmin', 'copy']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less']);

};


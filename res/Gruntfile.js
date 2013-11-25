module.exports = function(grunt) {

  var dirs = {
        output: 'output' 
        // optionally a path to Wordpress root
        // eg '/Users/tehfoo/Documents/code/local_wordpress'
        // eg '/Volumes/ftp/someSiteMount/wordpress'
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
      theme: {
        files: [{
          expand: true,
          cwd: '',
          src: ['*.php', 'style.css', 'library/images/*', 
            'library/css/*','library/js/*','library/translation/*','library/**/*.php'
          ],
          dest: '<%=dirs.output%>/wp-content/themes/<%=pkg.name%>'
        }]
      },
      css: {
        files: [{
          expand: true,
          cwd: 'library/css/',
          src: '**',
          dest: '<%=dirs.output%>/wp-content/themes/<%=pkg.name%>/library/css/'
        }]
      }
    },
    
    watch: {
      files: ['library/less/*.less'],
      tasks: ['compile-debug']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('compile', ['less', 'cssmin', 'copy:css']);
  grunt.registerTask('compile-debug', ['less', 'copy:css']);
  grunt.registerTask('deploy', ['less', 'cssmin', 'copy:theme']);
  grunt.registerTask('default', ['deploy']);

};


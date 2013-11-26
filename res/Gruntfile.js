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

    // note: config for both Sass and LESS are here
    // but you could theoretically delete the config for
    // the one you aren't using if you're a neat freak
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

    sass: {
      dist: {
        options: {
        style: 'expanded',
        noCache: true
        },
        files: {
          'library/css/style.css': 'library/scss/style.scss'
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
      files: ['library/less/*', 'library/scss/*'],
      tasks: ['compile-debug']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-@@CSS_PREPROCESSOR_NAME');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('compile', ['@@CSS_PREPROCESSOR_NAME', 'cssmin', 'copy:css']);
  grunt.registerTask('compile-debug', ['@@CSS_PREPROCESSOR_NAME', 'copy:css']);
  grunt.registerTask('deploy', ['@@CSS_PREPROCESSOR_NAME', 'cssmin', 'copy:theme']);
  grunt.registerTask('default', ['deploy']);

};


module.exports = function(grunt) {

  // make symlink 'output' to local wordpress themes folder instance of @@THEME_NAME_TOKEN
  // ln -s path/to/local/wordpress/wp-content/themes/@@THEME_NAME_TOKEN output

  var dirs = {
        deploy: 'output'
        wordpress: 'PATH_TO_WORDPRESS_ROOT'
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
      },
      install: {
        files: [{
          expand: true,
          cwd: '',
          src: ['*.php', 'style.css', 'library/images/*', 
            'library/css/*','library/js/*','library/translation/*','library/**/*.php'
          ],
          dest: '<%=dirs.wordpress%>/wp-content/themes/<%=pkg.name%>'
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


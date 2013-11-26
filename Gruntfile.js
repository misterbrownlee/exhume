/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({

    prompt:  { 
      // Yes, this will nest four levels deep. Be afraid.  It's not my fault.
      gitname: {
        options: {
          questions: [
            {
              config: 'prompt.gitname', 
              type: 'input', 
              message: 'Enter your github username (used to build a clone URL):',
              validate: function(value) { 
                return (value) ? true : "no really, enter your user name";
              }
            }       
          ]
        }
      },
      
      repo: { // asking this in a separate object so I can use the first answer in filter
        options: {
          questions: [
            {
              config: 'prompt.repo', 
              type: 'input', 
              message: 'Enter your theme repo name (also used to build a clone URL):',
              validate: function (value) { 
                return (value) ? true : "uh... that's not a theme name";
              },
              filter: function (value) {
                var repoUrl = 'https://github.com/' 
                repoUrl += grunt.config('prompt.gitname');
                repoUrl += '/';
                repoUrl += value;
                repoUrl += '.git';
                grunt.log.ok('Using ' + repoUrl);
                // set the url value as config for clone
                grunt.config.set('gitclone.theme.options.repository', repoUrl);
                // grunt.config.set('gitclone.theme.options.directory', '../' + value);
                return value;
              }
            }
          ]
        }
      }, // prompt repo
      preprocessor: {
        options: {
          questions: [
            {
              config: 'prompt.preprocessor',
              type: 'list',
              message: 'Pick a CSS pre-processor (Sass or LESS):',
              choices: [
                {
                  value: 'sass',
                  name:  'Sass'
                },
                {
                  value: 'less',
                  name:  'LESS'
                }
              ]
            }
          ]
        } 
      }// preprocessor

    },  // /prompt <-- contains 'prom', which none of us attended

      gitclone:  {
        theme: {
          options: {
            directory: '../<%= prompt.repo %>'
          }
        }
      },
    
    copy: {
      payload: {
        files: [
          {expand: true, cwd: 'bones/', src: ['**'], dest: '../<%= prompt.repo %>/'}
        ]
      }
    }, 

    replace: {
      meta: {
        options: {
          patterns: [
            { match: 'GIT_USERNAME_TOKEN', replacement: '<%= prompt.gitname %>'},
            { match: 'THEME_NAME_TOKEN', replacement: '<%= prompt.repo %>'},
            { match: 'CSS_PREPROCESSOR_NAME', replacement: '<%= prompt.preprocessor %>'},
          ],
        },
        files: [
          {expand: true, cwd: 'res/', src: ['**'], dest: '../<%= prompt.repo %>/'}
        ]
      }

    }
   
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-prompt');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-replace');

  // grunt.task.registerTask('move', 'Move the exhumed template out of this folder.', function() {
  //   if (arguments.length === 0) {
  //     grunt.log.writeln(this.name + ", no args");
  //   } else {
  //     grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
  //   }
  // });

  // Default task.
  grunt.registerTask('default', ['prompt', 'gitclone', 'copy', 'replace']);

};

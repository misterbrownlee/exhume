/*global module:false*/
module.exports = function(grunt) {

  // WHAT HAPPEN:
  // prompt for git user name
  // prompt for 'your theme'

  // grunt-git clone http://github.com ../your_theme

  // copypasta ./bones -> ../your_theme
  // copypasta ./res/package.json ../your_theme
  // token replace ../yourtheme/package.json {GIT_USERNAME_TOKEN}
  // token replace ../yourtheme/package.json {THEME_NAME_TOKEN}
  // token replace ../yourtheme/package.json {THEME_AUTHOR_TOKEN}


  // Project configuration.
  grunt.initConfig({

    prompt:  { // Yes, this will nest four levels deep. Be afraid.
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
                // set the answer value as an additional config property
                grunt.config.set('gitclone.theme.options.repository', repoUrl);
                // grunt.config.set('prompt.repo', value);
                return value;
              }
            }
          ]
        }
      }
    },  // /prompt <-- contains 'prom', which none of us attended
    
    copy: {
      payload: {
        files: [
          {expand: true, cwd: 'bones/', src: ['**'], dest: '<%= prompt.repo %>/'}
        ]
      }
    }, 

    replace: {
      meta: {
        options: {
          patterns: [
            { match: 'GIT_USERNAME_TOKEN', replacement: '<%= prompt.gitname %>'},
            { match: 'THEME_NAME_TOKEN', replacement: '<%= prompt.repo %>'}
          ],
        },
        files: [
          {expand: true, cwd: 'res/', src: ['**'], dest: '<%= prompt.repo %>/'}
        ]
      }

    }
   
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-prompt');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-replace');

  // Default task.
  grunt.registerTask('default', ['prompt', 'gitclone', 'copy', 'replace']);

};

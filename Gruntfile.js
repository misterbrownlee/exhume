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
              config: 'setup.gitname', 
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
              config: 'gitclone.theme.options.repository', 
              type: 'input', 
              message: 'Enter your theme name (also used to build a clone URL):',
              validate: function (value) { 
                return (value) ? true : "uh... that's not a theme name";
              },
              filter: function (value) {
                var repoUrl = 'http://github.com/' 
                repoUrl += grunt.config('setup.gitname');
                repoUrl += '/';
                repoUrl += value;
                repoUrl += '.git';
                console.log('repoUrl', repoUrl);
                return repoUrl;
              }
            }
          ]
        }
      }
    }  // /prompt <-- contains 'prom', which none of us went to
    
   
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-prompt');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask('default', ['prompt', 'gitclone']);

};

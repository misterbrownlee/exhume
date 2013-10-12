/*global module:false*/
module.exports = function(grunt) {

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

    prompt:  {
      deets: {
        options: {
          questions: [
            {
              config: 'setup.gitname', 
              type: 'input', 
              message: 'Enter your github username (used to build a clone URL):',
              // default: 'your_git_username', 
              validate: function(value) { return (value) ? true : "no really, enter your user name"}
            },
            {
              config: 'setup.themename', 
              type: 'input', 
              message: 'Enter your theme name (also used to build a clone URL):',
              // default: 'your_git_username', 
              validate: function(value) { return (value) ? true : "uh... that's not a theme name"}
            }
          ]
        }
      }
    }
   
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-prompt');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask('default', ['prompt', '']);

};

EXHUME  
==========
TL;DR: A magical copypasta script for [Bones][bones_link] based Wordpress theme creation.  Create a repo for your theme, clone Exhume, run the script, and you'll be quickly developing your theme!

## WHAT

This is a Grunt.js script that will copy everything you need to start you own Wordpress theme using the [Bones][bones_link] starter theme as your base.

It will:  
- clone your new theme's empty repository
- copy in the Bones source
- create a README for your new theme
- install the dependencies you need to compile Bones
- create a Gruntfile you can use for working on Bones
- possibly impress your friends

Once Exhume is done, you would then go to the repo directory of your theme and follow the directions there to start working on your theme.

## SETUP
You will need a [new repo][create_link] in Github for your new theme.  You will also need `npm` and `grunt-cli` installed.  If you're going to use Sass as your CSS preprocessor, you also need [Ruby and Sass installed][grunt_sass_link].

### npm

On OSX, use [homebrew][brew_link] to install npm (which comes with node.js): `brew install node`  Or don't, and continue whatever tragic and painful tool management strategy you currently use :) On Windows, try the [Node.js docs][node_windows].

### grunt-cli

Once you have npm, just do this: `npm install -g grunt-cli`

## HOW
- fork/clone Exhume with the clone URL `git clone git@github.com:tehfoo/exhume.git`
- [create][create_link] a new repo 'my_nifty_theme' in github
- derp: 'my_nifty_theme' is the name of the theme you are making 
- do this: `cd exhume`
- then this: `npm install`
- then this: `grunt`
- first, Exhume will ask you for your git username (no worries, it's just building a clone url)
- next, Exhume will ask you for the name of your new theme's repository (again, for the clone url)
- finally, Exhume will ask you pick a css preprocessor (Sass or LESS)
- magic!
- now you can `cd ../my_nifty_theme` and start working on your new Bones based Wordpress theme
- read the INSTRUCTIONS for help with your project's Grunt tasks that will compile your theme.
- repeat as needed for new themes
- profit

[bones_link]: https://github.com/eddiemachado/bones
[create_link]: https://github.com/new
[node_windows]: https://npmjs.org/doc/README.html#Windows-Computers
[brew_link]: http://brew.sh
[grunt_sass_link]: https://github.com/gruntjs/grunt-contrib-sass#sass-task
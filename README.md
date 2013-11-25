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

Once exhume is done, you would then go to the repo directory of your theme and follow the directions there to get working.

## SETUP
You will need a new repo in github for your new theme.  You will also need `npm` and `grunt-cli` installed.

## HOW
- fork/clone exhume with the clone URL --> over there
- make a new repo 'my_nifty_theme' in github with no `README` and no `.gitignore`
- derp: 'my_nifty_theme' is the name of the theme you are making 
- do this: `cd exhume`
- then this: `npm install`
- then this: `grunt`
- exhume will ask you for your git username (no worries, it's just building a clone url)
- next, exhume will ask you for the name of your new theme's repository (again, for the clone url)
- next, magic!
- now you can `cd ../my_nifty_theme` and check out your new Bones based Wordpress theme
- read the INSTRUCTIONS for help with your project's Grunt tasks that will compile your theme.
- repeat as needed for new themes
- profit

[bones_link]: https://github.com/eddiemachado/bones

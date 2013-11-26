# INSTRUCTIONS

## How to build @@THEME_NAME_TOKEN

### Setup
- you will need `npm` and `grunt-cli`, which you already have, because you used exhume to get this
- if you picked Sass as your CSS preprocessor, you will need [Ruby and Sass installed][grunt_sass_link]
- you have to `cd` to the theme's root directory (where this file is)
- run `npm install` to get grunt all ready
- run `grunt deploy` to build the CSS and copy everything over to `/output`
- run `grunt watch` to make dev magic happen
- modify things in `library/scss/*` or `library/less/*` (depending on your preprocessor)
- grunt will build CSS for you and copy to `/output`
- OPTIONAL: modify the value of `dirs.output` in the Gruntfile to send the compiled theme somewhere else

### Tasks
- `grunt deploy`: compiles css and copies the whole theme to `dirs.output`
- `grunt compile`: manually compile, minify, and copy css output only
- `grunt compile-debug`: like compile, but skips css minification, so the theme will use the full css.
- `grunt watch`: triggers a `compile-debug` build if you modify `library/scss/*` or `library/less/*` files

### CSS Output
By default this the build creates minified CSS output (in `output/css/style.css`).  You can skip minification by using the `compile-debug` task.  Note that `watch` assumes you are developing your theme and thus want to `compile-debug` on changes .

Build artifacts are created in `output/`.  If you are running a local Wordpress instance, you can modify the Gruntfile and change the `dirs.output` path so artifacts are copied directly to Wordpress.

### More Help
- get some [help][tutorial_link] on modding bones

TODO: add a link to running local Wordpress
TODO: override `dirs.output` with a command line option

[grunt_sass_link]: https://github.com/gruntjs/grunt-contrib-sass#sass-task
[tutorial_link]: http://wp.tutsplus.com/tutorials/theme-development/making-a-theme-with-bones-getting-started/
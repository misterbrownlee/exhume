# INSTRUCTIONS

## How to build @@THEME_NAME_TOKEN

### Setup
- you will need `npm` and `grunt-cli`, which you already have, because you used exhume to get this
- you have to `cd` to the theme's root directory (where this file is)
- run `npm install` to get grunt all ready
- run `grunt deploy` to build the CSS and copy everything over to `/output`
- run `grunt watch` to make dev magic happen
- modify things in `library\less\*`
- grunt will build CSS for you and copy to `/output`
- OPTIONAL: modify the value of `dirs.output` in the Gruntfile

### Tasks
- `grunt deploy`: compiles css and copies the whole theme to `dirs.output`
- `grunt compile`: manually compile, minify, and copy css output only
- `grunt compile-debug`: like compile, but skips css minification, so the theme will use the full css.
- `grunt watch`: triggers a `compile-debug` build if you modify the `library\less` files

### CSS Output
By default this the build creates both full and minified css, but the theme will consume `style.css` which is the minified version.  You can skip minification by using the `compile-debug` task.  Note that `watch` assumes you are developing your theme and thus want the `compile-debug` css.

The build artifacts are created in `output/`.  If you are running a local Wordpress instance, you can modify the Gruntfile and change the `dirs.output` path so artifacts are copied directly to Wordpress.

### More Help
- get some [help][tutorial_link] on modding bones

TODO: add a link to running local Wordpress
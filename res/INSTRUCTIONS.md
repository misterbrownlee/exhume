# INSTRUCTIONS

## How to build @@THEME_NAME_TOKEN

### Setup
- you will need `npm` and `grunt-cli`, which you already have, because you used exhume to get this
- you have to `cd` to the theme's root directory (where this file is)
- run `npm install` to get grunt all ready
- run `grunt watch` to make dev magic happen
- modify things in `library\less\*`
- grunt will build CSS for you
- changes are output to `library\css`

### Tasks
- `grunt watch`: triggers a build if you modify the `library\less` files
- `grunt less`: manually build the less files (if you aren't using watch)
- `grunt copy`: will copy your theme to a local path

Note: by default the theme will copy to `./output`.  If you are running a local Wordpress instance, you can symlink the theme folder here using this command: 

`ln -s path/to/local/wordpress/wp-content/themes/@@THEME_NAME_TOKEN output`

### More Help
- get some [help][tutorial_link] on modding bones
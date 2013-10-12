bones_base
==========

Base repo for quickly starting on modding a Bones Wordpress template

## HOW
- fork/clone this
- make a new repo 'another_theme' in github with no `README` and no `.gitignore`
  - derp: 'another_theme' is the name of the theme you are making 
- clone your bones_base fork `git clone git@github.com:YOURNAME/another_bones.git another_theme`
- cd into that
- now `mkdir ../another_theme`
- make a copy of that code into there `git archive master | tar -x -C ../another_theme`
- cd over there `cd ../another_theme`
- git init that bad boy `git init`
- make your new theme repo the origin remote, e.g. `git remote add origin git@github.com:YOURNAME/another_theme.git`
  - derp: obviously replace 'YOURNAME' and the 'another_theme' parts to whatever applies to you
- then push origin master so all the bones things go into your theme's repo
- run `npm install` to get grunt all ready
- run grunt watch to make dev magic happen
- modify things in `library\less\*`
- grunt will build CSS for you
- repeat as needed for new themes
- profit


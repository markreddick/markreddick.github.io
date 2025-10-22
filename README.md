# Purple Ghost Sofware Website

## Overview

Currently using 11ty static site generator(https://www.11ty.dev/) to create the static files for the website.

When 11ty processes the site template files, it will go through any files of types specified as template files
(currently .html and .njk) and builds out static files using those templates to the ouput directory (docs).

There is an eleventy.config.js file the specified some configuration options. Mostly just specifying some
directories to be copied to the output directory (bin, img, js, etc) - these directories will be copied over
without any processing being done on them.

## Run 11ty to build out static files (to docs)

``
$ npx @11ty/eleventy
``

## Serving locally

For development, you can run 11ty in "server" mode to act as a mini server so you can open the site
in your browser on localhost.

``
$ npx @11ty/eleventy --serve
``

## GitHub Pages

In order to get GitHub to use the files in the \_site subdirectory as the webroot, we have to put
those files on a separate branch (gh-pages)

https://gist.github.com/ErickPetru/b1b3138ab0fc6c82cd19ea3a1a944ba6

The steps I took:

1. checkout the main/master branch
``
    $ git checkout master
``

2. create an orphan branch so it doesn't effect the master branch
```
    $ git checkout --orphan gh-pages
    $ git reset --hard
    $ git commit --allow-empty -m 'init gh-page branch'
    $ git checkout master
```

3. mount the branch as a subdirectory user git worktree
``
    $ git worktree add \_site gh-pages
``

4. be sure \_site/ is in .gitignore 

So, now, when we want to deploye changes:

1. update files on master branch

2. process and create static HTML files in \_site
``
    $ npx @11ty/eleventy
``

3. deploy
```
    $ cd \_site
    $ git add --all
    $ git commit -m 'deploy on gh-pages updated'
    $ git push origin gh-pages
```




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



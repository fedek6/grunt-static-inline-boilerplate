![logo](https://realhe.ro/img/logo.svg "Realhe.ro")

# Grunt static inline boilerplate

A template for creating the simplest one file websites like 404s and such.

It packs everything in one HTML file and minifies output. 

__Important!__ Images are converted to inline base64 markup.

## Usage

```
git clone grunt-static-inline-boilerplate
cd rh-fast-landing
npm install
```

You can use it in two modes:

1. Preview - simply run grunt and go to http://localhost:9001 in your browser (watch already configured);
2. Build - run grunt with dist command to put everything in a build directory.

## What's already supported & configured?

* jit-grunt
* grunt-processhtml
* grunt-contrib-watch
* grunt-contrib-sass
* grunt-contrib-htmlmin
* grunt-contrib-connect
* grunt-assets-inline

## Todo

* Support for JS files.

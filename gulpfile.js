/***********************************************************************
 * Dependencies
 ***********************************************************************/

const config = require('./config.js')
const {
  src,
  dest,
  series,
  parallel
} = require('gulp');
const clean = require('gulp-clean');
const postcss = require('gulp-postcss');
const replace = require('gulp-async-replace');
const rename = require('gulp-rename');
const named = require('vinyl-named');
const webpack = require('webpack-stream');
const composer = require('gulp-composer');
const zip = require('gulp-zip');

/***********************************************************************
 * Functions
 ***********************************************************************/

const lintCSS = () => (
  require('stylelint').lint({
    files: config.glob.css.all,
    formatter: "verbose",
    fix: true,
  })
  .then(function ({
    output,
    errored
  }) {
    console.log(output);
    if (errored) process.exit(2);
  })
  .catch(function (err) {
    console.error(err.stack);
  })
);

const cleanDist = () => (
  src(config.dest.dist, {
    read: false,
    allowEmpty: true
  })
  .pipe(clean())
);

const buildCSS = () => (
  src(config.glob.css.entry)
  .pipe(postcss())
  .pipe(rename({
    extname: '.css'
  }))
  .pipe(dest(config.dest.styles))
);

const buildJS = () => (
  src(config.glob.js.entry)
  .pipe(named())
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(dest(config.dest.scripts))
);

const copyStatic = () => (
  src(config.glob.static)
  .pipe(dest(config.dest.plugin))
);

const copyReadme = () => (
  src(['./plugin.md'])
  .pipe(rename({
    basename: 'readme'
  }))
  .pipe(dest(config.dest.plugin))
);

const compose = () => (
  composer('dumpautoload', {
    optimize: true
  })
);

const zipPlugin = () => (
  src(config.glob.zip)
  .pipe(zip(config.zipname))
  .pipe(dest(config.dest.dist))
);

/***********************************************************************
 * Exports
 ***********************************************************************/

module.exports = {
  lint: series(lintCSS),
  build: series(compose, cleanDist, copyStatic, copyReadme, buildJS, buildCSS),
  release: series(compose, cleanDist, copyStatic, copyReadme, buildJS, buildCSS, zipPlugin),
}

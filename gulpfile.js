/***********************************************************************
 * Dependencies
 ***********************************************************************/

const package = require('./package.json');
const config = require('./config.js')
const time = Date.now();
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
const stylelint = require('stylelint');
const named = require('vinyl-named');
const webpack = require('webpack-stream');
const zip = require('gulp-zip');

/***********************************************************************
 * Functions
 ***********************************************************************/

const lintCSS = (fix) => (
  stylelint
  .lint({
    files: config.globs.css.all,
    formatter: "verbose",
    fix: fix,
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
  src('./dist', {
    read: false,
    allowEmpty: true
  })
  .pipe(clean())
);

const buildCSS = () => (
  src(config.globs.css.entry)
  .pipe(postcss())
  .pipe(rename({
    extname: '.css'
  }))
  .pipe(dest(`./dist/${package.name}/styles`))
);

const buildJS = () => (
  src(config.globs.js.entry)
  .pipe(named())
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(dest(`./dist/${package.name}/scripts`))
);

const copyStatic = () => (
  src(['./src/static/**'])
  .pipe(dest(`./dist/${package.name}`))
);

const zipBeta = () => (
  src(`./dist/${package.name}/**`)
  .pipe(zip(`${package.name}-${package.version}-beta-${time}.zip`))
  .pipe(dest('./dist'))
);

const zipFinal = () => (
  src(`./dist/${package.name}/**`)
  .pipe(zip(`${package.name}-${package.version}.zip`))
  .pipe(dest('./dist'))
);

/***********************************************************************
 * Exports
 ***********************************************************************/
//exports.build = series(cleanDist, parallel(buildCSS, copyStatic));

module.exports = {
  build: series(cleanDist, parallel(buildCSS, buildJS, copyStatic)),
  test: lintCSS,
}

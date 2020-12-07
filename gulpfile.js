/***********************************************************************
 * Gulp Dependencies
 ***********************************************************************/
const {
  src,
  dest,
  watch,
  series,
  parallel
} = require('gulp');
const merge = require('merge-stream');
const clean = require('gulp-clean');
const postcss = require('gulp-postcss');
const replace = require('gulp-async-replace');
const rename = require('gulp-rename');
const named = require('vinyl-named');
const webpack = require('webpack-stream');
const composer = require('gulp-composer');
const zip = require('gulp-zip');
const browser = require('browser-sync');

/***********************************************************************
 * Config
 ***********************************************************************/
const package = require('./package.json');
const timestamp = Math.floor(Date.now() / 1000);

const zipname = () => {
  const prefix = `${package.name}-${package.version}`;
  release = package.release.toUpperCase();
  if ('STABLE' === release) {
    return `${prefix}-${release}.zip`;
  } else {
    return `${prefix}-${release}-${timestamp}.zip`;
  }
}
// Glob definitions.
const globs = {
  static: {
    all: ['./**/*', '!./{node_modules,scripts,styles}/**', '!./*.*', './{changelog.md,LICENSE,*.php}'],
  },
  css: {
    all: './styles/**/*.+(css|pcss)',
    entry: './styles/index/**/*.pcss',
  },
  js: {
    all: './scripts/**/*.js',
    entry: './scripts/index/**/*.js',
  },
  zip: `./dist/**`,
}
// Project directory plugin build destinations.
const project = {
  root: `./dist/${package.name}`,
  scripts: `./dist/${package.name}/scripts`,
  styles: `./dist/${package.name}/styles`,
}
// Local dev site plugin build destinations.
const local = {
  root: `${package.localDevDIR}${package.name}`,
  scripts: `${package.localDevDIR}${package.name}/scripts`,
  styles: `${package.localDevDIR}${package.name}/styles`,
}
// Store the actual build location.
let buildDir = (function () {
  return (package.buildToLocal ? local : project)
})();

/***********************************************************************
 * Gulp Functions
 ***********************************************************************/
async function lintCSS() {
  try {
    const {
      output,
      errored
    } = await require('stylelint').lint({
      files: globs.css.all,
      formatter: "verbose",
      fix: true,
    });
    console.log(output);
    if (errored)
      process.exit(2);
  } catch (err) {
    console.error(err.stack);
  }
}

function forceProjectDir(cb) {
  buildDir = project;
  cb();
}

function cleanDist() {
  return src(buildDir.root, {
      read: false,
      allowEmpty: true
    })
    .pipe(clean({
      force: true
    }))
}

function dumpAutoload() {
  return composer('dumpautoload', {
    optimize: true
  })
}

function copyStatic() {
  return merge(
      src(globs.static.all),
      src(['./plugin.md'])
      .pipe(rename({
        basename: 'readme'
      }))
    )
    .pipe(dest(buildDir.root))
}

function buildJS() {
  return src(globs.js.entry)
    .pipe(named())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(dest(buildDir.scripts))
}

function buildCSS() {
  return src(globs.css.entry)
    .pipe(postcss())
    .pipe(rename({
      extname: '.css'
    }))
    .pipe(dest(buildDir.styles))
}

function zipPlugin() {
  return src(globs.zip)
    .pipe(zip(zipname()))
    .pipe(dest('./dist'))
}

function watchAll() {
  watch(globs.static.all, copyStatic);
  watch(globs.js.all, buildJS);
  watch(globs.css.all, buildCSS);
  console.log('watching all project files...');
}

/***********************************************************************
 * Gulp Exports
 ***********************************************************************/
module.exports = {
  lint: lintCSS,
  dev: watchAll,
  build: series(cleanDist, dumpAutoload, copyStatic, buildJS, buildCSS),
  release: series(lintCSS, forceProjectDir, cleanDist, dumpAutoload, copyStatic, buildJS, buildCSS, zipPlugin),
}

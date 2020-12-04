const package = require('./package.json');
const time = Date.now();
const dest = '.dist';

module.exports = {
  glob: {
    static: ['./**/*', '!./{node_modules,scripts,styles}/**', '!./*.*', './{changelog.md,*.php}'],
    css: {
      all: './styles/**/*.+(css|pcss)',
      entry: './styles/index/**/*.pcss',
    },
    js: {
      all: './scripts/**/*.js',
      entry: './scripts/index/**/*.js',
    },
    zip: `./dist/${package.name}/**`,
  },
  dest: {
    dist: './dist',
    plugin: `./dist/${package.name}`,
    scripts: `./dist/${package.name}/scripts`,
    styles: `./dist/${package.name}/styles`,
  },
  file: {
    zipBeta: `${package.name}-${package.version}BETA-${time}.zip`,
    zipRC: `${package.name}-${package.version}RC-${time}.zip`,
    zipFinal: `${package.name}-${package.version}.zip`,
  },
}

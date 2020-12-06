const package = require('./package.json');
const time = Math.floor(Date.now() / 1000);
const dest = '.dist';
const zipName = (release) => {
  const prefix = `${package.name}-${package.version}`;
  switch (release) {
    case 'alpha':
      return `${prefix}-ALPHA-${time}.zip`;
      break;
    case 'beta':
      return `${prefix}-BETA-${time}.zip`;
      break;
    case 'rc':
      return `${prefix}-RC-${time}.zip`;
      break;
    case 'stable':
      return `${prefix}-STABLE.zip`;
      break;
    default:
      return 'plugin.zip';
  }
}

module.exports = {
  glob: {
    static: ['./**/*', '!./{node_modules,scripts,styles}/**', '!./*.*', './{changelog.md,LICENSE,*.php}'],
    css: {
      all: './styles/**/*.+(css|pcss)',
      entry: './styles/index/**/*.pcss',
    },
    js: {
      all: './scripts/**/*.js',
      entry: './scripts/index/**/*.js',
    },
    zip: `./dist/**`,
  },
  dest: {
    dist: './dist',
    plugin: `./dist/${package.name}`,
    scripts: `./dist/${package.name}/scripts`,
    styles: `./dist/${package.name}/styles`,
  },
  zipname: zipName(package.release),
}
const now = Date.now();
const short = Math.floor(Date.now() / 1000);
console.log(zipName('alpha'));


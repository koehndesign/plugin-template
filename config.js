const package = require('./package.json');
const time = Date.now();
const dest = '.dist';
const zip = (release) => {
  switch (release) {
    case 'alpha':
      return `${package.name}-${package.version}-ALPHA-${time}.zip`;
      break;
    case 'beta':
      return `${package.name}-${package.version}-BETA-${time}.zip`;
      break;
    case 'rc':
      return `${package.name}-${package.version}-RC-${time}.zip`;
      break;
    case 'stable':
      return `${package.name}-${package.version}-STABLE.zip`;
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
    zip: `./dist/${package.name}/**`,
  },
  dest: {
    dist: './dist',
    plugin: `./dist/${package.name}`,
    scripts: `./dist/${package.name}/scripts`,
    styles: `./dist/${package.name}/styles`,
  },
  zipname: zip(package.release),
}

module.exports = {
  globs: {
    css: {
      all: './src/compile/styles/**/*.+(css|pcss)',
      entry: './src/compile/styles/index/**/*.pcss',
    },
    js: {
      all: './src/compile/scripts/**/*.js',
      entry: './src/compile/scripts/index/**/*.js',
    },
  },
}

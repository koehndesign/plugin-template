const { NONAME } = require('dns');
const path = require('path');
const DEV = process.env.NODE_ENV === 'development';

module.exports = {
  mode: DEV ? 'development' : 'production',
  devtool: NONAME,
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
          },
				}
			},
		]
	},
};

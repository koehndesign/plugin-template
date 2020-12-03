const path = require('path');

module.exports = {
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

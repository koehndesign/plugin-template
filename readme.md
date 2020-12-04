## Description
A highly opinionated WordPress plugin template. Svelte, PostCSS, Tailwind, and more. Powered by Gulp/Webpack/Composer.

## Prerequisites
* vscode
	* use workspace file in project root (rename first if desired)
	* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
	* [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
	* [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
	* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* nodejs

## Setup
* __required__ info in package.json: __name__, __version__, __release__, __description__
* npm run setup

## What Goes Where?
* all JS files in './scripts/index' will be used as entry points for Webpack
* all PCSS files in './styles/index' will be used as entry points for PostCSS
* all PHP files in './src' are autoloaded via composer(PSR-4) as defined in composer.json

## Browsersync
TODO: [example](https://github.com/gulpjs/gulp/blob/master/docs/recipes/minimal-browsersync-setup-with-gulp4.md)
* set __localDevDir__ and __localDevURL__ in package.json to your local WordPress dev site
* npm run watch

## Release
* set __release__ lifecycle status in package.json
* npm run release

## Lint
* CSS working
TODO: [phplint](https://www.npmjs.com/package/phplint)
TODO: [eslint](https://eslint.org/docs/developer-guide/nodejs-api)

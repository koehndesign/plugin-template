## Description
A highly opinionated WordPress plugin template. Svelte, PostCSS, Tailwind. Built with Gulp/Webpack/Composer.
Very much a work in progress, [discussion](https://github.com/koehndesign/plugin-template/discussions)/[issues](https://github.com/koehndesign/plugin-template/issues)/[pull requests](https://github.com/koehndesign/plugin-template/pulls) are welcome!

## Prerequisites
* PHP 7.4.0+
* nodejs
* composer
* vscode
* vscode extensions
	* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
	* [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
	* [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
	* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Setup
* use vscode workspace file in project root (rename first if desired)
* __required__ info in package.json: __name__, __version__, __release__, __description__
* npm run setup

# What Goes Where?
* all JS files in './scripts/index' will be used as entry points for Webpack
* all PCSS files in './styles/index' will be used as entry points for PostCSS
* all PHP files in './app' are autoloaded via composer(PSR-4) as defined in composer.json
* Svelte (.svelte) files will be compiled and bundled with webpack

# Develop (watch)
* npm run dev

# Build
* npm run build

# Release
* remember to set __release__ lifecycle status in package.json
* npm run release

# Lint (wip)
* CSS lint/fix working 
TODO: [phplint](https://www.npmjs.com/package/phplint)
TODO: [eslint](https://eslint.org/docs/developer-guide/nodejs-api)

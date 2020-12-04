## Description
A highly opinionated WordPress plugin template. Svelte, PostCSS, Tailwind, and more. Powered by Gulp/Webpack/Composer.

## Prerequisites
* vscode
	* use the workspace file in project root
	* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
	* [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
* nodejs

## Setup
* __required__ info in './package.json': __name__, __version__, __description__
* optional info in './package.json': localDevDIR, localDevURL, license, etc...
* npm run setup

## What Goes Where?
* All JS files in './scripts/index' will be used as entry points for Webpack.
* All PCSS files in './styles/index' will be used as entry points for PostCSS.
* All PHP files in './src' are autoloaded via composer(PSR-4) as defined in './composer.json'.

<?php

namespace App\ServiceProviders;

class AssetsServiceProvider extends AbstractServiceProvider
{
	use \App\Traits\AssetsTrait;

	public function run()
	{
		add_action('wp_enqueue_scripts', [$this, 'publicAssets']);
		add_action('admin_enqueue_scripts', [$this, 'adminAssets']);
		add_action('login_enqueue_scripts', [$this, 'loginAssets']);
		add_action('enqueue_block_editor_assets', [$this, 'editorAssets']);
	}

	public function publicAssets()
	{
		$this->enqueueStyle('app_public_css', 'public.css');
		$this->enqueueScript('app_public_js', 'public.js');
		$this->registerScript('app_svelte_js', 'svelte.js');
	}

	public function adminAssets()
	{
	}

	public function loginAssets()
	{
	}

	public function editorAssets()
	{
	}
}

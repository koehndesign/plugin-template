<?php

namespace App;

class App
{
	protected string $rootDir;
	protected string $rootUrl;
	protected string $mainFile;
	protected string $version;

	public function setup($file)
	{
		$this->rootDir = plugin_dir_path($file);
		$this->rootUrl = plugin_dir_url($file);
		$this->mainFile = $file;
		$this->version = '';

		register_activation_hook($this->mainFile, [$this, 'activate']);
		register_deactivation_hook($this->mainFile, [$this, 'deactivate']);

		add_action('wp_enqueue_scripts', function () {
			wp_enqueue_style('plugin-template-css', $this->rootUrl . 'styles/public.css');
		});
	}
	public function activate()
	{
		// Add activation code here.
	}
	public function deactivate()
	{
		// Add deactivation code here.
	}
}

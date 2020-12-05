<?php

namespace App;

use Auryn\Injector;

class App
{
	private Injector $injector;
	private array $config;

	public function __construct($file)
	{
		$this->injector = new Injector;
		$this->mainFile = $file;
		$this->config = [
			'file' => $file,
			'url' => plugin_dir_url($file),
			'dir' => plugin_dir_path($file),
			'ver' => '0.0.0',
		];
		$this->injector->defineParam('config', $this->config);
		$this->registerServiceProviders();
	}

	private array $providers = [
		ServiceProviders\AdminServiceProvider::class,
		ServiceProviders\AssetsServiceProvider::class,
		ServiceProviders\ShortcodesServiceProvider::class,
	];

	private function registerServiceProviders()
	{
		foreach ($this->providers as $provider) {
			$this->injector->make($provider);
		}
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

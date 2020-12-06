<?php

namespace App;

use Auryn\Injector;

class App
{
	private Injector $injector;
	private Config $config;

	public function __construct($file)
	{
		$this->injector = new Injector;
		$this->config = new Config($file,'{version}');
		$this->injector->share($this->config);
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

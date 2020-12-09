<?php

namespace App;

class App
{
	private string $file;
	private Config $config;
	private array $container = [];
	private array $providers = [
		ServiceProviders\AdminServiceProvider::class,
		ServiceProviders\AssetsServiceProvider::class,
		ServiceProviders\ShortcodesServiceProvider::class,
	];

	public function __construct(string $file)
	{
		$whoops = new \Whoops\Run;
		$whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler);
		$whoops->register();
		$this->file = $file;
		add_action('init', [$this, 'appInit'], 0);
	}

	public function appInit()
	{
		$this->config = new Config($this->file);
		do_action('qm/debug', $this->config);
		$this->registerProviders();
		do_action('qm/debug', $this->container);
	}

	private function registerProviders()
	{
		foreach ($this->providers as $provider) {
			$instance = new $provider;
			$instance->setup($this->config);
			$instance->run();
			$this->container[$provider] = $instance;
		}
	}
}

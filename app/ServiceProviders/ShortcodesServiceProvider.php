<?php

namespace App\ServiceProviders;

class ShortcodesServiceProvider {
	public array $config;
	public function __construct($config)
	{
		$this->config = $config;
		add_action('plugins_loaded', function () {
			do_action( 'qm/debug', $this->config );
		});
	}
}

<?php

namespace App\ServiceProviders;

use App\Config;

class ShortcodesServiceProvider
{
	public Config $config;
	public function __construct(Config $config)
	{
		$this->config = $config;
		add_action('plugins_loaded', function () {
			do_action('qm/debug', $this->config);
			do_action('qm/debug', 'object: ' . $this->config->url);
		});
	}
}

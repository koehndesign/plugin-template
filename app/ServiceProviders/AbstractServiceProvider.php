<?php

namespace App\ServiceProviders;

use App\Config;

abstract class AbstractServiceProvider
{
	public Config $config;

	public function setup(Config $config)
	{
		$this->config = $config;
	}
	abstract public function run();
}

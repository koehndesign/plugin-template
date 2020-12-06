<?php

namespace App;

class Config
{
	protected string $file;
	protected string $dir;
	protected string $url;
	protected string $version;

	public function __construct(string $file, string $version)
	{
		$this->file = $file;
		$this->dir = plugin_dir_path($file);
		$this->url = plugin_dir_url($file);
		$this->version = $version;
	}

	public function __get($field)
	{
		if (!property_exists($this, $field)) {
			throw new \Exception('Attempted to access invalid config property: ' . $field);
		}
		return $this->{'$field'};
	}
}

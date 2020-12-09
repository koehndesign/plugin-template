<?php

namespace App;

use WP_User;

class Config
{
	protected string $file;
	protected string $name;
	protected string $dir;
	protected string $url;
	protected string $version;
	protected string $restURL;
	protected string $restNonce;
	protected WP_User $user;

	public function __construct(string $file)
	{
		$this->file = $file;
		$this->init();
	}

	public function init()
	{
		$this->name = '{{name}}';
		$this->dir = plugin_dir_path($this->file);
		$this->url = plugin_dir_url($this->file);
		$this->version = '{{version}}';
		$this->restURL = esc_url_raw(get_rest_url());
		$this->restNonce = wp_create_nonce('wp_rest');
		$this->user = wp_get_current_user();
	}

	public function __get($field)
	{
		if (!property_exists($this, $field)) {
			throw new \Exception('Attempted to access invalid config property: ' . $field);
		}
		return $this->{$field};
	}
}

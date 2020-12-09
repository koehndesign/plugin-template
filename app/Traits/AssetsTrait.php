<?php

namespace App\Traits;

trait AssetsTrait
{
	public function registerStyle(
		string $handle,
		string $src,
		array $deps = [],
		string $ver = '',
		string $media = 'all'
	) {
		$src = $this->config->url . 'styles/' . $src;
		$ver = ($ver) ?: $this->config->version;
		wp_register_style($handle, $src, $deps, $ver, $media);
	}

	public function registerScript(
		string $handle,
		string $src,
		array $deps = [],
		string $ver = '',
		bool $in_footer = true
	) {
		$src = $this->config->url . 'scripts/' . $src;
		$ver = ($ver) ?: $this->config->version;
		wp_register_script($handle, $src, $deps, $ver, $in_footer);
	}

	public function enqueueStyle(
		string $handle,
		string $src,
		array $deps = [],
		string $ver = '',
		string $media = 'all'
	) {
		$src = $this->config->url . 'styles/' . $src;
		$ver = ($ver) ?: $this->config->version;
		wp_enqueue_style($handle, $src, $deps, $ver, $media);
	}

	public function enqueueScript(
		string $handle,
		string $src,
		array $deps = [],
		string $ver = '',
		bool $in_footer = true
	) {
		$src = $this->config->url . 'scripts/' . $src;
		$ver = ($ver) ?: $this->config->version;
		wp_enqueue_script($handle, $src, $deps, $ver, $in_footer);
	}
}

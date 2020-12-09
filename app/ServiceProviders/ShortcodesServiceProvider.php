<?php

namespace App\ServiceProviders;

class ShortcodesServiceProvider extends AbstractServiceProvider
{
	public function run()
	{
		add_action('init', [$this, 'shortcodesInit']);
	}

	public function shortcodesInit()
	{
		// Pre-register needed scripts and styles in AssetsServiceProvider and enqueue in shortcode functions
		add_shortcode('footag', function ($atts) {
			$atts = shortcode_atts(array(
				'foo' => 'testing1',
				'bar' => 'testing2'
			), $atts, 'footag');
			wp_enqueue_script('app_svelte_js');
			wp_add_inline_script('app_svelte_js', 'wpData = ' . json_encode($this->config->wpData), 'before');
			return '<div id="svelte-app"></div>';
		});
	}
}

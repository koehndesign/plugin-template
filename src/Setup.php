<?php
namespace App;
class Setup {
	protected $rootDir;
	public static function activate() {
		// Nothing to see here yet.
	}
	public static function deactivate() {
		// Nothing to see here yet.
	}
	public static function hooks() {
		add_action('wp_enqueue_scripts', function () {
			wp_enqueue_style('plugin-template-css', ROOT_URL . 'styles/public.css');
		});
	}
}

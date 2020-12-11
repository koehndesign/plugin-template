<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              {_link_}
 * @since             1.0.0
 * @package           {_name_}
 *
 * @wordpress-plugin
 * Plugin Name:       {_name_}
 * Plugin URI:        {_link_}
 * Description:       {_description_}
 * Version:           {_version_}
 * Author:            {_author_}
 * Author URI:        {_author_uri_}
 * License:           {_license_}
 * License URI:       {_license_uri_}
 * Text Domain:       {_name_}
 * Domain Path:       /languages
 */

namespace App;

if (!defined('WPINC')) {
	die;
}

if (version_compare(PHP_VERSION, '7.4', '<')) {
	die(sprintf('Agency Base requires PHP 7.4 or higher, your current PHP version is: %s.', PHP_VERSION));
}

require plugin_dir_path(__FILE__) . 'vendor/autoload.php';

new App(__FILE__);


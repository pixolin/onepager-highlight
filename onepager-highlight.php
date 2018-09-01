<?php
/**
 * Plugin Name:     onepager-highlight
 * Plugin URI:      https://github.com/pixolin/onepager-highlight
 * Description:     Highlights only current nav menu item for activated section in Onepager
 * Author:          Bego Mario Garde
 * Author URI:      https://pixolin.de
 * Text Domain:     onepager-highlight
 * Domain Path:     /languages
 * Version:         0.1.0
 * License:         GPLv2 or later
 *
 * @package         Onepager_Highlight
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require plugin_dir_path( __FILE__ ) . 'inc/class-onepager.php';
$plugin = new Onepager();


<?php
/**
 * Class OnePager
 */
class Onepager {
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
	}
	public function enqueue_scripts() {
		wp_enqueue_script( 'onepager', plugins_url( 'public/js/onepager.js', dirname( __FILE__ ) ), array( 'jquery' ), false, false );
		wp_enqueue_style( 'onepagercss', plugins_url( 'public/css/onepager.css', dirname( __FILE__ ) ) );
	}
}

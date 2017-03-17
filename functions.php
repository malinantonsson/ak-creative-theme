<?php
//* Code goes here

//add parent styles
add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );

function enqueue_parent_styles() {
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}

function theme_js() {
    wp_enqueue_script( 'theme_js', get_stylesheet_directory_uri() . '/scripts/app.js', array('jquery'), '1.0', true );
}

add_action('wp_enqueue_scripts', 'theme_js');



?>
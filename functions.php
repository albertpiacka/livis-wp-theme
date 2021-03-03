<?php

add_theme_support( 'title-tag' );

add_action('wp_enqueue_scripts', 'add_theme_scripts');
function add_theme_scripts()
{
    wp_enqueue_style( 'style', get_template_directory_uri() . '/public/main.css', null, null, null);
    wp_enqueue_style( 'aos', get_template_directory_uri() . '/node_modules/aos/dist/aos.css', null, null, null);
    wp_enqueue_script( 'script', get_template_directory_uri() . '/public/main.js', null, null, true);
}

@ini_set( 'upload_max_size' , '200M' );
@ini_set( 'post_max_size', '200M');
@ini_set( 'max_execution_time', '300' );
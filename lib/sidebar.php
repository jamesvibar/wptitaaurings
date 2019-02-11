<?php

function wptitaaurings_widgets_init() {
  register_sidebar( array(
    'name' => __('Footer Widgets', 'wptitaaurings'),
    'id' => 'footer-1',
    'description' =>  __('Widgets in this area will be shown in all posts and pages', 'wptitaaurings'),
    'before_widget' => '<div id="%1$s" class="footer-links-container %2$s">',
    'after_widget' => '</div>',
    'before_title' => '<h3 class="footer_links__title">',
    'after_title' => '</h3>',
  ));
}

add_action('widgets_init', 'wptitaaurings_widgets_init');
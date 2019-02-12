<?php
/**
 * Register WP Sidebars
 */
register_sidebar( array(
  'name' => __('Footer Widgets', 'wptitaaurings'),
  'id' => 'footer1',
  'description' =>  __('Widgets in this area will be shown in all posts and pages', 'wptitaaurings'),
  'before_widget' => '<div id="%1$s" class="footer-links-container %2$s">',
  'after_widget' => '</div>',
  'before_title' => '<h3 class="footer_links__title">',
  'after_title' => '</h3>'
));
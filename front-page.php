<?php
/**
 * Home
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context = Timber::get_context();
// Get only one post (current page)

$post = new Timber\Post();
$context['post'] = $post;

$context['food'] = Timber::get_terms('food-menu');

$args = array(
  "post_type" => "post",
  "posts_per_page" => 4,
  "ignore_sticky_posts" => true
);
$context['posts'] = Timber::get_posts($args);

// Custom Fields
$context['section_1'] = $post->meta('section_1');
$context['section_2'] = $post->meta('section_2');
$context['section_3'] = $post->meta('section_3');
$context['header_image'] = $post->header_image;
$context['contact'] = $post->contact;
$context['headline'] = $post->headline;

// Blog Section
$context['blog_sub_headline'] = "Read our";
$context['blog_headline'] = "Latest Blogs";
Timber::render( 'home.twig', $context );
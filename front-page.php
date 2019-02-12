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
if ( isset($post->header_image) && strlen($post->header_image) ) {
  $post->header_image = new Timber\Image($post->header_image);
}

$context['post'] = $post;

$context['food'] = Timber::get_terms('food-menu');

// Custom Fields
$context['section_1'] = $post->meta('section_1');
$context['section_2'] = $post->meta('section_2');
$context['section_3'] = $post->meta('section_3');
$context['header_image'] = $post->header_image;
$context['contact'] = $post->contact;
$context['headline'] = $post->headline;
Timber::render( 'home.twig', $context );
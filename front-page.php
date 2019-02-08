<?php
/**
 * Home
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context = Timber::get_context();

$post = new Timber\Post();
if ( isset($post->header_image) && strlen($post->header_image) ) {
  $post->header_image = new Timber\Image($post->header_image);
}
$context['header_image'] = $post->header_image;
Timber::render( 'home.twig', $context );
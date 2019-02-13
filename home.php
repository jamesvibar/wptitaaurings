<?php
/**
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */
global $paged;
if (!isset($paged) || !$paged) {
  $paged = 1;
}

$context = Timber::get_context();

$post = new Timber\Post();

$context['header_image'] = $post->header_image;
$context['contact'] = $post->contact;
$context['headline'] = $post->title;

$args = array(
  'posts_per_page' => '9',
  'paged' => $paged,
  'ignore_sticky_posts' => true
);

$context['posts'] = new Timber\PostQuery($args);

$templates = array( 'blog.twig', 'index.twig' );
Timber::render( $templates, $context );
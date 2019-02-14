<?php
/**
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */
$context = Timber::get_context();

$post = new Timber\Post();
$context['header_image'] = $post->header_image;
$context['contact'] = $post->contact;
$context['headline'] = $post->title;  

$context['posts'] = new Timber\PostQuery();

$templates = array( 'blog.twig', 'index.twig' );
Timber::render( $templates, $context );
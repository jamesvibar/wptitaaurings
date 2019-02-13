<?php
/**
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.2
 */


$context = Timber::get_context();
$context['posts'] = new Timber\PostQuery();
// $context['headline'] = post_type_archive_title( '', false);
$context['headline'] = "Menu";

$templates = array( 'archive-food_product.twig', 'archive.twig', 'index.twig' );
Timber::render( $templates, $context );

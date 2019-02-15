<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$theme = new Timber\Theme();

$context['logo'] = $theme->link . "/static/images/logo-colored.png";
$context['bg'] = $theme->link . "/static/images/chicken-transparent.png";
Timber::render( '404.twig', $context );

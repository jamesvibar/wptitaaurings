<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;

$context['back_to_archive'] = get_post_type_archive_link($post->post_type);

if ($post->thumbnail) {
	$context['header_image'] = $post->thumbnail;
}

$args = array(
	'nopaging' => false,
	'posts_per_page' => 4,
	'order' => 'ASC',
	'orderby' => 'post_date',
	'date_query' => array(
		array(
			'column' => 'post_date',
			'after' => $post->date('c'),
		)
	)
);
$context['related_posts'] = new Timber\PostQuery($args);

if ( post_password_required( $post->ID ) ) {
	Timber::render( 'single-password.twig', $context );
} else {
	Timber::render( array( 'single-' . $post->ID . '.twig', 'single-' . $post->post_type . '.twig', 'single.twig' ), $context );
}

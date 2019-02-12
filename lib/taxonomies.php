<?php
/**
 * Register your custom taxonomies here.
 */

	$labels = array(
		'name'                       => _x( 'Food Menus', 'Taxonomy General Name', 'wptitaaurings' ),
		'singular_name'              => _x( 'Food Menu', 'Taxonomy Singular Name', 'wptitaaurings' ),
		'menu_name'                  => __( 'Food Menu', 'wptitaaurings' ),
		'all_items'                  => __( 'All Items', 'wptitaaurings' ),
		'parent_item'                => __( 'Parent Item', 'wptitaaurings' ),
		'parent_item_colon'          => __( 'Parent Item:', 'wptitaaurings' ),
		'new_item_name'              => __( 'New Item Name', 'wptitaaurings' ),
		'add_new_item'               => __( 'Add New Item', 'wptitaaurings' ),
		'edit_item'                  => __( 'Edit Item', 'wptitaaurings' ),
		'update_item'                => __( 'Update Item', 'wptitaaurings' ),
		'view_item'                  => __( 'View Item', 'wptitaaurings' ),
		'separate_items_with_commas' => __( 'Separate items with commas', 'wptitaaurings' ),
		'add_or_remove_items'        => __( 'Add or remove items', 'wptitaaurings' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'wptitaaurings' ),
		'popular_items'              => __( 'Popular Items', 'wptitaaurings' ),
		'search_items'               => __( 'Search Items', 'wptitaaurings' ),
		'not_found'                  => __( 'Not Found', 'wptitaaurings' ),
		'no_terms'                   => __( 'No items', 'wptitaaurings' ),
		'items_list'                 => __( 'Items list', 'wptitaaurings' ),
		'items_list_navigation'      => __( 'Items list navigation', 'wptitaaurings' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
	);
	register_taxonomy( 'food-menu', array( 'food_product' ), $args );
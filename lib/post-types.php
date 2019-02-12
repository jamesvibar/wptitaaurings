<?php
/**
 * Wordpress Custom Post Types
 */

$labels = array(
  'name'                  => _x( 'Products', 'Post Type General Name', 'wptitaaurings' ),
  'singular_name'         => _x( 'Product', 'Post Type Singular Name', 'wptitaaurings' ),
  'menu_name'             => __( 'Products', 'wptitaaurings' ),
  'name_admin_bar'        => __( 'Product', 'wptitaaurings' ),
  'archives'              => __( 'Product Archives', 'wptitaaurings' ),
  'attributes'            => __( 'Product Attributes', 'wptitaaurings' ),
  'parent_item_colon'     => __( 'Parent Item:', 'wptitaaurings' ),
  'all_items'             => __( 'All Items', 'wptitaaurings' ),
  'add_new_item'          => __( 'Add New Product', 'wptitaaurings' ),
  'add_new'               => __( 'Add New', 'wptitaaurings' ),
  'new_item'              => __( 'New Item', 'wptitaaurings' ),
  'edit_item'             => __( 'Edit Item', 'wptitaaurings' ),
  'update_item'           => __( 'Update Item', 'wptitaaurings' ),
  'view_item'             => __( 'View Item', 'wptitaaurings' ),
  'view_items'            => __( 'View Items', 'wptitaaurings' ),
  'search_items'          => __( 'Search Item', 'wptitaaurings' ),
  'not_found'             => __( 'Not found', 'wptitaaurings' ),
  'not_found_in_trash'    => __( 'Not found in Trash', 'wptitaaurings' ),
  'featured_image'        => __( 'Featured Image', 'wptitaaurings' ),
  'set_featured_image'    => __( 'Set featured image', 'wptitaaurings' ),
  'remove_featured_image' => __( 'Remove featured image', 'wptitaaurings' ),
  'use_featured_image'    => __( 'Use as featured image', 'wptitaaurings' ),
  'insert_into_item'      => __( 'Insert into item', 'wptitaaurings' ),
  'uploaded_to_this_item' => __( 'Uploaded to this item', 'wptitaaurings' ),
  'items_list'            => __( 'Items list', 'wptitaaurings' ),
  'items_list_navigation' => __( 'Items list navigation', 'wptitaaurings' ),
  'filter_items_list'     => __( 'Filter items list', 'wptitaaurings' ),
);
$args = array(
  'label'                 => __( 'Product', 'wptitaaurings' ),
  'description'           => __( 'Food products', 'wptitaaurings' ),
  'labels'                => $labels,
  'supports'              => array( 'title' ),
  'taxonomies'            => array( 'food-menu' ),
  'hierarchical'          => false,
  'public'                => true,
  'show_ui'               => true,
  'show_in_menu'          => true,
  'menu_position'         => 5,
  'show_in_admin_bar'     => true,
  'show_in_nav_menus'     => true,
  'can_export'            => true,
  'has_archive'           => true,
  'exclude_from_search'   => false,
  'publicly_queryable'    => true,
  'capability_type'       => 'page'
);
register_post_type( 'food_product', $args );
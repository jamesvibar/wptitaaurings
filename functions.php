<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
		echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
	});

	add_filter('template_include', function( $template ) {
		return get_stylesheet_directory() . '/static/no-timber.html';
	});

	return;
}

/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$dirname = array( 'templates', 'views' );

/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;


/**
 * We're going to configure our theme inside of a subclass of Timber\Site
 * You can move this to its own file and include here via php's include("MySite.php")
 */
class TitaAurings extends Timber\Site {
	/** Add timber support. */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );
		add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
		add_action( 'after_setup_theme', array( $this, 'register_menus' ) );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		add_action( 'widgets_init', array( $this, 'register_sidebars' ) );
		add_action( 'template_redirect', array($this, 'redirect_food_product_post' ));
		// add_action( 'pre_get_posts', array($this, 'my_home_query') );
		// add_action( 'init', array( $this, 'register_custom_customizer' ) );
		parent::__construct();
	}

	/** Theme related scripts and styles */
	public function register_scripts() {
		wp_enqueue_style('main-css', get_template_directory_uri() . '/dist/all.css', [], time());
		wp_enqueue_script('main-js', get_template_directory_uri() . '/dist/all.js', [], time(), true);
	}

	/** This is where you can register custom post types. */
	public function register_post_types() {
		require('lib/post-types.php');
	}
	/** This is where you can register custom taxonomies. */
	public function register_taxonomies() {
		require('lib/taxonomies.php');
	}

	public function register_sidebars() {
		require("lib/sidebar.php");
	}

	public function register_menus() {
		require("lib/menus.php");
	}

	public function register_custom_customizer() {
		require("lib/customizer.php");
	}

	public function redirect_food_product_post() {
		$queried_post_type = get_query_var('post_type');
		if ( is_single() && 'food_product' ==  $queried_post_type ) {
			wp_redirect( home_url(), 301 );
			exit;
		}
	}

	/** This is where you add some context
	 *
	 * @param string $context context['this'] Being the Twig's {{ this }}.
	 */
	public function add_to_context( $context ) {
		$context['menu'] = new Timber\Menu('primary_menu');
		$context['logo'] = get_template_directory_uri() . '/static/images/logo.png';
		$context['footer_logo'] = get_template_directory_uri() . '/static/images/logo-icon.png';

		// Footer Variables
		$context['dynamic_sidebar'] = Timber::get_widgets('footer1');
		$context['footer_bg'] = get_template_directory_uri() . '/static/images/footer-bg.jpg';

		// Allows you to access site variables like site name or description.
		$context['site'] = $this;
		return $context;
	}

	public function theme_supports() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5', array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		/*
		 * Enable support for Post Formats.
		 *
		 * See: https://codex.wordpress.org/Post_Formats
		 */
		// add_theme_support(
		// 	'post-formats', array(
		// 		'aside',
		// 		'image',
		// 		'video',
		// 		'quote',
		// 		'link',
		// 		'gallery',
		// 		'audio',
		// 	)
		// );
		
		/**
		 * Enable support for Custom Logos.
		 * 
		 * See: https://developer.wordpress.org/themes/functionality/custom-logo/
		 */
		// add_theme_support('custom-logo');

		add_theme_support('widgets');
		add_theme_support( 'menus' );
	}

	/** This Would return 'foo bar!'.
	 *
	 * @param string $text being 'foo', then returned 'foo bar!'.
	 */
	public function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	/** This is where you can add your own functions to twig.
	 *
	 * @param string $twig get extension.
	 */
	public function add_to_twig( $twig ) {
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter( new Twig_SimpleFilter( 'myfoo', array( $this, 'myfoo' ) ) );
		return $twig;
	}

	function my_home_query( $query ) {
		if(!is_admin() && $query->is_main_query()) {
			$query->set('posts_per_page', '1');
	}
	}

}

new TitaAurings();

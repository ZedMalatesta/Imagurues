<?php
/**
 * itservices functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package itservices
 */

if ( ! function_exists( 'itservices_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function itservices_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on itservices, use a find and replace
	 * to change 'itservices' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'itservices', get_template_directory() . '/languages' );

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

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary-menu' => esc_html__( 'Primary', 'itservices' ),
	) );

  // add data-scroll to menu
  function itservices_custom_nav_attributes ( $atts, $item, $args ) {
    $atts['data-scroll'] = 'true';
    return $atts;
    }
  add_filter( 'nav_menu_link_attributes', 'itservices_custom_nav_attributes', 10, 3 );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'itservices_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );
}
endif;
add_action( 'after_setup_theme', 'itservices_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function itservices_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'itservices_content_width', 1920 );
}
add_action( 'after_setup_theme', 'itservices_content_width', 0 );

/**
 * Enqueue scripts and styles.
 */
function itservices_scripts() {
	wp_enqueue_style( 'itservices-style', get_stylesheet_uri() );
	wp_enqueue_style( 'itservices-main-style', get_template_directory_uri(). '/assets/style/main.css?2017-07-6-2');
	wp_enqueue_style( 'itservices-animate', get_template_directory_uri(). '/assets/style/animate.min.css' );

  wp_enqueue_script( 'itservices-jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' );
	wp_enqueue_script( 'itservices-snap', get_template_directory_uri() . '/assets/js/snap.svg-min.js', array(), '20170517', true );
	wp_enqueue_script( 'itservices-vivus', get_template_directory_uri() . '/assets/js/vivus.min.js', array(), '20170517', true );
	wp_enqueue_script( 'itservices-smooth', get_template_directory_uri() . '/assets/js/smoothscroll.js', array(), '20170517', true );
	wp_enqueue_script( 'itservices-js', get_template_directory_uri() . '/assets/js/main.js', array(), '2017-06-23', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'itservices_scripts' );

// удалем нафиг не нужные emoji, которые идут с WP
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
// убираем версию wp
add_filter('the_generator', '__return_empty_string');

// загрузка svg медиа библиотеке
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

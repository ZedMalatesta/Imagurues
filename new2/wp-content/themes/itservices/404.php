<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package itservices
 */

get_header(); ?>

<section class="page404">
	<div class="prim-container">
		<a href="<?= get_site_url();?>">
			<img src="<?= get_template_directory_uri() ?>/assets/img/logo.svg" alt="DATATHON">
		</a>

		<div class="text">
			<h3>404</h3>
			<h4><?= 'Page not found'?></h4>
			<a href="<?= get_site_url(); ?>"><?= 'Back to home page'?></a>
		</div>

<!-- 		<div class="ball-container">
			<div class="ball"></div>
			<div class="shadow"></div>
		</div> -->

	</div>
</section>

<?php
get_footer();

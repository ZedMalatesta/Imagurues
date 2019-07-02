<aside class="main-sidebar">

	<div class="side-menu-button">
		<span>menu</span>
		<div class="crosschair"></div>
	</div>

      <?php wp_nav_menu( array(
      'theme_location' => 'primary-menu',
      'container' => 'nav',
      'container_class' => 'side-nav',
      'menu_id' => '__no__ID',
      'menu_class' => '',
      ) ); ?>
</aside>
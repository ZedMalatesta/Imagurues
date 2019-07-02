  <header class="main-header">
    <div class="prim-container">

      <div class="logo">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo__link">
          <img class="logo__picture" src="/wp-content/themes/itservices/assets/img/logo.svg" alt="imaguru logo">
          <span class="logo__subtitle">Tecnología en casa</span>
        </a>
    </div>
    <!--Menu  -->
     <button class="menu-icon">
       <span class="sandwich">
         <span class="sandwich__topper"></span>
         <span class="sandwich__bottom"></span>
         <span class="sandwich__footer"></span>
        </span>
      </button>
      <?php wp_nav_menu( array(
      'theme_location' => 'primary-menu',
      'container' => 'nav',
      'container_class' => 'menu',
      'menu_id' => 'primary-menu',
      'menu_class' => 'menu__list',
      ) ); ?>
      <div class="menu__button-wrapper">
        <button class="btn btn--blue-white form-btn">ORDER</button>
      </div>

    </div>
  </header>



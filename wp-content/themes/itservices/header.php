<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package itservices
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> itemscope itemtype="http://schema.org/Webpage">
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
 <meta name="description" content="Imaguru IT services" />
 <!-- Web Application Manifest -->
  <link rel="manifest" href="/wp-content/themes/itservices/assets/manifest.json">
  <!-- Schema.org markup (Google) -->
  <meta itemprop="name" content="<?php echo wp_get_document_title(); ?>s">
  <meta itemprop="description" content="<?php echo wp_get_document_title(); ?>">
  <meta itemprop="image" content="<?php echo get_template_directory() . '/assets/img/summary.jpg'; ?>">
  <!-- Twitter Card markup-->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="">
  <meta name="twitter:title" content="<?php echo wp_get_document_title(); ?>">
  <meta name="twitter:description" content="<?php echo wp_get_document_title(); ?>">
  <meta name="twitter:creator" content="">
  <!-- Twitter summary card with large image must be at least 280x150px -->
  <meta name="twitter:image" content="<?php echo get_template_directory() . '/assets/img/summary.jpg'; ?>">
  <meta name="twitter:image:alt" content="<?php echo wp_get_document_title(); ?>">
  <!-- Open Graph markup (Facebook, Pinterest) -->
  <meta property="og:title" content="<?php echo wp_get_document_title(); ?>" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="<?php echo home_url();?>" />
  <meta property="og:image" content="<?php echo get_template_directory() . '/assets/img/summary.jpg'; ?>" />
  <meta property="og:description" content="<?php echo wp_get_document_title(); ?>" />
  <meta property="og:site_name" content="<?php echo wp_get_document_title(); ?>" />
  <!-- Chrome for Android theme color -->
  <meta name="theme-color" content="#2d58de">
  <!-- Tile color for Win8 -->
  <meta name="msapplication-TileColor" content="#2d58de">
  <!-- Add to homescreen for Chrome on Android -->
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="application-name" content="PSK">
  <link rel="icon" sizes="192x192" href="<?php echo get_template_directory() . '/assets/img/touch/chrome-touch-icon-192x192.png'?>">
  <!-- Add to homescreen for Safari on iOS -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="<?php echo wp_get_document_title(); ?>">
  <link rel="apple-touch-icon" href="<?php echo get_template_directory() . '/assets/img/touch/apple-touch-icon.png'?>">
  <!-- Tile icon for Win8 (144x144) -->
<meta name="msapplication-TileImage" content="<?php echo get_template_directory() .'/assets/img/touch/ms-touch-icon-144x144-precomposed.png'?>">
<script>
  var html = document.documentElement;
  if (sessionStorage.fontsLoaded) {
      html.classList.add("fonts-loaded");
  } else {
      var script = document.createElement("script");
      script.src = "/wp-content/themes/itservices/assets/js/fontfaceobserver.js";
      script.async = true;
      script.onload = function() {
          var regular = new FontFaceObserver("Raleway", {
              weight: "400"
          });
          var bold = new FontFaceObserver("Raleway", {
              weight: "bold"
          });
          var light = new FontFaceObserver("Raleway", {
              weight: "300"
          });
          var semiBold = new FontFaceObserver("Raleway", {
              weight: "600"
          });
          var extraBold = new FontFaceObserver("Raleway", {
              weight: "800"
          });
          var osRegular = new FontFaceObserver("Open Sans", {
              weight: "normal"
          });
          var osBold = new FontFaceObserver("Open Sans", {
              weight: "bold"
          });
          var osLight = new FontFaceObserver("Open Sans", {
              weight: "300"
          });
          var osMedium = new FontFaceObserver("Open Sans", {
              weight: "500"
          });
          var osSemiBold = new FontFaceObserver("Open Sans", {
              weight: "600"
          });
          var osExtraBold = new FontFaceObserver("Open Sans", {
              weight: "800"
          });

          Promise.all([
                  regular.load(),
                  bold.load(),
                  light.load(),
                  semiBold.load(),
                  extraBold.load(),
                  osRegular.load(),
                  osBold.load(),
                  osLight.load(),
                  osMedium.load(),
                  osSemiBold.load(),
                  osExtraBold.load(),
              ])
              .then(function() {
                  html.classList.add("fonts-loaded");
                  sessionStorage.fontsLoaded = true;
              })
              .catch(function(error) {
                  console.log(error);
              })
      };
      document.head.appendChild(script);
  }
</script>
<?php wp_head(); ?>


  <?php

    $doc_root = $_SERVER['DOCUMENT_ROOT'];

    $isHosting = strripos($doc_root, '/var/www/imaguruco/data/www/') !== false;

    if ($isHosting) {

      include(TEMPLATEPATH.'/template-parts/google_tag_header.php');

    }
    // if ($_SERVER['DOCUMENT_ROOT'])
  ?>
</head>

<body>

  <?php
    if ($isHosting) {

      include(TEMPLATEPATH.'/template-parts/google_tag_body_prepend.php');

    }
  ?>


<div class="wrapper">

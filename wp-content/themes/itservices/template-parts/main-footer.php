	<footer class="footer">
    <div class="footer__logo">
      <img src="<?php echo ot_get_option('footer_logo');
?>" alt="">
    </div>
    <div class="footer__row">
    <div class="footer__contacts">
      <?php
      $footer_items = ot_get_option('contact_info', array());
if(!empty($footer_items)) {
	foreach($footer_items as $footer_item) {
		$html = '';
		$html .= '<div class="footer__contacts-item">';
		$html .= '<h4>' . $footer_item['title'] . '</h4>';
		$html .= '<p>' . $footer_item['contact_address'] .  '</p>';
		$html .= '<p><span>' . $footer_item['contact_tel'] . '</span>';
		$html .= '<a href="mailto:' . $footer_item['contact_email'] . '">' .  $footer_item['contact_email'] .  '</a></p>';
		$html .= '</div>';
		echo $html;
	}
}
?>
    </div>
    <div class="footer__social">
      <h4>Follow us on</h4>
      <div class="footer__btn-wrap">
        <?php
        $socials = ot_get_option('footer_socials', array());
foreach($socials as $social) {
	$html = '';
	$html .= '<a href="' . $social['link'] . '" class="btn btn--social btn--';
	$html .= $social['title'];
	$html .= '" target="_blank">';
	$html .= $social['title'];
	$html .= '</a>';

	echo $html;
}
?>
      </div>
    </div>
    </div>
    <div class="footer__copyright">
      <p>&copy; 2017 Imaguru</p>
   </div>
	</footer>
 <!-- Форма контактов -->

  <form class="form">
    <div class="form-wrapper">
      <h2>Let’s Connect</h2>

      <div class="main-formgroup">
          <div class="form__group">
              <input type="text" name="name" placeholder="Hi, my name is..." required>
              <input type="text" name="company" placeholder="From company..." required>
          </div>
          <div class="form__group">
              <input type="email" name="email" placeholder="My email is ..." required>
              <input type="tel" name="phone" placeholder="My phone number is ...">
          </div>
          <div class="form__group form__group--full textarea-container">
              <textarea name="what" placeholder="I need a ..."></textarea>
          </div>

          <button type="submit" class="btn btn--white">Submit</button>
      </div>

      <div class="form__close"></div>
    </div>
  </form>

  <div class="form-answer">
    <div class="form-wrapper">
      <h2></h2>
      <div class="form__close"></div>
    </div>
  </div>

</div>

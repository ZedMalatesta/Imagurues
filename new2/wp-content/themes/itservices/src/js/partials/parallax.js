(function($) {
	// var parallax = document.querySelectorAll(".parallax"),
	//     speed = 0.3;

	// window.onscroll = function() {
	//     [].slice.call(parallax).forEach(function(el, i) {
	//         var windowYOffset = window.pageYOffset,
	//             elBackgrounPos = '50% ' + (windowYOffset * speed) + 'px';
	//         el.style.backgroundPosition = elBackgrounPos;
	//     });
	// };

	var parallaxElements = $('.parallax'),
		parallaxSpeed = .3;

	var parallaxFunction = function(){

		parallaxElements.each(function(){
			$(this).css({
				backgroundPosition: '50% ' + $(window).scrollTop() * parallaxSpeed + 'px'
			});
		});

	};

	animationFrames.push(parallaxFunction);

})(jQuery);
let menuIcon = document.querySelector('.menu-icon');
let sandwich = document.querySelector('.sandwich');
let menu = document.querySelector('.menu');
let item = menu.querySelectorAll('.menu-item');

menuIcon.addEventListener('click', function() {
	sandwich.classList.toggle('active');
	menu.classList.toggle('active');

	item.forEach(function(i) {
		i.classList.toggle('animated');
		i.classList.toggle('fadeInRight');
	});

});

for (let i = 0; i < item.length; i++) {

	item[i].addEventListener('click', function() {
		sandwich.classList.toggle('active');
		menu.classList.toggle('active');
	});

}


;(function($){

	var navScrolling = false;

	var anchoreLinks = $('a[href ^= "#"]');
	var anchoreButtons = anchoreLinks.parent('li');
	var anchoreSections = [];

	anchoreLinks.each(function(){
		var anchoreSection
		var anchoreSectionID = $(this).attr('href').slice(1);

		anchoreSection = $('section#' + anchoreSectionID);

		if (anchoreSections.length === 0) {
			anchoreSections = anchoreSection;
		} else {
			anchoreSections = anchoreSections.add(anchoreSection);
		}
	});


	var activateAchoreLink = function(hash){

		anchoreButtons.removeClass('active');

		anchoreLinks.filter(function(){
			return $(this).attr('href') === hash;
		})
			.parent()
			.addClass('active');

	}


	var menuScrollActivate = function() {

		if (navScrolling) return;

		var windowScrollTopValue = $(window).scrollTop();
		var windowHeight = window.innerHeight;

		anchoreSections.each(function(){

			var sectionOffset = $(this).offset().top;
			var sectionHeight = $(this).outerHeight();

			if ( sectionOffset < windowScrollTopValue + windowHeight/3 && sectionOffset + sectionHeight > windowScrollTopValue + windowHeight/3) {

				// запомнили ID
				var tempID = $(this).attr('id');

				// чтобы отменить переход по хешу по событию 'hashchange'
				// перехват для этого события не приносит результатов
				$(this).attr('id', '');
				window.location.hash = '#' + tempID;
				// вернуть как было
				$(this).attr('id', tempID);

				// фктивировали пункт меню
				activateAchoreLink('#' + tempID);
			}

		});

	}


// ****** Bind Events ******
	anchoreButtons.on('click', function(){

		activateAchoreLink($(this).find('a[href ^= "#"]').attr('href'));
		navScrolling = true;

		setTimeout(function(){
			navScrolling = false;
		}, 500);

	});


	animationFrames.push(menuScrollActivate);
	menuScrollActivate();

}(jQuery))
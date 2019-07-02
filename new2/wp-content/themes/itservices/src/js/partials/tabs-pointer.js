;(function($){

	var tabs = $('.what .tab-button');
	var activeTab = tabs.filter('.active');

	var tabsContainer = tabs.parents('.tab-buttons');
	var tabPointer = $('.what .tab-pointer');

	if ( !tabs.length || !tabPointer.length) return; // stop when tabs or tabPointer not exist

	// all right

// ****** Handlers ******
	var slidePointer = function(e){


		var slideTo = {
			x: 0,
			y: 0
		};

		if ( !tabPointer.hasClass('.visible') ) {
			tabPointer.addClass('visible')
		}

		slideTo.y = $(this).position().top + $(this).height() / 2 - tabPointer.height() / 2;

		// parent correction
		var correction = {
			x: 0,
			y: 0
		};

		if (tabsContainer.length !== 0) {
			correction.y = tabsContainer.position().top;
		}

		slideTo.y += correction.y;

		// color, создается клон с классом Active, чтобы узнать цвет активного элемента
		// потом кладется куда-нибудь чтобы применились стили
		var fillColor;
		var coloredClone = $(this).clone().addClass('active').css('display', 'none');

		$(this).after(coloredClone);
		fillColor = coloredClone.css('color');

		coloredClone.remove();

		// slide & change color

		tabPointer.css({
			transform: 'translateY(' + slideTo.y + 'px)',
			fill: fillColor,
		});


	};




// ******  Bind Events ******
	tabs.on('click', slidePointer);


// ******  CODE  ******
	if (activeTab.length !== 0) {

		setTimeout(function(){
			activeTab.trigger('click');
		}, 101);

	};

}(jQuery));
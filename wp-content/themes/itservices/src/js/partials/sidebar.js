;(function(jQuery){

	var wHeight;
	var sideBar = $('.main-sidebar');

	var sideMenuScrollCheck = function(){

		if ( $(window).scrollTop() > wHeight/2 ) {
			sideBar.addClass('visible');
		} else {
			sideBar.removeClass('visible');
		};
	};

	sideMenuScrollCheck();

	var reCalcVarsResize = function(){
		wHeight = window.innerHeight;
	};

	reCalcVarsResize();

	// onScrollFunctions.push(sideMenuScrollCheck);

	animationFrames.push(sideMenuScrollCheck);



	$(window).on('resize', function(){
		reCalcVarsResize();
	});



// #########################
// ### SIDE NAV ###
// #########################

	var sideNav =  {

		toggler: null,
		menu:    null,
		menuState: false,

		open: function() {
			var self = this;

			self.toggler.addClass('active');
			self.menu.addClass('active');

			self.menuState = true;
		},

		close: function() {
			var self = this;

			self.toggler.removeClass('active');
			self.menu.removeClass('active');

			self.menuState = false;
		},


		bindEvents: function() {
			var self = this;

			self.toggler.on('click', function(e){
				e.stopPropagation();

				if (self.menuState) {
					self.close();
				} else {
					self.open();
				}

			});
		},

		init: function(selectorButton, selectorMenu) {
			var self = this;

			self.toggler    = $(selectorButton);
			self.menu = $(selectorMenu);

			if (self.menu.hasClass('active')) {
				self.menuState = true; // opened
			} else {
				self.menuState = false; // or not
			}

			self.bindEvents();
		}
	};

	sideNav.init('.side-menu-button', '.side-nav');
// ### SIDE NAV End ###


	var opened = [];
	opened.push(sideNav);

	$(document).on('click', function(e){

		opened.forEach(function(element, index) {
			element.close();
		});

	});

}($));
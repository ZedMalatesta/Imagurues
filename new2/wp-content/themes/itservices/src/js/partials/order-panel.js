;(function($){

	var orderPanel = {

		$: '',


		show: function(){
			var self = this;

			self.$.addClass('visible');
		},

		hide: function(){
			var self = this;

			self.$.removeClass('visible');
		},

		remove: function(self) {
			self.onFrame = function(){/*do nothing*/};
			self.$.remove();
		},

		onFrame: function(self) {
			var self;

			if ( $(window).scrollTop() > self.openAfter ){
				self.show();
			} else {
				self.hide();
			}
		},

		bindEvents: function(){
			var self = this;

			self.$.find('.close').click(
				function(){
					self.remove(self);
				}
			);


			animationFrames.push(function(){
				self.onFrame(self);
			});

		},



		init: function(selector, openAfter){
			var self = this;

			self.$ = $(selector);

			self.openAfter = openAfter;

			self.bindEvents();

		}
	}

	var openAfter = $('#how').offset().top  + $('#how').outerHeight() - $(window).outerHeight();

	orderPanel.init('.order-panel', openAfter);



}(jQuery))
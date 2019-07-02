;(function($){

	window.requestAnimationFrame = (function(){
		return  window.requestAnimationFrame   ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(/* function */ callback, /* DOMElement */ element){
			window.setTimeout(callback, 1000 / 60);
		};
	})();

	window.animationFrames = [];

	var animate = function(){

		animationFrames.forEach(function(f){
			if (typeof f === 'function') f();
		});

		requestAnimationFrame(animate);
	}

	animate();

}(jQuery));
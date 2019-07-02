;(function($){


// #### 

	// массив с функциями, которые будут выполняться по событию scroll
	var onScrollFunctions = window.onScrollFunctions = [];

	// обработчик события, не трогаем
	$(window).on('scroll', function(){
		onScrollFunctions.forEach(function(f){
			f();
		});
	});

// ####

}(jQuery))
/**
 * Открыть модаль "Тест"
 **/
$(".popup-btn").on("click", function () {
    var popup = $("#modalResidence");
    popup.addClass("open");
});
$(".mobil-menu").on("click", function () {
    var modal2 = $(".modal-container");
    if (modal2.hasClass("close")) {
        modal2.removeClass("close");
    }
    var popup2 = $("#modal");
    popup2.addClass("open");
});

/**
 * Кнопка скрыть модали
 **/
    $(".modal-container .shade, .form-container .shade, .close-modal, .modal-container .menu-item a").on("click", function (e) {
        if (e.target === e.currentTarget) {
            $(".modal-container.open, .form-container.open").removeClass("open").addClass("close");
            if ($('html').is('.no-csstransitions')) {
                var modal = $(".modal-container, .form-container");
                if (modal.hasClass("close")) {
                    modal.removeClass("close");
                }
            }
        }
    });
    $(".modal-container .shade, .form-container .shade").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
        function () {
            var modal = $(".modal-container, .form-container");
            if (modal.hasClass("close")) {
                modal.removeClass("close");
            }
        });
/**
 * Центрирование модалей
 */
var centerPopup = function() {
    var mainDiv = $(".modal-container.open .popup-content, .form-container.open .popup-content");
    var mainHeight = parseInt((window.innerHeight-mainDiv.height())/2);
    if (Math.max(document.documentElement.clientHeight, window.innerHeight || 0) > (mainDiv.height()+50)) {
        mainDiv.css({"margin-top": mainHeight});
    } else {
        mainDiv.css({"margin": "60px auto"});
    }
};
$(".center-popup-btn").on("click", centerPopup);
$(window).on("resize", centerPopup);
$(window).trigger("resize");

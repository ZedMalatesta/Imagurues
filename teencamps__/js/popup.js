/**
 * Открыть модаль
 **/
$(".mobile-popup-btn").on("click", function () {
    var popup = $("#mobile-modal");
    popup.addClass("open");
});
$(".popup-btn-entrepreneur").on("click", function () {
    var popup = $("#modal-entrepreneur");
    popup.addClass("open");
});
$(".popup-btn-tech").on("click", function () {
    var partnerForm = $("#modal-tech");
    partnerForm.addClass("open");
});
$(".popup-btn-skills").on("click", function () {
    var sponsorForm = $("#modal-skills");
    sponsorForm.addClass("open");
});

/**
 * Кнопка скрыть модали
 **/
    $(".modal-container .shade, .close-modal, .modal-container .nav-link, .form-container .shade").on("click", function (e) {
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
    $(".form-container .submit").on("click", function (e) {
        if (e.target === e.currentTarget) {

            var email = $(".form-container.open input[name=email]")[0].value;
            function validateEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
            if(validateEmail(email)){
                $(".form-container.open").removeClass("open").addClass("close");
            }
            if ($('html').is('.no-csstransitions')) {
                var modal = $(".form-container");
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
        mainDiv.css({"margin": "30px auto"});
    }
};
$(".center-popup-btn, .becamePartner, .becameSponsor").on("click", centerPopup);
$(window).on("resize", centerPopup);
$(window).trigger("resize");
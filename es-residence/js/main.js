$(function($) {
    $('.half-slider-img-container').slick({
        dots: true,
        arrows:false
    });

    $("#inSpainBut").click(function(){
        $("#inSpain").slideToggle();
    });

    $("#outSpainBut").click(function(){
        $("#outSpain").slideToggle();
    });
    $('form').submit(function () {
        var formID = $(this).attr('id'); // Получение ID формы
        var formNm = $('#' + formID);
        $.ajax({
            type: 'POST',
            url: 'mail.php', // Обработчик формы отправки
            data: formNm.serialize()
        }).done(function() {
            $(formNm).find("input", "textarea").val("");
            alert("Thank you for your invoice! We will contact you soon.");

            console.log('residence');
            $(".modal-container.open, .form-container.open").removeClass("open").addClass("close");
            if ($('html').is('.no-csstransitions')) {
                var modal = $(".modal-container, .form-container");
                if (modal.hasClass("close")) {
                    modal.removeClass("close");
                }
            }

            var iS = $("#inSpain").css('display');
            if(iS = 'block'){
                $("#inSpain").css('display','none');
            }
            var oS = $("#outSpain");
            if(oS = 'block'){
                $("#outSpain").css('display','none');
            }

            $('form').trigger("reset");
        });
        return false;
    });
});
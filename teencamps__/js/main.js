$(document).ready(function($) {
    // $(window).on('resize', widtHeight);
    // $(window).on('resize', widtHeight1);
    //
    // function widtHeight() {
    //     var galar = $('.gallery-image');
    //     for( var i = 0; i <= galar.length; i++ ){
    //         var wh = galar[0].offsetWidth;
    //         galar[i].style.height= wh + "px";
    //     }
    // }
    //
    // function widtHeight1() {
    //     var iframe1 = $('.video-cont');
    //     for( var i = 0; i <= iframe1.length; i++ ){
    //         var whf = iframe1[0].offsetWidth;
    //         iframe1[i].style.height= whf / 1.777 + "px";
    //     }
    // }
// ==================================================
// smooth scrolling to anchors full &mobile format
// ==================================================

    $('#main-nav-container').ddscrollSpy({ // initialize first demo
        scrolltopoffset: -60
    });
// ==================================================
// smooth scrolling to anchors
// ==================================================
    $(document).ready(function(){
        // Add smooth scrolling to all links
        $("a.smoothscroll").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                var hash = this.hash;
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });
// =======================================
// One height of tabs in Schedule
// =======================================
//     var hTabs = $('.schedule-wrapper .tab');
//     if (hTabs) {
//         var ht = Math.max.apply(Math, $('.schedule .tab-content-item').map(function () {
//             return $(this).height();
//         }).get());
//          if ($(window).width() <= '768') {
//              hTabs.height(ht + 750);
//          } else {
//              hTabs.height(ht + 180);
//          }
//     }


// =======================================
// Change header BG when scrolling window
// =======================================
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50){
            $('header').addClass("change-bg");
        }
        else{
            $('header').removeClass("change-bg");
        }
    });
// =======================================
// Courses mobile-format
// =======================================
    if ($(window).width() <= '1024') {
        $('.courses-wrapper').height($('.courses-item').height() + 180);

        var reh = $('.full-sch');
        reh.on('click', function(){
            var a = $('.full-sch').index(this);
            var hcTabs = $('.courses-wrapper');
            if (hcTabs) {
                var hsti = $('.courses-item')[a];
                var hct = $(hsti).height();
                hcTabs.height(hct + 180);
            }
        });
    }

    // var hcTabs = $('.courses-wrapper');
    // if (hcTabs) {
    //     var hct = Math.max.apply(Math, $('.courses-wrapper .courses-item').map(function () {
    //         return $(this).height();
    //     }).get());
    //     hcTabs.height(hct + 180);
    // }

// =======================================
// Advantage-slider
// =======================================
    if ($(window).width() <= '425') {
        $('.advantage-container').addClass('advantage-slider');
    }
    $('.advantage-slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
// =======================================
// Program schedule
// =======================================

    $("input[name=optionsE]").on('change', function () {
        var currentId = $(this).attr('id');
        var currentTab;
        switch(currentId){
            case "mo-e" :
                currentTab = 2;
                break;
            case "tu-e" :
                currentTab = 3;
                break;
            case "we-e" :
                currentTab = 4;
                break;
            case "th-e" :
                currentTab = 5;
                break;
            default :
                currentTab = 6;
                break;
        }
        $('#schedule .tab .schedule-item div:nth-of-type(n+1)').removeClass('visible');
        $('#schedule .tab .schedule-item div:nth-of-type('+ (+currentTab) +')').addClass('visible');
        $('#schedule .tab .schedule-item div:nth-of-type(1)').addClass('visible');
    });
    $('#schedule .tab .schedule-item div:nth-of-type(2)').addClass('visible');
    $('#schedule .tab .schedule-item div:nth-of-type(1)').addClass('visible');

    $("input[name=optionsS]").on('change', function () {
        var currentId = $(this).attr('id');
        var currentTab;
        switch(currentId){
            case "mo-s" :
                currentTab = 2;
                break;
            case "tu-s" :
                currentTab = 3;
                break;
            case "we-s" :
                currentTab = 4;
                break;
            case "th-s" :
                currentTab = 5;
                break;
            default :
                currentTab = 6;
                break;
        }
        $('#schedule .tab .schedule-item div:nth-of-type(n+1)').removeClass('visible');
        $('#schedule .tab .schedule-item div:nth-of-type('+ (+currentTab) +')').addClass('visible');
        $('#schedule .tab .schedule-item div:nth-of-type(1)').addClass('visible');
    });
    $('#schedule .tab .schedule-item div:nth-of-type(2)').addClass('visible');
    $('#schedule .tab .schedule-item div:nth-of-type(1)').addClass('visible');

    $("input[name=optionsT]").on('change', function () {
        var currentId = $(this).attr('id');
        var currentTab;
        switch(currentId){
            case "mo-t" :
                currentTab = 2;
                break;
            case "tu-t" :
                currentTab = 3;
                break;
            case "we-t" :
                currentTab = 4;
                break;
            case "th-t" :
                currentTab = 5;
                break;
            default :
                currentTab = 6;
                break;
        }
        $('#schedule .tab .schedule-item div:nth-of-type(n+1)').removeClass('visible');
        $('#schedule .tab .schedule-item div:nth-of-type('+ (+currentTab) +')').addClass('visible');
        $('#schedule .tab .schedule-item div:nth-of-type(1)').addClass('visible');
    });
    $('#schedule .tab .schedule-item div:nth-of-type(2)').addClass('visible');
    $('#schedule .tab .schedule-item div:nth-of-type(1)').addClass('visible');

// =======================================
// E-mail
// =======================================
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
            $('form').trigger("reset");
        });
        return false;
    });
});

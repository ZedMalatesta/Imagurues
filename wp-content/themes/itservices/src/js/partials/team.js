;
(function($, S) {

    if ($('.our-team').length === 0) return;

    var team = S('#team-svg');

    var members = team.selectAll('.team-member');
    var allDrawings = team.selectAll('.team-member .drawing');
    var aboutItems = $('.about-item');

    var deactivateDrawings = function() {

        allDrawings.forEach(function(el) {
            el.removeClass('active');
        });

    };

    var openText = function(name) {
        aboutItems.removeClass('active');
        aboutItems
            .filter('[data-name="' + name + '"]')
            .addClass('active');
    }


    members.forEach(function(member) {

        var area = member.select('.area');
        var drawing = member.select('.drawing');


        area.hover(function() {

            this.addClass('hover');
            drawing.addClass('ready');

        }, function() {

            this.removeClass('hover');
            drawing.removeClass('ready');

        });

        var activate = function activate() {
            deactivateDrawings();
            drawing.addClass('active');
            openText(member.attr('data-name'));
        };

        area.click(activate);

        if (member.hasClass('active')) {
            activate();
        }
    });




    // contact artem

    $('.contact-artem').on('click', function() {
        $(this).addClass('removed');
        $(this).siblings('.contacts').addClass('active');
        $(this).off('click');
    });




}(jQuery, Snap));
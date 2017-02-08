var Navbar = (function() {
    var autoscroll = false;
    var navTargets = [];

    var extend = function(obj) {
        obj.addClass("nav-extended").siblings().removeClass("nav-extended");
    };

    var scroll = function(obj) {
        autoscroll = true;
        $('html, body').animate({ scrollTop: $("#" + obj.html()).offset().top }, 500,
                function() { autoscroll = false; });
    };

    var init = function() {
        $('#nav-bar').children('div').each(function() {
            var targetId = $(this).html();
            $(this).attr('role', 'button');
            $(this).click(function() {
                extend($(this));
                scroll($(this));
            });
            navTargets.unshift({ id: targetId, button: $(this) });
        });

        $(window).scroll(function() {
            if (autoscroll) {
                return;
            }
            var scroll = $(window).scrollTop() + $('#nav-bar').height() * 9.5;
            navTargets.some(function(target) {
                if (scroll >= $("#" + target.id).offset().top) {
                    extend($(target.button));
                    return true;
                }
            });
        });
    }

    return { init: init };
})();

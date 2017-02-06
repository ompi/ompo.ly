var autoscroll = false;

$('#nav-bar').children('div').each(function() {
    $(this).click(function() { 
        navExtend($(this));
        navScroll($(this));
    });
});

function navExtend(obj) {
    obj.addClass("nav-extended").siblings().removeClass("nav-extended");
}

function navScroll(obj) {
    autoscroll = true;
    $('html, body').animate({ scrollTop: $("#" + obj.html()).offset().top }, 500, 
            function() { autoscroll = false; });
}

$(window).scroll(function() {
    if (autoscroll) {
        return;
    }
    var scroll = $(window).scrollTop() + $('#nav-bar').height() * 9.5;
    if (scroll >= $("#contact").offset().top ) navExtend($('#tyu')); else
    if (scroll >= $("#about").offset().top ) navExtend($('#meh')); else
    if (scroll >= $("#stuff").offset().top ) navExtend($('#grp'));
});

$(function () {

    var carouselSelector = ".carousel";

    $(carouselSelector).swiperight(function () {
        $(this).carousel('prev');
    });

    $(carouselSelector).swipeleft(function () {
        $(this).carousel('next');
    });

});
$(function () {

    $("#owl-example").owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
    /*
     $("#owl-example").owlCarousel({
     loop: true,
     responsiveClass: true,
     items: 1,
     autoplay: true
     });
     */

});
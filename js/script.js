$(document).ready(function() {

    var height = $(window).height();
    var owlHeight = height * 0.6;

    console.log(owlHeight);


    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 2,
        nav: false,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        lazyLoad : true
    });




});
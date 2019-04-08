function resize() {
    $('.slide-nav').width($('header').width());
}

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navContainer: '.slide-nav',
        dotsContainer: '.slide-dots',
        items: 1
    });
    resize();
});
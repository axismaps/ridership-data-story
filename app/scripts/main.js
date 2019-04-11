function resize() {
  $('.slide-nav').width($('header').width());
}

$(document).ready(() => {
  const owl = $('.owl-carousel').owlCarousel({
    margin: 0,
    nav: true,
    navContainer: '.slide-nav',
    dotsContainer: '.slide-dots',
    items: 1,
    callbacks: true,
  });

  owl.on('changed.owl.carousel', function(e) {
    const iframe = $($('.item')[e.item.index]).children('iframe');
    iframe.attr('src', iframe.attr('data-src'));
    const prevFrame = $($('.item')[e.item.index - 1]).children('iframe');
    prevFrame.removeAttr('src');
  });

  resize();
});

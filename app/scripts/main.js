function resize() {
  $('.slide-nav').width($('header').width());
  $('.owl-carousel, .owl-stage-outer').height($(window).height() - 140);
  $('iframe').height($('.owl-carousel').height() - $('.owl-item.active .description').height() - 60);
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

  owl.on('changed.owl.carousel', (e) => {
    const iframe = $($('.item')[e.item.index]).children('iframe');
    iframe.attr('src', iframe.attr('data-src'));
    const prevFrame = $($('.item')[e.item.index - 1]).children('iframe');
    prevFrame.removeAttr('src');
    window.setTimeout(resize, 100);
  });

  resize();
});

$(window).resize(resize);

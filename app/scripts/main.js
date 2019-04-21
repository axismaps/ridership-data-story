function resize() {
  $('.slide-nav').width($('header').width());
  $('.owl-carousel, .owl-stage-outer').height($(window).height() - 140);
  $('.owl-item.active .content').height($('.owl-carousel').height() - $('.owl-item.active .description').height() - 60);
  $('.owl-item.active .content > img').css('top', $('.owl-item.active .content').position().top);
  $('.owl-item.active .inner').css('max-height', $('.owl-item.active .content').height() - 20);
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
    const iframe = $($('.item')[e.item.index]).find('iframe');
    iframe.attr('src', iframe.attr('data-src'));
    const prevFrame = $($('.item')[e.item.index - 1]).find('iframe');
    prevFrame.removeAttr('src');
    if (e.item.index === e.item.count - 1) $('.slide-nav').hide();
    else $('.slide-nav').show();
    window.setTimeout(resize, 100);
  });

  resize();
});

$(window).resize(resize);

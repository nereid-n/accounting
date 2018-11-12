if ($('.reviews__img-slider').length > 0) {
  $('.reviews__img-slider').slick({
    asNavFor: '.reviews__text-slider',
    prevArrow: '<button class="btn-slider reviews__prev"><img src="assets/images/icons/icon-arrow-left-white.png" alt=""></button>',
    nextArrow: '<button class="btn-slider btn-slider-black reviews__next"><img src="assets/images/icons/icon-arrow-right-dark.png" alt=""></button>',
  });
}

if ($('.reviews__text-slider').length > 0) {
  $('.reviews__text-slider').slick({
    asNavFor: '.reviews__img-slider',
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          adaptiveHeight: true
        }
      }
    ]
  });
}

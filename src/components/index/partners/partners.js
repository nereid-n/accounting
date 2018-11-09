if ($('.partners__slider').length > 0) {
  $('.partners__slider').slick({
    slidesToShow: 4,
    prevArrow: false,
    nextArrow: '<button class="btn-slider packages__btn partners__next"><img src="assets/images/icons/icon-arrow-right-white.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          variableWidth: true
        }
      }
    ]
  });
}

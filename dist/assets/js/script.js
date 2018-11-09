'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shared = function Shared() {
  _classCallCheck(this, Shared);
};

if ($('.packages__slider').length > 0) {
  $('.packages__slider').slick({
    slidesToShow: 4,
    prevArrow: '<button class="btn-slider packages__btn packages__prev"><img src="assets/images/icons/icon-arrow-left-white.png" alt=""></button>',
    nextArrow: '<button class="btn-slider packages__btn packages__next"><img src="assets/images/icons/icon-arrow-right-white.png" alt=""></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    }]
  });
}

if ($('.partners__slider').length > 0) {
  $('.partners__slider').slick({
    slidesToShow: 4,
    prevArrow: false,
    nextArrow: '<button class="btn-slider packages__btn partners__next"><img src="assets/images/icons/icon-arrow-right-white.png" alt=""></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 575,
      settings: {
        variableWidth: true
      }
    }]
  });
}
//# sourceMappingURL=script.js.map

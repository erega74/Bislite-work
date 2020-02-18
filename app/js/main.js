var swiper = new Swiper('.header-slider__container', {
    pagination: {
      el: '.header-slider__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
});

var swiper = new Swiper('.latest-works__slider-container', {
  slidesPerView: 4,
  spaceBetween: 15,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1000: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 4,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 15,
      slidesPerGroup: 3,
    },
    410: {
      slidesPerView: 2,
      spaceBetween: 15,
      slidesPerGroup: 2
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1
    }
  }
});
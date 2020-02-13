var swiper = new Swiper('.header-slider__container', {
    pagination: {
      el: '.header-slider__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
});
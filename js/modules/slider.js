export const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 499px
    599: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 999px
    991: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

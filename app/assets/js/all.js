$(function () {
  // console.log('Hello Bootstrap5');
  let codeSwipe = new Swiper(".codeSwiper", {
    autoplay: {
      disableOnInteraction: false,
      delay: 0,
    },
    speed: 2000,
    loop: true,
    spaceBetween: 16,
    slidesPerView: 3,
    breakpoints: {
      768: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 9,
      },
    },
  });

  // feedback-swiper
  const swiper = new Swiper(".feedback-swiper", {
    // Optional parameters
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

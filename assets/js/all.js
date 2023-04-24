"use strict";

$(function () {
  // console.log('Hello Bootstrap5');
  var codeSwipe = new Swiper(".codeSwiper", {
    autoplay: {
      // disableOnInteraction: false,
      delay: 0
    },
    speed: 2000,
    loop: true,
    spaceBetween: 16,
    slidesPerView: 3,
    breakpoints: {
      768: {
        slidesPerView: 6
      },
      1200: {
        slidesPerView: 9
      }
    }
  }); // feedback-swiper

  var feedbackSwiper = new Swiper(".feedbackSwiper", {
    // Optional parameters
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  }); //Datepicker

  var elem = document.querySelector('input[name="datepicker"]');
  var datepicker = new Datepicker(elem, {
    language: "zh-TW",
    buttonClass: "btn",
    //匹配bootstrap
    autohide: true
  });
});
//# sourceMappingURL=all.js.map

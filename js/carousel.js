//Owl Carousel For desktop and Tab

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    paginationSpeed: 1000,
    autoPlay: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1240: {
        items: 5,
      },
    },
  });
});

//Swiper JS for mobile

const swiper = new Swiper(".p-swiper", {
  // Optional parameters
  direction: "horizontal",
  centerSlide: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
  },
});

const c_swiper = new Swiper(".c-Swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
  },
});

const c_mob_swiper = new Swiper(".c-mob-Swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

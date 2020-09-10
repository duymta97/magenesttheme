define(["jquery", "owlCarousel"], function ($) {
  'use strict';
  return function () {
    $(".owl-carousel").owlCarousel({
      autoplay: true,
      dots: false,
      loop: true,
      items: 4,
    });
  };
});

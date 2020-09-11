define(["jquery", "owlCarousel"], function ($) {
  'use strict';
  return function () {
    $(".owl-carousel:first").owlCarousel({
      autoplay: true,
      dots: false,
      loop: true,
      items: 4,
    });
  };
});

"use strict";


// topセクション、スライダー部分の実装
$(function () {
  $(".top-slider").slick({
    autoplay: true,
    arrows: true,
    fade: true,
    asNavFor: ".top-thumbnail",
  });
  $(".top-thumbnail").slick({
    slidesToShow: 5,
    asNavFor: ".top-slider",
    focusOnSelect: true,
  });
});


//galleryセクションのスライダー実装
$(function () {
  $(".gallery-slider").slick({
    autoplay: true,
    arrows: false,
    fade: true,
    asNavFor: ".gallery-thumbnail",
  });
  $(".gallery-thumbnail").slick({
    slidesToShow: 4,
    asNavFor: ".gallery-slider",
    focusOnSelect: true,
  });
});

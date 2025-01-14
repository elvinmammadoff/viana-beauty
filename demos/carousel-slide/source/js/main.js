/* ----------------------------------

Name: main.js
Author: Alissio
Website: https://www.viana-beauty.com
Exclusively available here: https://themeforest.net/user/alissio

------------------------------------- */





/*====================================================


	Table of Contents

		01. Image Slider

		02. Quote Slider

      + Synchronize Control Image and Quote Sliders
      + Stop on Hover Image Slider



	
====================================================*/



/*======================

	01. Image Slider 

========================*/

var slider = new Swiper ('.image-slider', {
  slidesPerView: 1,
  loop: false,
  speed: 1000,
  autoplay: {
    delay: 1000,
  },
  centeredSlides: true,
  disableOnInteraction: false,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  onmouseover: {
    autoplay: false
  },
});



/*======================

	02. Quote Slider 

========================*/

var quoteSwiper = new Swiper('.quote-slider', {
  slidesPerView: 1,
  loop: false, // Not recommended to enable!!!
  allowTouchMove: false,
});


/* Synchronize Control Image and Quote Sliders
-------------------------*/

slider.controller.control = this.quoteSwiper;


/* Stop on Hover Image Slider
-------------------------*/
$('.image-slider .swiper-slide').hover(function(){
slider.autoplay.stop();
}, function(){
slider.autoplay.start();
});








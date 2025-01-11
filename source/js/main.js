/* ----------------------------------

Name: main.js
Author: Alissio
Website: https://www.focus-slider.com
Exclusively available here: https://themeforest.net/user/alissio

------------------------------------- */





/*====================================================


	Table of Contents

		01. Gallery Slider

			+ Fade Carousel
			+ Thumb Slider
      + Control Fade and Thumb Sliders



	
====================================================*/



/*======================

	01. Gallery Slider 

========================*/


/* Fade Carousel 
-------------------------*/
var slider = new Swiper ('.gallery-slider', {
  slidesPerView: 1,
  effect: "fade",
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 3000,
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

// Stop on Hover
$('.gallery-slider .swiper-slide').hover(function(){
slider.autoplay.stop();
}, function(){
slider.autoplay.start();
});






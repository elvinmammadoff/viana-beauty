
============================================================
                    Viana Beauty Slider
============================================================

Thank you for purchasing Viana Beauty Slider! This lightweight and responsive slider template will help you create beautiful sliders for your projects with ease.

------------------------------------------------------------
1. FOLDER STRUCTURE
------------------------------------------------------------
After extracting the downloaded zip file, you will see the following structure:

viana-beauty-slider/
├── documentation/       # Full Documentation in HTML format
├── demos/               # Demo files for easy setup
│   ├── index.html       # Example slider file
│   ├── assets/          # CSS, SASS, SCSS, JS, and Images
│       ├── css/         # Stylesheets
│       ├── sass/        # SASS supported files
│       ├── scss/        # SCSS supported files
│       ├── js/          # JavaScript files
│       ├── img/         # Images used in the demo
├── source/              # Unminified source files (CSS/JS)
└── README.txt           # This file

------------------------------------------------------------
2. INSTALLATION
------------------------------------------------------------
To use Viana Beauty Slider in your project:

1. Add the CSS and JS files from the "assets" folder into your project:


<link rel="stylesheet" href="assets/css/swiper.min.css">
<link href="assets/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.min.css">
<link rel="stylesheet" href="assets/css/responsive.min.css">

<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/swiper.js"></script>
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
<script src="assets/js/bootstrap.min.js" crossorigin="anonymous"></script>
<script src="assets/js/main.min.js"></script>

2. Include the following HTML structure for your slider:


  <!-- Gallery -->
  <div class="gallery">   

      <!-- Gallery Fade Carousel -->
      <div class="swiper-container gallery-slider">
        <div class="swiper-wrapper">
  
          <!-- Start Gallery Slide -->
          <div class="swiper-slide">

            <div class="swiper-caption__img">
              <img src="assets/image/img-01.jpg" alt="">
            </div>
  
            <!-- Caption -->
            <div class="swiper-caption">
              <div class="swiper-caption__content">

                <!-- Title -->
                <h1 class="swiper-caption__ttl">Relax and with our Premium Spa Services</h1>

                <!-- Description -->
                <p class="swiper-caption__text">the best beauty, hair, health, massage, massage booking, physiotherapy, salon</p>
              </div>
            </div>
          </div>
          <!-- End Gallery Slide -->
  
        </div>

        <!-- Slider Navigation -->
        <div class="slider-navigation">
          
          <!-- Prev Arrow -->
          <div class="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back"></ion-icon>
          </div>
  
          <!-- Next Arrow -->
          <div class="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward"></ion-icon>
          </div>
        </div>
      </div>
  </div>

3. Initialize the slider using JavaScript:

<script>
document.addEventListener('DOMContentLoaded', function() {
  ('.gallery-slider').init({
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
});
</script>

------------------------------------------------------------
3. FEATURES
------------------------------------------------------------
- Lightweight and responsive slider
- Autoplay functionality
- Navigation arrows
- Dots navigation (pagination)
- Customizable slide speed and behavior
- Modern design with clean code

------------------------------------------------------------
4. CUSTOMIZATION OPTIONS
------------------------------------------------------------
You can customize the slider using the following options when initializing it:

| Option               | Type       | Default   | Description                                                       |
|----------------------|------------|-----------|-------------------------------------------------------------------|
| slidesPerView        | Number     | 1         | Number of slides per view                                         |
| centeredSlides       | Boolean    | true      | Active slide will be centered, not always on the left side        |
| spaceBetween         | Number     | 0         | Distance between slides in px                                     |
| loop                 | Boolean    | true      | To enable continuous loop mode                                    |
| speed                | Number     | 1500      | Duration of transition between slides                             |
| slideToClickedSlide  | Boolean    | true      | Click on this slide will produce transition to this slide         |
| pagination           | Boolean    | true      | Object with pagination parameters to enable with default settings |
| navigation           | Boolean    | true      | Object with pagination parameters to enable with default settings |


Example:
<script>
    ('.gallery-thumbs').init({
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        speed: 1500,
    });
</script>

------------------------------------------------------------
5. SUPPORT
------------------------------------------------------------
If you encounter any issues or have questions about Viana Beauty Slider, please contact our support team:

Email: alissioteam@gmail.com  
Support Hours: Monday - Friday, 9 AM - 11 PM (GMT)

Thank you for choosing Viana Beauty Slider! We hope it adds great value to your project.

============================================================
                        END OF FILE
============================================================

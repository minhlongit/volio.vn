jQuery(document).ready(function ($) {
  wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
  });
  new WOW().init();
  $(".slider-home").slick({
    dots: false,
    arrows: true,
    prevArrow:
      '<img src="/wp-content/themes/olympusinn/images/base/home-slider-prev.svg" class="slick-prev">',
    nextArrow:
      '<img src="/wp-content/themes/olympusinn/images/base/home-slider-next.svg" class="slick-next">',
    infinite: true,
    speed: 300,
    // fade: true,
    slidesToShow: 1,
    fade: true,
    // easing: 'linner',

    dir: 'rtl',
    infinite: true,
    cssEase: 'linear',
    adaptiveHeight: true,
  });
  $(".active-slider-for").slick({
    dots: false,
    arrows: true,
    prevArrow:
      '<img src="/wp-content/themes/olympusinn/images/base/slide-allow-left.svg" class="slick-prev">',
    nextArrow:
      '<img src="/wp-content/themes/olympusinn/images/base/slide-allow-right.svg" class="slick-next">',
    infinite: true,
    speed: 300,
    // fade: true,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<img src="/wp-content/themes/olympusinn/images/base/slide-allow-left.svg" class="slick-prev">',
    nextArrow:
      '<img src="/wp-content/themes/olympusinn/images/base/slide-allow-right.svg" class="slick-next">',
    // fade: true,
    asNavFor: ".slider-nav",
    autoplay: false,
    dots: false,
  });
  $(".slider-nav").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".back-to-top").fadeOut("slow");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".volio-header").addClass("volio-header-small");
    } else {
      $(".volio-header").removeClass("volio-header-small");
    }

    if ($(this).scrollTop() > 1200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
});

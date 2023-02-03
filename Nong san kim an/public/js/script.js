$('.main-slider').slick({
    infinite: true,
    // autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: "<span class='arrow prev'><i class='fas fa-angle-left'></i></span>",
    nextArrow: "<span class='arrow next'><i class='fas fa-angle-right'></i></span>",
  });
  $('.main-slider-product').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: "<span class='arrow-prev-product'><i class='fas fa-angle-left'></i></span>",
    nextArrow: "<span class='arrow-next-product'><i class='fas fa-angle-right'></i></span>",
  });
  $('.mobile-product').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
  });
//header----------------------------------------------------------------
$(document).ready(function () {
    $(window).scroll(function () {
      console.log($(this).scrollTop())
      if ($(this).scrollTop()) {
        $('header').addClass('sticky');
        document.getElementById("img-logo-header").style.width = "100px";
        document.getElementById("img-logo-header").style.height = "100px";
        console.log("asdasdasda")
      } else {
        $('header').removeClass('sticky');
        document.getElementById("img-logo-header").style.width = "150px";
        document.getElementById("img-logo-header").style.height = "150px";
      }
    })
  })
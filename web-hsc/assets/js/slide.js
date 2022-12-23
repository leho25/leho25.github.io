$(".slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-prev"> < </button>',
  nextArrow: '<button class="slick-next"> > </button>',
  fade: true,
  fadeSpeed: 1000,
});
$(".list-feature-news").slick({
  vertical: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  // speed: 1000,
  // autoplaySpeed: 2000,
  // autoplay: true,
});
$(".list-news").slick({
  vertical: true,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  // speed: 1000,
  // autoplaySpeed: 3000,
  // autoplay: true,
});

var numSlick = 0;
$(".slider-for").each(function () {
  numSlick++;
  $(this)
    .addClass("slider-" + numSlick)
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<button class="slick-prev slick-slider-arrow"> <i class="fa-solid fa-caret-left"></i> </button>',
      nextArrow:
        '<button class="slick-next slick-slider-arrow"> <i class="fa-solid fa-caret-right"></i> </button>',
      fade: true,
      asNavFor: ".slider-nav.slider-" + numSlick,
    });
});
numSlick = 0;
$(".slider-nav").each(function () {
  numSlick++;
  $(this)
    .addClass("slider-" + numSlick)
    .slick({
      vertical: false,
      centerMode: true,
      slidesToShow: 5,
      infinite: true,
      slidesToScroll: 1,
      asNavFor: ".slider-for.slider-" + numSlick,

      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
});
$(".document").ready(function () {
  $(".toggle").click(function () {
    $(".menu-ul").slideToggle();
  });
});
$("document").ready(function () {
  $(window).scroll(function (e) {
    var pos_body = $("html,body").scrollTop();
    if (pos_body > 20) {
      $(".menu").addClass("fixed-menu");
    } else {
      $(".menu").removeClass("fixed-menu");
    }
  });
});

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
  speed: 1000,
  autoplaySpeed: 2000,
  autoplay: true,
});
$(".list-news").slick({
  vertical: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 1000,
  autoplaySpeed: 3000,
  autoplay: true,
});

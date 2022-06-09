$(document).ready(function () {
  $('.togglemenu').on('click', function () {
    $('.navigation').toggleClass('showing');
    $('.navigation ul').toggleClass('showing');
  });

  $('.article-wrapper').slick({
    centerMode: true,
    centerPadding: '160px',
    slidesToShow: 1,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          centerMode: true,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },

      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});



$('.reviews-carous').slick({
  // centerMode: true,
  // variableWidth: true,
  // centerPadding: '150px',
  slidesToShow: 1,
  slidesToScroll: 1,
  // variableWidth: true,
  infinite: true,
  speed: 300,
  easing: 'ease',
  // arrows: true,
  // dots: true,
  // autoplay: true,
  // responsive: [
        // {
        //   breakpoint: 1399.99,
        //   settings: {
        //     slidesToShow: 4,
        //   }
        // },
        // {
        //   breakpoint: 991.98,
        //   settings: {
        //     slidesToShow: 3,
        //   }
        // },
        // {
        //   breakpoint: 575.98,
        //   settings: {
        //     slidesToShow: 2,
        //   }
        // },
    //     {
    //       breakpoint: 991.98,
    //       settings: {
    //         // arrows: false,
    //         // centerMode: true,
    //         // centerPadding: '40px',
    //         slidesToShow: 8
    //       }
    //     },
    //     {
    //       breakpoint: 767.98,
    //       settings: {
    //         // arrows: false,
    //         // centerMode: true,
    //         // centerPadding: '40px',
    //         slidesToShow: 6
    //       }
    //     },
    //     {
    //       breakpoint: 575.98,
    //       settings: {
    //         // arrows: false,
    //         // centerMode: true,
    //         // centerPadding: '40px',
    //         slidesToShow: 4
    //       }
    //     },
    //     {
    //       breakpoint: 418,
    //       settings: {
    //         // arrows: false,
    //         // centerMode: true,
    //         // centerPadding: '40px',
    //         slidesToShow: 3
    //       }
    //     }
      // ]
});
$('.blog-carous').slick({
  // centerMode: true,
  // variableWidth: true,
  // centerPadding: '150px',
  slidesToShow: 1,
  slidesToScroll: 1,
  // variableWidth: true,
  infinite: true,
  speed: 1000,
  easing: 'ease',
  arrows: true,
  dots: true,
  autoplay: true,
  responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            arrows: false,
            dots: false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            arrows: false,
            dots: false,
            slidesToShow: 1
          }
        },
       
      ]
});

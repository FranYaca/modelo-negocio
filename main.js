const swiper = new Swiper('.swiper', {
    spaceBetween: 2,
    slidesPerView: 4,
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      200: {
        slidesPerView: 1
      },
      500: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  });


  
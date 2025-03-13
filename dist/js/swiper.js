var swiper = new Swiper(".swiper-landing", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
    clickable: true
  },
  autoplay:{
     delay:2500,
  },
  loop:true,
});


//onsale swiper


  var swiper = new Swiper(".onsale-swiper", {
    slidesPerView: 5,
    spaceBetween:30,
    autoplay:{
       delay:3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
    breakpoints:{
      1600:{
        slidesPerView: 5,
      },
      1200:{
        slidesPerView: 4,
        spaceBetween:30,
      },
      700:{
        slidesPerView: 3,
        spaceBetween:15,
      },
      0:{
        slidesPerView: 2,
        spaceBetween:10,
      },
    }
  });

  var swiper = new Swiper(".computer-swiper", {
    slidesPerView: 5,
    spaceBetween:30,
    autoplay:{
       delay:3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
    breakpoints:{
      1600:{
        slidesPerView: 5,
      },
      1200:{
        slidesPerView: 4,
        spaceBetween:30,
      },
      700:{
        slidesPerView: 3,
        spaceBetween:15,
      },
      0:{
        slidesPerView: 2,
        spaceBetween:10,
      },
    }
  });

  var swiper = new Swiper(".computer-swiper-two", {
    slidesPerView: 5,
    spaceBetween:30,
    autoplay:{
       delay:3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
    breakpoints:{
      1600:{
        slidesPerView: 5,
      },
      1200:{
        slidesPerView: 4,
        spaceBetween:30,
      },
      700:{
        slidesPerView: 3,
        spaceBetween:15,
      },
      0:{
        slidesPerView: 2,
        spaceBetween:10,
      },
    }
  });
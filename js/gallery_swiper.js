var gallerySlider = document.querySelectorAll('.gallery_slider');

if(gallerySlider.length) {
  gallerySlider.forEach(function(elem, index){
    var slides = 4;
    var thumbMargin = 27;
    var unicIdSlider = null;
    var direction = 'horizontal';

    if(elem.getAttribute("data-thumb-slides")) {
      console.log(elem.getAttribute("data-thumb-slides"));
      slides = Number(elem.getAttribute("data-thumb-slides"));
    }

    if(elem.getAttribute("data-thumb-margin")) {
      thumbMargin = Number(elem.getAttribute("data-thumb-margin"));
    }
    
    if(elem.getAttribute("data-swiper-id")) {
      unicIdSlider = elem.getAttribute("data-swiper-id");
    } 
    if(elem.getAttribute("data-thumb-direction")) {
      direction = elem.getAttribute("data-thumb-direction");
    }
    var top = elem.querySelector('.gallery-top');
    var topTwo = elem.querySelector('.gallery-top-two');
    var thumb = elem.querySelector('.gallery-thumbs');
    var thumbTwo = elem.querySelector('.gallery-thumbs-two');
    var galleryThumbs = new Swiper(thumb, {
        loop: true,
        lazy: true,
        direction: 'horizontal',
        spaceBetween: 5,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
          640: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
          1000: {
            direction: direction,
            spaceBetween: thumbMargin,
            slidesPerView: 6
          },
          1224: {
              direction: direction,
              spaceBetween: thumbMargin,
              slidesPerView: 6
          }
        },
        navigation: {
          nextEl: '.gallery_bottom_arr-next-'+unicIdSlider,
          prevEl: '.gallery_bottom_arr-prev-'+unicIdSlider,
        },
    });
    var galleryThumbsTwo = new Swiper(thumbTwo, {
      loop: true,
      lazy: true,
      direction: 'vertical',
      spaceBetween: 5,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        640: {
          slidesPerView: 3,
          // spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          // spaceBetween: 5,
        },
        1124: {
          direction: 'vertical',
          spaceBetween: thumbMargin,
          slidesPerView: 4
        },
        1224: {
            direction: 'vertical',
            spaceBetween: thumbMargin,
            slidesPerView: 5
        }
      },
      navigation: {
        nextEl: '.gallery_vertical_arr-next-'+unicIdSlider,
        prevEl: '.gallery_vertical_arr-prev-'+unicIdSlider,
      },
    });
    var galleryTop = new Swiper(top, {
        loop: true,
        spaceBetween: 0,
        lazy: true,
        navigation: {
          nextEl: '.gallery_arr-next-'+unicIdSlider,
          prevEl: '.gallery_arr-prev-'+unicIdSlider,
        },
        thumbs: {
          swiper: galleryThumbs
        }
    });
    var galleryTopTwo = new Swiper(topTwo, {
      loop: true,
      spaceBetween: 0,
      lazy: true,
      slidesPerView: 1,
      direction: 'horizontal',
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.gallery_arr-next-'+unicIdSlider,
        prevEl: '.gallery_arr-prev-'+unicIdSlider,
      },
      thumbs: {
        swiper: galleryThumbsTwo
      }
    });
  });
}
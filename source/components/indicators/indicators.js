import './indicators.scss'
import Swiper from 'swiper';
import 'jquery.animate-number'

let containerHeight, getPositionContainer, windowHeight;
let container = document.querySelector('.container-indicators');

let coutn = false;

   if(document.documentElement.clientWidth < 900) {
        let slider = new Swiper(container, {
            speed: 100,
            direction: 'horizontal',
            spaceBetween: 0,
            loop: true,
            slidesPerView: 1,
            centeredSlides: false,
            normalizeSlideIndex: false,
            navigation: {
                nextEl: '.indication-next',
                prevEl: '.indication-prev',
            },
        });
       $('#first-indicators').text('50');
       $('#second-indicators').text('30');
       $('#third-indicators').text('200');
       $('#fourth-indicators').text('150');
       $('#fifth-indicators').text('700');
       $('#sixth-indicators').text('0');
   } else {
       $(window).scroll(function () {
           changeInformation()
       });
       $('.container-indicators').removeClass('swiper-container').find('.swiper-slide').removeClass('swiper-slide').end().find('.swiper-wrapper').removeClass('swiper-wrapper')
   }

   function changeInformation() {
       containerHeight = $('.container-indicators').height();
       getPositionContainer = container.getBoundingClientRect().y;
       windowHeight = $(window).height();
       if((getPositionContainer + containerHeight) + 10 <= windowHeight) {
           if (!coutn) {
               $('#first-indicators').animateNumber({ number: 50 });
               $('#second-indicators').animateNumber({ number: 30 });
               $('#third-indicators').animateNumber({ number: 200 });
               $('#fourth-indicators').animateNumber({ number: 150 });
               $('#fifth-indicators').animateNumber({ number: 700 });
               $('#sixth-indicators').animateNumber({ number: 0 });
               coutn = true;
           }
       } else {
           console.log('Блок не видно или он сверху от крайней точки условия')
       }
   }
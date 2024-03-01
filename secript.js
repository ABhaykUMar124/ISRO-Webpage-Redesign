const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


var video1 = document.querySelector('.video1');
var video2 = document.querySelector('.video2');
var video3 = document.querySelector('.video3');
var video4 = document.querySelector('.video4');
var video5 = document.querySelector('.video5');
var video6 = document.querySelector('.video6');
var video = document.querySelector('.video');



function playVideosInLoop() {
    const videos = document.querySelectorAll('.video');
    let currentIndex = 0;

    function playNextVideo() {
        videos.forEach(video => video.style.display = 'none');
        videos[currentIndex].style.display = 'block';
        currentIndex = (currentIndex + 1) % videos.length;

        setTimeout(playNextVideo, 10000); // 5 seconds for each video
    }

    playNextVideo(); // Start the loop
}

playVideosInLoop();

var swiper = new Swiper(".MySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  var swiper = new Swiper('.Swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }

  let navbar1 = document.querySelector('.navbar1');
  let navbar2 = document.querySelector('.navbar2');
  let navbar3 = document.querySelector('.navbar3');
  let navbar4 = document.querySelector('.navbar4');

  navbar1.addEventListener('click' , function () {
    navbar1.style.color = 'orangered'
    navbar3.style.color = 'white'
    navbar2.style.color = 'white'
    navbar4.style.color = 'white'
    navbar1.style.borderBottom = '.2vw solid orangered'
    navbar2.style.borderBottom = 'none'
    navbar3.style.borderBottom = 'none'
    navbar4.style.borderBottom = 'none'
  })

  navbar2.addEventListener('click' , function () {
    navbar2.style.color = 'orangered'
    navbar1.style.color = 'white'
    navbar4.style.color = 'white'
    navbar3.style.color = 'white'
    navbar1.style.borderBottom = 'none'
    navbar2.style.borderBottom = '.2vw solid orangered'
    navbar3.style.borderBottom = 'none'
    navbar4.style.borderBottom = 'none'
  })

  navbar3.addEventListener('click' , function () {
    navbar2.style.color = 'white'
    navbar1.style.color = 'white'
    navbar3.style.color = 'orangered'
    navbar4.style.color = 'white'
    navbar1.style.borderBottom = 'none'
    navbar2.style.borderBottom = 'none'
    navbar3.style.borderBottom = '.2vw solid orangered'
    navbar4.style.borderBottom = 'none'
    
  })
  navbar4.addEventListener('click' , function () {
    navbar2.style.color = 'white'
    navbar1.style.color = 'white'
    navbar3.style.color = 'white'
    navbar4.style.color = 'orangered'
    navbar1.style.borderBottom = 'none'
    navbar2.style.borderBottom = 'none'
    navbar3.style.borderBottom = 'none'
    navbar4.style.borderBottom = '.2vw solid orangered'
  })
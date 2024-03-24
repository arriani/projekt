function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var desktopNav = document.getElementById("desktop-nav");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    desktopNav.style.backgroundColor = "#333";
  } else {
    desktopNav.style.backgroundColor = "transparent";
  }
}

$(document).ready(function() {
  

  function updateSlideshowMargin() {
    var navHeight = $('#desktop-nav').outerHeight();
    $('.slideshow').css('margin-top', navHeight + 'px');
  }

  updateSlideshowMargin();

  $('.slideshow').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    cssEase: 'linear'
  });

  function createSliderDots() {
    var dots = $('.slider-dots');
    dots.empty();
    var slideCount = $('.slideshow').slick('getSlick').slideCount;
    for (var i = 0; i < slideCount; i++) {
      dots.append('<li></li>');
    }
    $('.slider-dots li').first().addClass('active');
  }

  $('.slideshow').on('init',function(event, slick) {
    createSliderDots();
  });

  $('.slideshow').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    createSliderDots();
    $('.slider-dots li').removeClass('active');
    $('.slider-dots li').eq(nextSlide).addClass('active');
  });

  $(document).on('click', '.slider-dots li', function() {
    var slideIndex = $(this).index();
    $('.slideshow').slick('slickGoTo', slideIndex);
  });

  $(window).resize(function() {
    updateSlideshowMargin();
  });

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop === 0) {
      $('.slideshow').addClass('transparent-nav');
    } else {
      $('.slideshow').removeClass('transparent-nav');
    }
  });

  $('.hamburger-icon').click(function() {
    $('.menu-links').toggleClass('open');
    $(this).toggleClass('open');
  });
});

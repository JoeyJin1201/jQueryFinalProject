$(document).ready(function(){
  $('.course').click(function(event){
    event.preventDefault();
    $(this).toggleClass('active');
    $('.courseIntro').slideToggle();
  })
  $('.courseIntro').click(function(event){
    event.preventDefault();
  })

  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    effect: 'slide',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.topButton').fadeIn(200);
    } else {
      $('.topButton').fadeOut(200);
    }
  });

  $('.topButton').click(function(){
    $('html, body').animate({scrollTop : 0},400);
    event.preventDefault();
  });

})
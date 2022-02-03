$(function(){

  $('.slider').slick({
arrows: false,
fade: true,
autoplay: 5000,
dots: true,
speed: 500,
});

$('.header-btn').on('click', function(){
$('.menu').addClass('active')
})


$('.close-btn').on('click', function(){
  $('.menu').removeClass('active')
})




});
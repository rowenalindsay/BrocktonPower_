$(document).ready(fuction() {
  $(window).scroll(function(i){
    var scrollVar = $(window).scrollTop();
    $('.animation').children('h2').css({'top': .7*scrollVar });
    $('.animation').children('h2').css({'opacity':( 100-scrollVar )/100});
});

'use strict';

console.log('>> Ready :)');

$(document).ready(function() {
    
    //// CALENDARIO CURSOS
    
    $('.swiper-arrow').on('click', function(){
        if ($(".slide-1").hasClass("swiper-slide-active")) {
          $('.inscribete-calendario .date').children('span').text('Octubre 2018');
        } else {
          $('.inscribete-calendario .date').children('span').text('Enero 2019');  
        }
    });  
    
    //// INICIAMOS MENSAJE COOKIES
    
    $('.cookie-message').cookieBar();
});



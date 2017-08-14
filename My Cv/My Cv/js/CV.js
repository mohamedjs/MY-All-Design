$(document).ready(function() {
    'use strict';
   $('header .arrow i').click(function(){
      $('html,body').animate({
          scrollTop: $('.about').offset().top
      },1000); 
   });
});
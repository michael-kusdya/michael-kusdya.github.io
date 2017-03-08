$(document).ready(function(){
  $('.navbar .nav li a').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });  
  
    $("body").scrollspy({
        target: ".navbar",
        offset: 70
    }) 

});
$(function(){
  $(window).scroll(function () {
    
    var scrollTop = $(this).scrollTop();
    var scrollBottom = scrollTop + $(this).height();
    var effectPos = scrollBottom - 50;
    
    
    $(".skill-item").each(function (i) {
        if(effectPos > $(this).offset().top){
            var that = this;

           
            setTimeout(function () {
               $(that).addClass("fadein");
            }, 250 * i);
        }
    });
});

$(window).scroll(function () {
    
    var scrollTop = $(this).scrollTop();
    var scrollBottom = scrollTop + $(this).height();
    var effectPos = scrollBottom - 50;
    
    
    $(".works-item").each(function (i) {
        if(effectPos > $(this).offset().top){
            var that = this;

           
            setTimeout(function () {
               $(that).addClass("fadein");
            }, 250 * i);
        }
    });
});

$('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html,body').animate({
     "scrollTop":position
    },500);
  });  
  $('footer a').click(function(){
    var id1 = $(this).attr('href');
    var position1 =$(id1).offset().top;
    $('html,body').animate({
      "scrollTop":position1
    },700);
  });
  $('.header-nav a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html,body').animate({
     "scrollTop":position
    },500);
  });  
    
  $('.animation').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = jQuery(window).height(),
     topWindow = jQuery(window).scrollTop();
 $('.animation').each(function(){
  var targetPosition = jQuery(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   jQuery(this).addClass("fadeInDown");
  }
 });
});

$('.fa-bars').click(function(){
  var $header=$('.header2-nav');
  if($header.hasClass('open')){
    $header.removeClass('open');
    $header.slideUp(500);
  }else{
    $header.addClass('open');
    $header.slideDown(500);
  }
});

$('.fa-chevron-up').click(function(){
  $('html,body').animate({
    'scrollTop':0
  },800)
});

$('.link').hover(
  function(){
    $(this).animate({
      'font-size':'35px'
    },400);
  },
    function(){
      $(this).animate({
        'font-size':'30px'
      },400);
    }
)


});
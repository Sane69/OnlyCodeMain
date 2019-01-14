'use strict';

(function($){
	    $('.scroll').click(function(e){
        e.preventDefault();

        var target = $(this.hash);

        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000)
    })

	$('.slider').slick({
		dots:true,
		slidesToShow: 1, 
		slidesToScroll: 1,
    speed: 2000,
    infinite: true,
    fade: true,

		responsive: [
    {
      breakpoint: 650,
      settings: {
      	centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    },
  ]
	});

  $(document).ready(function(){
      var touch = $('#hamburger');
      var menu = $('.header__menu--top');

        $(touch).on('click', function(e) {
          e.preventDefault();
          menu.slideToggle();
        $('html, body').css('overflow', 'hidden');
        });
  });

  $('.header__mobile').click(function(){
    $('.header__menu--top').css('display', 'none');
    $('html, body').css('overflow-y', 'auto');
  });


})(jQuery);

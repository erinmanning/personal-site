// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

	$("a.bio-toggle").click(function() {
		$("div.bio").slideToggle();
    $(img.headshot).fadeIn("slow");
		event.preventDefault();
	})

/* baseline grid toggle
  $('body').append('<a href="#" class="toggle-grid"><span class="show">Show Grid</span><span class="hide">Hide Grid</span></a>');
  $('a.toggle-grid').toggle(function() {
      $('body').addClass('grid');

    $('.toggle-grid .hide').show();
    $('.toggle-grid .show').hide();
  	}, function() {
    $('.grid').removeClass('grid');
    $('.toggle-grid .hide').hide();
    $('.toggle-grid .show').show();
  }); */

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/
window.onload = function()
{
     /*  FUNKCJA ODPOWIADAJĄCE ZA STICKY MENU */
    
    $(document).ready(function() {
	var NavY = $('.menuContainer').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > NavY) { 
		$('.menuContainer').addClass('sticky');
                $('.menuContainer').addClass('stickyStyle');
                $('ul li a').addClass('stickyStyleList');
	} else {
		$('.menuContainer').removeClass('sticky');
                $('.menuContainer').removeClass('stickyStyle');
                $('ul li a').removeClass('stickyStyleList');
	}
	};
	 
	$(window).scroll(function() {
		stickyNav();
	});
	});

    
    
    
};


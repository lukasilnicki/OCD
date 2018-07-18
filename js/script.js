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

    /* FUNKCJA ODPOWIADAJĄCA ZA OŚ PROCESÓW */
    
    $(document).ready(function(){
        
        $('#point1').addClass('hide').each(function(){
        $(this).viewportChecker({
            classToAdd: 'show animated fadeIn',
            classToRemove: 'hide',
            offset: '35%'
            });
         });
        
        $('#line1').addClass('hide').each(function(){
        $(this).viewportChecker({
            classToAdd: 'show animated fadeIn',
            classToRemove: 'hide',
            offset: '45%'
            });
         });
         
        $('#process1').addClass('hide').each(function(){
        $(this).viewportChecker({
            classToAdd: 'show animated bounceInLeft',
            classToRemove: 'hide',
            offset: '45%'
            });
         });
         
        $('#description1').addClass('hide').each(function(){
        $(this).viewportChecker({
            classToAdd: 'show animated bounceInRight',
            classToRemove: 'hide',
            offset: '49%'
            });
         });

    });
    
    
};


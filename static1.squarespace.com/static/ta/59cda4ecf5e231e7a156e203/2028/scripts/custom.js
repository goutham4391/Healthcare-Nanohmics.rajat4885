
/* 
	* @theme Nanohmics
	* @author RocketGirlMedia
	* Mobile Nav Toggle
*/	

$(document).ready(function(){

  "use strict";
	
  $("#mobile-nav-toggle").click(function() {
    $('body').toggleClass( "mobile-nav-active" );
		
		if ($("body").hasClass( "mobile-nav-active" )) {
			$("#mobile-nav-toggle").attr("aria-expanded", "true");
		} else {
			$(this).attr("aria-expanded", "false");
		}
    
  });
	
	$("#mobile-nav-close-toggle").click(function() {
		$("body").removeClass("mobile-nav-active");
	});
		
});


/* 
	* @theme Nanohmics
	* @author RocketGirlMedia
	* Initialize RoyalSlider
*/

$(window).load(function() {

  "use strict";
	
  $("#slideshow .royalSlider").royalSlider({
		slidesOrientation: 'vertical',
		transitionType: 'move',
		fadeinLoadedSlide: true,
		sliderTouch: false,
		sliderDrag: false,
		numImagesToPreload: 0,
		slidesSpacing: 0,
		controlNavigation: 'bullets',
		addActiveClass: true,
		arrowsNav: true,
		arrowsNavAutoHide: false,
    keyboardNavEnabled: true,
		loop: false,
		autoHeight: true,
		autoPlay: {
      enabled: true,
			delay: 3000,
    	pauseOnHover: false
    }
  });
	
	var slider = $('#slideshow .royalSlider').data('royalSlider');
	slider.ev.on('rsAfterSlideChange', function() { 
			if(slider.currSlideId === slider.numSlides-1) {
					slider.stopAutoPlay();
				  
				/* $('.rsArrowRight .rsArrowIcn').on('click', function () {
				  $('html, body').animate({
            scrollTop: $("#solutions").offset().top
					}, 50);
				}); */
			}
	});
	
});


/* 
	* @theme Nanohmics
	* @author RocketGirlMedia
	* Initialize OwlCarousel
*/

$(document).ready(function(){

	"use strict";
	
	$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 15,
      autoplay: true,
      autoplaySpeed: 3000,
			responsiveClass: true,
			responsive: {
					0:{
							items:1,
							nav:true,
						  loop: false,
						  dots: false
					},
					768:{
							items:3,
							nav:true,
						  loop: false,
						  dots: false
					},
					1024:{
							items:4,
							nav:true,
						  loop: false,
						  dots: false
					}
			}
	 });

});

/* 
	* @theme Nanohmics
	* @author RocketGirlMedia
	* Case Study Related Expertise
*/

$(document).ready(function(){

  "use strict";
	
  $(".mobile-nav-item.nav-parent").click(function() {
		$(this).toggleClass( "expanded" );    
  });
	
});


/* 
	* @theme Nanohmics
	* @author RocketGirlMedia
	* Related page object highlight
*/	

$(document).ready(function(){

  "use strict";
	
  $('.item-relation').each(function () {
    var articleContainer = $(this);
    var categoriesListContainer = $(this).find(".tag-list");
		var i;
    // pay attention on --> ", " -- it is in a case of a space will always be after comma;
    // the simpliest way is to place a space always or do not place it never;
    // otherwise I have to remove it before using reqular expressions.
    var articleCategoriesList = articleContainer.attr("data-tags").split(", ");
		
    if(articleCategoriesList.length) {
      for(i in articleCategoriesList) {
				if (articleCategoriesList.hasOwnProperty(i)) {
          var catItem = articleCategoriesList[i];
          categoriesListContainer.find(".tag-txt:contains("+catItem+")").parents("li").addClass("applicable");
				}
      }
    }
  });
	
});


/* * @theme Nanohmics
	 * @author RocketGirlMedia
	 * In-page links and smooth scroll 
*/

$(document).ready(function () {
  "use strict"; 
	
	$(document).on("scroll", onScroll);
    
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.sticky .sidebar-nav-item').each(function () {
            $(this).removeClass('applicable');
        });
        $(this).addClass('applicable');
      
        var target = this.hash,
            menu = target;
			
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
  
	"use strict";
	
	var scrollPos = $(document).scrollTop();
    $('.sticky a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.sticky .sidebar-nav-item').removeClass("applicable");
            currLink.addClass("applicable");
        }
        else{
            currLink.removeClass("applicable");
        }
    });
}
// Toggle Nav JS
var navTop = document.querySelector('.nav-top');
	
	document.querySelector('.nav-btn').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (navTop.getAttribute('data-state') == 'expanded'){
			
			navTop.setAttribute('data-state', 'collapsed');
		
		}else{
		
			navTop.setAttribute('data-state', 'expanded');
		
		}
	});


var $win = $(window);
var $bannerText = $('.banner-text');
var $bannerImg = $('.banner-img');

    $win.on('scroll', function() {
        var scrollPos = $win.scrollTop();

        $bannerText.css('margin-top', '' + scrollPos/2 + 'px');
        $bannerImg.css('top', '' + scrollPos/2 + 'px');
    });
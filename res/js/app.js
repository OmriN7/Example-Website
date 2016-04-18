//Smooth scrolling function
$(document).ready(function(){
				$('a[href^="#"]').on('click',function (e) {
					e.preventDefault();

					var target = this.hash;
					var $target = $(target);

					$('html, body').stop().animate({
						'scrollTop': $target.offset().top
					}, 900, 'swing', function () {
						window.location.hash = target;
					});
				});
}			);


//This script requires topPageAnchorButton to be included in the page!
//Makes the top anchor button page fade in only once the user has scrolled 100 pixels
$(document).scroll(function () 
{
	var y = $(this).scrollTop();
	if (y > 100) 
	{
		$('.topPageAnchorButton').fadeIn();
	} 
	else 
	{
		$('.topPageAnchorButton').fadeOut();
	}
});
			
//Simple "go away" message.
function GoAwayMessage() {
    alert("This button doesn't do anything. Go away!");
}

//Adds parallax effect for the hero when scrolling
$(window).scroll(function()
{
	var scrollOffset = $(this).scrollTop();
				
	$(".hero").css("background-position", "50% " + ((scrollOffset /3)-20) + "px");
	$(".hero__header").css("padding-top", scrollOffset /5 + "px");
});
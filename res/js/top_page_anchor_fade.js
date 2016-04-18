//This script requires topPageAnchorButton to be included in the page!
$(document).scroll(function () 
			{
				var y = $(this).scrollTop();
				if (y > 100) 
				{
					$('.topPageAnchorButton').fadeIn();
				} else 
				{
					$('.topPageAnchorButton').fadeOut();
				}
			});
			
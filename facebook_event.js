//$.ready(function ($)

var FACEBOOK_DIV_TO_HIDE = '.userContentWrapper .userContent';

var hasScrolled = 0,
	checkPosts = function () {
		
		if (hasScrolled++ < 10) {
			hasScrolled = 0;

			var crap = jQuery(FACEBOOK_DIV_TO_HIDE).next();

			crap.addClass('memefree_hidden');

		}
	},
	onScroll = function () {
		hasScrolled = 0;
	};



// Since facebook uses the history API, I have to check for facebook event URLs
setInterval(checkPosts, 1000);

window.addEventListener('scroll', onScroll);